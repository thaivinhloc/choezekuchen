import React from "react";
import { Row, Col, Button, Image } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ELanguages } from "i18n/config";
import { useTranslation } from "react-i18next";

export default function achiChokyiDrolmaTeching() {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <div className="achiChokyiDrolmaTeching">
      <div className="container">
        <div className="hr bg-transparent" />
        <Row align="middle">
          <Col
            xs={24}
            sm={24}
            md={24}
            xl={12}
            lg={12}
            className="achiChokyiDrolmaTeching-image"
          >
            <Image
              src="/images/achiChokyiDrolmaTeching/achiChokyiDrolmaTeching.png"
              alt="bb"
              className="achiChokyiDrolmaTeching-image"
            />
          </Col>
          <Col
            className="achiChokyiDrolmaTeching-wrapper"
            xs={24}
            sm={24}
            md={24}
            lg={{ span: 11, offset: 1 }}
            xl={{ span: 11, offset: 1 }}
          >
            <h3 className="mb-5">
              {t(
                "MONTHLY ACHI CHOKYI DROLMA TEACHING & PRACTICING CONDUCTED BY HIS EMINENCE 11TH CHOEZE KUCHEN RINPOCHE",
                { ns: "content" }
              )}
            </h3>
            <p>
              {t(
                "Achi Chokyi Drolma – The main Dharma Protector of Drikung Kagyu Mother Achi was the great grandmother of Lord Jigton Sumgon, founder of the Drikung Lineage",
                { ns: "content" }
              )}
            </p>
            <p className="mb-5">
              {t(
                "To this day she remains a great dharma protector of the Buddha’s teachings. As a protector, Achi is visualized on her blue wisdom horse to symbolize the swiftness of her enlightened activities, and she holds a wish-fulfilling jewel to symbolize her ability to bestow everything needed and desired when asked. Benefits of practicing Achi Chokyi Drolma are the removal of inner and outer obstacles to our practices and to lay the groundworks for circumstances best suited to our progress along the path. Those who practice her meditation and recite her mantra will be protected from obstacles and hindrances",
                { ns: "content" }
              )}
              .
            </p>
            <p>
              {t(
                "Welcome to 11th Choeze Kuchen Rinpoche’s official website and Facebook at",
                { ns: "content" }
              )}
              :
              <br /> – Website:
              <a
                href="https://www.youtube.com/watch?v=M9KmuAeA4rY"
                target="_blank"
                rel="noreferrer"
              >
                https://choezekuchen.com/
              </a>
              <br />– Facebook:
              <a
                href="https://www.youtube.com/watch?v=M9KmuAeA4rY"
                target="_blank"
                rel="noreferrer"
              >
                https://www.facebook.com/choezekuchen
              </a>
              <br />– Facebook:
              <a
                href="https://www.youtube.com/watch?v=M9KmuAeA4rY"
                target="_blank"
                rel="noreferrer"
              >
                https://www.facebook.com/profile.php?…
              </a>
              <br />–{t("Subscribe to our YouTube channel", { ns: "content" })}:
              <a
                href="https://www.youtube.com/watch?v=M9KmuAeA4rY"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/channel/UCTQ-…
              </a>
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
