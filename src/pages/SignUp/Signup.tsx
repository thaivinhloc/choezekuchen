import { Button, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { TSignup } from "../../context/AuthTypes";
import { DivSignupWrapper } from "./index.style";
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
};
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
  const [form] = useForm<TSignup>();
  const { onRegister, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) navigate("/");
  }, []);
  const onFinish = async (value: TSignup) => {
    onRegister(value);
  };

  return (
    <DivSignupWrapper>
      {/* <div className="text-center">
        <h1>SIGN UP</h1>
      </div> */}
      <Row justify="center" align="middle">
        {/* <Col span={10}> */}
        <Form
          form={form}
          className="signup-form"
          {...layout}
          // name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"username"}
            label="Username"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Username" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input size="large" placeholder="example@gmail.com" />
          </Form.Item>
          <Form.Item
            name={"address"}
            label="Address"
            rules={[{ required: false }]}
          >
            <Input size="large" placeholder="Your address" />
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
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              size="large"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
            <Button
              size="large"
              className="button-signup btn-primary bold"
              htmlType="submit"
              loading={isLoading}
            >
              Sign Up
            </Button>
            Already have member?{" "}
            <Link to="/login">
              <strong>Log In</strong>
            </Link>
          </Form.Item>
        </Form>
        {/* </Col> */}
      </Row>
    </DivSignupWrapper>
  );
};

export default SignUp;
