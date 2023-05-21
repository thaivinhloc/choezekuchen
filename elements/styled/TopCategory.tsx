import styled from "styled-components"

export const TopCategoryWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 32px;
  text-align: center;
  @media (max-width: 991px) {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .ant-radio-button-wrapper {
    border: 0;
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    color: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    &:before {
      display: none;
    }
    @media (min-width: 992px) {
      padding-left: 40px;
      padding-right: 40px;
      font-size: 20px;
    }
    &:hover {
      background: transparent;
      color: #800000;
    }
    &-checked {
      border-bottom: 3px solid #800000 !important;
      color: #800000 !important;
      background: transparent !important;
    }
  }
`
