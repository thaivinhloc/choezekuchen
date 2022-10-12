import React from "react";
import { Row, Col, Button, Image } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ELanguages } from "i18n/config";
import { useTranslation } from "react-i18next";

export default function dharmaReaching() {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <div className="dharmaReaching">
      <div className="container">
        <div className="hr bg-transparent" />
        <Row align="middle">
          <Col
            xs={24}
            sm={24}
            md={24}
            xl={12}
            lg={12}
            className="dharmaReaching-image"
          >
            <Image
              src="/images/dharmaReaching/dharmaReaching.png"
              alt="bb"
              className="dharmaReaching-image"
            />
          </Col>
          <Col
            className="dharmaReaching-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <p>
              {t("", { ns: "content" })}
              We have to try to think for others, not just ourselves. If you
              think for others, you will become very relaxed in your mind. If
              you only think for yourself, gradually you will develop stress and
              feel more pressure. So try to think of benefitting others. Even
              though you can’t benefit masses, if there is just only one person
              in front of you who needs help and you have given assistance with
              pure motivation, it would make you happy and your mind relaxed.
            </p>
            <p>
              {t("", { ns: "content" })}
              Wealth, good facilities, infrastructure and material goods, these
              give us good health and comfort, but not true permanent happiness.
              That is why you can observe that there are rich people who are
              very stressed. Poor people may have to live in discomfort, but
              they may not be unhappy if they are contented and do not harbor
              selfish thoughts. Material wealth may cause one more suffering due
              to the grasping and attachment one has for it.
            </p>
          </Col>
        </Row>
        <div className="hr bg-transparent" />
      </div>
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
        "phowa_practice",
      ])),
    },
  };
}
