import { Table } from "antd";
import React from "react";
import { IResponseListRetreat, IUser } from "../../../services/retreatTypes";
import { DivTableRetreat } from "../index.style";

const columns = [
  {
    title: "Full Name",
    dataIndex: "user",
    fixed: true,
    key: "user",
    render: (user: IUser) => {
      return <span>{user.username}</span>;
    },
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    width: '120px'

  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: '120px'
  },
  {
    title: "Commited",
    dataIndex: "commited",
    key: "commited",
  },
  {
    title: "Completed",
    dataIndex: "completed",
    key: "completed",
    width: '110px'
  },
  {
    title: "%",
    dataIndex: "percent",
    key: "percent",
    width: '80px'
  },
  {
    title: "Daily Average",
    dataIndex: "dailyAverage",
    key: "dailyAverage",
    width: '130px'
  },
  {
    title: "Daily Required",
    dataIndex: "dailyRequired",
    key: "dailyRequired",
    width: '130px'
  },
  {
    title: "Updated",
    dataIndex: "lastUpdated",
    key: "lastUpdated",
  },
];

const RetreatListing: React.FC<{ listRetreat: IResponseListRetreat[] }> = ({
  listRetreat,
}) => {
  return (
    <DivTableRetreat>
      <Table
        columns={columns}
        dataSource={listRetreat}
        scroll={{ x: 'max-content', y: 1000 }}
        pagination={false}
        tableLayout="fixed"
      />
    </DivTableRetreat>
  );
};

export default RetreatListing;
