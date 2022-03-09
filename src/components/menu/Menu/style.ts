import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .header {
    position: absolute;
    padding: 30px 0;
    z-index: 10;
  }
  .header,
  .header__inner {
    width: 100%;
    justify-content: space-between;
  }
  .header,
  .header__inner,
  .header__menu-inner {
    display: flex;
    align-items: center;
  }
  .header__menu-links a {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: #fff;
    border-bottom: 2px solid transparent;
    padding-bottom: 3px;
  }
  .header__menu-links a.active,
  .header__menu-links a:hover,
  .MenuLink.active {
    border-bottom: 2px solid #fff;
  }
  .header__menu-links a:hover {
    cursor: pointer;
    transition: all 0.3s;
  }
  .header__menu-links a + a {
    margin-left: 25px;
  }
  .header__menu-btn {
    position: relative;
    width: 130px;
    height: 40px;
    font-size: 14px;
    line-height: 20px;
    background: #53d894;
    background: linear-gradient(135deg, transparent 0.6em, #53d894 0) 0 0,
      linear-gradient(225deg, #53d894, #53d894 0) 100% 0,
      linear-gradient(45deg, #53d894, #53d894 0) 0 100%,
      linear-gradient(315deg, transparent 0.6em, #53d894 0) 100% 100%;
    background-size: 55% 55%;
    background-repeat: no-repeat;
    border: none;
    z-index: 1;
    box-shadow: -0.5em 1em 1em -0.7em rgb(0, 0, 0/50%);
    transition: all 0.5s ease;
    border-radius: 0.1em;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.2px;
    color: #fff;
    margin-left: 30px;
  }
  .header__menu-btn:after {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(135deg, transparent 0.6em, transparent 0) 0 0,
      linear-gradient(225deg, transparent, transparent 0) 100% 0,
      linear-gradient(45deg, transparent, transparent 0) 0 100%,
      linear-gradient(315deg, transparent 0.6em, transparent 0) 100% 100%;
    background-size: 55% 55%;
    background-repeat: no-repeat;
    transition: all 0.5s ease-in-out;
    z-index: -1;
    opacity: 0;
    left: 0;
  }
  .header__menu-btn:hover {
    color: #53d894;
    -webkit-transform: translateY(0.1em);
    transform: translateY(0.1em);
    box-shadow: -0.5em 0.8em 1em -0.7em rgb(0, 0, 0/50%);
  }
  .header__menu-btn:hover:after {
    opacity: 1;
    width: 100%;
    background: linear-gradient(135deg, transparent 0.6em, #fff 0) 0 0,
      linear-gradient(225deg, #fff, #fff 0) 100% 0, linear-gradient(45deg, #fff, #fff 0) 0 100%,
      linear-gradient(315deg, transparent 0.6em, #fff 0) 100% 100%;
    background-size: 55% 55%;
    background-repeat: no-repeat;
  }
  .header__mobile-menu {
    display: none;
  }
  .header__mobile-menu-open {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-end;
    padding: 10px;
  }
  .header__mobile-menu-open span {
    display: inline-block;
    width: 37px;
    height: 3px;
    border-radius: 50px;
    margin-bottom: 10px;
    background: #fff;
    align-self: flex-end;
  }
  .header__mobile-menu-open span:last-child {
    margin-bottom: 0;
  }
  .header__mobile-menu-bg {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .header__mobile-menu-bg-active {
    display: block;
    z-index: 19;
  }
  .header__mobile-menu-inner {
    position: fixed;
    overflow: auto;
    z-index: 20;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    background-color: #112a38;
    transition: all 0.4s ease-in-out;
    -webkit-transform: translateX(400px);
    transform: translateX(400px);
  }
  .header__mobile-menu .header__mobile-menu-inner-active {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .header__mobile-menu-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 12px;
    position: relative;
  }
  .header__mobile-menu-close {
    position: relative;
    width: 40px;
    height: 40px;
    transition: all 0.2s ease;
  }
  .header__mobile-menu-close:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .header__mobile-menu-close:after,
  .header__mobile-menu-close:before {
    content: '';
    height: 44px;
    border-left: 2px solid #fff;
    position: absolute;
    bottom: 0;
  }
  .header__mobile-menu-close:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .header__mobile-menu-links {
    padding-top: 40px;
    padding-left: 20px;
  }
  .header__mobile-menu-links-inner {
    margin-bottom: 45px;
  }
  .header__mobile-menu-links-inner li {
    padding-bottom: 20px;
  }
  .header__mobile-menu-link {
    color: #fff;
    width: 100%;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 30px;
  }
  .header__mobile-menu-link:hover {
    cursor: pointer;
    padding-bottom: 3px;
    border-bottom: 2px solid #fff;
    transition: all 0.3s;
  }
  .d-f {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 1100px) {
    .header__menu-inner {
      display: none;
    }
    .header__mobile-menu {
      display: flex;
    }
    .header__menu-btn {
      margin: 0;
    }
    .header__mobile-menu-links-inner li {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 750px) {
    .header {
      padding: 10px 0;
    }
  }

  .Menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: absolute;
    padding: 30px 0;
    z-index: 10;
    position: relative;
    z-index: 5;
    height: 50px;
    @include respond-to(sm) {
      padding: 0;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
      border: none;
      height: auto;
      min-height: 50px;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      @include respond-to(sm) {
        display: none;
      }
    }

    &__logo-inner {
      img {
        width: 72px;
        height: 20px;
      }
      @include respond-to(sm) {
        display: none;
      }
    }

    &__back-button {
      position: absolute;
      padding: 15px;
      left: 0;
      img {
        width: 20px;
        height: 20px;
      }
    }

    &__title-inner {
      display: none;
      @include respond-to(sm) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        padding: 0 50px;
      }
      p {
        font-size: $regular;
        text-transform: uppercase;
      }
    }

    &__right-inner {
      display: flex;
      align-items: center;
    }

    &__navigation-inner {
      margin-right: 40px;
      @include respond-to(xl) {
        margin-right: 30px;
      }
      @include respond-to(lg) {
        margin-right: 20px;
      }
      @include respond-to(md) {
        display: none;
      }
      ul {
        display: flex;
        align-items: center;
        .Menu__link-inner {
          margin-left: 40px;
          @include respond-to(xl) {
            margin-left: 30px;
          }
          @include respond-to(lg) {
            margin-left: 20px;
          }
        }
      }
    }

    &__linkHidden {
      display: none;
    }

    &__burger-inner {
      display: none;
      @include respond-to(md) {
        display: block;
        margin-right: 5px;
      }
      @include respond-to(sm) {
        margin-right: 0;
        position: absolute;
        right: 0;
      }
    }

    &__buttons-inner {
      display: flex;
      align-items: center;
      @include respond-to(sm) {
        display: none;
      }
    }
  }
`;

export default staticStyles;
