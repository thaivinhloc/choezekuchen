import { Button, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import { TLogin } from "../../context/auth/AuthTypes";
import { DivLoginWrapper } from "./index.styles";

const Login: React.FC<{}> = () => {
  const [form] = useForm<TLogin>();
  const { onLogin, isLoading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) navigate("/retreat");
  }, [navigate]);

  const onFinish = (values: TLogin) => {
    onLogin(values);
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <DivLoginWrapper>
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
            <div>
              Dont't have an account?{" "}
              <Link to="/signup">
                <strong>Register Now</strong>
              </Link>
            </div>
            <Button
              size="large"
              htmlType="submit"
              className="  form-button-submit btn-primary bold"
              loading={isLoading}
            >
              Log in
            </Button>
          </div>
        </Form>
      </Row>
    </DivLoginWrapper>
  );
};

export default Login;
