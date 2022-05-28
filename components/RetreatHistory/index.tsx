import { Table } from "antd";
import { useAuth } from "../../context/auth/AuthContext";
import React, { FC, useEffect, useState } from "react";
import { getParticipantHistory } from "../../services/api";
import { DivTableRetreat } from "../Retreat/index.style";

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

const RetreatHistory: FC<{}> = () => {
  const { user } = useAuth();
  const [dataSource, setDataSource] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) return;
    handleGetParticipantsHistory(user.id);
  }, [user]);

  const handleGetParticipantsHistory = async (userId: number) => {
    try {
      setIsLoading(true);
      const result = await getParticipantHistory(userId);
      setDataSource(result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  /* Render */

  return (
    <DivTableRetreat>
      <div className="container">
        <Table
          columns={defaultColumns}
          dataSource={dataSource}
          pagination={false}
          rowKey="id"
          loading={isLoading}
        />
      </div>
    </DivTableRetreat>
  );
};

export default RetreatHistory;
