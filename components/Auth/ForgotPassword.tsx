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
import { TForgotPassword, TLogin } from "../../context/auth/AuthTypes";
import { DivLoginWrapper } from "./index.styles";
import Link from "next/link";
import { useApp } from "context/app/AppContext";

const ForgotPasswordForm: React.FC<{}> = () => {
  const router = useRouter();
  const [form] = useForm<TForgotPassword>();
  const { t, i18n } = useTranslation(["content", "login"]);

  const { isLoading, onForgotPassword } = useAuth();
  const { setTitleBanner } = useApp();

  useEffect(() => {
    if (i18n.language === "en") {
      setTitleBanner("RESET PASSWORD");
    } else {
      setTitleBanner("KHÔI PHỤC MẬT KHẨU");
    }
  }, [i18n.language, setTitleBanner]);

  const onFinish = (values: TForgotPassword) => {
    onForgotPassword(values, () => {
      form.resetFields();
    });
  };

  return (
    <DivLoginWrapper>
      <div className="container">
        <Row justify="center" align="middle">
          <Form
            name="forgotPassword"
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
              name="email"
              rules={[
                {
                  required: true,
                  message: t("Please input your", { ns: "login" }) + " Email!",
                },
              ]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>

            <Row gutter={24} justify="end">
              <Col span={10} className="form-button-submit">
                <Button
                  block
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isLoading}
                >
                  {t("Reset Password", { ns: "login" })}
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </DivLoginWrapper>
  );
};

export default ForgotPasswordForm;
