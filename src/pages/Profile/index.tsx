import { Avatar, Row, Col, Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { DivProfileWrapper } from "./index.style";

const layout = {
  labelCol: {
    sm: { span: 24 },
  },
  wrapperCol: {
    sm: { span: 24 },
  },
};

const Profile = () => {
  const { user } = useAuth();
  const [form] = useForm();
  useEffect(() => {
    let time = user ? new Date(user.updatedAt) : new Date();

    console.log("date" + time.toLocaleString());
  }, []);
  return (
    <DivProfileWrapper>
      <div className="container-inner">
        <div className="profile">
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} className="label">
              Full name
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} className="value">
              {user?.username}
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} className="label">
              City
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} className="value">
              {/* {user?.city} */} city...
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} className="label">
              Country
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} className="value">
              {/* {user?.country} */} country...
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} className="label">
              Email
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} className="value">
              {user?.email}
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} className="label">
              Last Update
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} className="value">
              {user ? new Date(user.updatedAt).toLocaleString() : null}
            </Col>
          </Row>
        </div>
      </div>
    </DivProfileWrapper>
  );
};

export default Profile;
