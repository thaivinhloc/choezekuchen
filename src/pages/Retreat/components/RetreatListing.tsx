import { Table } from "antd";
import React from "react";
import { IResponseListRetreat, IUser } from "../../../services/retreatTypes";
import { DivTableRetreat } from "../index.style";

const columns = [
  {
    title: "Full Name",
    dataIndex: "user",
    key: "user",
    render: (user: IUser) => {
      return <span>{user.username}</span>;
    },
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
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
  },
  {
    title: "%",
    dataIndex: "percent",
    key: "percent",
  },
  {
    title: "Daily Average",
    dataIndex: "dailyAverage",
    key: "dailyAverage",
  },
  {
    title: "Daily Required",
    dataIndex: "dailyRequired",
    key: "dailyRequired",
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
      <Table dataSource={listRetreat} columns={columns} />
    </DivTableRetreat>
  );
};

export default RetreatListing;
