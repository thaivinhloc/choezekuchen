import { createGlobalStyle } from "styled-components";
import { THEME } from "../common";

type TStyled = {
  theme: typeof THEME;
};

export const GlobalStyle = createGlobalStyle`
  html,
    body {
        // font-family: $body-font;
        font-family: ${(props: TStyled) => props.theme.primaryFont};
        font-size: 14px;

    }
    h1{
      font-size:45px ;
      font-weight:bold ;
    }
    .text-center{
      text-align: center ;
    };
    p{
      color:#000 ;
    }
    .d-flex{
      display:flex ;
    }
    .bold{
      font-weight:bold ;
    }
    .text-center{
      text-align:center ;
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
        display: inline-block ;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap ;
        }
    }
`;
