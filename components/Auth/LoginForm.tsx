/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { RETREAT } from "common/navigator";
import LinkComponent from "components/Link";
import i18next from "i18next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useAuth } from "../../context/auth/AuthContext";
import { TLogin } from "../../context/auth/AuthTypes";
import { DivLoginWrapper } from "./index.styles";
import Link from "next/link";
import { useApp } from "context/app/AppContext";

const LoginForm: React.FC<{}> = () => {
  const router = useRouter();
  const [form] = useForm<TLogin>();
  const { t, i18n } = useTranslation(["content", "login"]);

  const { onLogin, isLoading } = useAuth();
  const { setTitleBanner } = useApp();

  useEffect(() => {
    if (i18n.language === "en") {
      setTitleBanner("LOGIN FOR RETREAT");
    } else {
      setTitleBanner("ĐĂNG NHẬP CHO NHẬP THẤT");
    }
  }, [i18n.language, setTitleBanner]);

  const onFinish = (values: TLogin) => {
    onLogin(values, () => {
      router.push(
        router.query.redirect ? `/${router.query.redirect}` : RETREAT
      );
    });
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
            validateTrigger="submit"
            labelCol={{
              span: 24,
            }}
          >
            <Form.Item
              label="Email"
              name="identifier"
              rules={[
                {
                  required: true,
                  message: t("Please input your", { ns: "login" }) + " Email!",
                },
              ]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item
              label={t("Password", { ns: "login" })}
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    t("Please input your", { ns: "login" }) +
                    ` ${t("Password", { ns: "login" })}!`,
                },
              ]}
            >
              <Input size="large" type="password" />
            </Form.Item>
            <Row gutter={24} align="bottom">
              <Col span={14}>
                <Row>
                  <Col>
                    {t("Don't have an account?", { ns: "content" })} &nbsp;
                  </Col>
                  <Col>
                    <LinkComponent href="/signup">
                      <a>
                        <strong>{t("Register Now", { ns: "content" })}</strong>
                      </a>
                    </LinkComponent>
                  </Col>
                </Row>
              </Col>
              <Col span={10} className="form-button-submit">
                <Button
                  block
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isLoading}
                >
                  {t("login", { ns: "login" })}
                </Button>
              </Col>
            </Row>
            <div style={{ height: 8 }} />
            <Row>
              <Col span={24} style={{ textAlign: "right" }}>
                <Link href="/forgot-password">
                  <a>
                    <strong>{t("Forgot password?")}</strong>
                  </a>
                </Link>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </DivLoginWrapper>
  );
};

export default LoginForm;
