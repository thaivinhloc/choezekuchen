import { Avatar, Row, Col, Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { DivProfileWrapper } from "./index.style";

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 24 },
};
const Profile = () => {
  const { user, onResetPassword } = useAuth();
  const [form] = useForm();

  type TResetPassword = {
    currentPassword: string;
    content: string;
  };

  const onFinish = async (value: any) => {
    // onResetPassword();
  };
  return (
    <DivProfileWrapper>
      <div>
        <div className="profile">
          <Col span={12} className="box">
            <Row>
              <Col span={3}>
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                  size={50}
                >
                  <span className="bold">
                    {user?.username.charAt(0).toUpperCase()}
                  </span>
                </Avatar>
              </Col>
              <Col>
                <strong className="name">{user?.username}</strong>
                <br />
                <p>{user?.email}</p>
              </Col>
            </Row>
            <Form
              form={form}
              className="change-password"
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              layout="vertical"
              // validateMessages={validateMessages}
            >
              <Form.Item
                label="Current Password"
                name="currentPassword"
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
                label="New Password"
                name="newPassword"
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
                ]}
              >
                <Input
                  size="large"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
                <Button size="large" htmlType="submit">
                  Update Password
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </div>
    </DivProfileWrapper>
  );
};

export default Profile;
