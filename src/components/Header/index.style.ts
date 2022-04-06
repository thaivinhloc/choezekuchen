import styled from "styled-components";
import Banner from "../../assets/title-image-3.jpeg";

export const DivHeaderWrapper = styled.div`
  background-image: url(${Banner});
  .title {
    > h1 {
      font-size: 45px;
      font-weight: 700px;
    }
    text-align: center;
    padding: 100px 0px;
  }
`;
