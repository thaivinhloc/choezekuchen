import { Col, Row } from "antd";
import React from "react";
import { DivRetreatWrapper } from "./index.style";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const Retreat = () => {
  function callback(key: any) {
    console.log(key);
  }
  return (
    <DivRetreatWrapper>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Winter Retreat" key="1">
          <Row>
            <Col span={18}>Side left</Col>
            <Col span={4}>Side right</Col>
          </Row>
        </TabPane>
        <TabPane tab="Retreat List" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </DivRetreatWrapper>
  );
};

export default Retreat;
