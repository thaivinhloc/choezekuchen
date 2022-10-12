/* eslint-disable @next/next/no-img-element */
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Row, Space } from "antd";

import React, { FC, MutableRefObject, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { DivHomeWrapper } from "./index.styles";

const { Meta } = Card;
const ABOUT = [
  {
    imgURL: "/images/homepage/wwaa-1.jpg",
    title: "WHAT WE DO",
    subText:
      "Being a non-profit organization, we offer Tibetan buddhist teachings and practices for monks and devotees.",
  },
  {
    imgURL: "/images/homepage/wwaa-2.jpg",
    title: "OUR TEACHING",
    subText:
      "Our teachings are based off the practices of Drikung Kagyu- The Five-fold Profound Path of Mahamudrā and The Six Dharmas of Nāropa.",
  },
  {
    imgURL: "/images/homepage/wwaa-3.jpg",
    title: "OUR PRESENCE",
    subText:
      "We are actively setting up new buddhist centres across Asia region with the aim of delivering quality Buddhism teachings.",
  },
  {
    imgURL: "/images/homepage/wwaa-4.jpg",
    title: "OUR INITIATIVES",
    subText:
      "We are finding new ways to deliver more Buddhist teachings through next-generation technologies.",
  },
];

const COUNT = [
  {
    number: "4",
    title: "BUDDHIST CENTRES",
  },
  {
    number: "250",
    title: "NUMBER OF LAMAS",
  },
  {
    number: "801",
    title: "YEARS OF TEACHING",
  },
  {
    number: "16020",
    title: "NUMBER OF GRADUATED SCHOLARS",
  },
];

const MEETUS = [
  {
    imgURL: "/images/homepage/muip-1.jpg",
    title: "WHAT WE DO",
    subText:
      "Our local tour would encompass some of the key highlights of the Tibetan Dharma practice, delivered face-to-face in your nearest Tibetan buddhist centres.",
  },
  {
    imgURL: "/images/homepage/muip-2.jpg",
    title: "OUR PRACTICE",
    subText:
      "We conduct prayers, puja, meditation and advisory in both public and private setting.",
  },
  {
    imgURL: "/images/homepage/muip-3.jpg",
    title: "OUR MISSION",
    subText:
      "We strive to share more Tibetan Buddhist practices through sharing of insights and experience.",
  },
];

const LEADERSSAY = [
  {
    quote:
      "Our local tour would encompass some of the key highlights of the Tibetan Dharma practice, delivered face-to-face in your nearest Tibetan buddhist centres.",
    subText: "Peter Smith",
    contact: "www.yourwebsite.zt",
  },
  {
    quote:
      "We conduct prayers, puja, meditation and advisory in both public and private setting.",
    subText: "Alan Snow",
    contact: "www.yourwebsite.zt",
  },
  {
    quote:
      "We strive to share more Tibetan Buddhist practices through sharing of insights and experience.",
    subText: "Rick Hammer",
    contact: "www.yourwebsite.zt",
  },
];

const CENTRES = [
  {
    name: "Nepal Buddhist Centre",
    contact: "Choeze Namkhathingsang Retreat Centre Pharping Kathmandu Nepal.",
    tel: "+977 981-3085111",
  },
  {
    name: "China Buddhist Centre",
    contact: "Choeze Thupten Dhargyaling Monastery Qing Hai Yushu, China.",
    tel: "+ 8618097353988",
  },
  {
    name: "Bhutan Buddhist Centre",
    contact: "Choeze Dharma Treasure Centre Thimpu babesa Bhutan",
    tel: "+ 8618097353988",
  },
  {
    name: "Singapore Buddhist Centre",
    contact:
      "Choeze Dharma Treasure SingaporeBlk 26C Jalan Membina #10 - 178 Singapore 166026.",
    tel: " + 6581333949",
  },
];

const Home: FC<{}> = () => {
  const { t, i18n } = useTranslation(["content"]);

  const HomeCarousel = () => {
    const slider: any = useRef(null);

    return (
      <>
        <Carousel
          ref={slider}
          autoplay
          effect="fade"
          dots={false}
          className="carousel"
        >
          {LEADERSSAY.map((item) => (
            <div key={item.contact}>
              <div className="carousel-item">
                <p className="quote">{item.quote}</p>
                <p className="sub-text">
                  {item.subText} -{" "}
                  <span className="contact">{item.contact}</span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
        <Space size="small">
          <Button
            className="btn-primary bold btn-arrow"
            onClick={() => slider.current.prev()}
          >
            <LeftOutlined />
          </Button>
          <Button
            className="btn-primary bold btn-arrow"
            onClick={() => slider.current.next()}
          >
            <RightOutlined />
          </Button>
        </Space>
      </>
    );
  };

  return (
    <DivHomeWrapper>
      <div className="section-large section-card">
        <div className="container ">
          <Row>
            <Col span={24} className="section-title">
              <h2>{t("WHAT WE ARE ABOUT", { ns: "content" })}</h2>
              <p>
                {t(
                  "Choeze Kuchen has been dedicating his life in disseminating Dharma across the world.",
                  { ns: "content" }
                )}
              </p>
            </Col>
            <Col span={24}>
              <Row className="section-group">
                {ABOUT.map((item) => (
                  <Col
                    key={item.title}
                    className="section-item"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                  >
                    <Card
                      // style={{ width:  }}
                      bordered={false}
                      cover={<img src={item.imgURL} alt="home" />}
                    >
                      <Meta
                        title={item.title}
                        description={<p>{item.subText}</p>}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className="section-count">
        <div className="container ">
          <Row>
            {COUNT.map((item) => (
              <Col
                key={item.title}
                className="section-item"
                xs={24}
                sm={24}
                md={12}
                lg={6}
                xl={6}
              >
                <span className="counter">{item.number}</span>
                <p>{item.title}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="section-large section-card">
        <div className="container ">
          <Row>
            <Col span={24} className="section-title">
              <h2>{t("MEET US IN PERSON", { ns: "content" })}</h2>
              <p>
                {t(
                  "Check out our scheduled tour to meet up with devotees. Contact your local centre representative for more information.",
                  { ns: "content" }
                )}
              </p>
            </Col>
            <Col span={24}>
              <Row className="section-group">
                {MEETUS.map((item) => (
                  <Col
                    key={item.title}
                    className="section-item"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                  >
                    <Card
                      // style={{ width:  }}
                      bordered={false}
                      cover={<img src={item.imgURL} alt="home" />}
                    >
                      <Meta
                        title={item.title}
                        description={<p>{item.subText}</p>}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className="section-slide">
        <div className="container">
          <h2>{t("WHAT OUR LEADERS SAY", { ns: "content" })}</h2>
          <HomeCarousel />
        </div>
      </div>

      <div className="section-large section-bottom">
        <div className="container ">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Button className="btn-primary bold btn-contact">
                Contact us
              </Button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Row>
                {CENTRES.map((item) => (
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} key={item.name}>
                    <Card bordered={false}>
                      <Meta
                        title={t(item.name, { ns: "content" })}
                        description={
                          <>
                            <p>
                              {item.contact} <br />
                              Tel: {t(item.tel, { ns: "content" })}
                            </p>
                          </>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </DivHomeWrapper>
  );
};

export default Home;
