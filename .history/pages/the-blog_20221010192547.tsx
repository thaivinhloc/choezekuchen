import React from "react";
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
export default function theBlog() {
  return (
    <div>
      {listBlog.map((blog, index) => {
        return <div></div>;
      })}
    </div>
  );
}
