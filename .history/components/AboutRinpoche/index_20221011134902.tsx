import React from "react";
import { useTranslation } from "react-i18next";
import { DivAboutRinppche } from "./index.style";
import { Row, Col, Button, Image } from "antd";

const AboutRinpoche = () => {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <DivAboutRinppche>
      <div className="about">
        <div className="container">
          <div
            className="about-title d-flex justify-center"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <h2>CHOEZE KUCHEN RINPOCHE’S BIOGRAPHY</h2>
            <p className="mb-0 font-weight-bold">
              Choeze Kuchen Rinpoche is the Head of Choeze Thupten
            </p>
            <p className="mb-0 font-weight-bold">
              Dhargyeling Monastery in Kham Tibet, Yushu, Qing Hai.
            </p>
            <p className="mb-0 font-weight-bold">
              He is regarded as the manifestation of Yamantaka (a wrathful
              aspect of Manjushri).
            </p>
          </div>
          <div className="mt-5 mb-5">
            <Row align="middle">
              <Col xs={12} sm={12} md={12} xl={6} lg={6}>
                <Image src="/images/about/about1.jpg" alt="about" />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
              >
                <h3 className="font-weight-bold">
                  HISTORY OF CHOEZE KUCHEN RINPOCHE
                </h3>
                <p>
                  Choeze Kuchen Rinpoche is the founder of Choeze Thupten
                  Dhargyeling Monastery located in the eastern part of Tibet in
                  Kham under the Yushu, Qinghai Province, China.
                </p>
                <button>LEARN MORE</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </DivAboutRinppche>
  );
};

export default AboutRinpoche;
