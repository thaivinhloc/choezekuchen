import React from "react";
import { DivThe11th } from "./index.style";
import { Row, Col, Button, Image } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const The11th: React.FC<{}> = () => {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <DivThe11th>
      <div className="the11th">
        <div className="container">
          <Row className="the11th-group" align="middle">
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <p>
                Kunchok Thrinley Lhundup Namgyal was born in Kathmandu, Nepal in
                1984 as the eldest son of yogi Lama Jorjel and Yangchen Dolkar.
                Lama Jorjel was the direct descendant (eldest son of 6th
                generation) of Terton Geru Chogyal Dorje; one of the 108
                treasure revealers prophesized by Guru Padmasambhava himself.
              </p>
              <p>
                By birth, Kunchok Thrinley is the eldest son of eldest sons of
                each generation of Terton Geru Chogyal Dorji.
              </p>
              <p>
                Yangchen Dolkar is the descendant of Atitsang family who was one
                of the ministers in King Gesar’s court. In the history of Ati
                family, many high enlighten masters and leaders were born.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="the11th-image"
            >
              <Image
                src="/images/the11th/the11th1.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
          </Row>

          <div className="the11th-hr"></div>
          <Row align="middle">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="the11th-image"
            >
              <Image
                src="/images/the11th/the11th2.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                At the age of two, the 37th throne holder of Drikung Kyagudpa,
                H.H. Drikung Kyabgon Chestang Rinpoche recognized him as the
                11th reincarnation of Choeze Kuchen.
              </p>
              <p>
                The present incarnation of Choeze Kuchen Rinpoche began his
                studies on Buddhist philosophy from a young age of five. He
                underwent studies in monasteries in South India, North India and
                Kham, Tibet. Throughout the process, he was personally guided by
                H.H. Drikung Kyabgon Chetsang Rinpoche and his father yogi Lama
                Jorjel.
              </p>
            </Col>
          </Row>
          <Row className="the11th-group" align="middle">
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <p>
                At the age of 10, Rinpoche visited Choeze Monastery at Kham
                Dzachukha. All the personal items (like thangkas, mala,text) of
                10th Choeze Rinpoche were in the possessions of senior lamas and
                close disciples of the10threincarnation.
              </p>
              <p>
                Each and every item was identified by the 11th reincarnation and
                the days of Rinpoche’s visit had numerous auspicious signs. All
                the lamas, disciples and people were overjoyed to be reunited
                with their master once again.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="the11th-image"
            >
              <Image src="/images/the11th/the11th3.jpg" alt="" />
            </Col>
          </Row>

          <div className="the11th-hr"></div>
          <Row align="middle">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="the11th-image"
            >
              <Image
                src="/images/the11th/the11th4.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                At the very young age of 20, Rinpoche established a retreat
                center in the sacred mountains of Pharping [Nepal] called Achi
                Namkha Thinksang center, which has been attended by great
                masters such as HH. Drikung Kabgyon Chetsang Rinpoche, Garchen
                Rinpoche, Kyabje Chatral Rinpoche… came to visit, bless, and go
                into retreat.
              </p>
              <p>
                Besides, at the age of 21, Rinpoche founded his first retreat
                center, Choeze Thupten Dargyeling, located in the Kham region of
                Tibet, where more than 200 lamas completed 3 years, 3 months and
                3 days of retreats. After the monastery was destroyed by the
                2010 earthquake, His Holiness undertook the rebuilding of a new
                monastery in Dzachukha.
              </p>
              <p>
                In 2017, His Holiness completed the construction and put into
                operation the first clinic in Dzachukha region, Kham Tibet
                Province, providing medical care for local people as well as for
                monks and nuns in the region.
              </p>
            </Col>
          </Row>
          <Row className="the11th-group" align="middle">
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <h3>THE HEVAJRA RETREAT</h3>
              <p>
                He has also received many precepts, oral transmissions,
                initiations of entire Kyagudpa teachings from H.H. Drikung
                Chetsang Rinpoche and entire teaching of Nyingmapa order from
                H.H. Penor Rinpoche. Rinpoche also received lamrim teachings of
                Je Tsongkhapa from H.H. Dalai Lama.
              </p>
              <p>
                Besides, Rinpoche has stayed in personal retreat and meditation
                under the guidance of H.H. Drikung Chetsang Rinpoche especially
                on the Hevajra tantra. Rinpoche emphasizes that retreat is not a
                time bound project but one should experience the essence of
                retreat throughout ones’ life.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="the11th-image"
            >
              <img
                src="/images/the11th/the11th1.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
          </Row>

          <div className="the11th-hr"></div>
          <Row align="middle">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="the11th-image"
            >
              <img
                src="/images/the11th/the11th2.jpg"
                alt="aaa"
                className="the11th-image"
              />
            </Col>
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
            >
              <p>
                The 10th Choeze Kuchen Rinpoche recognized his consort, special
                Dakini, Khandro Thinley Wangmo when travelling to Drikung
                Terdrum region. He showed Khandro Thinley Wangmo and his
                attendant, Lama Ugyenkyap of his passing and signs that they
                will meet again in his next reincarnation.
              </p>
              <p>
                This life, The 11th Choeze Kuchen Rinpoche fulfilled his
                prophecy and met Khandro la and Lama several times before
                Khandrola and Lama passed away.
              </p>
            </Col>
          </Row>
          <div className="the11th-hr"></div>

          <Row className="the11th-group" align="middle">
            <Col
              className="the11th-wrapper"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <p>
                Currently, he is the Spiritual Master of Drikung Dharma Treasure
                Center in Bhutan, Singapore, Wosal Ling Dharma Center Vietnam,
                Drikung Center in Bhutan.
              </p>
              <p>
                He was also appointed by HH. Drikung Kabgyon Chetsang Rinpoche
                to be the Spiritual Leader of the Mar- Ngok Lineage Study Group
                and the Hevajra & Nairatmya Tantric Treasure Restoration
                Project.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 11, offset: 1 }}
              xl={{ span: 11, offset: 1 }}
              className="the11th-image"
            >
              <img
                src="/images/the11th/the11th1.jpg"
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
