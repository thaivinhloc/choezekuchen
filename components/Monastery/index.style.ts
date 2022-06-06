import styled from "styled-components";
import { THEME } from "../../common";
type TStyled = {
  theme: typeof THEME;
};

export const DivMonastery = styled.div`
  .monastery {
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
      padding: 20px 0;
      h3 {
        color: #303030;
        font-size: 20px;
        line-height: 34px;
        font-weight: 600;
        text-transform: none;
      }
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
