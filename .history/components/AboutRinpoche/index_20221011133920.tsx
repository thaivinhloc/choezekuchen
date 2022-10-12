import React from "react";
import { useTranslation } from "react-i18next";
import { DivAboutRinppche } from "./index.style";

const AboutRinpoche = () => {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <DivAboutRinppche>
      <div className="about">
        <div className="container">
          <div
            className="about-title d-flex justify-center"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <h2>CHOEZE KUCHEN RINPOCHE’S BIOGRAPHY</h2>
            <p className="mb-0 font-weight-bold">
              Choeze Kuchen Rinpoche is the Head of Choeze Thupten
            </p>
            <p className="mb-0 font-weight-bold">
              Dhargyeling Monastery in Kham Tibet, Yushu, Qing Hai.
            </p>
            <p className="mb-0 font-weight-bold">
              He is regarded as the manifestation of Yamantaka (a wrathful
              aspect of Manjushri).
            </p>
          </div>
        </div>
      </div>
    </DivAboutRinppche>
  );
};

export default AboutRinpoche;
