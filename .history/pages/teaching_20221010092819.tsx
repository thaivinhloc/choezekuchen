import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";
import { HOME, SIGNUP, TEACHING } from "common/navigator";
import { Row, Col, Button, Image } from "antd";

export default function SingUp({ allLangsData }: any) {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === TEACHING) {
      router.push(HOME + i18next.language.substring(0, 2) + TEACHING);
    }
  }, []);

  return (
    <div className="teaching">
      <div className="container">
        <Row className="teaching-group">
          <Col
            className="teaching-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <h3>PURE MOTIVATION AND GREAT CONVICTION</h3>
            <p>
              Pure motivation and great conviction are very important regardless
              of whether the activity performed is great or negligible. Pure
              motivation is what results in great merit.
            </p>
            <p>
              Impure motivation is having jealousy, greed, desire of benefitting
              oneself or one’s family and other negative and selfish thoughts
              before performing the deed. Pure motivation is doing the virtuous
              deed without any prior negative and selfish thoughts.
            </p>
            <Button>DISCOVERI MORE</Button>
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
              src="/images/teaching/teachingImg1.png"
              alt="bb"
              className="monastery-image"
            />
          </Col>
        </Row>
        <div className="teaching-hr hr"></div>

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
              src="/images/teaching/teachingImg1.png"
              alt="bb"
              className="teaching-image"
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
            <h3>Namkha Thing-Sang Retreat Center</h3>
            <p>
              Namkha Thing-sang Retreat Centre is located near the holy cave of
              Guru Padmasambhava at Pharphing.
            </p>
            <p>
              It was established with an aim of practicing various Vajrayana
              teachings especially; the Mahamudra and Dzogchen teachings from
              their foundations. Many great Gurus including His Holiness Drikung
              Chetshang Rinpoche, Kyabje Penor Rinpoche and Kyabje Jadral
              Rinpoche have consecrated and blessed this retreat.
            </p>
            <p>
              His Eminence Choeze Kuchen Rinpoche himself has done many
              important Retreats and Pujas in this Centre.
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
            <h3>Singapore Center</h3>
            <p>
              His Eminence 11th Choeze Kuchen Rinpoche establish his first
              center named Dharma Treasure Center in Singapore in June 2019. The
              center’s vision is to benefit to all sentient beings in all ways
              via dharma and to guide all to foster a harmonious environment.
            </p>
            <p>
              The mission of Dharma Treasure Center is:
              <br />
              • To teach its members Buddhism and strict observance of its
              practices;
              <br />
              • To train and encourage its members to promote Buddhism;
              <br />
              • To train and encourage its members in acts of charity and
              general helpfulness to all fellow-beings in the fields of social,
              educational, cultural and other humanitarian services;
              <br />
              • To afford its members healthy and decent recreations; and
              <br />• To work in conjunction with other Buddhist organizations
              to foster peace, harmony and happiness for all beings.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
