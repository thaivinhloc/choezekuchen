import { Button as AntButton } from "antd"
import styled from "styled-components"

const ButtonWrapper = styled(AntButton)`
  font-size: 16px;
  line-height: 27px;
  font-weight: 600;
  text-shadow: none;
`
export function Button({ ...props }) {
  return <ButtonWrapper {...props} />
}
