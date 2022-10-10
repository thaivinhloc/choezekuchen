import React from "react";
import { Row, Col, Button, Image } from "antd";

export default function ngondroTeching() {
  return (
    <div className="ngondroTeching">
      <div className="container">
        <div className="hr bg-transparent" />
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
              src="/images/ngondro-teching/ngondroTechingImg1.png"
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
        <div className="hr bg-transparent" />
      </div>
    </div>
  );
}
