/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import LinkComponent from "components/Link";
import i18next from "i18next";
import React from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { TLogin } from "../../context/auth/AuthTypes";
import { DivLoginWrapper } from "./index.styles";

const LoginForm: React.FC<{}> = () => {
  const [form] = useForm<TLogin>();
  const { t } = i18next;

  const { onLogin, isLoading } = useAuth();

  const onFinish = (values: TLogin) => {
    onLogin(values);
  };

  return (
    <DivLoginWrapper>
      <div className="container">
        <Row justify="center" align="middle">
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              label=""
              name="identifier"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label=""
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
            <div className="form-footer">
              <Col span={14}>
                <Row>
                  <Col>Dont't have an account? &nbsp;</Col>
                  <Col>
                    <LinkComponent href="/signup">
                      <strong>Register Now</strong>
                    </LinkComponent>
                  </Col>
                </Row>
              </Col>
              <Col span={10} className="form-button-submit">
                <Button
                  size="large"
                  htmlType="submit"
                  className="btn-primary bold"
                  loading={isLoading}
                >
                  {t("login", { ns: "login" })}
                </Button>
              </Col>
            </div>
          </Form>
        </Row>
      </div>
    </DivLoginWrapper>
  );
};

export default LoginForm;
