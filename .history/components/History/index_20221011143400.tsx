/* eslint-disable @next/next/no-img-element */
import { DivHistory } from "./index.style";
import { Row, Col, Button } from "antd";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const History: React.FC<{}> = () => {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <DivHistory>
      <div className="history">
        <div className="container">
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="history-image"
            >
              <img
                src="/images/aboutrinpoche/aboutrinpoche1.jpg"
                alt="aaa"
                className="history-image"
              />
            </Col>
            <Col
              className="history-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                {t(
                  "Choeze Kuchen Rinpoche is one of the prominent Lamas of Choeze Thupten Dhargyeling Monastery located in the eastern part of Tibet in Kham under the Yushu, Qinghai Province, China. Choeze Monastery in Kham was founded by the 8th incarnation of Choeze Kuchen Rinpoche, also known as Choeze Denma Shathri Tulku almost 500 years ago. He is regarded as the manifestation of Yamantaka (a wrathful aspect of Manjushri).",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "The 1st Choeze Kuchen Rinpoche, known as Palchen Nyedphupa, is one of the eight Heart Sons (bhulhob) of the founder of Drikung Kyagud sect and great enlightened being, Lord Kyopa Jigten Sumgon, who lived almost 800 years ago. He was bestowed the title “Pal” by Kyopa Jigten Sumgon. According to the records of biographies of Choeze Kuchen Rinpoche, it was written that after the Parinirvana of Lord Kyopa Jigten Sumgon, Palchen Nyedphupa flew from Drikung region of Tibet to Kham Denkhog. He mediated at a cave in Denkhog and many followers gathered for teachings. It is written that he also established a monastery in Denkhog.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "Later, one of the reincarnations, Choeze Denma Shathri (it is said that Rinpoche rode a stag from Denkhog to Dzachukha along Dza river. The stag was killed for his meat and it is said that Rinpoche assembled the skin and bones of the stag and brought the stag back to life) established the Choeze Thupten Dargyeling Monastery, which then served as the main seat for later reincarnations of Choeze Kuchen Rinpoche.",
                  { ns: "content" }
                )}
              </p>
            </Col>
          </Row>
          <div className="history-hr"></div>
          <Row className="history-group">
            <Col
              className="history-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <p>
                {t(
                  "In one of his previous lives, he was born as a bright Brahmin named Salwa (Prabha) during the times of Buddha Dipankara.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "In the 7th century, during the time of Dharma King Songtsen Gampo, he took rebirth as Thonmi Sambhota who went to India and studied under the great scholar Lekchin Kara and introduced Tibetan script and Buddhism into Tibet.",
                  { ns: "content" }
                )}
              </p>
              <p>
                {t(
                  "He has also reincarnated before as Nged-Phupa, a great master of Mahamudra during the time of Kyobpa Jigten Sumgon.",
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
              className="history-image"
            >
              <img
                src="/images/history/history1.jpg"
                alt="aaa"
                className="history-image"
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="history-image"
            >
              <img
                src="/images/history/history2.jpg"
                alt="aaa"
                className="history-image"
              />
            </Col>
            <Col
              className="history-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p style={{ fontWeight: "bold" }}>
                {t("", { ns: "content" })}Previous Reincarnation – The 10th
                Choeze Kuchen Rinpoche
              </p>
              <p>
                {t("", { ns: "content" })}
                Jigme Choewang Lodro was born in Kham Dzachukha to father Jampa
                Zangpo and mother Dolo from Kham. He was recognized as the 10th
                reincarnation of Choeze Kuchen Rinpoche by the previous H.H.
                Drikung Kyabgon Chetsang Zhiwi Lodro Rinpoche.
              </p>
              <p>
                {t("", { ns: "content" })}
                He received many teachings from both Drikung Holinesses and one
                of his main Guru was Dzogchen master of his time, Dzogchen
                Khenpo Thubga from Changma Rithro at Dzachukha.
              </p>
              <p>
                {t("", { ns: "content" })}
                In the Kham region, he had many followers from different regions
                and monasteries of Tibet practicing different sects of Buddhism.
                He is recognized for his profound teachings covering all sects
                of Buddhism.
              </p>
            </Col>
          </Row>
          <div className="history-hr"></div>
          <Row className="history-group">
            <Col
              className="history-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <p>
                {t("", { ns: "content" })}
                These are golden statues of Yamantaka (central statue) and other
                deities belonging to the 10th incarnation of Choeze Kuchen
                Rinpoche.
              </p>
              <p>
                {t("", { ns: "content" })}
                Yamantaka is an emanation of Lord Manjushri, the Bodhisattva of
                Wisdom.{" "}
              </p>
              <p></p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="history-image"
            >
              <img
                src="/images/history/history3.jpg"
                alt="aaa"
                className="history-image"
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* ================= MOTIVATION ================  */}
    </DivHistory>
  );
};

export default History;
