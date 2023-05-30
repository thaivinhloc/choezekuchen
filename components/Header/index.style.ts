import { TMedia } from "definition"
import styled from "styled-components"
import { THEME } from "../../common"

type TStyled = {
  theme: typeof THEME
}

type HeaderProps = {
  banner?: TMedia
  isMobile?: boolean
  isHeaderFullscreen?: boolean
}

export const DivHeaderWrapperV1 = styled.div<HeaderProps>`
  .site-header {
    height: ${(props) =>
      props.isHeaderFullscreen ? "100vh" : "calc(100vw/2)"};
    @media (min-width: 992px) {
      height: ${(props) => (props.isHeaderFullscreen ? "100vh" : "auto")};
      min-height: 50vh;
    }
    /* Main CSS */
    background-color: transparent !important;
    background-image: url(${(props) =>
      props.banner?.attributes.url ??
      props.banner?.url ??
      "/images/title-image-3.jpeg"});
    background-size: cover;
    background-position: center center;
    position: relative;
    header {
      position: relative;
      z-index: 2;
    }
    &:after {
      content: "";
      display: none;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      @media (min-width: 1200px) {
        display: block;
      }
      z-index: 1;
    }

    .navbar {
      flex-wrap: nowrap;
      ul {
        list-style: none;
        a {
          text-decoration: none;
        }
      }
      display: flex;
      align-items: center;
      padding: 40px 50px 15px;
      position: relative;
      z-index: 1002;
      transition: 0.3s linear;
      &-nav {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        .nav {
          &-link {
            color: ${(props) => props.theme.white};
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            padding: 10px 16px;
            white-space: nowrap;
            display: flex;
            align-items: center;
            &:hover,
            &.active {
              cursor: pointer;
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
        text-align: center;
        padding: 80px 16px 150px;
        margin: 0;
        z-index: 10;
        position: relative;
        h1 {
          color: ${props => props.theme.white};
          font-size: 48px;
          line-height: 62px;
          font-weight: 700px;
        }
        &__desc {
          font-size: 16px;
          color: ${props => props.theme.white} !important;
          opacity: 0.8;
        }
      }

      &-logo {
        img {
          display: block;
          width: 105px;
          height: 105px;
          -webkit-transition: opacity 0.6s ease-in-out;
          transition: opacity 0.6s ease-in-out;
        }
      }
    }
    /* Dropdown nav-item  */
    .dropdown {
      &-nav-item {
        padding: 5px 0;
        .arrow-right {
          display: block;
          margin: 3px auto;
          font-size: 14px;
          margin-right: 0;
          font-weight: 500;
          padding-right: 5px;
        }
        &:hover {
          cursor: pointer;
        }
      }
      &-nav-link {
        font-weight: 500;
        font-size: 14px;
        height: auto;
        /* line-height: 10px; */
        margin: 0;
        padding: 0 0;
        &:hover {
          color: ${(props) => props.theme.primary};
          cursor: pointer;
        }
      }
    }
    /* Dropdown CSS */
    .nav-item {
      .dropdown {
        width: fit-content;
        min-width: 240px;
        display: block;
        position: absolute;
        top: 50px;
        left: 16px;
        transition: 300ms;
        padding: 10px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(5px);
        background: #fff;
        z-index: 999;
        box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.15);
        .nav-link {
          color: ${(props: TStyled) => props.theme.dark};
          &:hover {
            color: ${(props) => props.theme.primary} !important;
            svg {
              color: ${(props) => props.theme.primary} !important;
            }
          }
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
          cursor: pointer;
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
          color: ${props => props.theme.white};
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
  }

  .ant-collapse {
    &-header {
      &-text {
        width: 100%;
        text-align: center;
      }
    }
  }
`

export const DivHeaderMobile = styled.div`
  .banner {
    position: relative;
    &__content {
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0;
      color: ${props => props.theme.white};
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .ant-typography {
    display: block;
    height: 80px;
    margin-left: 15px;
    margin-top: 15px;
  }
  .ant-collapse {
    &-content-box {
      padding: 0px;
    }
    &-header {
      /* padding-left: 5px; */
      height: 100px;
      align-items: center !important;
      display: flex;
      justify-content: space-between;
      padding: 10px 0px !important;
      > div {
        flex: 1;
      }
      &-text {
        width: 100px;
        text-align: center;
      }
    }
    &-extra {
      margin: 0 !important;
      text-align: right;
    }
  }
  &.headermobile {
    .ant-menu {
      &-sub {
        background-color: #fff !important;
        padding-left: 10px;
      }
      &-inline {
        background-color: transparent;
        border-right: none;
      }
      &-item::after {
        border-right: none;
      }

      &-submenu {
        padding-bottom: 0px !important;
        &-title:active {
          background: none;
        }
        &-title {
          border-bottom: 1px solid #eaeaea;
          padding-right: 0;
          margin-top: 2px;
          margin-bottom: 2px;
        }
      }
    }
  }

  .headermobile {
    &-avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #303030;
      color: ${props => props.theme.white};
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    */ .ant-menu-root.ant-menu-inline {
      border: none;
    }

    //icon outline:
    &__icon {
      display: flex;
      width: 100%;
    }
    &-logo {
      height: 100px;
      width: 100px;
    }
    &-user {
    }
    &-ICTab {
      width: 20px;
      height: 20px;
    }
    &__menu {
      border-right: 0 !important;
      min-width: 100%;
      padding-left: 0px !important;
      a {
        color: #303030;
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
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
      border-color: none;
      background: none;
    }
  }
`

export const NavListStyled = styled.nav<{ isSticky?: boolean }>`
  justify-content: space-between;
  ${(props) =>
    props.isSticky &&
    `
      box-shadow: 0 9px 35px rgb(0 0 0 / 5%);
      position: fixed !important;
      top:0;
      left:0;
      width:100%;
      height: 80px;
      background: #fff;
      padding: 15px 50px !important;
      .navbar-nav {
        .nav-link {
          color: ${props.theme.dark} !important;
          svg {
            color: ${props.theme.dark} !important;
          }
          &-active {
            color: ${props.theme.primary} !important;
            svg {
              color: ${props.theme.primary} !important;
            }
          }  
        }
      }
      .navbar-logo {
        img {
          width: 80px !important;
          height: 80px !important;
        }
      }
    `}
`

export const NavbarNavStyled = styled.ul`
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`

export const TopActionStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  padding-right: 8px;
  position: relative;
  z-index: 20;
  @media (min-width: 1200px) {
    padding: 16px 50px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99999999;
  }
`
