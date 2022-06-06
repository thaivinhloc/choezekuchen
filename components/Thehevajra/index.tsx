import { DivThehevajra } from "./index.style";
import { Row, Col, Button, Image } from "antd";

import React, { useEffect, useState } from "react";

const Thehevajra: React.FC<{}> = () => {
  return (
    <DivThehevajra>
      <div className="thehevajra">
        <div className="container">
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={122}
              className="thehevajra-image"
            >
              <img
                src="/images/thehevajra/thehevajra.jpg"
                alt="aaa"
                className="thehevajra-image"
              />
            </Col>
            <Col
              className="thehevajra-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                The personal deity of Marpa was Hevajra and Marpa transmitted
                this teaching to one of his best students, Lama Ngokpa. The
                lineage of this teaching has nearly disappeared by now as there
                are much more followers of the lineage of Milarepa, who teaches
                the Cakrasamvara practice but there are hardly any who follows
                Lama Ngokpa’s lineage. His Holiness was giving teachings on the
                deity Hevajra and specially assigned Ven. Choeze Kuchen Rinpoche
                out of all the assembled students to go through the 5 months
                Hevajra Retreat. This is the first time in this generation that
                anyone has gone through a Hevajra retreat.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </DivThehevajra>
  );
};

export default Thehevajra;
