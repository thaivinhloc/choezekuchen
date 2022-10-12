import React from "react";
import { Row, Col, Image } from "antd";

export default function historyOfChoezeKuchenRinpoche2() {
  return (
    <div className="historyOfChoezeKuchenRinpoche2">
      <div className="container">
        <div className="hr bg-transparent mt-0"></div>

        <Row className="historyOfChoezeKuchenRinpoche2-group" align="middle">
          <Col
            className="historyOfChoezeKuchenRinpoche2-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={16}
          >
            <Image
              src="/images/ngondro-teching/ngondroTechingImg1.png"
              alt="main"
              className="ngondroTeching-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 7, offset: 1 }}
            className="historyOfChoezeKuchenRinpoche2-item"
          >
            <h2>
              IF YOU HAVE IMPURE MOTIVATION, ON THE OUTSIDE THE DEED YOU PERFORM
              MAY LOOK GOOD, BUT THE RESULT WILL BE NEGATIVE AS THE DEED IS
              UNVIRTUOUS DUE TO IMPURE MOTIVATION.
            </h2>
          </Col>
        </Row>

        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
