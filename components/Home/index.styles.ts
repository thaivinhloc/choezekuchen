import styled from "styled-components"
import { THEME } from "../../common"

type TStyled = {
  theme: typeof THEME
}

export const DivHomeWrapper = styled.div`
  font-family: Raleway, sans-serif;
  color: rgb(48, 48, 48);

  .section-large {
    padding-top: 60px;
    background: #fff;

    .ant-card-meta-description {
      p {
        color: rgb(119, 119, 119);
        font-size: 14px;
        font-weight: 400;
      }
    }
    .section-title {
      text-align: left;

      h2 {
        font-size: 30px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: 3px;
        margin-bottom: 20px;
      }
    }
  }

  .section-card {
    .section-title {
      text-align: center;

      h2 {
        font-size: 30px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: 3px;
        margin-bottom: 20px;
      }

      p {
        color: rgb(119, 119, 119);
        font-size: 14px;
        font-weight: 400;
      }
    }

    .section-group {
      padding-top: 42px;
      padding-bottom: 50px;
      text-align: center;

      .section-item {
        box-sizing: border-box;
        padding: 0 15px;
      }

      .ant-card-meta-title {
        font-size: 18px;
        line-height: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }
  }

  .section-count {
    padding: 32px 0;

    .section-item {
      padding: 16px;
      text-align: center;
      font-weight: 700;

      .counter {
        font-size: 57px;
        color: rgb(119, 119, 119);
      }

      p {
        font-weight: 700;
        text-transform: uppercase;
        color: rgb(119, 119, 119);
        letter-spacing: 1px;
        font-size: 20px;
        line-height: 26px;
      }
    }
  }

  .section-slide {
    text-align: center;
    padding: 62px 0 65px;

    h2 {
      font-size: 30px;
      line-height: 40px;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 30px;
    }

    .carousel {
      margin: 15px 0;
      line-height: 1.666666666666667em;

      .quote {
        font-size: 21px;
      }

      .sub-text {
        font-size: 13px;
        margin-top: 22px;
        font-weight: 500;
      }

      .contact {
        color: #1abc9c;
      }
    }

    .btn-arrow {
      width: 33px;
      height: 33px;
      padding: unset;
    }
    .btn-arrow:hover {
      background-color: #000;
      border-color: #000;
    }
  }

  .section-bottom {
    padding-bottom: 90px;

    .btn-contact {
      margin-bottom: 50px;
      margin-left: 15px;
    }

    .ant-card-body {
      padding: 0 15px 32px 15px;

      .ant-card-meta-title {
        font-size: 18px;
        line-height: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 12px;
      }
    }
  }
`
