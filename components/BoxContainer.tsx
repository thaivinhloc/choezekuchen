import { Col, Row } from "antd";
import React, { FC, ReactNode } from "react";

type TBoxContainer = {
  type: "vertical" | "horizontal";
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
};
const BoxContainer: FC<TBoxContainer> = ({
  type = "vertical",
  children,
  contentLeft,
  contentRight,
}) => {
  /* Render */
  if (type === "vertical") {
    return (
      <Row>
        <Col span={12}>{contentLeft}</Col>
        <Col span={12}>{contentRight}</Col>
      </Row>
    );
  }
  return <Row>{children}</Row>;
};

export default BoxContainer;
