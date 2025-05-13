import styled from "styled-components"

export const DivRetreatWrapper = styled.div`
  h2 {
    color: ${(props) => props.theme.primary};
    font-size: 32px;
  }
  color: ${(props) => props.theme.dark};
  padding: 0 0 80px;
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
  .hide-tabs {
    > .ant-tabs-nav {
      display: none;
    }
  }
  .center-tabs {
    .ant-tabs-nav {
      margin: 0 auto 24px;
      .ant-tabs-tab {
        font-size: 20px;
        line-height: 48px;
        margin: 0 !important;
        padding-left: 24px;
        padding-right: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        color: rgba(0, 0, 0, 0.5);
      }
      .ant-tabs-tab-active {
        border-bottom: 3px solid #800000 !important;
      }
    }
    @media (min-width: 992px) {
      width: 100%;
      .ant-tabs-nav {
        margin: 0 auto 60px;
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
          color: ${(props) => props.theme.dark};
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
          color: #a51818;
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
          background: #a5181810;
          color: #a51818;
        }
      }
    }
  }
  .ant-table {
    color: ${(props) => props.theme.dark};
    &-thead {
      > tr,
      th {
        font-size: 14px;
        background: #a51818;
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
