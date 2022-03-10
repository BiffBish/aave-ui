import React from 'react';
import { useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { rgba, useThemeContext } from '@biffbish/aave-ui-kit';

import { useUserWalletDataContext } from '../../../libs/web3-data-provider';
import { useProtocolDataContext } from '../../../libs/protocol-data-provider';
import goToTop from '../../../helpers/goToTop';
import Link from '../../basic/Link';
// import MarketSwitcher from '../../market/MarketSwitcher';
import MenuLink from '../MenuLink';
import MoreButton from '../MoreButton';
// import AddressInfo from '../AddressInfo';
// import MobileContent from '../MobileContent';
import { LOGO } from '../../../ui-config';

import staticStyles from './style';

import navigation from '../navigation';

// import backIcon from '../../../images/mobileBackArrow.svg';

interface MenuProps {
  title: string;
}

export default function Menu({ title }: MenuProps) {
  const location = useLocation();
  // const history = useHistory();
  const intl = useIntl();
  const { currentTheme } = useThemeContext();
  const { currentAccount } = useUserWalletDataContext();
  const { currentMarketData } = useProtocolDataContext();

  const isActive = (url: string) => {
    return `/${url.split('/')[1]}` === `/${location.pathname.split('/')[1]}`;
  };

  const topLineColor = rgba(`${currentTheme.white.rgb}, 0.1`);

  return (
    <>
      <header className="header">
        <div className="container d-f">
          <div className="header__inner">
            <Link
              className="Link Link__primary header__logo active"
              to="/markets"
              onClick={() => goToTop()}
            >
              <img src={LOGO} alt="Aave" />
            </Link>
            <div className="header__menu-inner">
              <div className="header__menu-links">
                <a
                  aria-current="page"
                  className="Link Link__primary MenuLink ButtonLink active"
                  href="/markets"
                >
                  <strong>Markets</strong>
                </a>
                <a className="Link Link__primary MenuLink ButtonLink" href="/dashboard">
                  <strong>My dashboard</strong>
                </a>
                <a className="Link Link__primary MenuLink ButtonLink" href="/deposit">
                  <strong>Deposit</strong>
                </a>
                <a className="Link Link__primary MenuLink ButtonLink" href="/borrow">
                  <strong>Borrow</strong>
                </a>
                <a className="Link Link__primary MenuLink ButtonLink" href="/staking">
                  <strong>Stake</strong>
                </a>
              </div>
              <button className="header__menu-btn">Enter App</button>
            </div>
          </div>
          <div className="header__mobile-menu ">
            <div className="header__mobile-menu-bg"></div>
            <button className="header__mobile-menu-open">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="header__mobile-menu-inner ">
              <div className="header__mobile-menu-top">
                <button className="header__menu-btn">Enter App</button>
                <button className="header__mobile-menu-close" type="button">
                  {' '}
                </button>
              </div>
              <div className="header__mobile-menu-links">
                <ul className="header__mobile-menu-links-inner">
                  {navigation.map((link, index) => (
                    <li
                      className={classNames('Menu__link-inner', {
                        Menu__linkHidden:
                          (!currentAccount && link.hiddenWithoutWallet) ||
                          (link.isVisible && !link.isVisible(currentMarketData)),
                      })}
                      key={index}
                    >
                      <MenuLink
                        to={link.link}
                        title={intl.formatMessage(link.title)}
                        isActive={isActive(link.link)}
                      />
                    </li>
                  ))}
                  <li className="Menu__link-inner">
                    <MoreButton />
                  </li>

                  <li>
                    <a
                      aria-current="page"
                      className="Link Link__primary MenuLink ButtonLink active"
                      href="/markets"
                    >
                      <strong className="">Markets</strong>
                    </a>
                  </li>
                  <li>
                    <a className="Link Link__primary MenuLink ButtonLink" href="/dashboard">
                      <strong className="">My dashboard</strong>
                    </a>
                  </li>
                  <li>
                    <a className="Link Link__primary MenuLink ButtonLink" href="/deposit">
                      <strong className="">Deposit</strong>
                    </a>
                  </li>
                  <li>
                    <a className="Link Link__primary MenuLink ButtonLink" href="/borrow">
                      <strong className="">Borrow</strong>
                    </a>
                  </li>
                  <li>
                    <a className="Link Link__primary MenuLink ButtonLink" href="/staking">
                      <strong className="">Stake</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <style jsx={true} global={true}>
          {staticStyles}
        </style>
        <style jsx={true} global={true}>{`
          .Menu {
            background: ${currentTheme.headerBg.hex};
            &:after {
              background: ${topLineColor};
            }

            &__title-inner {
              p {
                color: ${currentTheme.white.hex};
              }
            }
          }
        `}</style>
      </header>

      {/* <header className="Menu">
        <div className="Menu__logo-inner">
          <Link className="Menu__logo-link" to="/markets" onClick={() => goToTop()}>
            <img src={LOGO} alt="Aave" />
          </Link>
        </div>

        <div className="Menu__title-inner">
          {history.length > 2 && (
            <button className="Menu__back-button" onClick={history.goBack}>
              <img src={backIcon} alt="" />
            </button>
          )}

          <p>{title}</p>
        </div>

        <div className="Menu__right-inner">
          <nav className="Menu__navigation-inner">
            <ul></ul>
          </nav>

          <div className="Menu__burger-inner">
            <MobileContent isActive={isActive} currentAccount={currentAccount} />
          </div>

          <div className="Menu__buttons-inner">
            <AddressInfo />
          </div>
        </div>
 */}

      {/* </header> */}
    </>
  );
}
