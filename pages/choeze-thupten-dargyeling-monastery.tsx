import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons"
import { Col, Image, Row } from "antd"
import { ELanguages } from "i18n/config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Carousel from "react-bootstrap/Carousel"
import { useTranslation } from "react-i18next"

export default function HistoryOfChoezeKuchenRinpoche2() {
  const { t, i18n } = useTranslation(["content"])
  const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  return (
    <div className='historyOfChoezeKuchenRinpoche2'>
      <div className='container'>
        <div className='hr bg-transparent mt-0'></div>
        <Row className='historyOfChoezeKuchenRinpoche2-group' align='middle'>
          <Col
            className='historyOfChoezeKuchenRinpoche2-wrapper'
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
          >
            <img
              src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2.png'
              className='ngondroTeching-image'
              alt='main'
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
            className='historyOfChoezeKuchenRinpoche2-item'
          >
            <p>
              {t(
                "Choeze Monastery in Kham was founded by the 8th incarnation of Choeze Kuchen Rinpoche, also known as Choeze Denma Shathri Tulku almost 500 years ago",
                { ns: "content" }
              )}
              .
            </p>
            <p>
              {t(
                "At the age of 21, the 11th Choeze Kuchen Rinpoche founded his first retreat Center, Choeze Thupten Dargyeling in the eastern part of Tibet in Kham under the Yushu, Qinghai Province, China, where more than 200 Lamas completed 3 years, 3 months and 3 days of retreats",
                { ns: "content" }
              )}
            </p>
            <p>
              {t(
                "After the monastery was destroyed by the 2010 earthquake, the 11th Choeze Kuchen Rinpoche undertook the rebuilding of a new monastery in Dzachukha",
                { ns: "content" }
              )}
            </p>
            <p>
              {t(
                "In 2017, Choeze Kuchen Rinpoche completed the construction and put into operation the first clinic in Dzachukha region, Kham Tibet Province, providing medical care for local people as well as for monks and nuns in the region",
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
          <Carousel
            indicators={false}
            prevIcon={
              <LeftCircleOutlined style={{ color: "#000", fontSize: 40 }} />
            }
            nextIcon={
              <RightCircleOutlined style={{ color: "#000", fontSize: 40 }} />
            }
            prevLabel=''
            nextLabel=''
          >
            {IMAGES.map((img) => (
              <Carousel.Item key={img}>
                <img
                  className='d-block w-100'
                  src={`/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-${img}.png`}
                  alt='First slide'
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div
          className='xs:d-none
            d-sm-block
            d-md-block
            d-lg-none
            d-xl-none
          mt-5
          '
        >
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-1.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-2.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-3.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-4.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-5.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-6.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-7.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-8.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-9.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-10.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-11.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-12.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
          <Image
            width={"100%"}
            src='/images/historyOfChoezeKuchenRinpoche2/historyOfChoezeKuchenRinpoche2-13.png'
            alt='historyOfChoezeKuchenRinpoche2'
          />
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
