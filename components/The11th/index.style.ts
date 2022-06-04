import styled from "styled-components";
import { THEME } from "../../common";
type TStyled = {
  theme: typeof THEME;
};

export const DivThe11th = styled.div`
  .the11th {
    padding: 120px 35px;

    &-image {
      height: auto;
      max-width: 100%;
    }
    &-group {
    }
    &-hr {
      //color: ${(props: TStyled) => props.theme.hr} !important;
      margin: 80px 0;
      height: 1px;
      background-color: #eaeaea;
    }
    &-wrapper {
      padding: 0 0;
      h3 {
        color: #303030;
        font-family: "Raleway", sans-serif;
        font-size: 20px;
        line-height: 34px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0px;
      }
      p {
        /* text-align: justify; */
        color: #777777;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
      }
      h2 {
        color: #303030;
        font-size: 30px;
        line-height: 40px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 3px;
      }
    }
    .btn-global {
      display: inline-block;
      width: auto;
      height: 41px;
      line-height: 30px;
      padding: 0 23px;
      font-size: 13px;
      border: 2px solid #303030;
      color: #303030;
      cursor: pointer;
      outline: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 4px;
      text-shadow: none;
      background-color: transparent;
      margin-bottom: 50px;
    }
    .btn-global:hover {
      background-color: #1abc9c;
      border-color: #1abc9c;
      color: #fff;
    }
  }
`;
