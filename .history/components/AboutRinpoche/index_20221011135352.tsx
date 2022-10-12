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
                <button className="aboutButton">LEARN MORE</button>
              </Col>
              <Col xs={12} sm={12} md={12} xl={6} lg={6}>
                <Image src="/images/about/about2.jpg" alt="about" />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
              >
                <h3 className="font-weight-bold">
                  PREVIOUS REINCARNATION – THE 10TH CHOEZE KUCHEN RINPOCHE
                </h3>
                <p>
                  Jigme Choewang Lodro was born in Kham Dzachukha to father
                  Jampa Zangpo and mother Dolo from Kham.
                </p>
                <button className="aboutButton">LEARN MORE</button>
              </Col>
            </Row>
            <Row align="middle">
              <Col xs={12} sm={12} md={12} xl={6} lg={6}>
                <Image src="/images/about/about3.jpg" alt="about" />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
              >
                <h3 className="font-weight-bold">
                  BIOGRAPHY– THE 11TH CHOEZE KUCHEN RINPOCHE
                </h3>
                <p>
                  Kunchok Thrinley Lhundup Namgyal was born in Kathmandu, Nepal
                  in 1984 as the eldest son of yogi Lama Jorjel and Yangchen
                  Dolkar from Kham, Tibet.
                </p>
                <button className="aboutButton">LEARN MORE</button>
              </Col>
              <Col xs={12} sm={12} md={12} xl={6} lg={6}>
                <Image src="/images/about/about4.jpg" alt="about" />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
              >
                <h3 className="font-weight-bold">YOUNGER DAYS</h3>
                <p>
                  Rinpoche first met with His Holiness Chetsang Rinpoche just 3
                  days after he was born and was recognized as a Tulku when he
                  was only 1 year old.
                </p>
                <button className="aboutButton">LEARN MORE</button>
              </Col>
            </Row>
            <Row align="middle">
              <Col xs={12} sm={12} md={12} xl={6} lg={6}>
                <Image src="/images/about/about5.jpg" alt="about" />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
              >
                <h3 className="font-weight-bold">REBORN AS THONMI SAMBHOTA</h3>
                <p>
                  In one of Choeze Kuchen Rinpoche's previous lives, he was born
                  as a bright Brahmin named Salwa (Prabha) during the times of
                  Buddha Dipankara.
                </p>
                <button className="aboutButton">LEARN MORE</button>
              </Col>
              <Col xs={12} sm={12} md={12} xl={6} lg={6}>
                <Image src="/images/about/about6.jpg" alt="about" />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
              >
                <h3 className="font-weight-bold">
                  PREVIOUS REINCARNATION – THE 10TH CHOEZE KUCHEN RINPOCHE
                </h3>
                <p>
                  Jigme Choewang Lodro was born in Kham Dzachukha to father
                  Jampa Zangpo and mother Dolo from Kham.
                </p>
                <button className="aboutButton">LEARN MORE</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </DivAboutRinppche>
  );
};

export default AboutRinpoche;
