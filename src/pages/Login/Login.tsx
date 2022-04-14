import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { TLogin } from "../../context/AuthTypes";
import { DivLoginWrapper } from "./index.styles";

const Login: React.FC<{}> = () => {
  const [form] = useForm<TLogin>();
  const { onLogin, user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  const onFinish = (values: TLogin) => {
    onLogin(values);
  };

  return (
    <DivLoginWrapper>
      <Row justify="center" align="middle">
        <Form
          name="normal_login"
          form={form}
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="identifier"
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
            <Button
              size="large"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
            >
              Log in
            </Button>
            Dont't have an account?{" "}
            <Link to="/signup">
              <strong>Register Now</strong>
            </Link>
          </Form.Item>
        </Form>
      </Row>
    </DivLoginWrapper>
  );
};

export default Login;
