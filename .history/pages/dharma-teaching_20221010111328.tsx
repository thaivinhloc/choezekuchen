import React from "react";
import { Row, Col, Button, Image } from "antd";

export default function dharmaReaching() {
  return (
    <div className="dharmaReaching">
      <div className="container">
        <div className="hr bg-transparent" />
        <Row align="middle">
          <Col
            xs={24}
            sm={24}
            md={24}
            xl={12}
            lg={12}
            className="dharmaReaching-image"
          >
            <Image
              src="/images/guru-Rinpoche/guruRinpoche.png"
              alt="bb"
              className="dharmaReaching-image"
            />
          </Col>
          <Col
            className="dharmaReaching-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <p>
              We have to try to think for others, not just ourselves. If you
              think for others, you will become very relaxed in your mind. If
              you only think for yourself, gradually you will develop stress and
              feel more pressure. So try to think of benefitting others. Even
              though you can’t benefit masses, if there is just only one person
              in front of you who needs help and you have given assistance with
              pure motivation, it would make you happy and your mind relaxed.
            </p>
            <p>
              He became known as Guru Nyima Ozer or Suryaprabha, the Guru who is
              like rays of the sun. On the Anniversary of Guru Nyima Ozer, one
              of Guru Padmasambhava’s manifestations, we are pleased to announce
              the online teaching and prayers of Guru Rinpoche, conducted by
              11th Choeze Kuchen Rinpoche
            </p>
          </Col>
        </Row>
        <div className="hr bg-transparent" />
      </div>
    </div>
  );
}
