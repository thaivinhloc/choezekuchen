import React from "react";
import { Row, Col, Image } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ELanguages } from "i18n/config";
import { useTranslation } from "react-i18next";

export default function chodChangbu() {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <div className="container">
      <div className="hr bg-transparent"></div>
      <Row className="chodChangbu-group" align="middle">
        <Col
          className="chodChangbu-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
        >
          <div>
            <h3 style={{ fontWeight: "bold" }}>
              {t(
                "CHOD CHANGBU GYATSHAR PUJA ON 2,3,4/06/2021 CONDUCTED BY 11TH CHOEZE KUCHEN RINPOCHE",
                { ns: ["content"] }
              )}
            </h3>
            <p>
              <span style={{ fontWeight: "bold" }}>
                {t("ABOUT CHOD CHANGBU GYATSAR", { ns: ["content"] })}
              </span>
              <br />
              {t(
                "This “Chang-bu Gya-tshar” ritual includes visualisation of inviting and offering our entire body to the spirits and demons that cause suffering and obstacles in our life. Basically, these spirits and demons are actually; the destined consequences of our past negative Karma. Since our body is very precious to us and is the cause of our attachment, anger and delusion. Thus, by giving it up and offering it to the spirits and demons will pacify them and won’t cause us any further harm. This practice is regarded as one of the sophisticated yet most effective Vajrayana practice for generating compassion, accumulating limitless merits, cleansing negative Karmas and for the realization of ultimate nature of mind, body and the entire phenomena.",
                { ns: ["content"] }
              )}
            </p>
            <p>
              <a href="" target="_blank" style={{ fontWeight: "bold" }}>
                {t(
                  "REGISTRATION FORM FOR OFFERING AND ATTENDING CHOD CHANGBU GYATSHAR OFFERING",
                  { ns: ["content"] }
                )}
              </a>
            </p>
          </div>
        </Col>
        <Col
          className="chodChangbu-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={{ span: 7, offset: 1 }}
          xl={{ span: 7, offset: 1 }}
        >
          <Image src="/images/events/chod.jpg" alt="event" />
        </Col>
      </Row>
      <div className="hr bg-transparent"></div>
    </div>
  );
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "content",
      ])),
    },
  };
}
