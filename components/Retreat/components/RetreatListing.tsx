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
    width: 120,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: 120,
  },
  {
    title: "Commited",
    dataIndex: "commited",
    key: "commited",
    width: 110,
  },
  {
    title: "Completed (%)",
    dataIndex: "completed",
    key: "completed",
    width: 140,
    render: (text: string, opt: any) => {
      const percent = (opt?.completed / opt?.commited) * 100;
      return (
        <span>
          {text} ({percent === Infinity ? 100 : Math.abs(percent)}%)
        </span>
      );
    },
  },

  {
    title: "Daily Average",
    dataIndex: "dailyAverage",
    key: "dailyAverage",
    width: 130,
  },
  {
    title: "Daily Required",
    dataIndex: "dailyRequired",
    key: "dailyRequired",
    width: 130,
  },
  {
    title: "Updated",
    dataIndex: "lastUpdated",
    key: "lastUpdated",
  },
];

const RetreatListing: React.FC<{
  listRetreat: IResponseListRetreat[];
  isLoading: boolean;
}> = ({ listRetreat, isLoading }) => {
  return (
    <DivTableRetreat>
      <Table
        columns={columns}
        dataSource={listRetreat}
        scroll={{ x: "max-content", y: 1200 }}
        pagination={false}
        rowKey="id"
        loading={isLoading}
      />
    </DivTableRetreat>
  );
};

export default RetreatListing;
