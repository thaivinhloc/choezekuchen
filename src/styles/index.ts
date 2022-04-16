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
`;
