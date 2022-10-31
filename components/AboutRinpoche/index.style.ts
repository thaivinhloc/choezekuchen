import styled from "styled-components"
import { THEME } from "../../common"
type TStyled = {
  theme: typeof THEME
}

export const DivAboutRinppche = styled.div`
  .about {
    padding-top: 60px;
    padding-bottom: 60px;
    h2 {
      color: #303030;
      text-align: center;
      font-size: 30px;
      line-height: 40px;
      font-style: normal;
      font-weight: 700;
    }
    h3 {
      color: #303030;
      font-size: 18px;
      line-height: 24px;
      font-style: normal;
      font-weight: 300;
      text-transform: none;
    }
  }
`
