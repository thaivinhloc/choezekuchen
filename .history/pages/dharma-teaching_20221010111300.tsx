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
            <h3>
              DRIKUNG KAGYU NGONDRO PRELIMINARY PRACTICES CONDUCTED BY HIS
              EMINENCE 11TH CHOEZE KUCHEN RINPOCHE
            </h3>
            <p>
              On the 10th day of the month of the Pig, Guru Padmasambhava
              transformed the poison concocted by the Tirthikas into nectar with
              his magical powers. His healthy radiance transformed the mind of
              the Tirtikas and converted them and their retinues to the Dharma.
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
