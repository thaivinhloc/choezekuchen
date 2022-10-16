import React from "react"
import { Row, Col, Image } from "antd"
import Carousel from "react-bootstrap/Carousel"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ELanguages } from "i18n/config"
import { useTranslation } from "react-i18next"
import { text } from "stream/consumers"
import styled from "styled-components"

const ImageRatioWrapper = styled.img`
  text-align: center;
  width: 100%;
  height: calc(100vw / 2);
  object-fit: cover;
`

export default function NamkhaThingSanRetreatCenter() {
  const { t, i18n } = useTranslation(["content"])

  return (
    <div className='namkhaThingSanRetreatCenter'>
      <div className='container'>
        <div className='hr bg-transparent mt-0'></div>

        <Row className='namkhaThingSanRetreatCenter-group' align='middle'>
          <Col
            className='namkhaThingSanRetreatCenter-wrapper'
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <Image
              src='/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter1.jpg'
              alt='main'
              className='namkhaThingSanRetreatCenter-image'
              width='100%'
              height='auto'
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
            className='namkhaThingSanRetreatCenter-item'
          >
            <p>
              {t(
                "Namkha Thing-sang Retreat Centre is located near the holy cave of Guru Padmasambhava at Pharphing",
                { ns: "content" }
              )}
              .
            </p>
            <p>
              {t(
                "It was established with an aim of practicing various Vajrayana teachings especially; the Mahamudra and Dzogchen teachings from their foundations. Many great Gurus including His Holiness Drikung Chetshang Rinpoche, Kyabje Penor Rinpoche and Kyabje Jadral Rinpoche have consecrated and blessed this retreat",
                { ns: "content" }
              )}
              .
            </p>
            <p>
              {t(
                "His Eminence Choeze Kuchen Rinpoche himself has done many important Retreats and Pujas in this Centre",
                { ns: "content" }
              )}
              .
            </p>
          </Col>
        </Row>
        <div
          className='xs:d-none
        d-sm-none
        d-md-none
        d-lg-block
        d-xl-block
      mt-5
      '
        >
          <Carousel indicators={false}>
            <Carousel.Item>
              <ImageRatioWrapper
                className='d-block'
                src='/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter1.jpg'
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <ImageRatioWrapper
                className='d-block'
                src='/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter2.jpg'
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <ImageRatioWrapper
                className='d-block'
                src='/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter3.jpg'
                alt='Third slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <ImageRatioWrapper
                className='d-block'
                src='/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter4.jpg'
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <ImageRatioWrapper
                className='d-block'
                src='/images/namkhaThingSanRetreatCenter/namkhaThingSanRetreatCenter5.jpg'
                alt='Second slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='hr bg-transparent'></div>
      </div>
    </div>
  )
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "content"
      ]))
    }
  }
}
