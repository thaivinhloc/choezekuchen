import React from "react";
import { Row, Col, Image } from "antd";
import Carousel from "react-bootstrap/Carousel";

export default function namkhaThingSanRetreatCenter() {
  return (
    <div className="tibetanMonastery">
      <div className="container">
        <div className="hr bg-transparent mt-0"></div>

        <Row className="tibetanMonastery-group" align="middle">
          <Col
            className="tibetanMonastery-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src="/images/butanproject/butan1.jpg"
              alt="main"
              className="tibetanMonastery-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className="tibetanMonastery-item"
          >
            <p>
              The project to build Retreat Center in the valley beside the Holy
              land of Tiger Nest – Paro – Bhutan that aims to provide a
              sanctuary for the Sangha and lay communities from Bhutan and
              around the world in their practice of Mahayana Tantra. It’s in the
              process of being implemented by HE. Choeze Kuchen Rinpoche.
            </p>
            <p>
              It is Rinpoche’s wish for this facility to benefit and support
              generations of the Sangha and lay communities, to enable them the
              opportunity to conduct regular Phowa practices, one of the most
              sophisticated yet important teachings of Guru Padmasambhava, on
              this sacred land of Bhutan.
            </p>
            <p>
              In supporting the contributing towards this project which is pure
              and sublime, one is also making offering to truly unsurpassable,
              enlightened causes. The merits accumulated will be tremendous.
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
                className="d-block w-100"
                src="/images/butanproject/butan12.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan13.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan11.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan10.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan8.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan9.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan7.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan5.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/butanproject/butan6.jpg"
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
            src="/images/butanproject/butan12.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan13.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan2.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan11.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan10.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan8.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan9.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan7.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan5.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/butanproject/butan6.jpg"
            alt="First slide"
          />
        </div>
        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
