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
        <div className="hr" style={{ backgroundColor: "transparent" }}></div>
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
            <button className="button">DISCOVERI MORE</button>
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
              className="teaching-image"
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
            className="teaching-image"
          >
            <Image
              src="/images/teaching/teachingImg2.png"
              alt="bb"
              className="teaching-image"
            />
          </Col>
          <Col
            className="teaching-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <h3>THE PERFECT WAY TO PRACTICE</h3>
            <p>
              All types of Buddhist practice are included within the Vajrayana
              way of practice, the creation and completion stages. The
              generation stage practice is to do visualization. We visualize our
              body as a form of wisdom body or that of a deity. We also
              visualize Samantabhadra’s form of offerings to Buddhas and
              Bodhisattvas of the 10 directions. If visualization is done with
              concentration, it brings the same benefit as doing Shamatha
              (stabilization/ concentration) meditation.
            </p>
            <p>
              It is very important to visualize one-pointedly in the generation
              stage
            </p>
            <button className="button">DISCOVERI MORE</button>
          </Col>
        </Row>
        <div className="hr"></div>
        <Row className="teaching-group">
          <Col
            className="teaching-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <h3>THE PERFECT DEDICATION</h3>
            <p>
              After practising, we accumulate merit and we should dedicate this
              merit. This teaching explains how to do perfect dedication.
              Without dedication, even if you have accumulated merits for
              thousands of aeons, all of the merits may be destroyed by a single
              negative thought. Merit is like a drop of water.
            </p>
            <p>
              If you put it on a dry ground, it will evaporate in a short period
              of time. If you do dedication, it will be like putting the drop of
              water in an ocean, the drop of water will last as long as the
              ocean is still around.
            </p>
            <button className="button">DISCOVERI MORE</button>
          </Col>
        </Row>
        <div className="hr" style={{ backgroundColor: "transparent" }}></div>
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
