import BoxContainer from "components/BoxContainer";
import i18next from "i18next";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const CONTENT = [
  {
    title: "THE CONSCIOUS MEDITATION FOR THE DYING ONES",
    imgURL: "/images/phowa-practice/Amitabha-Horizental-600x400.png",
    content: [
      "The Phowa has been widely practiced by the all Tibetan Buddhism lineage. This meditation technique connects our consciousness to the Amitabha pureland.",
      "In the Tibetan Buddhism, the Phowa technique is also known as the “transference of consciousness at the moment of death”. This is the fastest way to achieve enlightened state.",
    ],
  },
  {
    title: "BENEFITING THE DYING ONES",
    imgURL: "/images/phowa-practice/phowa-01-2.png",
    content: [
      "If we receive the proper Phowa transmission when alive or have the experience of practice; then at the time of death, even if there is no lama to perform the Phowa, just by focusing our mind at the brahma door, the consciousness will exit from there and even the every sinful ones will forcefully attain Buddhahood . And this is a very pure instruction received from the great teachers.",
    ],
  },
  {
    title: "CHOEZE KUCHEN RINPOCHE AND THE PHOWA PRACTICE",
    imgURL: "/images/phowa-practice/Phowa-at-Vinh-Nghiem-Pagoda.jpg",
    content: [
      "Choeze Kuchen Rinpoche has been practicing and delivering Phowa teaching for the many years. He is also one of the few Rinpoches who are qualified to teach the Phowa practice, and is widely recognized by the practitioners in the South East Asia region.",
    ],
  },
];

const PhowaPractice: FC<{}> = () => {
  //   const { t } = i18next;
  const { t, i18n } = useTranslation(["content", "phowa_practice"]);

  const Image = ({ url }: any) => {
    return (
      <div className="bc-image">
        <img src={url} />
      </div>
    );
  };

  const Content = ({ title, content }: any) => {
    return (
      <div className="bc-text text-top">
        <h4>{t(title, { ns: "phowa_practice" })}</h4>
        {content.map((paragraph: any, i: any) => (
          <p key={i}>{t(paragraph, { ns: "phowa_practice" })}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="pdy-100">
        <BoxContainer
          type="vertical"
          contentRight={<Image url={CONTENT[0].imgURL} />}
          contentLeft={
            <Content title={CONTENT[0].title} content={CONTENT[0].content} />
          }
        />
        <div className="hr"></div>
        <BoxContainer
          type="vertical"
          contentLeft={<Image url={CONTENT[1].imgURL} />}
          contentRight={
            <Content title={CONTENT[1].title} content={CONTENT[1].content} />
          }
        />
        <div className="hr"></div>
        <BoxContainer
          type="vertical"
          contentRight={<Image url={CONTENT[2].imgURL} />}
          contentLeft={
            <Content title={CONTENT[2].title} content={CONTENT[2].content} />
          }
        />
      </div>
    </div>
  );
};
export default PhowaPractice;
