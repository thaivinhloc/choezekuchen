import { Col, Row } from "antd";
// import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { DivProfileWrapper } from "./index.style";

const Profile = () => {
  const { user } = useAuth();

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
        <div className="profile ant-col ant-col-lg-8 ant-col-md-14 ant-col-sm-20 ant-col-24">
          <RenderItem title="Full name:" content={user?.username || ""} />
          {user?.city && (
            <RenderItem title="City:" content={user?.city || ""} />
          )}
          {user?.country && (
            <RenderItem title="Country:" content={user?.country || ""} />
          )}
          <RenderItem title="Email:" content={user?.email || ""} />
          <RenderItem
            title="Last Update:"
            content={user ? new Date(user.updatedAt).toLocaleString() : ""}
          />
        </div>
      </div>
    </DivProfileWrapper>
  );
};

export default Profile;
