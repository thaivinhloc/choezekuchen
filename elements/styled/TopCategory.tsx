import styled from "styled-components"

export const TopCategoryWrapper = styled.div`
  margin-top: 60px;
  text-align: center;
  .ant-radio-button-wrapper {
    border: 0;
    background: rgba(255, 255, 255, 0.6);
    @media (min-width: 992px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    &:hover {
      background: rgba(255, 255, 255);
      color: #f15b43;
    }
    &-checked {
      background: #f15b43;
    }
  }
`
