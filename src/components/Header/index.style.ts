import styled from "styled-components";
import { THEME } from "../../common";

type TStyled = {
  theme: typeof THEME;
};

export const DivHeaderWrapperV1 = styled.div`
  h5 {
    background-color: red;
  }
  .navbar-logo {
    img {
      display: block;
      width: auto !important;
      max-width: none;
      width: 105px;
      height: 105px;
      -webkit-transition: opacity 0.6s ease-in-out;
      transition: opacity 0.6s ease-in-out;
    }
  }
  /* Main CSS */
  .navbar {
    ul {
      list-style: none;
      a {
        text-decoration: none;
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    position: relative;
    transition: 0.3s linear;
    &-nav {
      display: flex;
      list-style: none;
      .nav {
        &-link {
          color: #ffffff;
          font-family: "Raleway", sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0 10px;
          border: 2px solid transparent;
          padding: 11px 24px;
          border-radius: 2px;
          white-space: nowrap;
          margin-right: 16px;
          &:hover {
            border: 2px solid #fff;
          }
        }
        &-item {
          position: relative;
        }
      }
    }
    &-toggler {
      padding: 0.1rem 0.45rem;
      cursor: pointer;
      font-size: 1.5rem;
      background: none;
      outline: none;
      border: none;
      transition: 0.15s linear;
      display: none;
      margin-left: auto;
      margin-right: 20px;
      &:hover,
      &:focus {
        box-shadow: 0 0 0 2px rgba(#000, 0.36);
      }
    }
    &__title {
      font-size: 45px;
      line-height: 47px;
      font-weight: 700px;
      letter-spacing: 4px;
      /* margin: 0 auto; */
      text-align: center;
      height: 100px;
      color: #ffffff;
    }
  }

  /* Dropdown nav-item  */
  .dropdown {
    &-nav-item {
      padding: 5px 0;
      .arrow-right {
        display: block;
        margin: 5px auto;
        width: 9px;
        height: 9px;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        transform: rotate(135deg);
      }
    }
    &-nav-link {
      color: #9d9d9d;
      font-weight: 600;
      font-size: 11px;
      height: auto;
      /* line-height: 10px; */
      margin: 0;
      padding: 0 0;
      :hover {
        color: #ffffff;
      }
    }
  }

  /* Navbar options (bg options) */
  .bg-primary {
    background: ${(props: TStyled) => props.theme.primary};
    background-image: url("https://choezekuchen.com/wp-content/uploads/2022/01/title-image-3.jpeg?690ea8");
    background-size: auto;
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: #fff;
    }
    .nav-item:after {
      background: #fff;
    }
  }

  /* Dropdown CSS */
  .nav-item {
    .dropdown {
      width: 200px;
      display: block;
      position: absolute;
      top: 35px;
      transition: 300ms;
      padding: 10px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(5px);
      background: black;
      color: wheat;
      z-index: 999;
      box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.15);
      .nav-link {
        color: ${(props: TStyled) => props.theme.default};
      }
      .dropdown {
        top: -10px;
        left: calc(100% + 10px);
        &:before {
          top: 10px;
          left: -10px;
        }
      }
      &:before {
        content: "";
        /* position: absolute; */
        top: -10px;
        left: 10px;
        display: none;
      }
      .nav-item:not(:last-child) {
        margin-bottom: 5px;
      }
      > .nav-item:hover > .nav-link {
        color: ${(props: TStyled) => props.theme.primary};
      }
    }
    &:hover > .dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
    &:hover > a::before {
      transform: rotate(90deg);
    }
  }

  .nav-close {
    margin-left: auto;
    margin-top: 10px;
    display: none;
    .btn-nav-close {
      border: 0;
      outline: 0;
      background: transparent;
      font-size: 2.5rem;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border: 1px solid ${(props: TStyled) => props.theme.dark};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .close-btn {
        transform: rotate(45deg);
      }
      &:hover,
      &:focus {
        background: ${(props: TStyled) => props.theme.dark};
        color: #fff;
      }
    }
  }

  .nav-item.icon {
    > a:before {
      content: "";
      /* position: absolute; */
      right: -10px;
      top: calc(50% + 0px);
      transform: translateY(-50%);
      border: 4px solid transparent;
      border-left-color: inherit;
      transition: 0.15s linear;
    }
    &:hover > a::before {
      transform: rotate(90deg);
    }
  }
`;

export const DivHeaderMobile = styled.div`
  background: #fff;
  button {
    background: none;
    border: none;
    box-shadow: none;
    height: 90px;
    width: 100%;
  }
  .ant-collapse {
    &-header {
      padding-left: 5px;
      height: 100px;
      display: flex;
      align-items: center !important;
    }
    &-content-box {
      /* padding: 0px !important; */
    }
    &-extra {
      margin-right: auto;
    }
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    border-color: none;
    background: none;
  }
  .headermobile {
    */ .ant-menu-root.ant-menu-inline {
      border: none;
    }
    .ant-menu {
      padding: revert;
    }

    .ant-menu-sub.ant-menu-inline {
      background-color: #fff;
    }
    .ant-menu-inline .ant-menu-item::after {
      border-right: none;
    }
    .ant-menu-submenu-title:active {
      background: none;
    }
    .ant-menu-submenu-title {
      border-bottom: 1px solid #eaeaea;
    }
    .ant-menu-inline .ant-menu-submenu-title {
      padding-right: 0;
    }
    .ant-menu-inline {
      border-right: none;
    }
    .ant-menu-inline .ant-menu-submenu {
      padding-bottom: 0px;
    }
    //icon outline:

    &-logo {
      height: 50px;
      width: 50px;
    }
    &-ICTab {
      width: 20px;
      height: 20px;
    }
    &__menu {
      min-width: 100%;
      min-height: 374px;
      padding-left: 0px !important;
      a {
        color: #303030;
        font-family: "Raleway", sans-serif;
        font-size: 11px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
      &-icon {
        padding-right: 8px;
      }
      a:active {
        color: #999999;
      }
    }
    &__main-1 {
      list-style-type: none !important;
    }
  }
`;
