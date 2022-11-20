import { Button, Col, Form, Input, Row, Space } from "antd"
import { t } from "i18next"
// import { useForm } from "antd/lib/form/Form";
import React, { FC, useEffect, useRef, useState } from "react"
import { useTranslation } from "next-i18next"
import { useAuth } from "../../context/auth/AuthContext"
import { DivProfileWrapper } from "./index.styles"

const Profile: FC<{}> = () => {
  const { user, onGetMe, onUpdateProfile, isLoading } = useAuth()
  const { t } = useTranslation()
  const [form] = Form.useForm()
  useEffect(() => {
    onGetMe()
  }, [])

  const RenderItem = ({
    fieldName,
    title,
    content,
    fieldType
  }: {
    fieldName?: string
    title: string
    content: string
    fieldType?: string
  }) => {
    return (
      <Row align='middle' className='profile-item'>
        <Col xs={10} sm={10} md={10} lg={10} className='label'>
          {title}
        </Col>
        <Col xs={14} sm={14} md={14} lg={14} className='value'>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {fieldName ? (
              <Form.Item
                name={fieldName}
                rules={[
                  {
                    // @ts-ignore
                    type: fieldType ?? "string",
                    required: true
                  }
                ]}
              >
                <Input
                  style={{ width: "100%", padding: 0 }}
                  bordered={false}
                  value={content}
                />
              </Form.Item>
            ) : (
              <span>{content}</span>
            )}
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <DivProfileWrapper>
      {user && (
        <Form
          validateTrigger='submit'
          form={form}
          initialValues={user}
          onFinish={(values) => {
            const { city, country } = values
            onUpdateProfile({
              ...values,
              address: [city, country].join(", ").trimStart()
            })
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <RenderItem
              fieldName='username'
              title='Full name:'
              content={user?.username || ""}
            />
            <RenderItem
              fieldName='phone'
              title='Phone:'
              content={user?.phone || ""}
            />
            <RenderItem
              fieldName='city'
              title='City:'
              content={user?.city || ""}
            />
            <RenderItem
              fieldName='country'
              title='Country:'
              content={user?.country || ""}
            />
            <RenderItem
              fieldName='email'
              fieldType='email'
              title='Email:'
              content={user?.email || ""}
            />
            <RenderItem
              title='Last Update:'
              content={user ? new Date(user.updatedAt).toLocaleString() : ""}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            <Form.Item shouldUpdate>
              {() => {
                return (
                  <Button
                    type='primary'
                    block
                    style={{ maxWidth: 200 }}
                    disabled={!form.isFieldsTouched()}
                    htmlType='submit'
                    loading={isLoading}
                  >
                    {t("Update")}
                  </Button>
                )
              }}
            </Form.Item>
          </div>
        </Form>
      )}
    </DivProfileWrapper>
  )
}

export default Profile
