import styled from "styled-components"

export const DivRetreatWrapper = styled.div`
  h2 {
    color: ${(props) => props.theme.primary};
    font-size: 32px;
  }
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
          color: #000;
          border: 1px solid ${(props) => props.theme.border};
          border-radius: 8px;
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
          color: #C00000;
          padding: 10px;
          font-weight: bold;
          border-bottom: 1px solid ${(props) => props.theme.border};
          border-radius: 8px 8px 0 0;
          text-align: left;
        }
      }
      &-row {
        &:not(:last-of-type) {
          border-bottom: 1px solid ${(props) => props.theme.border};
        }
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
`

export const DivTableRetreat = styled.div`
  overflow-x: auto;
  &.participant-list {
    .ant-table {
      &-row {
        &:first-of-type {
          background: #C0000010;
          color: #C00000;
        }
      }
    }
  }
  .ant-table {
    color: #000;
    &-thead {
      > tr,
      th {
        font-size: 14px;
        background: #C00000;
        color: #fff;
        font-weight: 600;
        border-bottom: 1px solid ${(props) => props.theme.border};
        border-top: 1px solid ${(props) => props.theme.border};
        &:first-child {
          border-left: 1px solid ${(props) => props.theme.border};
        }
        &:last-child {
          border-right: 1px solid ${(props) => props.theme.border};
        }
      }
      .ant-table-cell {
        &::before {
          height: 100% !important;
        }
      }
    }
    &-body {
      background: #fff;
      > tr,
      td {
        border-bottom: 1px solid ${(props) => props.theme.border};
        &:first-child {
          border-left: 1px solid ${(props) => props.theme.border};
        }
        &:last-child {
          border-right: 1px solid ${(props) => props.theme.border};
        }
      }
    }
    &-row {
      background: #fff;
    }
  }
`
