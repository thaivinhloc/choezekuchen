import { Avatar, Row, Col, Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { DivProfileWrapper } from "./index.style";

const layout = {
  labelCol: {
    sm: { span: 24 }
  },
  wrapperCol: {
    sm: { span: 24 }
  }
};

const Profile = () => {
  const { user } = useAuth();
  const [form] = useForm();

  type TResetPassword = {
    currentPassword: string;
    content: string;
  };

  const onFinish = async (value: any) => {
    // onUpdateProfile();
  };

  return (
    <DivProfileWrapper>
      <div className="container-inner">
        <div className="profile">
          <Row>
            <Col xs={24} className="avatar">
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                  verticalAlign: "middle"
                }}
                size={70}
              >
                <span className="bold">
                  {user?.username.charAt(0).toUpperCase()}
                </span>
              </Avatar>
              <strong className="name">{user?.username}</strong>
              <p>{user?.email}</p>
            </Col>
            <Col xs={24}>
              <Form
                form={form}
                className="change-password"
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                labelAlign="left"
                layout="vertical"
                fields={[
                  {
                    name: ["username"],
                    value: user?.username
                  },
                  {
                    name: ["email"],
                    value: user?.email
                  },
                  {
                    name: ["address"],
                    value: ""
                  }
                ]}
                requiredMark="optional"

              // validateMessages={validateMessages}
              >
                <Form.Item
                  label="Name"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name !"
                    }
                  ]}
                >
                  <Input
                    size="large"
                    placeholder={user?.username}
                    readOnly={true}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!"
                    }
                  ]}
                >
                  <Input
                    size="large"
                    readOnly={true}
                    placeholder={user?.email}
                  />
                </Form.Item>

                <Form.Item
                  label="Address"
                  name="address"
                  rules={[]}
                  requiredMark="optional"
                >
                  <Input
                    size="large" 
                    placeholder="Address"
                    readOnly={true}
                  />
                </Form.Item>
                {/* <Row className="city-country">
                  <Col xs={24} sm={24} md={24} lg={11}>
                    <Form.Item
                      label="City"
                      name="city"
                      rules={[]}
                      requiredMark="optional"
                    >
                      <Input size="large" placeholder="City" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item
                      label="Country"
                      name="country"
                      rules={[]}
                      requiredMark="optional"
                    >
                      <Input size="large" placeholder="Country" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button size="large" htmlType="submit" className="btn-submit">
                    Update Profile
                  </Button>
                </Form.Item>*/}
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </DivProfileWrapper>
  );
};

export default Profile;
