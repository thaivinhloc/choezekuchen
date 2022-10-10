import React from "react";
import { Row, Col, Image } from "antd";
import Carousel from "react-bootstrap/Carousel";

export default function historyOfChoezeKuchenRinpoche2() {
  return (
    <div className="historyOfChoezeKuchenRinpoche2">
      <div className="container">
        <div className="hr bg-transparent mt-0"></div>

        <Row className="historyOfChoezeKuchenRinpoche2-group" align="middle">
          <Col
            className="historyOfChoezeKuchenRinpoche2-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2.png"
              alt="main"
              className="ngondroTeching-image"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className="historyOfChoezeKuchenRinpoche2-item"
          >
            <p>
              Choeze Monastery in Kham was founded by the 8th incarnation of
              Choeze Kuchen Rinpoche, also known as Choeze Denma Shathri Tulku
              almost 500 years ago.
            </p>
            <p>
              At the age of 21, the 11th Choeze Kuchen Rinpoche founded his
              first retreat Center, Choeze Thupten Dargyeling in the eastern
              part of Tibet in Kham under the Yushu, Qinghai Province, China,
              where more than 200 Lamas completed 3 years, 3 months and 3 days
              of retreats.
            </p>
            <p>
              After the monastery was destroyed by the 2010 earthquake, the 11th
              Choeze Kuchen Rinpoche undertook the rebuilding of a new monastery
              in Dzachukha.
            </p>
            <p>
              In 2017, Choeze Kuchen Rinpoche completed the construction and put
              into operation the first clinic in Dzachukha region, Kham Tibet
              Province, providing medical care for local people as well as for
              monks and nuns in the region.
            </p>
          </Col>
        </Row>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
