import { Button as AntButton, ButtonProps } from "antd"
import React from "react"

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <AntButton {...props} />
}
