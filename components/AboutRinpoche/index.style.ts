import styled from "styled-components";
import { THEME } from "../../common";
type TStyled = {
  theme: typeof THEME;
};

export const DivAboutRinppche = styled.div`
  .about {
    padding-top: 112px;
    &-title {
      h2 {
        color: #303030;
        text-align: center;
        font-size: 30px;
        line-height: 40px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 3px;
      }
      h3 {
        color: #303030;
        text-align: center;
        font-size: 20px;
        line-height: 34px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0px;
        text-transform: none;
      }
    }
  }
`;
