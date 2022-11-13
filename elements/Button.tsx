import { Button as AntButton, ButtonProps } from "antd"
import styled from "styled-components"

const ButtonWrapper = styled(AntButton)<ButtonProps>`
  font-size: 16px;
  line-height: 27px;
  font-weight: 600;
  text-shadow: none;
  &.ant-btn-link {
    font-weight: 400;
    padding: 0;
  }
`
export function Button({ ...props }: ButtonProps) {
  return <ButtonWrapper {...props} />
}
