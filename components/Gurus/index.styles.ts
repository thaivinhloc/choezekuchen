import styled from "styled-components";
import { THEME } from "../../common";

type TStyled = {
  theme: typeof THEME;
};

export const DivGurusWrapper = styled.div`
  font-family: ${(props: TStyled) => props.theme.primaryFont};

  .section {
    padding-top: 60px;
    padding-bottom: 100px;
    text-align: center;
    color: ${(props: TStyled) => props.theme.dark};

    .section-title {
      h2 {
        font-size: 30px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: 3px;
        margin-bottom: 20px;
        text-transform: uppercase;
      }
    }

    .section-group {
      padding-top: 65px;

      .section-item {
        padding: 0 15px 35px;

        .ant-card-meta-title h4 {
          font-size: 18px;
          line-height: 20px;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 25px;
          margin-top: 40px;
        }

        .ant-card-meta-description {
          .btn-group {
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
              width: 49px;
              height: 40px;
              background-color: #fff;
              > svg {
                path {
                  fill: ${(props: TStyled) => props.theme.dark};
                }
              }
              border: 2px solid ${(props: TStyled) => props.theme.dark};
              margin: 0px 8px 0px 0px;
              border-radius: 3px;
              display: flex;
              align-items: center;
              justify-content: center;

              cursor: pointer;
              &:hover {
                background: ${(props: TStyled) => props.theme.dark};
                > svg {
                  path {
                    fill: #fff;
                  }
                }
              }
            }
          }
          p {
            color: ${(props: TStyled) => props.theme.textSecondary};
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
`;
