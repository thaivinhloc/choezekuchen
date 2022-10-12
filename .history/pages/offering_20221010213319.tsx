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
              Mobile: +6598358289
              <br />
              Email: dharmatreasure.sg@outlook.com
              <br /> wechat id: Mildred_Yong <br />
              . 11th Choeze Kuchen Drikung Wosal Ling Center (Viet Nam)
              <br /> Contact person: Ms. Hoa Chokyi p Email:
              drikungwosalling@gmail.com
            </p>
          </div>
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
