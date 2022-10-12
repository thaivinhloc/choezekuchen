import React from "react";
import { useTranslation } from "react-i18next";
import { DivAboutRinppche } from "./index.style";

const AboutRinpoche = () => {
  const { t, i18n } = useTranslation(["content"]);

  return (
    <DivAboutRinppche>
      <div className="about">
        <div className="container">
          <div className="about-title">
            <h2>CHOEZE KUCHEN RINPOCHE’S BIOGRAPHY</h2>
            <h3>Choeze Kuchen Rinpoche is the Head of Choeze Thupten</h3>
            <h3>Dhargyeling Monastery in Kham Tibet, Yushu, Qing Hai.</h3>
            <h3>
              He is regarded as the manifestation of Yamantaka (a wrathful
              aspect of Manjushri).
            </h3>
          </div>
        </div>
      </div>
    </DivAboutRinppche>
  );
};

export default AboutRinpoche;
