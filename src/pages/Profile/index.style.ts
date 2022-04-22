import styled from "styled-components";

export const DivProfileWrapper = styled.div`
  background-color: #f6f6f6;

  .container-inner {
    width: 35%;
    padding: 120px 0;
    margin: 0 auto;

    @media only screen and (max-width: 960px) {
      padding: 90px 0;
      width: 80%;
    }
    @media only screen and (max-width: 435px) {
      padding: 0;
      width: 100%;
      padding: 30px 0;
    }

    .profile {
      background-color: #fff;
      box-shadow: 0 2px 20px rgb(45 53 89 / 10%);
      padding: 2.5rem;

      font-family: Roboto, sans-serif, "Helvetica Neue", Arial, "Noto Sans",
        sans-serif;
      .ant-row {
        padding: 1.5rem 1.25rem;
        font-size: 1.2rem;
        .label {
          color: #8094ae;
          letter-spacing: -0.01em;
        }

        .value {
          color: #526484;
          font-weight: 600;
        }
      }
    }
  }
`;
