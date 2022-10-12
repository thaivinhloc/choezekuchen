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
            <h2>
              {t("CHOEZE KUCHEN RINPOCHE’S BIOGRAPHY", { ns: "content" })}
            </h2>
            <p className="mb-0 font-weight-bold">
              {t(
                "Choeze Kuchen Rinpoche is one of the prominent Lamas of Choeze Thupten Dhargyeling Monastery located in the eastern part of Tibet in Kham under the Yushu, Qinghai Province, China",
                { ns: "content" }
              )}
              .
            </p>
            <p className="mb-0 font-weight-bold">
              {t(
                "He is regarded as the manifestation of Yamantaka (a wrathful aspect of Manjushri)",
                { ns: "content" }
              )}
              .
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
                  {t("HISTORY OF CHOEZE KUCHEN RINPOCHE", { ns: "content" })}
                </h3>
                <p>
                  {t(
                    "Choeze Kuchen Rinpoche is the founder of Choeze Thupten Dhargyeling Monastery located in the eastern part of Tibet in Kham under the Yushu, Qinghai Province, China.",
                    { ns: "content" }
                  )}
                  .
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
                  {t(
                    "PREVIOUS REINCARNATION – THE 10TH CHOEZE KUCHEN RINPOCHE",
                    { ns: "content" }
                  )}
                </h3>
                <p>
                  {t(
                    "Jigme Choewang Lodro was born in Kham Dzachukha to father Jampa Zangpo and mother Dolo from Kham",
                    { ns: "content" }
                  )}
                  .
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
                  {t("BIOGRAPHY– THE 11TH CHOEZE KUCHEN RINPOCHE", {
                    ns: "content",
                  })}
                </h3>
                <p>
                  {t(
                    "Kunchok Thrinley Lhundup Namgyal was born in Kathmandu, Nepal in 1984 as the eldest son of yogi Lama Jorjel and Yangchen Dolkar from Kham, Tibet",
                    { ns: "content" }
                  )}
                  .
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
                <h3 className="font-weight-bold">
                  {t("YOUNGER DAYS", { ns: "content" })}
                </h3>
                <p>
                  {t(
                    "Rinpoche first met with His Holiness Chetsang Rinpoche just 3 days after he was born and was recognized as a Tulku when he was only 1 year old",
                    { ns: "content" }
                  )}
                  .
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
                <h3 className="font-weight-bold">
                  {t("REBORN AS THONMI SAMBHOTA", { ns: "content" })}
                </h3>
                <p>
                  {t(
                    "In one of Choeze Kuchen Rinpoche's previous lives, he was born as a bright Brahmin named Salwa (Prabha) during the times of Buddha Dipankara",
                    { ns: "content" }
                  )}
                  .
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
                  {t("", { ns: "content" })}
                  BELONGINGS FROM THE PAST LIVES
                </h3>
                <p>
                  {t("", { ns: "content" })}
                  The golden statues of Yamantaka (central statue) and other
                  deities belonging to the 10th incarnation of Choeze Kuchen
                  Rinpoche.
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
