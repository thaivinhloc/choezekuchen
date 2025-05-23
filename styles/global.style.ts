import { createGlobalStyle, css } from "styled-components";
import { THEME } from "../common";

type TStyled = {
  theme: typeof THEME;
};

export const GlobalStyle = createGlobalStyle`${css`
  html,
  body {
    font-family: "${(props: TStyled) => props.theme.primaryFont}", sans-serif;
    font-size: 16px;
  }
  p {
    font-family: "${(props: TStyled) => props.theme.primaryFont}", sans-serif !important;
    background: transparent !important;
    color: ${(props) => props.theme.textSecondary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props: TStyled) => props.theme.titleFont} !important;
    font-weight: 700;
  }

  h1 {
    font-size: 45px;
    line-height: 67.5px;
  }
  h2 {
    font-size: 45px;
    line-height: 67.5px;
    margin-bottom: 4px;
    @media (max-width: 992px) {
      font-size: 32px;
      line-height: 32px;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin: 0.67em 0;
    @media (max-width: 992px) {
      font-size: 22px;
      line-height: 26px;
    }
  }

  a,
  .ant-btn-link {
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.primary};
    span {
      color: ${(props) => props.theme.primary};
    }
  }

  a.ant-btn {
    span {
      color: unset;
    }
  }

  .tx-secondary {
    font-family: "SVN Alluring";
  }

  .text-center {
    text-align: center;
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
  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    &-2 {
      -webkit-line-clamp: 2 !important;
    }
    &-3 {
      -webkit-line-clamp: 3 !important;
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
    color: ${(props) => props.theme.dark};
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
      width: 1200px;
      max-width: 100%;
    }
  }

  @media (max-width: 476px) {
    .about button.aboutButton {
      font-size: 13px;
      padding: 3px 20px;
    }
    .about .about_Item {
      padding: 10px 0;
    }
  }
  .link-underline {
    color: #fff;
    font-size: 12px;
    text-decoration: underline !important;
    cursor: pointer;
  }

  .ant-form-item {
    margin: 0 0 12px;

    .ant-input {
      border-radius: 0;
      font-size: 16px;
      height: 40px;
    }
    &-label {
      padding-bottom: 0 !important;
    }
    .ant-picker {
      border-color: transparent;
      &-focused,
      &:hover {
        border-color: transparent;
        box-shadow: none;
      }
      &-input {
        > input {
          font-size: 13px !important;
        }
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
      width: 100%;
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
  .teaching,
  .ngondroTeching,
  .dharmaReaching {
    & h3 {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 3px;
    }
    & p {
      font-weight: 400;
      margin: 40px 0;
    }
    .button {
      color: black;
      font-weight: bold;
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
      &:hover {
        background-color: #1abc9c;
        border-color: #1abc9c;
        color: white;
      }
    }
  }
  .about .aboutButton {
     {
      color: black;
      font-weight: bold;
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
      font-size: 15px;
      &:hover {
        background-color: #1abc9c;
        border-color: #1abc9c;
        color: white;
      }
    }
  }
  .ngondroTeching {
    h3 {
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 0;
      color: #777;
      line-height: 1.8;
      text-align: center;
    }
  }
  .guruRinpoche,
  .achiChokyiDrolmaTeching {
    h3 {
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 0;
      color: #777;
      line-height: 1.8;
      text-align: left;
    }
  }
  .thePerfectDedication2 {
    padding: 120px 35px;
    &-hr {
      margin: 50px 0;
      height: 1px;
      background-color: #eaeaea;
    }
    &-wrapper {
      padding: 0 0;
      p {
        color: black;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
      }
    }
    &-item {
      background-color: #1e73be;
      h2 {
        padding: 20px;
        color: #ffffff;
        font-size: 30px;
        line-height: 40px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 3px;
      }
    }
  }
  .historyOfChoezeKuchenRinpoche2 {
    p {
      line-height: 30px;
      margin-bottom: 30px;
    }
  }
  .tibetanMonastery {
    p {
      line-height: 30px;
      margin-bottom: 30px;
    }
    .tibetanMonastery-image {
      margin-bottom: 30px;
    }
  }
  .theBlog {
    .buttonBlog {
      color: black;
      font-weight: bold;
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
      &:hover {
        background-color: #1abc9c;
        border-color: #1abc9c;
        color: white;
      }
    }
    .ant-pagination {
      text-align: center;
    }
  }
  .offering {
    & .card {
      height: 430px;
      margin: 10px;
      border-radius: 10px;
      & .card-title {
        font-weight: bold;
      }
      & .card-text {
        padding: 0 10px;
      }
    }
    & .payment {
      color: black;
      font-weight: bold;
      background-color: transparent;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
      &:hover {
        background-color: #1abc9c;
        border-color: #1abc9c;
        color: white;
      }
    }
  }

  .ant-dropdown {
    .ant-table-filter-dropdown {
      .ant-dropdown-menu-item-selected {
        &:hover {
          .ant-dropdown-menu-title-content {
            span {
              color: ${(props) => props.theme.dark};
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
  .rs__popper_actions ~ p {
    color: #fff;
  }
  .cursor-pointer {
    cursor: pointer;
  }
`}`;
