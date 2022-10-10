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
              src="/images/events/events.png"
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

        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
