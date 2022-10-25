import React from "react"
import { Row, Col, Button, Image } from "antd"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ELanguages } from "i18n/config"
import { useTranslation } from "react-i18next"

export default function NgondroTeching() {
  const { t, i18n } = useTranslation(["content"])

  return (
    <div className='ngondroTeching'>
      <div className='container'>
        <div className='hr bg-transparent' />
        <Row align='middle'>
          <Col
            xs={24}
            sm={24}
            md={24}
            xl={12}
            lg={12}
            className='ngondroTeching-image'
          >
            <Image
              src='/images/ngondro-teching/ngondroTechingImg1.png'
              alt='bb'
              className='ngondroTeching-image'
            />
          </Col>
          <Col
            className='ngondroTeching-wrapper'
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <h3 style={{ marginBottom: 30 }}>
              <span style={{ color: "#C00000", fontSize: 24 }}>
                {t("YANGZAB NGONDRO PRELIMINARY PRACTICE", {
                  ns: "content"
                })}
              </span>
              <br />
              {t("CONDUCTED BY HIS EMINENCE 11TH CHOEZE KUCHEN RINPOCHE", {
                ns: "content"
              })}
            </h3>
            <p>
              {t(
                "Ngondro practice plays a very important role of Vajrayana's pratice.",
                { ns: "content" }
              )}
            </p>
            <p>
              {t(
                "The founder to the Drikung Kagyu lineage of Tibetan Buddhism, Lord Jigten Sumgon stated, “Ngondro is even more important than the higher practices.” It has also been said that sincerely practicing only Ngondro will lead to enlightenment since all mind training techniques leading to enlightenment are included within it!"
              )}
            </p>
            <p>
              <b>
                {t("The Five Preliminary Practices of Yangzab Ngondro are:")}
              </b>
              <br />
              {t(
                "1. The Practice of Taking Refuge (prostrations with recitation).",
                { ns: "content" }
              )}
              <br />
              {t(
                "2. The Practice of Generating Bodhichitta (praying with recitation).",
                { ns: "content" }
              )}
              <br />
              {t(
                "3. The Practice of Vajrasattva – 100 syllables Mantra (chanting with recitation).",
                { ns: "content" }
              )}
              <br />
              {t(
                "4. The Offering of the Noble Mandala ( practicing, chanting with recitation).",
                {
                  ns: "content"
                }
              )}
              <br />
              {t(
                "5. The Practice of Guru Yoga that Brings the Blessings of the Lineage (praying with recitation)."
              )}
            </p>
            <p>
              {t(
                "The pre-requisite for the Ngondro practice is the Four Turnings of the Mind to the Dharma teachings. Ones must fully practice the four ways of turning the mind, then ones practices the four extraordinary foundations of Vajrayana Ngondro to purify negative karma and obscurations of the mind, speech and body and to develop virtues."
              )}
            </p>
          </Col>
        </Row>
        <div className='hr bg-transparent' />
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
