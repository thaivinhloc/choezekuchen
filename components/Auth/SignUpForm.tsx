import { Button, Col, Form, Input, Row, Space } from "antd"
import { useForm } from "antd/lib/form/Form"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useAuth } from "../../context/auth/AuthContext"
import { TSignup } from "../../context/auth/AuthTypes"
import { DivSignupWrapper } from "./index.styles"

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
}

type TFrom = {
  firstName: string
  lastName: string
  email: string
  address: string
  password: string
  confirmPassword?: string
  country?: string
  city?: string
}

const SignUpForm = () => {
  const { t, i18n } = useTranslation(["login"])

  const [form] = useForm<TFrom>()
  const { onRegister, isLoading } = useAuth()

  const onFinish = async (data: TFrom) => {
    const { country, city, firstName, lastName, confirmPassword, ...values } =
      data
    const name = firstName.trim() + lastName.trim()
    const body = {
      ...values,
      email: values.email.trim(),
      password: values.password.trim(),
      username: name.charAt(0).toUpperCase() + name.slice(1),
      address: `${city}, ${country}`
    }

    onRegister(body)
  }

  return (
    <DivSignupWrapper>
      {/* <div className="text-center">
        <h1>SIGN UP</h1>
      </div> */}
      <div className='container'>
        <Row justify='center' align='middle'>
          {/* <Col span={10}> */}
          <Form
            form={form}
            className='signup-form'
            onFinish={onFinish}
            validateMessages={validateMessages}
            validateTrigger='submit'
            requiredMark={false}
            labelCol={{
              span: 24
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='firstName'
                  label={t("firstName")}
                  rules={[
                    {
                      whitespace: true,
                      required: true,
                      message: t("Please input your") + ` ${t("firstName")}`
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={"lastName"}
                  label={t("lastName")}
                  rules={[
                    {
                      required: true,
                      message: t("Please input your") + ` ${t("lastName")}`
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='city'
                  label={t("City")}
                  rules={[
                    {
                      whitespace: true,
                      required: true,
                      message: t("Please input your") + ` ${t("City")}`
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={"country"}
                  label={t("Country")}
                  rules={[
                    {
                      required: true,
                      message: t("Please input your") + ` ${t("Country")}`
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name='phone' label={t("Phone")}>
              <Input />
            </Form.Item>
            <Form.Item
              name={"email"}
              label='Email'
              rules={[
                {
                  whitespace: true,
                  type: "email",
                  required: true,
                  message: t("Please input your") + " email"
                }
              ]}
            >
              <Input placeholder='example@gmail.com' />
            </Form.Item>
            <Form.Item
              label={t("Password")}
              name='password'
              rules={[
                {
                  whitespace: true,
                  required: true,
                  message: t("Please input your Password") + "!"
                }
                // {
                //   min: 8,
                //   message: "Password must be at least 8 characters",
                // },
              ]}
            >
              <Input type='password' />
            </Form.Item>
            <Form.Item
              label={t("Confirm Password")}
              name='confirmPassword'
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
            <Space
              direction='vertical'
              style={{ width: "100%", marginTop: 8 }}
            >
              <Button
                block
                type='primary'
                htmlType='submit'
                loading={isLoading}
                size='large'
              >
                {t("Sign Up", { ns: "content" })}
              </Button>
              <Row>
                <Col>{t("Already have member?", { ns: "content" })} &nbsp;</Col>
                <Col>
                  <Link href='/login'>
                    <a>
                      <strong>{t("Log In", { ns: "content" })}</strong>
                    </a>
                  </Link>
                </Col>
              </Row>
            </Space>
          </Form>
          {/* </Col> */}
        </Row>
      </div>
    </DivSignupWrapper>
  )
}

export default SignUpForm
