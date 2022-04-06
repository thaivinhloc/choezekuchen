import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { DivLoginWrapper } from "./index.styles";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login: React.FC<{}> = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DivLoginWrapper>
      <Row justify="center" align="middle">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
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
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {/* 
              <a className="login-form-forgot" href="#">
                Forgot password
              </a> */}
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/signup">register now!</a>
          </Form.Item>
        </Form>
      </Row>
    </DivLoginWrapper>
  );
};

export default Login;
