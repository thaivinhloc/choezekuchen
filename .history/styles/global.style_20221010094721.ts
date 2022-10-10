import { createGlobalStyle, css } from "styled-components";
import { THEME } from "../common";

type TStyled = {
  theme: typeof THEME;
};

export const GlobalStyle = createGlobalStyle`${css`
  html,
  body {
    // font-family: $body-font;
    font-family: ${(props: TStyled) => props.theme.primaryFont};
    font-size: 16px;
    background: #f6f6f6;
  }
  span {
    font-family: ${(props: TStyled) => props.theme.primaryFont} !important;
  }
  h1 {
    font-size: 45px;
    font-weight: bold;
  }
  .teaching {
    & h3 {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 3px;
    }
    & p {
      font-weight: 400;
      margin: 40px 0;
    }
    .buttonTeaching {
      color: black;
    }
  }
  .text-center {
    text-align: center;
  }

  p {
    color: #000;
  }
  .h-auto {
    height: auto !important;
  }
  .d-flex {
    display: flex;
  }
  .align-items-center {
    align-items: center;
  }
  .justify-content-between {
    justify-content: space-between;
  }
  .bold {
    font-weight: bold;
  }
  .text-center {
    text-align: center;
  }
  .ellipsis {
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    white-space: normal !important;
    &-1 {
      width: calc(90%);
      overflow: hidden;
      position: relative;
      display: inline-block;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .w-100 {
    width: 100%;
  }
  .btn-primary {
    border: 2px solid #303030;
    text-transform: uppercase;
    &:hover,
    :active {
      background-color: #1abc9c;
      border-color: #1abc9c;
      color: #fff;
    }
  }
  .btn-secondary {
    border: 2px solid #303030;
    color: #000;
  }
  .container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 476px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 992px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 476px) {
    .container {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 720px;
      max-width: 100%;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 960px;
      max-width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1140px;
      max-width: 100%;
    }
  }
  @media (min-width: 1400px) {
    .container {
      width: 1340px;
      max-width: 100%;
    }
  }
  .content {
    min-height: calc(100vh - 423px);
    @media (max-width: 991.98px) {
      min-height: calc(100vh - 223px);
    }
  }
  .link-underline {
    color: #fff;
    font-size: 12px;
    text-decoration: underline !important;
    cursor: pointer;
  }

  .ant-form-item {
    margin: 0 0 20px;

    .ant-input {
      padding: 15px 12px;
      border: 0;
      border-radius: 0;
      font-size: 13px;
      line-height: 17px;
      color: #000;
      font-weight: 400;
    }
    .ant-picker {
      border-color: transparent;
      &-focused,
      &:hover {
        border-color: transparent;
        box-shadow: none;
      }
    }
    .ant-input::placeholder {
      color: #818181;
    }

    .ant-input:focus {
      box-shadow: unset;
      border-right-width: unset;
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    margin: 0 0 20px;

    .form-button-submit {
      text-align: right;
      button {
        line-height: 36px;
        height: 39px;
        width: auto;
        padding: 0 23px;
        border-radius: 4px;
        background-color: #f6f6f6;
        letter-spacing: 1px;
      }
    }
    .btn-primary: hover {
      background-color: #1abc9c;
    }
  }
  .ant-card {
    background-color: transparent;
  }

  .pdy-100 {
    padding: 100px 0;
  }

  .box-container .ant-col {
    padding: 0 15px;
  }

  .box-container .col-left {
    margin-bottom: 50px;
  }

  .box-container .bc-image {
    padding: 6px;
    background-color: #ebebeb;
  }

  .bc-image img {
    width: 100%;
    height: auto;
  }

  .box-container .bc-text.text-center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .bc-text p {
    margin-bottom: 0.2rem;
    color: ${(props: TStyled) => props.theme.textSecondary};
    font-size: 14px;
    font-weight: 400;
  }

  .bc-text h4 {
    color: ${(props: TStyled) => props.theme.dark};
    font-size: 20px;
    line-height: 25px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .hr {
    position: relative;
    display: block;
    height: 1px;
    background-color: #eaeaea;
    margin: 80px 0;
  }
  .ant-dropdown {
    .ant-table-filter-dropdown {
      .ant-dropdown-menu-item-selected {
        &:hover {
          .ant-dropdown-menu-title-content {
            span {
              color: #000;
            }
          }
        }
        .ant-dropdown-menu-title-content {
          span {
            color: #fff;
          }
        }
      }
    }
  }
`}`;
