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
    font-size: 14px;
    background: #f6f6f6;
  }
  h1 {
    font-size: 45px;
    font-weight: bold;
  }
  .text-center {
    text-align: center;
  }
  p {
    color: #000;
  }
  .d-flex {
    display: flex;
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

  .ant-form-item{
    margin: 0 0 20px;
    
    .ant-input{
      padding: 15px 12px;
      border: 0;
      border-radius: 0;
      font-size: 13px;
      line-height: 17px;
      color: #000;
      font-weight: 400;
    }
    .ant-input::placeholder{
      color: #818181;

    }

    .ant-input:focus{
      box-shadow: unset; 
      border-right-width: unset;
    }
  }
  
  .form-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;

    .form-button-submit{
        line-height: 36px;
        height: 39px;
        width: auto;
        padding: 0 23px;
        margin: 0 0 20px;
        border-radius: 4px;
        background-color: #F6F6F6;
        letter-spacing: 1px;
    }
    .btn-primary: hover{
      background-color: #1abc9c;
    }
  }
  

`}`;
