import React from "react";
import { Row, Col, Image } from "antd";
import Carousel from "react-bootstrap/Carousel";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ELanguages } from "i18n/config";
import { useTranslation } from "react-i18next";

export default function singaporeCenter() {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <div className="singaporeCenter">
      <div className="container">
        <div className="hr bg-transparent mt-0"></div>

        <Row className="singaporeCenter-group" align="middle">
          <Col
            className="singaporeCenter-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src="/images/singaporeCenter/singapoCenter.jpg"
              alt="main"
              className="singaporeCenter-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className="singaporeCenter-item"
          >
            <p>
              {t(
                "His Eminence 11th Choeze Kuchen Rinpoche establish his first center named Dharma Treasure Center in Singapore in June 2019. The center’s vision is to benefit to all sentient beings in all ways via dharma and to guide all to foster a harmonious environment",
                { ns: ["content"] }
              )}
            </p>
            <p>
              {t("The mission of Dharma Treasure Center is", {
                ns: ["content"],
              })}
              :
              <br /> •
              {t(
                "To teach its members Buddhism and strict observance of its practices",
                { ns: ["content"] }
              )}
              ;
              <br /> •
              {t("To train and encourage its members to promote Buddhism", {
                ns: ["content"],
              })}
              ;
              <br /> •
              {t(
                "To train and encourage its members in acts of charity and general helpfulness to all fellow-beings in the fields of social, educational, cultural and other humanitarian services",
                { ns: ["content"] }
              )}
              ;
              <br /> •{t("", { ns: ["content"] })}
              To afford its members healthy and decent recreations; and
              <br />•{t("", { ns: ["content"] })}
              To work in conjunction with other Buddhist organizations to foster
              peace, harmony and happiness for all beings.
            </p>
          </Col>
        </Row>
        <div
          className="xs:d-none
             d-sm-none
             d-md-none
             d-lg-block
             d-xl-block
             mt-5
             "
        >
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter4.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter5.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter6.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter7.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter8.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "800px" }}
                className="d-block w-100"
                src="/images/singaporeCenter/singapoCenter9.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          className="xs:d-none
    d-sm-block
    d-md-block
    d-lg-none
    d-xl-none
  mt-5
  "
        >
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter1.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter2.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter3.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter4.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter5.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter6.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter7.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter8.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/singaporeCenter/singapoCenter9.jpg"
            alt="First slide"
          />
        </div>
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
