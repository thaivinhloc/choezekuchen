/* eslint-disable @next/next/no-img-element */
import { DownOutlined } from "@ant-design/icons"
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  notification,
  Row,
  Skeleton,
  Tabs,
  Tooltip
} from "antd"
import { useForm } from "antd/lib/form/Form"
import { THEME } from "common"
import { LOGIN, RETREAT_HISTORY } from "common/navigator"
import { TRetreat } from "definition"
import { RichText } from "elements/RichText"
import i18next from "i18next"
import moment from "moment"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useApp } from "../../context/app/AppContext"
import { useAuth } from "../../context/auth/AuthContext"
import { formatNumber } from "../../helper"
import {
  getParticipants,
  getRetreatDetail,
  postRetreatRecitation
} from "../../services/api"
import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
  User
} from "../../services/retreatTypes"
import RetreatListing from "./components/RetreatListing"
import useRetreat, { TLanguage } from "./hooks/useRetreat"
import { DivRetreatWrapper } from "./index.style"

const { TabPane } = Tabs

const PATH = process.env.REACT_APP_API_URL
enum ETabPane {
  DETAIL = "detail",
  LISTING = "listing"
}
type TRenderItem = {
  title: string
  content: string | number
}
type TRetreatForm = {
  recitationNumber: number
  completedAt: string | moment.Moment
}

const Retreat: React.FC<{
  retreats: TRetreat[]
  onGetRetreats: () => Promise<TRetreat[]>
  parent: TRetreat
}> = ({ retreats, onGetRetreats, parent }) => {
  const router = useRouter()
  const { user } = useAuth()
  const [form] = useForm<TRetreatForm>()
  const { t } = useTranslation("retreat")

  const currentLng = router.locale as any

  /* All State */
  const [tab, setTab] = useState<ETabPane>(ETabPane.DETAIL)
  const [activeRetreat, setActiveRetreat] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false)
  const [isLoadingRetreatDetail, setIsLoadingRetreatDetail] =
    useState<boolean>(false)

  const [listParticipant, setListParticipant] = useState<
    IResponseListRetreat[]
  >([])

  const [retreatDetail, setRetreatDetail] = useState<IResponseRetreatDetail>()

  useEffect(() => {
    switch (tab) {
      case ETabPane.DETAIL:
        onGetRetreats()
          .then((res: TRetreat[]) => {
            if (res) {
              const response = res.sort((a, b) => a.id - b.id)
              setActiveRetreat(response[0].id)
            }
          })
          .catch((error) => console.log("---error", error))
        break
      case ETabPane.LISTING:
        onGetRetreats()
        getListParticipant()
        break
      default:
        break
    }
  }, [tab, currentLng])

  useEffect(() => {
    if (!activeRetreat) return
    handleGetRetreatDetail(activeRetreat, currentLng)
  }, [activeRetreat, currentLng])

  useEffect(() => {
    form.setFieldsValue({
      completedAt: moment()
    })
  }, [])

  const getListParticipant = async () => {
    try {
      setIsLoading(true)
      const result = await getParticipants({ parentId: parent?.id, locale: router.locale || "en" })
      const data = result.map((item) => {
        const address = item.address?.split(",")

        const retreats = item.completed.reduce((prev: any, curr) => {
          prev[curr.retreatName] = {
            name: curr.retreatName,
            ...curr
          }
          return prev
        }, {})

        return {
          city: address?.[0],
          country: address?.[address?.length - 1],
          ...retreats,
          ...item
        }
      })

      setListParticipant(data)
      return data
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetRetreatDetail = async (
    retreatId: number,
    currentLng: string
  ) => {
    try {
      setIsLoading(true)
      const response = await getRetreatDetail(retreatId, currentLng)
      setRetreatDetail(response)
    } catch (error) {
      console.log("----failed", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (value: TRetreatForm) => {
    if (!activeRetreat) return

    try {
      const values = await form.validateFields()
      const recitationNumber = Number(values.recitationNumber)
      const completedAt = moment(values.completedAt).format("YYYY-MM-DD")
      if (!user) {
        router.push(LOGIN, undefined, { locale: currentLng })
      } else {
        setIsLoadingSubmit(true)
        await postRetreatRecitation({
          recitationNumber,
          completedAt,
          retreatId: activeRetreat
        }).then(() => {
          handleGetRetreatDetail(activeRetreat, currentLng)
          form.setFieldsValue({
            recitationNumber: undefined
          })
          notification.success({
            message: "Success",
            description: `Submit successfully`
          })
        })
      }
    } catch (error) {
    } finally {
      setIsLoadingSubmit(false)
    }
  }

  function handleChangeTab(key: string) {
    setTab(key as ETabPane)
    form.resetFields()
  }

  /* Render */
  const RenderItem = ({ title, content }: TRenderItem) => {
    return (
      <Row className='retreat-row'>
        <Col span={12}>
          <div className='retreat-label'>{title}</div>
        </Col>
        <Col span={12}>
          <div className='retreat-content ellipsis'>
            <Tooltip title={content}>{content}</Tooltip>
          </div>
        </Col>
      </Row>
    )
  }

  const userRetreat: User | undefined = retreatDetail?.user
  const totalDue =
    Number(retreatDetail?.totalCommitment || 0) -
    Number(retreatDetail?.totalGroupCompleted || 0)

  console.log({ listParticipant, parent })

  return (
    <DivRetreatWrapper>
      <Container className='position-relative'>
        <Tabs defaultActiveKey={tab} onChange={handleChangeTab}>
          <TabPane
            tab={
              <strong style={{ textTransform: "uppercase" }}>
                {parent?.name}
              </strong>
            }
            key={ETabPane.DETAIL}
          >
            <Row gutter={36} style={{ margin: 0 }}>
              <Col
                span={8}
                xs={24}
                lg={8}
                xl={7}
                className='retreat__right'
                style={{ padding: 0 }}
              >
                <div className='retreat__right-form'>
                  <div className='box-title d-flex justify-content-between align-items-center'>
                    {retreatDetail?.name || ""}
                  </div>
                  <div className='retreat-submit'>
                    <Form onFinish={handleSubmit} form={form}>
                      <Form.Item style={{ marginBottom: 10 }}>
                        <Form.Item
                          style={{
                            display: "inline-block",
                            width: "60%",
                            marginBottom: 0
                          }}
                          name='recitationNumber'
                          rules={[
                            {
                              required: true,
                              message: "Recitation is Number"
                            },
                            {
                              pattern: /^(?:\d*)$/,
                              message: "Value should contain just number"
                            }
                          ]}
                        >
                          <Input
                            size='large'
                            placeholder={t("Digits only, no comma or period", {
                              ns: "retreat"
                            })}
                          />
                        </Form.Item>
                        <Form.Item
                          name='completedAt'
                          label=''
                          style={{
                            display: "inline-block",
                            width: "40%",
                            marginBottom: 0,
                            paddingLeft: "4px"
                          }}
                          initialValue={moment()}
                        >
                          <DatePicker
                            className='h-100'
                            size='large'
                            style={{ height: "47px" }}
                            format='MM/DD/YYYY'
                            allowClear={false}
                            disabledDate={(current) => {
                              return (
                                moment(retreatDetail?.dateStart) >= current ||
                                moment(retreatDetail?.dateEnd) <= current
                              )
                            }}
                          />
                        </Form.Item>
                      </Form.Item>
                      <Row>
                        <Button
                          type='primary'
                          className='w-100'
                          htmlType='submit'
                          size='large'
                          loading={isLoadingSubmit}
                        >
                          {t("Submit", { ns: "retreat" })}
                        </Button>
                      </Row>
                    </Form>
                  </div>
                  {retreatDetail?.user && (
                    <>
                      <Row className='box-title d-flex justify-content-between'>
                        {userRetreat?.name || ""}
                        <Link href={`/retreat-history/${parent?.id}`}>
                          <a
                            className='link-underline'
                            style={{ color: THEME.link, fontSize: 15 }}
                          >
                            {t("View history", { ns: "retreat" })}
                          </a>
                        </Link>
                      </Row>

                      <div className='box-content'>
                        <RenderItem
                          title={t("Committed", { ns: "retreat" }) + ":"}
                          content={formatNumber(userRetreat?.commited || 0)}
                        />
                        <RenderItem
                          title={t("Completed", { ns: "retreat" }) + ":"}
                          content={formatNumber(userRetreat?.completed || 0)}
                        />
                        <RenderItem
                          title={t("Due", { ns: "retreat" }) + ":"}
                          content={
                            Number(userRetreat?.due) < 0
                              ? 0
                              : formatNumber(userRetreat?.due || 0)
                          }
                        />
                        {retreatDetail.isGroup && (
                          <>
                            <RenderItem
                              title={
                                t("Daily Average", { ns: "retreat" }) + ":"
                              }
                              content={userRetreat?.dailyAverage || 0}
                            />
                            <RenderItem
                              title={
                                t("Daily Required", { ns: "retreat" }) + ":"
                              }
                              content={userRetreat?.dailyRequired || 0}
                            />
                          </>
                        )}
                        <RenderItem
                          title={t("Last Updated", { ns: "retreat" }) + ":"}
                          content={userRetreat?.lastUpdated || 0}
                        />
                      </div>
                    </>
                  )}

                  {retreatDetail?.isGroup && (
                    <div>
                      <div className='box-title'>Group Commitment</div>
                      <div className='box-content'>
                        <RenderItem
                          title={t("Total commitment", { ns: "retreat" }) + ":"}
                          content={formatNumber(
                            retreatDetail?.totalCommitment || 0
                          )}
                        />
                        <RenderItem
                          title='No. of Participants:'
                          content={formatNumber(
                            retreatDetail?.totalParticipants || 0
                          )}
                        />
                        <RenderItem
                          title='Group Completed:'
                          content={formatNumber(
                            retreatDetail?.totalGroupCompleted || 0
                          )}
                        />
                        <RenderItem
                          title='Due:'
                          content={
                            Number(totalDue) < 0 ? 0 : formatNumber(totalDue)
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Col>
              <Col span={17} xs={24} lg={16} xl={17} className='retreat-left'>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "8px 16px",
                    border: "1px solid #DFE2E7",
                    borderRadius: 8
                  }}
                >
                  <Tabs
                    activeKey={activeRetreat?.toString()}
                    className='w-100 center-tabs'
                    onChange={(key) => {
                      setActiveRetreat(Number(key))
                    }}
                  >
                    {retreats
                      .sort((a, b) =>
                        !b.order ? -1 : Number(a.order) - Number(b.order)
                      )
                      .map((retreat) => (
                        <TabPane
                          tab={<strong>{retreat.name}</strong>}
                          key={retreat.id}
                        >
                          <div
                            className='text-center'
                            style={{ marginTop: "20px" }}
                          >
                            {PATH && retreatDetail?.image && (
                              <img
                                src={PATH + retreatDetail?.image?.url}
                                alt=''
                              />
                            )}
                          </div>
                          <br />
                          <br />
                          {isLoading ? (
                            <Skeleton active />
                          ) : (
                            <RichText
                              content={retreatDetail?.description || ""}
                            />
                          )}
                        </TabPane>
                      ))}
                  </Tabs>
                </div>
              </Col>
            </Row>
          </TabPane>
          {user && (
            <TabPane
              tab={
                <strong style={{ textTransform: "uppercase" }}>
                  {t("Participant List", { ns: "retreat" })}
                </strong>
              }
              key={ETabPane.LISTING}
            >
              <div className='text-center'>
                <RetreatListing
                  listParticipant={listParticipant}
                  isLoading={isLoading}
                  retreats={retreats}
                  parentRetreatId={parent?.id}
                />
              </div>
            </TabPane>
          )}
          {/* <div style={{ position: "absolute", top: 0, right: 10 }}>
            <strong style={{ color: "#000" }}>{retreatDetail?.name}</strong>
          </div> */}
        </Tabs>
        {/* <div
            className="d-none d-lg-block"
            style={{ position: "absolute", top: 0, right: 20 }}
          >
            <span className="bold">
              {t("Retreat Ngondro", { ns: "retreat" }).toUpperCase()}
            </span>
          </div> */}
      </Container>
    </DivRetreatWrapper>
  )
}

export default Retreat
