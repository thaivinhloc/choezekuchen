import { Button, Col, Divider, Form, Input, Row } from "antd";
import React from "react";
import { DivRetreatWrapper } from "./index.style";
import { Tabs } from "antd";
import RetreatListing from "./components/RetreatListing";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;

const Retreat = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  function callback(key: any) {
    console.log(key);
  }
  type TRenderItem = {
    title: string;
    content: string | number;
  };
  const RenderItem = ({ title, content }: TRenderItem) => {
    return (
      <Row className="retreat-row">
        <Col span={12}>
          <div className="retreat-label">{title}</div>
        </Col>
        <Col span={12}>
          <div className="retreat-content">{content}</div>
        </Col>
      </Row>
    );
  };

  const handleSubmit = () => {
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <DivRetreatWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={<strong>Retreat</strong>} key="1">
          <Row>
            <Col span={7} className="retreat__right">
              <div className="retreat__right-form">
                <div className="box-title">
                  Update your 100-syllable mantra recitation
                </div>
                <div className="retreat-submit">
                  <Form>
                    <div className="d-flex retreat-submit-item">
                      <Input />
                      <Button type="primary" onClick={handleSubmit}>
                        <strong>Submit</strong>
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="box-title">Nguyen Thi Lan Chau</div>
                <div className="box-content">
                  <RenderItem title="Commited:" content="10,800" />
                  <RenderItem title="Completed:" content="0" />
                  <RenderItem title="Due:" content="10,800" />
                  <RenderItem title="Daily Everage:" content="0" />
                  <RenderItem title="Daily Required:" content="10,478" />
                  <RenderItem title="Last Updated:" content="" />
                </div>
                <div className="box-title">Group Commitment</div>
                <div className="box-content">
                  <RenderItem title="Total Commitment:" content="100,000" />
                  <RenderItem title="No. of Participants:" content="0" />
                  <RenderItem title="Group Completed:" content="33,833" />
                  <RenderItem title="Due:" content="66,167" />
                </div>
              </div>
            </Col>
            <Col span={17} className="retreat-left">
              <div>
                <h3 className="bold">
                  CỘNG TU 100.000 BIẾN MINH CHÚ TRĂM ÂM KIM CƯƠNG TÁT ĐỎA
                </h3>

                <img src="./retreat-01.jpg" alt="" />
                <br />
                <br />
                <p>
                  Chỉ còn một tháng nữa sẽ đến ngày sinh nhật của Đạo sư Choeze
                  Kuchen Rinpoche (29/04/2022), Trung tâm Drikung Wosal Ling và
                  Trung tâm Dharma Treasure Singapore gửi lời mời tới Quý Đạo
                  Hữu cùng tham gia tích luỹ túc số 100.000 biến minh chú Kim
                  Cang Tát Đoả, tịnh hoá nghiệp quả của bản thân và hồi hướng
                  công đức để cầu trường thọ Đạo sư.
                </p>
                <p>Lợi ích của việc trì tụng minh chú Kim Cương Tát Đoả</p>

                <p>
                  Trong tất cả những suối nguồn cao cả nhất của sự quy y hay
                  những cơ hội để tích tập công đức thì không có điều gì lớn lao
                  hơn Đạo Sư. Đặc biệt là trong khi Ngài ban một lễ quán đảnh
                  hay giảng dạy, lòng bi mẫn và năng lực gia trì của tất cả chư
                  Phật và Bồ Tát trong mười phương rót vào thân tướng linh thánh
                  của Ngài, và Ngài trở nên bất khả phân với tất cả chư Phật.
                </p>
                <p>
                  Sau khi nhận được Pháp từ Đạo sư, nhiều người trong chúng ta
                  thay vì cúng dường công phu hành trì bao gồm áp dụng giáo Pháp
                  mà Ngài đã truyền dạy vào đời sống hàng ngày, chúng ta lại để
                  cho sự giải đãi, sân si sai sử , dẫn đến phạm giới mà không
                  hay biết. Nếu ta không giữ được hạnh nguyện và vi phạm giới
                  luật, việc đó tác động đến nhiều điều nhưng đặc biệt là ảnh
                  hưởng tới vị thầy. Người thầy ở lại cõi Ta-bà này là để cứu
                  giúp chúng sinh, do vậy nếu các chúng sinh không được lợi lạc
                  – nếu học trò không giữ hạnh nguyện và làm những việc sai trái
                  – thì việc người thầy ở lại cõi này là vô nghĩa, do vậy nó ảnh
                  hưởng tới sinh mệnh của người thầy.
                </p>
                <p>
                  Việc thực hành Chú Kim Cang Tát Đoả sẽ giúp tịnh hoá các nhiễm
                  ô mà chúng ta lỡ tạo dưới xu hướng mạnh mẽ của các nghiệp tiêu
                  cực. Xoá bỏ những ảo tưởng trong tâm trí, những khuynh hướng
                  quen thuộc, những chướng ngại, những cảm xúc mâu thuẫn hoặc
                  tiêu cực, giúp hành giả khôi phục giới nguyện, phát triển các
                  hoạt động giác ngộ. Song đó, mỗi công đức tích tập được qua
                  công phu tu trì, tích luỹ túc số, quý vị đạo hữu sẽ hồi hướng
                  để gia tăng tuổi thọ của Đạo sư vì lợi lạc của hết thảy chúng
                  sinh.
                </p>
                <p>
                  Các vị Đạo Sư đã dạy rằng, khi cùng tham gia vào việc tích lũy
                  túc số chung thì công đức tụng một túc số của cá nhân hành giả
                  sẽ ngang bằng với tổng túc số của cả đàn tràng, vì vậy quý vị
                  Đạo hữu hãy tận dụng cơ hội này để tăng trưởng công đức cúng
                  dường lên Đạo Sư
                </p>

                {/* <Row>
                  <div>
                    Consider that you remain in your ordinary form. At an
                    arrow’s length above your head, upon a lotus and a moon disc
                    seat, is a brilliant white syllable HUNG which becomes, in
                    essence, your glorious root master, the incomparable
                    treasury of compassion who embodies all the buddhas of past,
                    present and future. He is in the form of the sambhogakāya
                    Buddha Vajrasattva, white in colour, and as bright as a
                    snowy peak lit up by a hundred thousand suns. He has one
                    face and two arms. With his right hand, he holds a
                    five-pronged vajra of awareness and emptiness in front of
                    his heart. With his left, he rests the bell of appearance
                    and emptiness upon his left hip. His two legs are crossed in
                    the vajra posture, and he embraces, in an inseparable union,
                    his consort white Vajratopa (Dorje Nyemma). Their bodies are
                    not like those of ordinary beings, but are pure and composed
                    of light.
                  </div>
                </Row> */}
              </div>
            </Col>
          </Row>
        </TabPane>
        {user && (
          <TabPane tab={<strong>Participant Listing</strong>} key="2">
            <div className="text-center">
              <h3 className="bold">Winter Retreat 2021 Listing - Day 119</h3>
              <RetreatListing />
            </div>
          </TabPane>
        )}
      </Tabs>
    </DivRetreatWrapper>
  );
};

export default Retreat;
