import styled, { createGlobalStyle } from "styled-components";
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
    }
`;
