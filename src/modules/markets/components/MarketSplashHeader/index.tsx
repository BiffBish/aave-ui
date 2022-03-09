import staticStyles from './style';

export default function MarketSplashHeader() {
  return (
    <>
      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <div className="top__content">
        <div className="container">
          <img src="images/tree.png" alt="" className="top__content-star-t" />

          <svg
            width="114"
            height="120"
            viewBox="0 0 114 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="top__content-star-l"
          >
            <path
              opacity=".47"
              d="M54 108.98C49.452 84.136 29.864 64.548 5.02 60 29.864 55.452 49.452 35.864 54 11.02 58.548 35.864 78.136 55.452 102.98 60 78.136 64.548 58.548 84.136 54 108.98z"
              stroke="#fff"
              stroke-width="2"
            />
          </svg>
          <svg
            width="108"
            height="109"
            viewBox="0 0 108 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="top__content-star-r"
          >
            <path
              d="M32.237 32.746c7.096-7.37 11.337-15.893 12.717-25.557 1.385 9.664 5.642 18.188 12.763 25.558 7.615 7.88 16.66 12.602 27.118 14.156-6.366.953-12.304 3.146-17.809 6.58-6.958 4.339-12.461 10.086-16.505 17.234-2.87 5.075-4.721 10.456-5.555 16.142-1.368-9.742-5.612-18.328-12.728-25.744C24.642 53.2 15.602 48.461 5.135 46.908c10.467-1.55 19.506-6.273 27.102-14.162zM64.136 84c5.08-1.016 9.503-3.483 13.257-7.394 3.48-3.625 5.683-7.76 6.607-12.395.924 4.635 3.128 8.77 6.607 12.395 3.754 3.911 8.177 6.378 13.257 7.394-5.08 1.016-9.503 3.483-13.257 7.394-3.48 3.625-5.683 7.76-6.607 12.396-.924-4.636-3.128-8.771-6.607-12.396-3.754-3.911-8.177-6.378-13.257-7.394z"
              stroke="#fff"
            />
          </svg>

          <img src="images/bg-gr-t.png" alt="" className="top__content-gr-t" />
          <img src="images/bg-gr-b.png" alt="" className="top__content-gr-b" />
          <img src="images/bg-el.png" alt="" className="top__content-el" />
          <div className="top__content-inner">
            <h1 className="top__content-title">The Liquidity Protocol </h1>
            <div className="top__content-text">
              Aave is an open source and non-custodial liquidity protocol for earning interest on
              deposits and borrowing assets.{' '}
            </div>
            <button className="top__content-btn">Enter App </button>
            <div className="top__content-info">
              <div className="top__content-num">
                32k+<span className="">Coins</span>
              </div>
              <div className="top__content-num">
                20k+<span className="">Auctions</span>
              </div>
              <div className="top__content-num">
                10k+<span className="">Artists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
