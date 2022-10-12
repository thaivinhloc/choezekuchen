import React from "react";
import { Row, Col, Image } from "antd";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function offering() {
  //   const { t } = i18next;
  const { t, i18n } = useTranslation(["content"]);

  return (
    <div className="container">
      <div className="hr bg-transparent"></div>
      <Row className="chodChangbu-group mb-5" align="middle">
        <Col
          className="chodChangbu-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
        >
          <div>
            <h1>Support the Activities of Samye Institute</h1>
            <div>
              <p>
                In order to maintain our current activities, deliver our future
                roadmap and remain firm as the bedrock of our global sangha,
                Samye needs your ongoing support. We invite you to support Samye
                Institute in whatever way you prefer and be a direct cause for
                our activities to flourish and expand.
              </p>
              <p>
                Samye Institute launched in 2015. Our worldwide volunteer team
                has helped us evolve into a hub for Phakchok Rinpoche’s vast
                teaching activities. Under Rinpoche and his senior instructors’
                guidance our mission focuses on providing support for all those
                who wish to practice the Buddhadharma.
              </p>
              <p>
                We welcome all offerings, regardless of the amount. Our wish is
                for every user to make an auspicious connection with Samye
                Institute.
              </p>
            </div>
          </div>
          <div>
            <h1>Make an Offering by Credit Card or PayPal</h1>
            <div>
              <Row align="middle">
                <Col xs={24} sm={24} md={24} lg={16} xl={16}></Col>
              </Row>
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: "bold" }}>
              {t("offering", { ns: ["content"] })}
            </h3>
            <p>{t("contentOffering", { ns: ["content"] })}</p>
            <div>
              <p>
                {t(
                  "If you’d like to make an offering to Choeze Kuchen Rinpoche and Sangha, please contact us as below",
                  { ns: ["content"] }
                )}
                :
                <br />
                . 11th Choeze Kuchen Center (Singapore) <br />
                {t("Contact person", { ns: ["content"] })}: Ms. Mildred Yong{" "}
                <br />
                {t("Mobile", { ns: ["content"] })}: +6598358289
                <br />
                Email: dharmatreasure.sg@outlook.com
                <br /> wechat id: Mildred_Yong <br />
                . 11th Choeze Kuchen Drikung Wosal Ling Center (Viet Nam)
                <br /> {t("Contact person", { ns: ["content"] })}: Ms. Hoa
                Chokyi p Email: drikungwosalling@gmail.com
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="chodChangbu-group" align="middle">
        <Col
          className="chodChangbu-wrapper"
          xs={24}
          sm={24}
          md={24}
          lg={{ span: 15, offset: 1 }}
          xl={{ span: 15, offset: 1 }}
        >
          <Image src="" alt="offering" />
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
