import styled from "styled-components"

export const DivFooterWrapper = styled.div`
  background: #245756;
  padding: 50px 0;
  h3 {
    color: ${(props) => props.theme.white};
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 14px;
    margin-top: 0;
  }
  p {
    color: ${(props) => props.theme.white};
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 20px;
      line-height: 20px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
    }
  }
`
