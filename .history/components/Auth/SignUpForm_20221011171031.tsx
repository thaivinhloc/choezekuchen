import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/auth/AuthContext";
import { TSignup } from "../../context/auth/AuthTypes";
import { DivSignupWrapper } from "./index.styles";

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

const SignUpForm = () => {
  const { t, i18n } = useTranslation(["content"]);

  const [form] = useForm<TSignup>();
  const { onRegister, isLoading } = useAuth();

  const onFinish = async (data: TSignup) => {
    const { country, city, username, confirmPassword, ...values } = data;
    const name = username.trim();
    const body = {
      ...values,
      email: values.email.trim(),
      password: values.password.trim(),
      username: name.charAt(0).toUpperCase() + name.slice(1),
      address: `${city}, ${country}`,
    };

    onRegister(body);
  };

  return (
    <DivSignupWrapper>
      {/* <div className="text-center">
        <h1>SIGN UP</h1>
      </div> */}
      <div className="container">
        <Row justify="center" align="middle">
          {/* <Col span={10}> */}
          <Form
            form={form}
            className="signup-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
            requiredMark={false}
          >
            <Form.Item
              name={"username"}
              label=""
              rules={[
                {
                  whitespace: true,
                  required: true,
                  message: "Please input your username",
                },
              ]}
            >
              <Input size="large" placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={"email"}
              label=""
              rules={[
                {
                  whitespace: true,
                  type: "email",
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="city"
                  label=""
                  rules={[
                    {
                      whitespace: true,
                      required: true,
                      message: "Please input your City",
                    },
                  ]}
                >
                  <Input size="large" placeholder="City" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={"country"}
                  label=""
                  rules={[
                    { required: true, message: "Please input your Country" },
                  ]}
                >
                  <Input size="large" placeholder="Country" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label=""
              name="password"
              rules={[
                {
                  whitespace: true,
                  required: true,
                  message: "Please input your Password!",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters",
                },
              ]}
            >
              <Input size="large" type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item
              label=""
              name="confirmPassword"
              rules={[
                {
                  whitespace: true,
                  required: true,
                  message: "Please input your Confirm Password!",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters",
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
            <div className="form-footer">
              <Col span={14}>
                <Row>
                  <Col>
                    {t("Already have member?", { ns: "content" })} &nbsp;
                  </Col>
                  <Col>
                    <Link href="/login">
                      <strong>{t("", { ns: "content" })}Log In</strong>
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col span={10} className="form-button-submit">
                <Button
                  size="large"
                  className="btn-primary bold form-button-submit"
                  htmlType="submit"
                  loading={isLoading}
                >
                  {t("", { ns: "content" })}
                  Sign Up
                </Button>
              </Col>
            </div>
          </Form>
          {/* </Col> */}
        </Row>
      </div>
    </DivSignupWrapper>
  );
};

export default SignUpForm;
