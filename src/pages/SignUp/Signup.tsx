import React from "react";
import { DivSignupWrapper } from "./index.style";
import { Form, Input, Button, Select, Row, Col } from "antd";
// import { LockOutlined } from "@ant-design/icons";
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
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

  return (
    <DivSignupWrapper>
      {/* <div className="text-center">
        <h1>SIGN UP</h1>
      </div> */}
      <Row justify="center">
        <Col span={10}>
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
              <Input size="large" placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input size="large" style={{ width: "100%" }} />
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
              <Input
                size="large"
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
              <Button size="large" className="button-signup" htmlType="submit">
                Singup
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DivSignupWrapper>
  );
};

export default SignUp;
