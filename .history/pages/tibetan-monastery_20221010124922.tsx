import React from "react";
import { Row, Col, Image } from "antd";
import Carousel from "react-bootstrap/Carousel";

export default function tibetanMonastery() {
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
            <Image
              src="/images/butanproject/butan2.jpg"
              alt="main"
              className="tibetanMonastery-image"
            />
            <Image
              src="/images/butanproject/butan3.jpg"
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
              <br /> This project located in Paro – Bhutan, one of the first few
              places visited by Guru Padmasambhava and many other Masters, it
              became one of the Holiest haven for practicing Mahayana Tantra
              Practices that has given birth to many revered Yogis and Yoginis.
              Bhutan is a country where majority of its citizens is Buddhist.
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
            <p>
              This is a very important and meaningful project, for the first
              time in Bhutan, a Retreat Center and Monastery of the Drikung
              lineage was established. Bhutan is a pure Vajrayana Buddhist
              country, home to Guru Rinpoche’s holiest holy sites, where
              enlightened energy is full. Practicing, retreating, meditating
              here will bring great benefits to practitioners and all sentient
              beings.
            </p>
            <p>
              When completed, this Retreat Center will have a main meditation
              hall with a capacity of 500 meditators. There are also 12 more
              specialized meditation rooms for intensive practice of Phowa and
              other methods.
            </p>
            <p>
              The Center also has a dining room and ancillary facilities for
              visitors to visit, and those who wish to go into retreat and
              practice Buddhism.
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
        {/* <div
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
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-2.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-3.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-4.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-5.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-6.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-7.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-8.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-9.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-10.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-11.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-12.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
      <Image
        width={"100%"}
        src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-13.png"
        alt="historyOfChoezeKuchenRinpoche2"
      />
    </div> */}
        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
