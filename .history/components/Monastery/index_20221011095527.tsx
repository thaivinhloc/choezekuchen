import { DivMonastery } from "./index.style";
import { Row, Col, Button, Image } from "antd";

import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

const Monastery: React.FC<{}> = () => {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <DivMonastery>
      <div className="monastery">
        <div className="container">
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="monastery-image"
            >
              <Image
                src="/images/monastery/m1.jpg"
                alt="bb"
                className="monastery-image"
              />
            </Col>
            <Col
              className="monastery-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <h3>
                {t("Choeze Thupten Dhargyeling Monastery", { ns: "content" })}
              </h3>
              <p>
                {t(
                  "Choeze Monastery in Kham was founded by the 8th incarnation of Choeze Kuchen Rinpoche, also known as Choeze Denma Shathri Tulku almost 500 years ago.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "At the age of 21, the 11th Choeze Kuchen Rinpoche founded his first retreat Center, Choeze Thupten Dargyeling in the eastern part of Tibet in Kham under the Yushu, Qinghai Province, China, where more than 200 Lamas completed 3 years, 3 months and 3 days of retreats.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "After the monastery was destroyed by the 2010 earthquake, the 11th Choeze Kuchen Rinpoche undertook the rebuilding of a new monastery in Dzachukha",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "In 2017, Choeze Kuchen Rinpoche completed the construction and put into operation the first clinic in Dzachukha region, Kham Tibet Province, providing medical care for local people as well as for monks and nuns in the region",
                  { ns: "content" }
                )}
              </p>
            </Col>
          </Row>
          <div className="monastery-hr"></div>
          <Row className="monastery-group">
            <Col
              className="monastery-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <h3>
                {t("Bhutan – Project of Meditation Center", { ns: "content" })}
              </h3>
              <p>
                {t(
                  "The project to build Retreat Center in the valley beside the Holy land of Tiger Nest – Paro – Bhutan that aims to provide a sanctuary for the Sangha and lay communities from Bhutan and around the world in their practice of Mahayana Tantra. It’s in the process of being implemented by HE. Choeze Kuchen Rinpoche",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "This project located in Paro – Bhutan, one of the first few places visited by Guru Padmasambhava and many other Masters, it became one of the Holiest haven for practicing Mahayana Tantra Practices that has given birth to many revered Yogis and Yoginis. Bhutan is a country where majority of its citizens is Buddhist",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "It is Rinpoche’s wish for this facility to benefit and support generations of the Sangha and lay communities, to enable them the opportunity to conduct regular Phowa practices, one of the most sophisticated yet important teachings of Guru Padmasambhava, on this sacred land of Bhutan.",
                  { ns: "content" }
                )}
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="monastery-image"
            >
              <Image
                src="/images/monastery/m2.jpg"
                alt="bb"
                className="monastery-image"
              />
            </Col>
          </Row>
          <div className="monastery-hr"></div>

          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              xl={12}
              lg={12}
              className="monastery-image"
            >
              <Image
                src="/images/monastery/m3.jpg"
                alt="bb"
                className="monastery-image"
              />
            </Col>
            <Col
              className="monastery-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <h3>
                {t("Namkha Thing-Sang Retreat Center", { ns: "content" })}
              </h3>
              <p>
                {t(
                  "Namkha Thing-sang Retreat Centre is located near the holy cave of Guru Padmasambhava at Pharphing.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "It was established with an aim of practicing various Vajrayana teachings especially; the Mahamudra and Dzogchen teachings from their foundations. Many great Gurus including His Holiness Drikung Chetshang Rinpoche, Kyabje Penor Rinpoche and Kyabje Jadral Rinpoche have consecrated and blessed this retreat.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "His Eminence Choeze Kuchen Rinpoche himself has done many important Retreats and Pujas in this Centre.",
                  { ns: "content" }
                )}
              </p>
            </Col>
          </Row>
          <div className="monastery-hr"></div>
          <Row className="monastery-group">
            <Col
              className="monastery-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <h3>{t("Singapore Center", { ns: "content" })}</h3>
              <p>
                {t(
                  "His Eminence 11th Choeze Kuchen Rinpoche establish his first center named Dharma Treasure Center in Singapore in June 2019. The center’s vision is to benefit to all sentient beings in all ways via dharma and to guide all to foster a harmonious environment.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "The mission of Dharma Treasure Center is: <br /> • To teach its members Buddhism and strict observance of its practices; <br /> • To train and encourage its members to promote Buddhism; <br /> humanitarian services; <br /> • To afford its members healthy and decent recreations; and <br />• To work in conjunction with other Buddhist organizations to foster peace, harmony and happiness for all beings.",
                  { ns: "content" }
                )}
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="monastery-image"
            >
              <Image
                src="/images/monastery/m4.jpg"
                alt="bb"
                className="monastery-image"
              />
            </Col>
          </Row>
        </div>
      </div>
    </DivMonastery>
  );
};

export default Monastery;
