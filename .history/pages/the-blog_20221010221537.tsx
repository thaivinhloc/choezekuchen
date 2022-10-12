import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { useTranslation } from "react-i18next";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function theBlog() {
  const { t, i18n } = useTranslation(["content"]);

  const listBlog = [
    {
      date: "16 DEC",
      title: `${t("CITY OF GODS AND DEMIGODS"), { ns: ["content"] }}`,
      postTime: "15:08h ",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "Kathmandu  - Thành phố của các vị Thần và Á Thần.Thành phố Kathmandu được thiết kế dựa trên Mandala hoàn hảo, Mandala là các vị Thần, Nagas, Dạ xoa và Rakshas được tuyển mộ bởi các bậc thầy giác ngộ vĩ đại như Padmasambhava.Padmasambhawa đã...",
    },
    {
      date: "02 MAY",
      title: "VUNG TAU",
      postTime: "06:23h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "Vung Tau the island of prosperity and joy, His Holiness the 37th Gyalwa Drikungpa bestowing the introduction and pit instructions of Maha Karunika avalokiteśvara bodhisattva.May all be auspicious!...",
    },
    {
      date: "30 APR",
      title: "THE CREMATION OF LAMA JORGYAL",
      postTime: "09:16h",
      place: "Dakini day by Choeze Kuchen Rinpoche",
      content:
        "VICE meets up with Joe Nickell, a longtime paranormal investigator who’s been called the real-life Scully. We travel with him to Roswell, NM on the called the real-life Scully. We travel with him to Roswell, NM on the anniversary of the 1947 UFO Crash to...",
    },
    {
      date: "19 FEB",
      title: "THE LAND OF ENLIGHTENMENT OF THE BUDDHA",
      postTime: "08:08h",
      place: "Bodhgaya by Choeze Kuchen Rinpoche",
      content:
        "VICE meets up with Joe Nickell, a longtime paranormal investigator who’s been called the real-life Scully. We travel with him to Roswell, NM on the called the real-life Scully. We travel with him to Roswell, NM on the anniversary of the 1947 UFO Crash to...",
    },
    {
      date: "03 FEB",
      title: "WRATHFUL DEITY",
      postTime: "08:01h",
      place: "deity by Choeze Kuchen Rinpoche",
      content:
        "VICE meets up with Joe Nickell, a longtime paranormal investigator who’s been called the real-life Scully. We travel with him to Roswell, NM on the called the real-life Scully. We travel with him to Roswell, NM on the anniversary of the 1947 UFO Crash to...",
    },
    {
      date: "30 JAN",
      title: "DAKINI DAY",
      postTime: "05:25h",
      place: "Design by Choeze Kuchen Rinpoche",
      content:
        "VICE meets up with Joe Nickell, a longtime paranormal investigator who’s been called the real-life Scully. We travel with him to Roswell, NM on the called the real-life Scully. We travel with him to Roswell, NM on the anniversary of the 1947 UFO Crash to...",
    },
    {
      date: "10 JAN",
      title: "CAVE RETREAT 2017",
      postTime: "23:23h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "Year 2017 During my retreat In the most sacred cave of Guru Padmasambhawa and Khandro Yeshi Tsogyal, at tsok khang kriyangdzong Drikung Terdom, Tibet.I have met this great Dzogchen practitioner at the cave were Guru Rinpoche give first Dzogpachenpo teaching to Yeshi Tsogyal, it was...",
    },
    {
      date: "02 DEC",
      title: "THE GREAT PHAGMO DRUPA DAY",
      postTime: "08:28h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "Today is very auspicious day!Anniversary day of The Great Phagmo Drupa, the heart Son of Gampopa and root guru of the great Drikung Kyopa jigten sumgon, today is also the anniversary of the great Jay Tsongkhapa/ Lobsang Drakpa, founder of Gyaluk tradition. Kagyud and gayluk share...",
    },
    {
      date: "20 OCT",
      title: "BUDDHA STATUE FOR CHOEZE THUPTEN DHARGYALIG MONASTERY",
      postTime: "20:20h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "I am very happy to announce that 7m high statue of second Buddha, Drikung Kyobpa Jigten Sumgon is finally completed at main monastery Choeze Thupten Dhargyalig in Kham Dzachukha, Qing Hai, Yushu.Everyone is welcome to join this great merits by rejoicing through your aspiration.Gyalwa Drikungpa...",
    },
    {
      date: "18 SEP",
      title: "COMPASSION KEY TO ENLIGHTENMENT",
      postTime: "22:01h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "The Reason Buddha achieved enlightenment is through boundless compassion to all the living beings.We as a true follower of Buddha, Our practice too should be base on compassion, towards those who are close to us and specially those who we think as Enemies...",
    },
    {
      date: "08 AUG",
      title: "BUDDHA STATUE CONSECRATION",
      postTime: "05:21h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "One who wishes to have perfect statues of the Buddha or Bodhisattva they must understand that It is very important to have material of the statue is possess more then 100 different kind of qualities according to Buddha Bisho Karma Sutra, art of the statue...",
    },
    {
      date: "06 MAY",
      title: "MY ROOT GURU",
      postTime: "22:01h",
      place: "guru by Choeze Kuchen Rinpoche",
      content:
        "Homage to my root Guru!Yogini Khando Dhondup Dolma alias Thinley Wangmo who was the consort of 10th Choezed Tulku Jigme Choewang Lodoe attained Parinirvana this morning.I was very fortunate to meet her in person back in year 2010. Though we were meeting for the first...",
    },
    {
      date: "03 AUG",
      title: "ENERGY BEHIND STUPA",
      postTime: "10:12h",
      place: "Uncategorized by Choeze Kuchen Rinpoche",
      content:
        "Stupa is like a reception tower that connects all the positive energy, through prayers and dedication by the different enlightened beings from different times. It is very important for us to connect our prayers too so that our temporary prayers and dedications will remain forever...",
    },
  ];
  return (
    <div className="pb-5 theBlog">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            // console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={listBlog}
        renderItem={(item, index) => (
          <div className="container">
            <List.Item key={index}>
              <div className=" bg-white p-5">
                <h3
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "#777",
                  }}
                >
                  {item.date}{" "}
                  <a
                    style={{
                      color: "black",
                      fontSize: "35px",
                      fontWeight: "bold",
                      letterSpacing: "3px",
                    }}
                    href=""
                  >
                    {item.title}
                  </a>
                </h3>
                <p style={{ fontWeight: 500 }}>
                  posted at {item.postTime} in {item.place} . 13{" "}
                  <a href="" className="text-dark">
                    Comments
                  </a>{" "}
                  . 0{" "}
                  <a href="" className="text-dark">
                    like
                  </a>{" "}
                  .
                  <a href="" className="text-dark">
                    Share
                  </a>
                </p>
                <p className="text-dark">{item.content}</p>
                <button className="buttonBlog">
                  {t("READ MORE", { ns: ["content"] })}
                </button>
              </div>
            </List.Item>
          </div>
        )}
      />
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
