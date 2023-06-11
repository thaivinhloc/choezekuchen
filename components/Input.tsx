import React from "react";
import { Input as AntInput, InputProps } from "antd";
import styled from "styled-components";
import { THEME } from "common";
import { TextAreaProps } from "antd/lib/input";
const { TextArea: AntTextArea } = AntInput;

const InputWrapper = styled(AntInput)`
  border: 1.5px solid ${THEME.primary};
  border-radius: 8px !important;
`;

const TextAreaWrapper = styled(AntTextArea)`
  border: 1.5px solid ${THEME.primary};
  border-radius: 8px !important;
`;

export const TextArea = ({ ...props }: TextAreaProps) => {
  return <TextAreaWrapper className='h-auto' {...props} />;
};
const Input = ({ ...props }: InputProps) => {
  return <InputWrapper {...props} />;
};

export default Input;
