import { Table, Tooltip } from "antd";
import LinkComponent from "components/Link";
import { useAuth } from "context/auth/AuthContext";
import i18next from "i18next";
import React, { useEffect, useMemo, useState } from "react";
import { getParticipants } from "services/api";
import { IResponseListRetreat, IUser } from "../../../services/retreatTypes";
import useRetreat from "../hooks/useRetreat";
import { DivTableRetreat } from "../index.style";

const RetreatListing: React.FC<{
  listParticipant: IResponseListRetreat[];
  isLoading: boolean;
}> = ({ listParticipant, isLoading }) => {
  const { user } = useAuth();

  const { listRetreat, getActiveRetreat } = useRetreat(i18next.language as any);

  useEffect(() => {
    getActiveRetreat();
  }, []);

  const DEFAULT_COLUMNS = [
    {
      title: "Full Name",
      dataIndex: "name",
      render: (name: string, record: any) => {
        if (record.id === user?.id) {
          return (
            <LinkComponent href="/retreat-history">
              <a style={{ textDecoration: "underline" }}>{name}</a>
            </LinkComponent>
          );
        } else {
          return <span>{name}</span>;
        }
      },
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

  const columns = useMemo(() => {
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
              {percent === Infinity ? 100 : Math.abs(percent).toFixed(2)}%)
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
      ...DEFAULT_COLUMNS,
      ...columnsRetreat,
      {
        title: "Updated",
        dataIndex: "lastUpdated",
        key: "lastUpdated",
      },
    ];
  }, [listRetreat]);

  /* Render */
  return (
    <DivTableRetreat>
      <Table
        columns={columns}
        dataSource={listParticipant.sort((participant) =>
          participant.id === user?.id ? -1 : 1
        )}
        // scroll={{ x: "max-content", y: 1200 }}
        pagination={false}
        rowKey="id"
        loading={isLoading}
      />
    </DivTableRetreat>
  );
};

export default RetreatListing;
