import { Modal, Table, Typography } from "antd";
import React from "react";

const defaultColumns = [
  {
    title: "Retreat Name",
    dataIndex: "retreatName",
    width: "30%",
  },
  {
    title: "Recitation Number",
    dataIndex: "recitationNumber",
  },

  {
    title: "Completed Date",
    dataIndex: "completedAt",
  },
];
const ModalRetreatDetail = () => {
  return (
    <Modal visible={false} footer={false}>
      <h2 className="bold">ModalRetreatDetail</h2>
      <Table
        columns={defaultColumns}
        dataSource={[]}
        pagination={false}
        rowKey="id"
        loading={false}
      />
    </Modal>
  );
};

export default ModalRetreatDetail;
