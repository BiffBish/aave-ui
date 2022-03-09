import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
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
  }
  .top__content-text {
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
  @media only screen and (max-width: 1100px) {
    .top__content {
      top: -67px;
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
  @media only screen and (max-width: 650px) {
    .top__content:after {
      top: 526px;
      -webkit-transform: translate(52%, -7px);
      transform: translate(52%, -7px);
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
  }
`;
export default staticStyles;
