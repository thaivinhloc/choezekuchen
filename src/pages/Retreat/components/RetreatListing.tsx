import { Table } from "antd";
import React from "react";
import { DivTableRetreat } from "../index.style";

const dataSource = [
  {
    key: "1",
    name: "Nguyen Thi Lan Chau",
    city: "Ho Chi Minh",
    country: "Vietnam",
  },
];

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name",
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
    dataIndex: "daily-average",
    key: "daily-average",
  },
  {
    title: "Daily Required",
    dataIndex: "daily-required",
    key: "daily-required",
  },
  {
    title: "Updated",
    dataIndex: "updated",
    key: "updated",
  },
  
];

const RetreatListing = () => {
  return (
    <DivTableRetreat>
      <Table dataSource={dataSource} columns={columns} />
    </DivTableRetreat>
  );
};

export default RetreatListing;
