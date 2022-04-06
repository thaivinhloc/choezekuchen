import styled from "styled-components";
import { THEME } from "../../common";

type TStyled = {
  theme: typeof THEME;
};

export const DivHeaderWrapperV1 = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
    font-size: 10px;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-size: 1.5rem;
    position: relative;
    overflow-x: hidden;
  }

  /* Demo CSS */
  body {
    background: #fff;
    padding: 50px;
    background: url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920)
      no-repeat center center / cover;

    header {
      margin-bottom: 50px;
      box-shadow: 0px 5px 15px 0px rgba(#000, 0.15);
      border-radius: 6px;
      .navbar {
        border-radius: 6px;
        padding: 0 45px;
      }
    }
    @media (min-width: 1300px) {
      header,
      main {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .navbar-brand {
    img {
      display: block;
      /* opacity: 1; */
      /* position: absolute; */
      /* top: -50%; */
      width: auto !important;
      max-width: none;
      width: 105px;
      height: 105px;
      -webkit-transition: opacity 0.6s ease-in-out;
      transition: opacity 0.6s ease-in-out;
    }
  }
  /* Nav doc CSS */
  .navbar-doc {
    table {
      border-collapse: collapse;
      width: 100%;
      background: transparent;
      box-shadow: 0px 5px 15px 0px rgba(#000, 0.15);
      tr {
        th,
        td {
          text-align: left;
          padding: 15px;
        }
        &:nth-child(odd) {
          th,
          td {
            background: #f0f5f7;
          }
        }
        &:nth-child(even) td {
          background: #e9f0f3;
        }
        &:first-child {
          th {
            &:first-child {
              border-top-left-radius: 5px;
            }
            &:last-child {
              border-top-right-radius: 5px;
            }
          }
        }
        &:last-child {
          td {
            &:first-child {
              border-bottom-left-radius: 5px;
            }
            &:last-child {
              border-bottom-right-radius: 5px;
            }
          }
        }
        &:not(:first-child) {
          border-top: 1px solid #e5ecef;
        }
      }
    }

    code {
      background: #aed2f5;
      border-radius: 3px;
      color: #000000;
      line-height: 1;
      font-size: 1.2rem;
      padding: 1px 4px;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.5;
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
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: ${(props: TStyled) => props.theme.default};
    }
    .navbar-utils > * {
      cursor: pointer;
    }

    .btn-search {
      font-size: 1.5rem;
      background: transparent;
      outline: none;
      border: none;
      color: inherit;
      cursor: pointer;
    }
  }

  .navbar-nav {
    display: flex;
    list-style: none;
    .nav-link {
      color: #ffffff;
      font-family: "Raleway", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 0 10px;
    }
    .nav-link:hover {
      border: 2px solid #fff;
      padding: 15px 15px;
    }
    .nav-item {
      margin: 0 60px 0px 0px;
      position: relative;
    }
    > .nav-item {
      &:after {
        content: "";
        /* position: absolute; */
        width: 100%;
        height: 2px;
        background: ${(props: TStyled) => props.theme.primary};
        bottom: -16px;
        transition: 400ms ease;
        transform: scaleX(1.5);
        opacity: 0;
      }
      &:hover:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  .navbar-toggler {
    padding: 0.1rem 0.45rem;
    cursor: pointer;
    font-size: 1.5rem;
    background: none;
    outline: none;
    border: 1px solid ${(props: TStyled) => props.theme.default};
    border: none;
    border-radius: 3px;
    transition: 0.15s linear;
    display: none;
    margin-left: auto;
    margin-right: 20px;
    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px rgba(#000, 0.36);
    }
  }

  /* Navbar options (bg options) */
  .bg-primary {
    background: ${(props: TStyled) => props.theme.primary};
    background-image: url("https://choezekuchen.com/wp-content/uploads/2022/01/title-image-3.jpeg?690ea8");
    background-size: auto;
    z-index: 99999;
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: #fff;
    }
    .nav-item:after {
      background: #fff;
    }
  }
  .bg-dark {
    background: ${(props: TStyled) => props.theme.dark};
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: #fff;
    }
  }
  .bg-light {
    background: #fff;
    z-index: 9999;
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: ${(props: TStyled) => props.theme.dark};
    }
  }

  .bg-transparent {
    background-color: transparent;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.3)
      ),
      url(https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: #fff;
    }
    .nav-item:after {
      background: #fff;
    }
  }

  @media (min-width: 992px) {
    .bg-blur {
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
      background: rgba(#fff, 0.6);
      z-index: 999;
      .navbar-toggler,
      .nav-link,
      .utils-search {
        color: ${(props: TStyled) => props.theme.dark};
      }
      .nav-item {
        &:hover > .nav-link {
          color: ${(props: TStyled) => props.theme.primary};
        }
        &:after {
          background: ${(props: TStyled) => props.theme.primary};
        }
      }
    }
  }

  /* Common Hover */
  .bg-blur {
    .nav-item {
      &:hover > .nav-link {
        color: ${(props: TStyled) => props.theme.primary};
      }
      &:after {
        background: ${(props: TStyled) => props.theme.primary};
      }
    }
  }

  .bg-light,
  .bg-light-2,
  .bg-dark {
    .nav-item {
      &:hover > .nav-link {
        color: ${(props: TStyled) => props.theme.primary};
      }
      &:after {
        background: ${(props: TStyled) => props.theme.primary};
      }
    }
  }
  .bg-light-2 {
    background: #fff;
    .navbar-toggler,
    .nav-link,
    .utils-search {
      color: ${(props: TStyled) => props.theme.default};
    }
    .nav-item {
      &:after {
        display: none;
      }
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
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      background: black;
      color: wheat;
      border-radius: 4px;
      z-index: 999;
      box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.15);
      .nav-link {
        color: ${(props: TStyled) => props.theme.default};
      }
      .dropdown {
        top: 0;
        left: calc(100% + 20px);
        border-top: 0;
        border-left: 1px solid rgba(0, 0, 0, 0.15);
        &:before {
          top: 10px;
          left: -10px;
          border: 5px solid transparent;
          border-right-color: #000;
        }
      }
      &:before {
        content: "";
        /* position: absolute; */
        top: -10px;
        left: 10px;
        border: 5px solid transparent;
        border-bottom-color: #000;
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

  /* Responsive (navbar alignments options) */
  @media (min-width: 992px) {
    .navbar-brand,
    .navbar-utils {
      flex: auto;
    }
    .navbar-nav {
      flex: 2;
      justify-content: center;
    }
    .navbar-utils {
      text-align: right;
    }

    .navbar-right {
      .navbar-brand,
      .navbar-utils {
        flex: initial;
      }
      .navbar-nav {
        justify-content: flex-end;
        margin-right: 20px;
      }
    }

    .navbar-left {
      .navbar-nav {
        order: 1;
        justify-content: flex-start;
      }
      .navbar-brand {
        order: 2;
      }
      .navbar-utils {
        order: 3;
      }
    }

    .navbar-right {
      .dropdown .dropdown {
        left: unset;
        right: calc(100% + 20px);
        border-top: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
  }

  /* Nav Option (Logo Center) */
  @media (min-width: 992px) {
    .navbar-left {
      .navbar-brand {
        text-align: right;
      }
      .navbar-toggler {
        display: block;
        margin-right: 0;
      }

      .navbar-nav {
        background: #ffffff;
        flex-direction: column;
        z-index: 99999;
        padding: 0 20px;
        opacity: 0;
        transition: 400ms ease;

        /* Sidebar */
        position: fixed;
        left: 0;
        top: 0;
        width: 300px;
        height: 100%;
        overflow-y: auto;
        box-shadow: 0px 0px 0 2000px rgba(#000, 0.5);
        transform: translateX(-300px);

        .nav-link {
          margin: 10px 0;
          color: ${(props: TStyled) => props.theme.default};
          display: flex;
          align-items: center;
        }
        > .nav-item {
          &:first-child {
            margin-top: 20px;
          }
          &:last-child {
            margin-bottom: 20px;
          }
        }
        .nav-item {
          &:not(:last-child) {
            border-bottom: 1px solid rgba(#000, 0.1);
          }
          &:hover > .nav-link {
            color: ${(props: TStyled) => props.theme.primary};
          }
        }
        > .nav-item:after {
          display: none;
        }

        .nav-close {
          display: block;
        }
      }
      .navbar-nav.active {
        max-height: initial;
        opacity: 1;
        transform: translateX(0);
        left: 0;
        box-shadow: 0 0 0 10000px rgb(0 0 0 / 50%);
      }
      .nav-item {
        .dropdown {
          padding: 0;
          position: initial;
          max-height: 0;
          width: initial;
          border: none;
          box-shadow: none;
          .dropdown {
            border: none;
          }

          &:before {
            display: none;
          }
        }
        &:hover > .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0px);
          max-height: initial;
        }
      }
      .nav-item.icon a:before {
        top: unset;
        right: 0;
      }
    }
  }

  /* Responsive navbar */
  @media (max-width: 991px) {
    .navbar-toggler {
      display: block;
    }
    .navbar-nav {
      background: #ffffff;
      flex-direction: column;
      z-index: 99999;
      padding: 0 20px;
      opacity: 0;
      transition: 400ms ease;

      /* Sidebar */
      position: fixed;
      left: -300px;
      top: 0;
      width: 300px;
      height: 100%;
      overflow-y: auto;
      // box-shadow: 0px 0px 0 2000px rgba(#000, 0.5);
      transform: translateX(-300px);

      .nav-link {
        margin: 10px 0;
        color: ${(props: TStyled) => props.theme.default};
        display: flex;
        align-items: center;
      }
      > .nav-item {
        &:first-child {
          margin-top: 20px;
        }
        &:last-child {
          margin-bottom: 20px;
        }
      }
      .nav-item {
        &:not(:last-child) {
          border-bottom: 1px solid rgba(#000, 0.1);
        }
        &:hover > .nav-link {
          color: ${(props: TStyled) => props.theme.primary};
        }
      }
      > .nav-item:after {
        display: none;
      }

      .nav-close {
        display: block;
      }
    }
    .navbar-nav.active {
      max-height: initial;
      opacity: 1;
      transform: translateX(0);
      left: 0;
      box-shadow: 0px 0px 0 10000px rgba(#000, 0.5);
    }
    .nav-item {
      .dropdown {
        padding: 0;
        position: initial;
        max-height: 0;
        width: initial;
        border: none;
        box-shadow: none;
        .dropdown {
          border: none;
        }

        &:before {
          display: none;
        }
      }
      &:hover > .dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
        max-height: initial;
      }
    }
    .nav-item.icon a:before {
      top: unset;
      right: 0;
      transform: translateY(0px);
    }
  }

  @media (max-width: 576px) {
    .search-popup {
      form {
        width: calc(100% - 30px);
        height: 170px;
        padding: 15px;
      }
    }
  }
`;
