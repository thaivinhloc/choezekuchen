import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
const listBlog = [
  {
    date: "16 DEC",
    title: "KATHMANDU – THÀNH PHỐ CỦA CÁC VỊ THẦN VÀ Á THẦN.",
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
    place: " Dakini day by Choeze Kuchen Rinpoche",
    content:
      "VICE meets up with Joe Nickell, a longtime paranormal investigator who’s been called the real-life Scully. We travel with him to Roswell, NM on the called the real-life Scully. We travel with him to Roswell, NM on the anniversary of the 1947 UFO Crash to...",
  },
  {
    date: "19 FEB",
    title: "THE LAND OF ENLIGHTENMENT OF THE BUDDHA",
    postTime: "08:08h",
    place: " Bodhgaya by Choeze Kuchen Rinpoche ",
    content:
      "VICE meets up with Joe Nickell, a longtime paranormal investigator who’s been called the real-life Scully. We travel with him to Roswell, NM on the called the real-life Scully. We travel with him to Roswell, NM on the anniversary of the 1947 UFO Crash to...",
  },
];

export default function theBlog() {
  return (
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
          <div className="hr bg-transparent mt-0" />

          <List.Item key={index}>
            <div className="theBlog bg-white p-5">
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
              <button className="buttonBlog">READ MORE</button>
            </div>
          </List.Item>
        </div>
      )}
    />
  );
}
