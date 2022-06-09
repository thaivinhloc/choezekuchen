import BoxContainer from "components/BoxContainer";
import i18next from "i18next";
import React, { FC } from "react";

const CONTENT = [
    {
        imgURL: "/images/jigme-choewang-lodro/10th-Choeze-Rinpoche.jpg",
        content: [
            "Jigme Choewang Lodro was born in Kham Dzachukha to father Jampa Zangpo and mother Dolo from Kham. He was recognized as the 10th reincarnation of Choeze Kuchen Rinpoche by the previous H.H. Drikung Kyabgon Chetsang Zhiwi Lodro Rinpoche.",
            "He received many teachings from both Drikung Holinesses and one of his main Guru was Dzogchen master of his time, Dzogchen Khenpo Thubga from Changma Rithro at Dzachukha.In the Kham region, he had many followers from different regions and monasteries of Tibet practicing different sects of Buddhism.He is recognized for his profound teachings covering all sects of Buddhism."
        ]
    },
    {
        imgURL:
            "/images/jigme-choewang-lodro/choeze-kuchen-rinpoches-past-life-belonging-yamantaka-statue.jpg",
        content: [
            "These are golden statues of Yamantaka (central statue) and other deities belonging to the 10th incarnation of Choeze Kuchen Rinpoche. Yamantaka is an emanation of Lord Manjushri, the Bodhisattva of Wisdom"
        ]
    },
    {
        imgURL:
            "/images/jigme-choewang-lodro/Choeze-Rinpoche-and-Khandro-Thinley-Wangmo.jpg",
        content: [
            "During the later part of the 10th Choeze Kuchen Rinpoche’s life, he travelled to the region of Drikung Terdrum and spent the rest of his life in the caves of Guru Padmasambhava and Yeshe Tsogyal.",
            "In Drikung Terdrum, he gave teachings to many high reincarnated lamas, monks, nuns and lay practitioners. One such student was the late Mahasiddha Drubwang Tenzin Nyima who was also the heart son of the late Mahasiddha Drubwang Pachung Rinpoche.",
            "Before passing into the Parinirvana, the 10th Choeze Kuchen Rinpoche showed Khandro Thinley Wangmo and his attendant Lama Ugyenkyap of his passing and signs that they will meet again in his next reincarnation.",
            "The 11th Choeze Kuchen Rinpoche fulfilled his prophecy and met Khandro la and Lama several times before Khandrola and Lama passed away."
        ]
    }
];

const JigmeChoewangLodro: FC<{}> = () => {
    const { t } = i18next;

    const Image = ({ url }: any) => {
        return (
            <div className="bc-image">
                <img src={url} />
            </div>
        );
    };

    const Content = ({ content }: any) => {
        return (
            <div className="bc-text text-center">

                {content.map((paragraph: any, i: any) => (
                    <p key={i}>{t(paragraph, { ns: "jigme_choewang_lodro" })}</p>
                ))}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="pdy-100">
                <BoxContainer
                    type="vertical"
                    contentLeft={<Image url={CONTENT[0].imgURL} />}
                    contentRight={<Content content={CONTENT[0].content} />}
                />
                <div className="hr" ></div>
                <BoxContainer
                    type="vertical"
                    contentRight={<Image url={CONTENT[1].imgURL} />}
                    contentLeft={<Content content={CONTENT[1].content} />}
                />
                <div className="hr" ></div>
                <BoxContainer
                    type="vertical"
                    contentLeft={<Image url={CONTENT[2].imgURL} />}
                    contentRight={<Content content={CONTENT[2].content} />}
                />
            </div>

        </div>
    );
};
export default JigmeChoewangLodro;
