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
            <h3 className="display-1">
              DRIKUNG KAGYU NGONDRO PRELIMINARY PRACTICES CONDUCTED BY HIS
              EMINENCE 11TH CHOEZE KUCHEN RINPOCHE
            </h3>
            <p>
              Ngondro practice plays a very important role of Vajrayana’s
              pratice. The founder to the Drikung Kagyu lineage of Tibetan
              Buddhism, Lord Jigten Sumgon stated, “Ngondro is even more
              important than the higher practices.” It has also been said that
              sincerely practicing only Ngondro will lead to enlightenment since
              all mind training techniques leading to enlightenment are included
              within it! The four Ngondro preliminary practices of the Five-Fold
              Path of Mahamudra are:
              <br />
              The Practice of Taking Refuge (prostrations with recitations),
              <br />
              Practice of Vajrasattva Meditation and Recitation for
              Purification, <br />
              Offering the Noble Mandala the Special Method for Perfecting the
              Two Accumulations,
              <br />
              The Guru Yoga that Brings the Blessings of the Lineage
              <br />
              The pre-requisite for the Ngondro practices is the Four Turnings
              of the Mind to the Dharma teachings. Ones must fully practice the
              four ways of turning the mind, then ones practices the four
              extraordinary foundations of Vajrayana Ngondro to purify negative
              karma and obscurations of the mind, speech and body and to develop
              virtues.
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
