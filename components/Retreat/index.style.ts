import styled from "styled-components";

export const DivRetreatWrapper = styled.div`
  padding: 20px 0px 50px;
  color: #000;
  .retreat-content {
    .ant-tabs-nav {
      margin: auto;
      @media (min-width: 992px) {
        .container {
          width: 100%;
        }
      }
    }
  }
  .center-tabs {
    @media (min-width: 992px) {
      width: 100%;
      .ant-tabs-nav {
        margin: auto;
        .container {
          width: 100%;
        }
      }
    }
  }
  .ant-tabs {
    &-tab {
      padding: 4px;
    }
    .retreat {
      &-left {
        padding-left: 10px;
        .title {
          font-size: 24px;
        }
      }
      &__right {
        &-form {
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
          color: #000;
          border: 1px solid #999;
          margin-bottom: 30px;
          .ant-input {
            &:focus {
              box-shadow: none;
            }
          }
        }
        .box-title {
          /* background: #f6f6f6; */
          background: #fff;
          color: #f15b43;
          padding: 10px;
          font-weight: bold;
          border-bottom: 1px solid #999;
          text-align: left;
        }
      }
      &-row {
        border-bottom: 1px solid #999;
      }
      &-label {
        background: #f9f9f9;
        padding: 10px;
        font-weight: bold;
        font-size: 13px;
      }
      &-content {
        padding: 10px;
        width: 100%;
      }
      &-submit {
        padding: 10px;
        &-form {
        }
      }
    }
  }
`;

export const DivTableRetreat = styled.div`
  .ant-table {
    &-thead {
      > tr,
      th {
        background: #f15b43;
        color: #fff;
        font-weight: bold;
        border-bottom: 1px solid #999;
        border-top: 1px solid #999;
        &:first-child {
          border-left: 1px solid #999;
        }
        &:last-child {
          border-right: 1px solid #999;
        }
      }
      .ant-table-cell {
        &::before {
          height: 100% !important;
        }
      }
      .ant-table-cell {
      }
    }
    .ant-table-body {
      > tr,
      td {
        border-bottom: 1px solid #999;
        &:first-child {
          border-left: 1px solid #999;
        }
        &:last-child {
          border-right: 1px solid #999;
        }
      }
    }
  }
`;
