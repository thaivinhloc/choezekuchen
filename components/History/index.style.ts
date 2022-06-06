import styled from "styled-components";
import { THEME } from "../../common";
type TStyled = {
  theme: typeof THEME;
};

export const DivHistory = styled.div`
  .history {
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
      padding: 48px 0;
      p {
        /* text-align: justify; */
        color: #777777;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
`;
