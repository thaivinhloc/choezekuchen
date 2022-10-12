import React from "react";
import { Row, Col, Image } from "antd";
import Carousel from "react-bootstrap/Carousel";

export default function namkhaThingSanRetreatCenter() {
  return (
    <div className="namkhaThingSanRetreatCenter">
      <div className="container">
        <div className="hr bg-transparent mt-0"></div>

        <Row className="namkhaThingSanRetreatCenter-group" align="middle">
          <Col
            className="namkhaThingSanRetreatCenter-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter1.jpg"
              alt="main"
              className="namkhaThingSanRetreatCenter-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className="namkhaThingSanRetreatCenter-item"
          >
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
        <div
          className="xs:d-none
        d-sm-none
        d-md-none
        d-lg-block
        d-xl-block
      mt-5
      "
        >
          <Carousel indicators={false} style={{ height: "500px" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter4.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter5.jpg"
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
            src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter1.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter2.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter3.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter4.jpg"
            alt="First slide"
          />
          <Image
            width={"100%"}
            src="/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter5.jpg"
            alt="First slide"
          />
        </div>
        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
