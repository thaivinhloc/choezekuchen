import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
const listBlog = [
  {
    date: "16 DEC",
    title: "KATHMANDU – THÀNH PHỐ CỦA CÁC VỊ THẦN VÀ Á THẦN.",
    postTime: "15:08  13 Comments 1 Like Share",
    place: "Uncategorized by Choeze Kuchen Rinpoche",
    content:
      "Kathmandu  - Thành phố của các vị Thần và Á Thần.Thành phố Kathmandu được thiết kế dựa trên Mandala hoàn hảo, Mandala là các vị Thần, Nagas, Dạ xoa và Rakshas được tuyển mộ bởi các bậc thầy giác ngộ vĩ đại như Padmasambhava.Padmasambhawa đã...",
  },
];
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
export default function theBlog() {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          // console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={listBlog}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          //   extra={
          //     <img
          //       width={272}
          //       alt="logo"
          //       src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          //     />
          //   }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}
