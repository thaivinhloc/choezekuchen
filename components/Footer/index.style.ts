import styled from "styled-components"

export const DivFooterWrapper = styled.div`
  background: #245756;
  padding: 50px 0;
  h3 {
    color: ${(props) => props.theme.white};
    font-size: 15px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  p {
    color: ${(props) => props.theme.white};
    margin-bottom: 2px;
    font-size: 13px;
  }
`