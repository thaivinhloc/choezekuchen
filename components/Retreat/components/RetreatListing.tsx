import { Table } from "antd";
import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { getParticipants } from "services/api";
import { IResponseListRetreat, IUser } from "../../../services/retreatTypes";
import useRetreat from "../hooks/useRetreat";
import { DivTableRetreat } from "../index.style";

const defaultColumns = [
  {
    title: "Full Name",
    dataIndex: "name",
    fixed: true,
  },
  {
    title: "City",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "Country",
    dataIndex: "country",
    width: 120,
  },
];

const RetreatListing: React.FC<{
  listParticipant: IResponseListRetreat[];
  isLoading: boolean;
}> = ({ listParticipant, isLoading }) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [listParticipant, setListParticipant] = useState<
  //   IResponseListRetreat[]
  // >([]);

  const { listRetreat, getActiveRetreat } = useRetreat(i18next.language as any);

  useEffect(() => {
    getActiveRetreat();
  }, []);

  const columns = React.useMemo(() => {
    let columnsRetreat;
    if (listRetreat.length > 1) {
      columnsRetreat = listRetreat.map((retreat) => ({
        title: retreat.name,
        dataIndex: retreat.name,
        width: 200,
        render: (retreat: any) => {
          if (!retreat) return <span>0%</span>;
          const percent = (retreat?.completed / retreat?.commited) * 100;

          return (
            <span>
              {retreat?.completed} (
              {percent === Infinity ? 100 : Math.abs(percent)}%)
            </span>
          );
        },
      }));
    } else {
      columnsRetreat = [
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
            if (Array.isArray(opt.completed)) return <span />;
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
      ];
    }
    return [
      ...defaultColumns,
      ...columnsRetreat,
      {
        title: "Updated",
        dataIndex: "lastUpdated",
        key: "lastUpdated",
      },
    ];
  }, [listRetreat]);
  console.log("listParticipant", { listParticipant });

  /* Render */
  return (
    <DivTableRetreat>
      <Table
        columns={columns}
        dataSource={listParticipant}
        scroll={{ x: "max-content", y: 1200 }}
        pagination={false}
        rowKey="id"
        loading={isLoading}
      />
    </DivTableRetreat>
  );
};

export default RetreatListing;
