import styled from "styled-components";
import { THEME } from "../../common";
type TStyled = {
  theme: typeof THEME;
};

export const DivThehevajra = styled.div`
  .thehevajra {
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
      padding: 130px 0;
      p {
        /* text-align: justify; */
        color: #777777;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
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
    }
    .btn-global:hover {
      background-color: #1abc9c;
      border-color: #1abc9c;
      color: #fff;
    }
  }
`;
