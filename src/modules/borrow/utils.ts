import { FormatUserSummaryAndIncentivesResponse, valueToBigNumber } from '@aave/math-utils';
import BigNumber from 'bignumber.js';
import { ComputedReserveData } from '../../libs/pool-data-provider';

/**
 * Calculates the maximum amount a user can borrow.
 * @param poolReserve
 * @param userReserve
 * @param user
 */
export function getMaxAmountAvailalbeToBorrow(
  poolReserve: ComputedReserveData,
  user: FormatUserSummaryAndIncentivesResponse
) {
  const availableInPoolUSD = poolReserve.availableLiquidityUSD;
  const availableForUserUSD = BigNumber.min(user.availableBorrowsUSD, availableInPoolUSD);

  const maxUserAmountToBorrow = BigNumber.min(
    valueToBigNumber(user?.availableBorrowsMarketReferenceCurrency || 0).div(
      poolReserve.formattedPriceInMarketReferenceCurrency
    ),
    poolReserve.formattedAvailableLiquidity
  );

  const shouldAddMargin =
    /**
     * When a user has borrows we assume the debt is increasing faster then the supply.
     * That's a simplification that might not be true, but doesn't matter in most cases.
     */
    (user.totalBorrowsMarketReferenceCurrency !== '0' &&
      availableForUserUSD.lt(availableInPoolUSD)) ||
    /**
     * When the user could in theory borrow all, but the debt accrues the available decreases from block to block.
     */
    (availableForUserUSD.eq(availableInPoolUSD) && poolReserve.totalDebt !== '0') ||
    /**
     * When borrow cap could be reached and debt accumulates the debt would be surpassed.
     */
    (poolReserve.borrowCapUSD &&
      poolReserve.totalDebt !== '0' &&
      availableForUserUSD.gte(availableInPoolUSD)) ||
    /**
     * When the user would be able to borrow all the remaining ceiling we need to add a margin as existing debt.
     */
    (user.isInIsolationMode &&
      user.isolatedReserve?.isolationModeTotalDebt !== '0' &&
      // TODO: would be nice if userFormatter contained formatted reserve as this math is done twice now
      valueToBigNumber(user.isolatedReserve?.debtCeiling || '0')
        .minus(user.isolatedReserve?.isolationModeTotalDebt || '0')
        .shiftedBy(-(user.isolatedReserve?.debtCeilingDecimals || 0))
        .multipliedBy('0.99')
        .lt(user.availableBorrowsUSD));

  return shouldAddMargin ? maxUserAmountToBorrow.multipliedBy('0.99') : maxUserAmountToBorrow;
}