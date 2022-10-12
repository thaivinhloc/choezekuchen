import React from "react";
import { DivThe11th } from "./index.style";
import { Row, Col, Button } from "antd";
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
                At the age of 10, Rinpoche visited Choeze Monastery at Kham
                Dzachukha. All the personal items (like thangkas, mala,text) of
                10th Choeze Rinpoche were in the possessions of senior lamas and
                close disciples of the10threincarnation.
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
              <h2>THE HEVAJRA RETREAT</h2>
              <p>
                He received many teachings from both Drikung Holinesses and one
                of his main Guru was Dzogchen master of his time, Dzogchen
                Khenpo Thubga from Changma Rithro at Dzachukha. In the Kham
                region, he had many followers from different regions and
                monasteries of Tibet practicing different sects of Buddhism. He
                is recognized for his profound teachings covering all sects of
                Buddhism..
              </p>
              <Button className="bth-primary bold btn-global">
                DISCOVER MORE
              </Button>
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
              <h3>THE 11TH CHOEZE KUCHEN RINPOCHE</h3>
              <p>
                Kunchok Thrinley Lhundup Namgyal was born in Kathmandu, Nepal in
                1984 as the eldest son of yogi Lama Jorjel and Yangchen Dolkar
                from Kham, Tibet. At the age of two, the 37th throne holder of
                Drikung Kyagudpa, H.H. Drikung Kyabgon Chestang Rinpoche
                recognized him as the 11th reincarnation of Choeze Kuchen.
              </p>
              <Button className="bth-primary bold btn-global">
                DISCOVER MORE
              </Button>
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
              <h2>THE HEVAJRA RETREAT</h2>
              <p>
                He received many teachings from both Drikung Holinesses and one
                of his main Guru was Dzogchen master of his time, Dzogchen
                Khenpo Thubga from Changma Rithro at Dzachukha. In the Kham
                region, he had many followers from different regions and
                monasteries of Tibet practicing different sects of Buddhism. He
                is recognized for his profound teachings covering all sects of
                Buddhism..
              </p>
              <Button className="bth-primary bold btn-global">
                DISCOVER MORE
              </Button>
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
              <h3>THE 11TH CHOEZE KUCHEN RINPOCHE</h3>
              <p>
                Kunchok Thrinley Lhundup Namgyal was born in Kathmandu, Nepal in
                1984 as the eldest son of yogi Lama Jorjel and Yangchen Dolkar
                from Kham, Tibet. At the age of two, the 37th throne holder of
                Drikung Kyagudpa, H.H. Drikung Kyabgon Chestang Rinpoche
                recognized him as the 11th reincarnation of Choeze Kuchen.
              </p>
              <Button className="bth-primary bold btn-global">
                DISCOVER MORE
              </Button>
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
