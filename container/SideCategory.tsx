import { Space } from "antd"
import styled from "styled-components"

const SideCategoryWrapper = styled.div`
  width: 100%;
  a {
    color: rgb(119, 119, 119);
    -webkit-appearance: none;
  }
`

const SideCategory: React.FC = ({ children, ...props }) => {
  return <SideCategoryWrapper {...props}>{children}</SideCategoryWrapper>
}

export default SideCategory
