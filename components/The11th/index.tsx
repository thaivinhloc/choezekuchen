import React from "react";
import { DivThe11th } from "./index.style";
import { Row, Col } from "antd";
import Link from "next/link";
const The11th: React.FC<{}> = () => {
  return (
    <DivThe11th>
      <div className="the11th">
        <div className="container">
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={8}
              xl={12}
              className="the11th-image"
            >
              <img
                src="/images/aboutrinpoche/aboutrinpoche1.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={8}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                Choeze Kuchen Rinpoche is the founder of Choeze Thupten
                Dhargyeling Monastery located in the eastern part of Tibet in
                Kham under the Yushu, Qinghai Province, China. Choeze Monastery
                in Kham was founded by the 8th incarnation of Choeze Kuchen
                Rinpoche, also known as Choeze Denma Shathri Tulku almost 500
                years ago. He is regarded as the manifestation of Yamantaka (a
                wrathful aspect of Manjushri).
              </p>
              <p>
                The 1st Choeze Kuchen Rinpoche, known as Palchen Nyedphupa, is
                one of the eight Heart Sons (bhulhob) of the founder of Drikung
                Kyagud sect and great enlightened being, Lord Kyopa Jigten
                Sumgon, who lived almost 800 years ago. He was bestowed the
                title “Pal” by Kyopa Jigten Sumgon. According to the records of
                biographies of Choeze Kuchen Rinpoche, it was written that after
                the Parinirvana of Lord Kyopa Jigten Sumgon, Palchen Nyedphupa
                flew from Drikung region of Tibet to Kham Denkhog. He mediated
                at a cave in Denkhog and many followers gathered for teachings.
                It is written that he also established a monastery in Denkhog.
              </p>
              <p>
                Later, one of the reincarnations, Choeze Denma Shathri (it is
                said that Rinpoche rode a stag from Denkhog to Dzachukha along
                Dza river. The stag was killed for his meat and it is said that
                Rinpoche assembled the skin and bones of the stag and brought
                the stag back to life) established the Choeze Thupten Dargyeling
                Monastery, which then served as the main seat for later
                reincarnations of Choeze Kuchen Rinpoche.
              </p>
            </Col>
          </Row>
          <div className="the11th-hr"></div>
          <Row className="the11th-group">
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={8}
              xl={12}
            >
              <p>
                In one of his previous lives, he was born as a bright Brahmin
                named Salwa (Prabha) during the times of Buddha Dipankara. In
                the 7th century, during the time of Dharma King Songtsen Gampo,
                he took rebirth as Thonmi Sambhota who went to India and studied
                under the great scholar Lekchin Kara and introduced Tibetan
                script and Buddhism into Tibet. He has also reincarnated before
                as Nged-Phupa, a great master of Mahamudra during the time of
                Kyobpa Jigten Sumgon.
              </p>
              <p>
                The present incarnation of Choeze Kuchen Rinpoche has achieved
                immense knowledge and wisdom at a very young age. He has
                undergone seven years of study of Buddhist philosophy and
                Drikung Kagyudpa teachings at the Thupten Shedup Jangchupling in
                south India. He has also received many precepts, oral
                transmissions and initiations from H.H. Drikung Kyabgon Chetsang
                Rinpoche and Phowa Teachings from H.E. Ayang Rinpoche.
              </p>
              <p></p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={8}
              xl={{ span: 11, offset: 1 }}
              className="the11th-image"
            >
              <img
                src="/images/aboutrinpoche/aboutrinpoche2.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
          </Row>
        </div>
      </div>
    </DivThe11th>
  );
};

export default The11th;
