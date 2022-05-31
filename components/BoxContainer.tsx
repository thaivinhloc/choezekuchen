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
      <Row className="box-container">
        <Col xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12} className="col-left">{contentLeft} </Col>
        <Col xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}>{contentRight}</Col>
      </Row>
    );
  }
  return <Row>{children}</Row>;
};

export default BoxContainer;
