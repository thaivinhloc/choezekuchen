import { Button, Col, Divider, Form, Input, Row } from "antd";
import React from "react";
import { DivRetreatWrapper } from "./index.style";
import { Tabs } from "antd";
import RetreatListing from "./components/RetreatListing";

const { TabPane } = Tabs;
const Retreat = () => {
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
  return (
    <DivRetreatWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={<strong>Winter Retreat</strong>} key="1">
          <Row>
            <Col span={17} className="retreat-left">
              <div>
                <h3 className="bold">Winter Retreat</h3>
                <p>
                  The Winter Retreat 2021-2022 will end on March 18, 2022.
                  please report your total recitations by March 16, 2022.
                </p>
                <p>From March 14 - March 18: recite Manjusrhi mantra.</p>
                <p> From March 19 - March 21: recite 21-Tara</p>
                <img
                  src="http://www.hungkardorje.org/winterretreat/images/rinpoche-wr720.png"
                  alt=""
                />
                <Divider orientation="left">
                  <strong>Visualize Vajrasattva clearly</strong>
                </Divider>
                <Row>
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
                </Row>
              </div>
            </Col>
            <Col span={7} className="retreat__right">
              <div className="retreat__right-form">
                <div className="box-title">Manjushri Mantra Accumulation</div>
                <div className="box-content">
                  <RenderItem title="Total Accumulation:" content="104,714" />
                </div>
                <div className="box-title">Group Commitment</div>
                <div className="box-content">
                  <RenderItem title="Total Commitment::" content="4,073,253" />
                  <RenderItem title="No. of Participants:" content="248" />
                  <RenderItem title="Group Completed:" content="2,991,775" />
                  <RenderItem title="Due:" content="1,081,478" />
                </div>
                <div className="box-title">Nguyen Thi Lan Chau</div>
                <div className="box-content">
                  <RenderItem title="Commited:" content="10,800" />
                  <RenderItem title="Completed:" content="0" />
                  <RenderItem title="Due:" content="10,800" />
                  <RenderItem title="Daily Everage:" content="0" />
                  <RenderItem title="Daily Required:" content="10,478" />
                  <RenderItem title="Last Updated::" content="" />
                </div>
                <div className="box-title">
                  Update your 100-syllable mantra recitation
                </div>
                <div className="retreat-submit">
                  <Form>
                    <div className="d-flex retreat-submit-item">
                      <Input />
                      <Button type="primary">
                        <strong>Submit</strong>
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab={<strong>Participant Listing</strong>} key="2">
          <div className="text-center">
            <h3 className="bold">Winter Retreat 2021 Listing - Day 119</h3>
            <RetreatListing />
          </div>
        </TabPane>
      </Tabs>
    </DivRetreatWrapper>
  );
};

export default Retreat;
