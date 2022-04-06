import React from "react";
import { DivSignupWrapper } from "./index.style";
import { Form, Input, Button, Select } from "antd";
// import { LockOutlined } from "@ant-design/icons";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Option } = Select;
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SignUp = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <DivSignupWrapper>
      <Form
        className="signup-form"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Username"
          rules={[{ required: true }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input placeholder="example@gmail.com" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input size="large" type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
            },
          ]}
        >
          <Input size="large" type="password" placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button className="button-signup" htmlType="submit">
            Singup
          </Button>
        </Form.Item>
      </Form>
    </DivSignupWrapper>
  );
};

export default SignUp;
