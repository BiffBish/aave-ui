import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  .holders {
    position: relative;
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .holders__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .holders__info {
    width: 296px;
  }
  .holders__title {
    line-height: 120px;
    letter-spacing: -0.04em;
    margin-bottom: 20px;
    font-family: 'Neue-Machina', sans-serif;
    font-weight: 300;
    font-size: 100px;
    position: relative;
    color: white;
  }
  .holders__title img {
    position: absolute;
    z-index: -2;
    left: -516px;
    top: -336px;
  }
  .holders__text {
    line-height: 150%;
    font-family: Poppins;
    font-weight: 400;
    font-size: 18px;
    color: white;
  }
  .holders__items {
    width: calc(100% - 573px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .holders__item {
    height: 100px;
  }
  .holders__item:nth-child(odd) {
    width: 313px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .holders__item:nth-child(2n) {
    width: 273px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .subscribe {
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    height: 388px;
    max-width: 1000px;
    margin: 0 auto 130px;
  }
  .subscribe .holders__item-img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
  .subscribe__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 10px 88px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
  }
  .subscribe__title {
    line-height: 53px;
    color: #231a36;
    margin-bottom: 13px;
    text-align: center;
    font-family: 'Neue-Machina', sans-serif;
    font-weight: 500;
    font-size: 55px;
  }
  .subscribe__text {
    line-height: 28px;
    color: #231a36;
    max-width: 551px;
    margin-bottom: 28px;
    text-align: center;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
  }
  .subscribe-btn {
    padding: 21px 55px 20px 54px;
    line-height: 19px;
    background-color: #231a36;
    border: none;
    border-radius: 120px;
    display: flex;
    align-items: stretch;
    font-family: 'Neue-Machina', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
  }
  .subscribe-btn:hover {
    background-color: #fff;
    color: #231a36;
  }
  .subscribe-btn img.def {
    display: block;
  }
  .subscribe-btn:hover img.def,
  .subscribe-btn img.hov {
    display: none;
  }
  .subscribe-btn:hover img.hov {
    display: block;
  }
  .subscribe-btn img {
    margin-left: 7px;
  }
  .pagination-wrap {
    display: flex;
    margin: 30px auto;
  }
  .pagination-wrap li,
  .pagination-wrap ul {
    display: flex;
    align-items: center;
  }
  .pagination-wrap li {
    border: 1px solid #c7d0d8;
    border-radius: 6px;
    justify-content: center;
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin: 0 7px;
  }
  .pagination-wrap li a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination-wrap li.selected,
  .pagination-wrap li:hover {
    background: #54ce90;
  }
  .pagination-wrap li.disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.5;
  }
  .pagination-wrap.mobile {
    display: none;
  }
  .pagination-wrap.desc {
    display: block;
  }
  @media screen and (max-width: 767px) {
    .pagination-wrap.mobile {
      display: block;
    }
    .pagination-wrap.desc {
      display: none;
    }
  }
  .top__content {
    position: relative;
    padding: 160px 0 260px;
    height: auto;
  }
  .top__content-star-l {
    top: -130px;
    left: 25px;
  }
  .top__content-star-l,
  .top__content-star-t {
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }
  .top__content-star-t {
    top: 50%;
    right: 0;
    -webkit-transform: translate(30%, -50%);
    transform: translate(30%, -50%);
    width: 70%;
  }
  .top__content-star-r {
    position: absolute;
    top: -150px;
    right: 90px;
    z-index: 2;
    pointer-events: none;
  }
  .top__content-gr-t {
    top: -822px;
    left: -476px;
  }
  .top__content-gr-b,
  .top__content-gr-t {
    position: absolute;
    z-index: -5;
    pointer-events: none;
  }
  .top__content-gr-b {
    top: 277px;
    left: -772px;
  }
  .top__content-el {
    position: absolute;
    top: -425px;
    right: -210px;
    pointer-events: none;
  }
  .top__content-tree {
    width: 100%;
    max-width: 808px;
    height: 967px;
    pointer-events: none;
  }
  .top__content-title {
    line-height: 100px;
    letter-spacing: -0.04em;
    margin-bottom: 20px;
    max-width: 870px;
    font-family: 'Neue-Machina', sans-serif;
    font-weight: 300;
    font-size: 100px;
    color: white;
  }
  .top__content-text {
    color: white;
    line-height: 150%;
    margin-bottom: 50px;
    max-width: 504px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
  .top__content-btn {
    position: relative;
    background: #54ce90;
    padding: 16px 63px 17px;
    line-height: 27px;
    margin-bottom: 65px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    background-size: 55% 55%;
    background-repeat: no-repeat;
    border: none;
  }
  .top__content-btn:after {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    background-size: 55% 55%;
    background-repeat: no-repeat;
    transition: all 0.5s ease-in-out;
    z-index: -1;
    opacity: 0;
    left: 0;
  }
  .top__content-btn:hover {
    color: #53d894;
    -webkit-transform: translateY(0.1em);
    transform: translateY(0.1em);
    box-shadow: -0.5em 0.8em 1em -0.7em rgb(0, 0, 0/50%);
  }
  .top__content-btn:hover:after {
    opacity: 1;
    width: 100%;
    background: #fff;
    background-size: 55% 55%;
    background-repeat: no-repeat;
  }
  .top__content-info {
    display: flex;
  }
  .top__content-num {
    display: flex;
    flex-direction: column;
    line-height: 48px;
    font-size: 36px;
  }
  .top__content-num,
  .top__content-num span {
    letter-spacing: 0.2px;
    font-family: 'Neue-Machina', sans-serif;
    font-weight: 400;
  }
  .top__content-num span {
    line-height: 20px;
    font-size: 16px;
  }
  .top__content-num + .top__content-num {
    margin-left: 64px;
  }
  .TokenIcon__dollar {
    color: #fff;
  }
  html {
    scroll-behavior: smooth;
  }
  @media only screen and (max-width: 1200px) {
    .holders {
      padding-top: 205px;
      padding-bottom: 155px;
    }
    .holders__inner {
      flex-direction: column;
    }
    .holders__info {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }
    .holders__items {
      width: auto;
      justify-content: center;
    }
    .holders__item:nth-child(2n),
    .holders__item:nth-child(odd) {
      width: 313px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .holders__item:nth-child(2n) {
      margin-left: 50px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .top__content {
      top: -67px;
    }
    .TableHeaderButton {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 900px) {
    .holders__title:after {
      top: -194px;
    }
    .linkBorrow,
    .linkDeposit {
      font-size: 12px !important;
      line-height: 12px !important;
      max-width: 60px !important;
      height: 34px !important;
    }
  }
  @media screen and (max-width: 850px) {
    .top__content-star-t {
      position: absolute;
      top: 400px;
      z-index: 2;
      left: 50%;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
      pointer-events: none;
      width: 100%;
    }
    .top__content:after {
      top: 433px;
      -webkit-transform: translate(52%, -7px);
      transform: translate(52%, -7px);
    }
    .top__content {
      padding-top: 200px;
      padding-bottom: 600px;
    }
    .top__content-text,
    .top__content-title {
      text-align: center;
    }
    .top__content-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .top__content-star-l {
      top: 260px;
      left: 25px;
    }
    .top__content-star-l,
    .top__content-star-r {
      position: absolute;
      z-index: 2;
      pointer-events: none;
    }
    .top__content-star-r {
      top: 154px;
      right: 95px;
      -webkit-transform: translate(83%, 34px);
      transform: translate(83%, 34px);
    }
  }
  @media only screen and (max-width: 750px) {
    .header {
      padding: 10px 0;
    }
    .TotalMarketsSize.mob {
      width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      margin-bottom: 30px;
    }
    .TotalMarketsSize.mob p {
      font-size: 30px !important;
    }
    .TotalMarketsSize.mob h2 {
      font-size: 35px !important;
    }
    .holders__item:nth-child(2n) {
      margin-left: 0;
    }
    .holders__title {
      line-height: 76px;
      font-size: 89px;
    }
    .holders__text {
      font-size: 16px;
    }
    .footer {
      padding: 36px 0 73px;
    }
    .footer__column-get {
      width: 128px;
    }
  }
  @media only screen and (max-width: 650px) {
    .top__content:after {
      top: 526px;
      -webkit-transform: translate(52%, -7px);
      transform: translate(52%, -7px);
    }
    .subscribe__title {
      line-height: 35px;
      margin-bottom: 20px;
      font-size: 43px;
    }
    .subscribe__text {
      line-height: 26px;
      margin-bottom: 28px;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 608px) {
    .footer__info {
      grid-gap: 43px;
      gap: 43px;
      justify-content: space-around;
    }
    .footer__column-get {
      width: 100%;
    }
    .footer__column-get ul,
    .footer__get,
    .footer__text {
      text-align: center;
    }
  }
  @media only screen and (max-width: 550px) {
    .top__content:after {
      top: 364px;
      -webkit-transform: translate(52%, -7px);
      transform: translate(52%, -7px);
    }
    .top__content-title {
      line-height: 70px;
      font-size: 75px;
    }
    .top__content-text {
      line-height: 130%;
      font-size: 14px;
    }
    .subscribe__info {
      padding-top: 50px;
    }
    .top__content-star-l,
    .top__content-star-r {
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    .top__content:after {
      top: 427px;
      -webkit-transform: translate(52%, -7px);
      transform: translate(52%, -7px);
    }
  }
  @media only screen and (max-width: 450px) {
    .top__content {
      padding-bottom: 500px;
      color: white;
    }
    .top__content-star-t {
      top: 500px;
      width: 130%;
    }
    .top__content:after {
      top: 460px;
      -webkit-transform: translate(52%, -7px);
      transform: translate(52%, -7px);
    }
    .top__content-info {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .top__content-num + .top__content-num {
      margin: 0;
    }
    .holders__title {
      line-height: 66px;
      font-size: 76px;
      margin-bottom: 33px;
    }
    .footer__column-get {
      width: 128px;
    }
    .footer__column-get ul {
      text-align: center;
    }
    .footer__get,
    .footer__text {
      text-align: start;
    }
  }
`;
export default staticStyles;
