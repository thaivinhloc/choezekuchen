// @ts-nocheck
import { Button, Col, Form, Input, Row } from "antd"
import { useForm } from "antd/lib/form/Form"
import { LOGIN, RETREAT } from "common/navigator"
import LinkComponent from "components/Link"
import i18next from "i18next"
import { useRouter } from "next/router"
import React from "react"
import { useTranslation } from "next-i18next"
import { useAuth } from "../../context/auth/AuthContext"
import { TForgotPassword, TLogin } from "../../context/auth/AuthTypes"
import { DivLoginWrapper } from "./index.styles"
import Link from "next/link"

const ResetPasswordForm: React.FC<{}> = () => {
  const router = useRouter()
  const [form] = useForm()
  const { t } = useTranslation(["content", "login"])

  const { isLoading, onResetPassword } = useAuth()

  const onFinish = (values) => {
    console.log({ values })

    onResetPassword(values, () => {
      form.resetFields()
      router.push(LOGIN)
    })
  }

  console.log({ code: router.query.code })

  return (
    <DivLoginWrapper>
      <div className='container'>
        <Row justify='center' align='middle'>
          {router.query.code ? (
            <Form
              name='resetPassword'
              form={form}
              className='login-form'
              onFinish={onFinish}
              requiredMark={false}
              validateTrigger='submit'
              labelCol={{
                span: 24
              }}
              initialValues={{
                password: "",
                passwordConfirmation: "",
                code: router.query.code
              }}
            >
              <Form.Item
                label={t("Password")}
                name='password'
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: t("Please input your Password") + "!"
                  }
                ]}
              >
                <Input type='password' />
              </Form.Item>
              <Form.Item
                label={t("Confirm Password")}
                name='passwordConfirmation'
                rules={[
                  {
                    whitespace: true,
                    required: true,
                    message: t("Please input your Confirm Password") + "!"
                  }
                  // ({ getFieldValue }) => ({
                  //   validator(_, value) {
                  //     if (!value || getFieldValue("password") === value) {
                  //       return Promise.resolve();
                  //     }
                  //     return Promise.reject(
                  //       new Error(
                  //         "The two passwords that you entered do not match!"
                  //       )
                  //     );
                  //   },
                  // }),
                ]}
              >
                <Input type='password' />
              </Form.Item>
              <Form.Item name='code' style={{ visibility: "hidden" }}>
                <Input />
              </Form.Item>

              <Row gutter={24} justify='end'>
                <Col span={10} className='form-button-submit'>
                  <Button
                    block
                    type='primary'
                    size='large'
                    htmlType='submit'
                    loading={isLoading}
                  >
                    {t("Reset Password", { ns: "login" })}
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            <div style={{ textAlign: "center", padding: "50px 16px" }}>
              <h2>{t("Invalid Link")}</h2>
              <p>{t("Your reset code is invalid or expired!")}</p>
            </div>
          )}
        </Row>
      </div>
    </DivLoginWrapper>
  )
}

export default ResetPasswordForm
