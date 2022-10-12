import React from "react";
import { Row, Col, Image } from "antd";

export default function events() {
  return (
    <div className="events">
      <div className="container">
        <div className="hr bg-transparent mt-0"></div>

        <Row className="events-group" align="middle">
          <Col
            className="events-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src="/images/events/event1.jpg"
              alt="main"
              className="events-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className="events-item"
          >
            <p>
              On the 10th day of the month of the Pig, Guru Padmasambhava
              transformed the poison concocted by the Tirthikas into nectar with
              his magical powers. His healthy radiance transformed the mind of
              the Tirtikas and converted them and their retinues to the Dharma.
              He became known as Guru Nyima Ozer or Suryaprabha, the Guru who is
              like rays of the sun. On the Anniversary of Guru Nyima Ozer, one
              of Guru Padmasambhava’s manifestations, we are pleased to announce
              the online teaching and prayers of Guru Rinpoche, conducted by
              11th Choeze Kuchen Rinpoche.
            </p>
          </Col>
        </Row>
        <div className="hr"></div>
        <Row className="events-group" align="middle">
          <Col
            className="events-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src="/images/events/event2.jpg"
              alt="main"
              className="events-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className="events-item"
          >
            <p>
              Achi Chokyi Drolma<br></br> The main Dharma Protector of Drikung
              Kagyu Mother Achi was the great grandmother of Lord Jigton Sumgon,
              founder of the Drikung Lineage. To this day she remains a great
              dharma protector of the Buddha’s teachings. As a protector, Achi
              is visualized on her blue wisdom horse to symbolize the swiftness
              of her enlightened activities, and she holds a wish-fulfilling
              jewel to symbolize her ability to bestow everything needed and
              desired when asked. Benefits of practicing Achi Chokyi Drolma are
              the removal of inner and outer obstacles to our practices and to
              lay the groundworks for circumstances best suited to our progress
              along the path. Those who practice her meditation and recite her
              mantra will be protected from obstacles and hindrances.
            </p>
          </Col>
        </Row>

        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "content",
      ])),
    },
  };
}
