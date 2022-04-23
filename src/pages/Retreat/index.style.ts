import styled from "styled-components";

export const DivRetreatWrapper = styled.div`
  padding: 20px 0px 50px;
  color: #000;
  .ant-tabs {
    .retreat {
      &-left {
        padding-left: 10px;
        text-align: center;
      }
      &__right {
        &-form {
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
          color: #000;
          border: 1px solid #999;
        }
        .box-title {
          /* background: #f6f6f6; */
          background: #bf1111;
          color: #fff;
          padding: 10px;
          font-weight: bold;
          border-bottom: 1px solid #999;
          text-align: center;
        }
      }
      &-row {
        border-bottom: 1px solid #999;
      }
      &-label {
        background: #f6f6f6;
        padding: 10px;
        text-align: right;
        font-weight: bold;
        font-size: 13px;
      }
      &-content {
        padding: 10px;
        text-align: right;
        width: 94%;
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
        background: #aca3a3;
        font-weight: bold;
      }
      .ant-table-cell {
        &::before {
          height: 100% !important;
        }
      }
      .ant-table-cell {
      }
    }
    .ant-table-body{
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888; 
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    }
  }
`;
