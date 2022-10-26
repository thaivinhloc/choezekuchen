import { Space } from "antd"
import styled from "styled-components"

const SideCategoryWrapper = styled.div`
  width: 100%;
  a {
    color: rgb(119, 119, 119);
    -webkit-appearance: none;
  }
  border: 1px solid #e7e9eb;
  border-radius: 5px;
  padding: 16px;
  background: #fff;
`

const SideCategory: React.FC = ({ children, ...props }) => {
  return <SideCategoryWrapper {...props}>{children}</SideCategoryWrapper>
}

export default SideCategory
