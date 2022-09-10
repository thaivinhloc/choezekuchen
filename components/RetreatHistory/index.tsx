import { Table } from "antd";
import { useAuth } from "../../context/auth/AuthContext";
import React, { FC, useEffect, useMemo, useState } from "react";
import { getParticipantHistory } from "../../services/api";
import { DivTableRetreat } from "../Retreat/index.style";
import ModalRetreatDetail from "components/Retreat/components/ModalRetreatDetail";

type Columns = {
  title: string;
  dataIndex: string;
  width?: string;
  filters?: {
    text: string;
    value: string;
  }[];
  onFilter?: (value: string, record: any) => boolean;
};
const DEFAULT_COLUMNS: Columns[] = [
  {
    title: "Retreat Name",
    dataIndex: "retreatName",
    width: "30%",
    filters: [],
    onFilter: (value: string, record) => record.retreatName.includes(value),
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
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) return;
    handleGetParticipantsHistory(user.id);
  }, [user]);

  const handleGetParticipantsHistory = async (userId: number) => {
    try {
      setIsLoading(true);
      const result: any[] = await getParticipantHistory(userId);
      setDataSource(result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const listDataSource = useMemo(() => {
    return dataSource.map((data, idx) => ({ ...data, id: idx }));
  }, [dataSource]);

  const DefaultColumns = useMemo(() => {
    let columns: any = DEFAULT_COLUMNS;
    const retreatNameUniq = listDataSource
      .map((row) => row.retreatName)
      .filter((v, i, a) => a.indexOf(v) === i)
      .map((retreatName: string) => ({
        text: retreatName,
        value: retreatName,
      }));
    columns[0].filters = retreatNameUniq;
    return columns;
  }, [listDataSource]);

  /* Render */
  return (
    <DivTableRetreat>
      <div className="container">
        <Table
          columns={DEFAULT_COLUMNS as any}
          dataSource={listDataSource}
          pagination={false}
          rowKey="id"
          loading={isLoading}
        />
      </div>
      <ModalRetreatDetail />
    </DivTableRetreat>
  );
};

export default RetreatHistory;
