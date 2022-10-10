import React from "react";
import { Row, Col, Image } from "antd";

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
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleIndicators"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleIndicators"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>

        <div className="hr bg-transparent"></div>
      </div>
    </div>
  );
}
