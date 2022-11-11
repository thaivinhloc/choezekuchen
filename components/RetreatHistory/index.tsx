import { Radio, Table } from "antd"
import { useAuth } from "../../context/auth/AuthContext"
import React, { FC, useEffect, useMemo, useState } from "react"
import { getParticipantHistory } from "../../services/api"
import { DivTableRetreat } from "../Retreat/index.style"
import ModalRetreatDetail from "components/Retreat/components/ModalRetreatDetail"
import { TopCategoryWrapper } from "elements/styled/TopCategory"
import { Button } from "elements/Button"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { formatNumber } from "helper"

type Columns = {
  title: string
  dataIndex: string
  width?: string
  filters?: {
    text: string
    value: string
  }[]
  onFilter?: (value: string, record: any) => boolean
}
const DEFAULT_COLUMNS: Columns[] = [
  {
    title: "Retreat Name",
    dataIndex: "retreatName",
    width: "30%"
  },
  {
    title: "Recitation Number",
    dataIndex: "recitationNumber"
  },

  {
    title: "Completed Date",
    dataIndex: "completedAt"
  }
]

const RetreatHistory: FC<{ retreatId: number }> = ({ retreatId }) => {
  const router = useRouter()
  const { user } = useAuth()
  const { t } = useTranslation()
  const [dataSource, setDataSource] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [activeRetreat, setActiveRetreat] = useState<string>("")

  useEffect(() => {
    if (!user?.id) return
    handleGetParticipantsHistory(user.id, retreatId)
  }, [user])

  const handleGetParticipantsHistory = async (
    userId: number,
    retreatParentId: number
  ) => {
    try {
      setIsLoading(true)
      const result: any[] = await getParticipantHistory(
        userId,
        retreatParentId,
        router.locale
      )
      console.log({ result })

      setDataSource(result)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const listDataSource = useMemo(() => {
    return dataSource.map((data, idx) => ({
      ...data,
      id: idx,
      recitationNumber: formatNumber(data.recitationNumber)
    }))
  }, [dataSource])

  const DefaultColumns = useMemo(() => {
    let columns: any = DEFAULT_COLUMNS
    // const retreatNameUniq = listDataSource
    //   .map((row) => row.retreatName)
    //   .filter((v, i, a) => a.indexOf(v) === i)
    //   .map((retreatName: string) => ({
    //     text: retreatName,
    //     value: retreatName,
    //   }));
    // columns[0].filters = retreatNameUniq;
    return columns
  }, [listDataSource])

  const retreatNameUniq = listDataSource
    .map((row) => row.retreatName)
    .filter((v, i, a) => a.indexOf(v) === i)

  console.log("listDataSource", listDataSource)

  /* Render */
  return (
    <DivTableRetreat>
      <div className='container' style={{ marginBottom: 30 }}>
        <Button
          style={{ padding: 0, marginTop: 10, marginBottom: 10 }}
          type='link'
          icon={<ArrowLeftOutlined />}
          onClick={() => router.back()}
        >
          {t("Back", { ns: "common" })}
        </Button>
        {retreatNameUniq.length > 1 ? (
          <TopCategoryWrapper style={{ marginBottom: 32 }}>
            <Radio.Group
              value={activeRetreat}
              size='large'
              buttonStyle='solid'
              onChange={(e) => setActiveRetreat(e.target.value)}
            >
              {retreatNameUniq.map((retreatName) => {
                return (
                  <Radio.Button
                    onClick={
                      retreatName === activeRetreat
                        ? () => setActiveRetreat("")
                        : undefined
                    }
                    key={`${retreatName}-selector`}
                    value={retreatName}
                  >
                    {retreatName}
                  </Radio.Button>
                )
              })}
            </Radio.Group>
          </TopCategoryWrapper>
        ) : null}
        <Table
          style={{ marginTop: 16 }}
          // @ts-ignore
          columns={DEFAULT_COLUMNS.map((item) => ({
            ...item,
            title: t(item.title)
          }))}
          dataSource={[...listDataSource].filter((retreat) =>
            activeRetreat ? retreat.retreatName === activeRetreat : true
          )}
          pagination={false}
          rowKey='id'
          loading={isLoading}
        />
      </div>
      <ModalRetreatDetail />
    </DivTableRetreat>
  )
}

export default RetreatHistory
