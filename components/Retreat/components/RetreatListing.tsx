import { Table, Tooltip } from "antd"
import LinkComponent from "components/Link"
import { useAuth } from "context/auth/AuthContext"
import { TRetreat } from "definition"
import i18next from "i18next"
import React, { useEffect, useMemo, useState } from "react"
import { useTranslation } from "next-i18next"
import { getParticipants } from "services/api"
import { IResponseListRetreat, IUser } from "../../../services/retreatTypes"
import useRetreat from "../hooks/useRetreat"
import { DivTableRetreat } from "../index.style"

const RetreatListing: React.FC<{
  listParticipant: IResponseListRetreat[]
  isLoading: boolean
  retreats: TRetreat[]
  parentRetreatId: number
}> = ({ listParticipant, isLoading, retreats, parentRetreatId }) => {
  const { user } = useAuth()
  const { t } = useTranslation()
  const DEFAULT_COLUMNS = [
    {
      title: t("No."),
      dataIndex: "no"
    },
    {
      title: t("Full Name"),
      dataIndex: "name",
      render: (name: string, record: any) => {
        if (record.id === user?.id) {
          return (
            <LinkComponent href={`/retreat-history/${parentRetreatId}`}>
              <a
                style={{
                  textDecoration: "underline",
                  fontWeight: 600,
                  color: "#A51818"
                }}
              >
                {name}
              </a>
            </LinkComponent>
          )
        } else {
          return <span>{name}</span>
        }
      }
    },
    {
      title: t("City"),
      dataIndex: "city",
      render: (text: string) => {
        return <span style={{ whiteSpace: "nowrap" }}>{text}</span>
      }
    },
    {
      title: t("Country"),
      dataIndex: "country"
    }
  ]

  const columns = useMemo(() => {
    let columnsRetreat
    if (retreats.length > 1) {
      columnsRetreat = retreats.map((retreat) => ({
        title: retreat.name,
        dataIndex: retreat.name,
        width: 200,
        render: (retreat: any) => {
          if (!retreat) return <span>0%</span>
          const percent = (retreat?.completed / retreat?.commited) * 100
          return (
            <span style={{ whiteSpace: "nowrap" }}>
              {retreat?.completed_fm} (
              {percent === Infinity ? 100 : Math.abs(percent).toFixed(2)}%)
            </span>
          )
        }
      }))
    } else {
      columnsRetreat = [
        {
          title: "Commited",
          dataIndex: "commited_fm",
          key: "commited",
          width: 110
        },
        {
          title: "Completed (%)",
          dataIndex: "completed_fm",
          key: "completed",
          width: 140,
          render: (text: string, opt: any) => {
            if (Array.isArray(opt.completed)) return <span />
            const percent = (opt?.completed / opt?.commited) * 100
            return (
              <span style={{ whiteSpace: "nowrap" }}>
                {text} ({percent === Infinity ? 100 : Math.abs(percent)}%)
              </span>
            )
          }
        },
        {
          title: "Daily Average",
          dataIndex: "dailyAverage",
          key: "dailyAverage",
          width: 130
        },
        {
          title: "Daily Required",
          dataIndex: "dailyRequired",
          key: "dailyRequired",
          width: 130
        }
      ]
    }
    return [
      ...DEFAULT_COLUMNS,
      ...columnsRetreat,
      {
        title: "Updated",
        dataIndex: "lastUpdated",
        key: "lastUpdated"
      }
    ]
  }, [retreats])

  /* Render */
  return (
    <DivTableRetreat className='participant-list'>
      <Table
        columns={columns}
        dataSource={listParticipant
          .sort((participant) => (participant.id === user?.id ? -1 : 1))
          .map((item, idx) => ({ ...item, no: idx + 1 }))}
        // scroll={{ x: "max-content", y: 1200 }}
        pagination={false}
        rowKey='id'
        loading={isLoading}
      />
    </DivTableRetreat>
  )
}

export default RetreatListing
