import { Col, Row } from "antd";
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

  const RenderItem = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    return (
      <Row>
        <Col xs={10} sm={10} md={10} lg={10} className="label">
          {title}
        </Col>
        <Col xs={14} sm={14} md={14} lg={14} className="value">
          {content}
        </Col>
      </Row>
    );
  };

  return (
    <DivProfileWrapper>
      <div className="container-inner">
        <div className="profile">
          <RenderItem title="Full name" content={user?.username || ""} />
          {user?.city && <RenderItem title="City" content={user?.city || ""} />}
          {user?.country && (
            <RenderItem title="Country" content={user?.country || ""} />
          )}
          <RenderItem title="Email" content={user?.email || ""} />
          <RenderItem
            title="Last Update"
            content={user ? new Date(user.updatedAt).toLocaleString() : ""}
          />
        </div>
      </div>
    </DivProfileWrapper>
  );
};

export default Profile;
