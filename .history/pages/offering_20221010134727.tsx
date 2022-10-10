import React from "react";
import { Row, Col, Image } from "antd";

export default function offering() {
  return (
    <div className="container">
      <div className="hr bg-transparent"></div>
      <Row className="chodChangbu-group" align="middle">
        <Col
          className="chodChangbu-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
        >
          <div>
            <p>
              If you’d like to make an offering to Choeze Kuchen Rinpoche and
              Sangha, please contact us as below:
              <br />
              <span style={{ fontSize: "80px" }}>.</span> 11th Choeze Kuchen
              Center (Singapore) <br />
              Contact person: Ms. Mildred Yong <br />
              Mobile: +6598358289
              <br />
              Email: dharmatreasure.sg@outlook.com
              <br /> wechat id: Mildred_Yong <br />
              . 11th Choeze Kuchen Drikung Wosal Ling Center (Viet Nam)
              <br /> Contact person: Ms. Hoa Chokyi p Email:
              drikungwosalling@gmail.com
            </p>
          </div>
        </Col>
      </Row>
      <div className="hr bg-transparent"></div>
    </div>
  );
}
