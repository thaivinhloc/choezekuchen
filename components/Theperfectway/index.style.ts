import styled from "styled-components";
import { THEME } from "../../common";
type TStyled = {
  theme: typeof THEME;
};

export const DivTheperfectway = styled.div`
  .theperfectway {
    padding: 120px 35px;
    &-hr {
      //color: ${(props: TStyled) => props.theme.hr} !important;
      margin: 50px 0;
      height: 1px;
      background-color: #eaeaea;
    }
    &-wrapper {
      padding: 0 0;
      p {
        /* text-align: justify; */
        color: #777777;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
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
`;
