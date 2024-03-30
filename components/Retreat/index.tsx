// @ts-nocheck
import {
  ArrowLeftOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  notification,
  Radio,
  Row,
  Skeleton,
  Space,
  Tabs,
  Tooltip
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { THEME } from "common";
import { LOGIN, RETREAT_HISTORY } from "common/navigator";
import { TRetreat } from "definition";
import { RichText } from "elements/RichText";
import i18next from "i18next";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { createElement, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useApp } from "../../context/app/AppContext";
import { useAuth } from "../../context/auth/AuthContext";
import { formatNumber } from "../../helper";
import {
  getParticipants,
  getRetreatDetail,
  postRetreatRecitation
} from "../../services/api";
import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
  User
} from "../../services/retreatTypes";
import RetreatListing from "./components/RetreatListing";
import useRetreat, { TLanguage } from "./hooks/useRetreat";
import { DivRetreatWrapper } from "./index.style";
import { GridMedia } from "elements/Media";
import styled from "styled-components";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "@mui/icons-material";
import useEvents from "hook/useEvents";
import { EventItem } from "components/Event/EventItem";
import { TopCategoryWrapper } from "elements/styled/TopCategory";

const SubmitFormWrapper = styled.div`
  border-radius: 16px;
  background: #f1f2f2;
  padding: 16px 24px;
  margin-bottom: 50px;
`;

const DatePopupWrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  div {
    position: unset !important;
  }
  .ant-picker {
    display: none;
  }
  .ant-picker-dropdown {
    opacity: 1 !important;
    position: unset !important;
    width: 100% !important;
    .ant-picker-date-panel {
      width: 100% !important;
    }
    .ant-picker-panel-container {
      width: 100% !important;
      box-shadow: none !important;
      background: transparent !important;
      .ant-picker-panel {
        width: 100% !important;
        border-color: ${(props) => props.theme.primary} !important;
        .ant-picker-header {
          border: 0 !important;
          color: ${(props) => props.theme.primary} !important;
          font-weight: bold !important;
          font-size: 20px !important;
          button {
            span {
              &:before,
              &:after {
                width: 10px !important;
                height: 10px !important;
                border-width: 2px 0 0 2px !important;
                border-color: ${(props) => props.theme.primary} !important;
              }
            }
          }
        }
        .ant-picker-body {
          .ant-picker-content {
            width: 100% !important;
            tr {
              th,
              td {
                font-weight: 600 !important;
                &.ant-picker-cell {
                  .ant-picker-cell-inner {
                    border-radius: 50% !important;
                    &:hover {
                      border-radius: 50% !important;
                    }
                  }
                }
                &.ant-picker-cell-selected {
                  .ant-picker-cell-inner {
                    border-radius: 50% !important;
                  }
                }
                &.ant-picker-cell-in-view.ant-picker-cell-today {
                  .ant-picker-cell-inner {
                    position: relative !important;
                    &::before {
                      border-radius: 50% !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const { TabPane } = Tabs;

const PATH = process.env.REACT_APP_API_URL;
enum ETabPane {
  DETAIL = "detail",
  LISTING = "listing"
}
type TRenderItem = {
  title: string;
  content: string | number;
};
type TRetreatForm = {
  recitationNumber: number;
  completedAt: string | moment.Moment;
};

const Retreat: React.FC<{
  retreats: TRetreat[];
  onGetRetreats: () => Promise<TRetreat[]>;
  parent: TRetreat;
}> = ({ retreats, onGetRetreats, parent, isMobile }) => {
  const datePickerRef = useRef();
  const router = useRouter();
  const { user } = useAuth();
  const { upcomingEvents, getUpcomingEvents } = useEvents({
    locale: router.locale
  });
  const [form] = useForm<TRetreatForm>();
  const { t } = useTranslation("retreat");

  const currentLng = router.locale as any;

  /* All State */
  const [tab, setTab] = useState<ETabPane>(ETabPane.DETAIL);
  const [activeRetreat, setActiveRetreat] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  const [isLoadingRetreatDetail, setIsLoadingRetreatDetail] =
    useState<boolean>(false);

  const [listParticipant, setListParticipant] = useState<
    IResponseListRetreat[]
  >([]);

  const [retreatDetail, setRetreatDetail] = useState<IResponseRetreatDetail>();

  useEffect(() => {
    switch (tab) {
      case ETabPane.DETAIL:
        onGetRetreats()
          .then((res: TRetreat[]) => {
            if (res) {
              const response = res.sort((a, b) => a.id - b.id);
              setActiveRetreat(response[0].id);
            }
          })
          .catch((error) => console.log("---error", error));
        break;
      case ETabPane.LISTING:
        onGetRetreats();
        getListParticipant();
        break;
      default:
        break;
    }
  }, [tab, currentLng]);

  useEffect(() => {
    if (!activeRetreat) return;
    handleGetRetreatDetail(activeRetreat, currentLng);
  }, [activeRetreat, currentLng]);

  useEffect(() => {
    form.setFieldsValue({
      completedAt: moment()
    });
    getUpcomingEvents({ from: moment().toISOString() });
  }, []);

  const getListParticipant = async () => {
    try {
      setIsLoading(true);
      const result = await getParticipants({
        parentId: parent?.id,
        locale: router.locale || "en"
      });
      const data = result.map((item) => {
        const address = item.address?.split(",");

        const retreats = item.completed.reduce((prev: any, curr) => {
          prev[curr.retreatName] = {
            name: curr.retreatName,
            completed_fm: formatNumber(curr.completed),
            commited_fm: formatNumber(curr.commited),
            ...curr
          };
          return prev;
        }, {});

        return {
          city: address?.[0],
          country: address?.[address?.length - 1],
          ...retreats,
          ...item
        };
      });
      console.log("getListParticipant", { data });

      setListParticipant(data);
      return data;
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetRetreatDetail = async (
    retreatId: number,
    currentLng: string
  ) => {
    try {
      setIsLoading(true);
      const response = await getRetreatDetail(retreatId, currentLng);
      setRetreatDetail(response);
    } catch (error) {
      console.log("----failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [submitSuccess, setSubmitSuccess] = useState("");

  useEffect(() => {
    if (submitSuccess) {
      setTimeout(() => {
        setSubmitSuccess("");
      }, 3000);
    }
  }, [submitSuccess]);

  const handleSubmit = async (value: TRetreatForm) => {
    if (!activeRetreat) return;

    try {
      const values = await form.validateFields();
      const recitationNumber = Number(values.recitationNumber);
      const completedAt = moment(values.completedAt).format("YYYY-MM-DD");
      if (!user) {
        router.push(LOGIN, undefined, { locale: currentLng });
      } else {
        setIsLoadingSubmit(true);
        await postRetreatRecitation({
          recitationNumber,
          completedAt,
          retreatId: activeRetreat
        }).then(() => {
          handleGetRetreatDetail(activeRetreat, currentLng);
          form.setFieldsValue({
            recitationNumber: undefined
          });
          notification.success({
            message: "Success",
            description: `Submit successfully`
          });
        });
      }
    } catch (error) {
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  function handleChangeTab(key: string) {
    setTab(key as ETabPane);
    form.resetFields();
  }

  const RenderItemWrapper = styled.div`
    padding: 24px 16px;
    @media (min-width: 992px) {
      padding: 48px 16px;
    }
  `;

  /* Render */
  const RenderItem = ({ title, content }: TRenderItem) => {
    return (
      <RenderItemWrapper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          border: "1px solid #800000"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <strong
            style={{
              display: "block",
              fontSize: 36,
              color: THEME.primary,
              lineHeight: "36px"
            }}
          >
            {content}
          </strong>
          <strong style={{ fontSize: 20, color: "rgba(0,0,0,0.7)" }}>
            {title}
          </strong>
        </div>
      </RenderItemWrapper>
    );
  };

  const RenderItemSmaller = ({ title, content }: TRenderItem) => {
    return (
      <RenderItemWrapper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          border: "1px solid #800000"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <strong
            style={{
              display: "block",
              fontSize: 24,
              color: THEME.primary,
              lineHeight: "24px"
            }}
          >
            {content}
          </strong>
          <strong style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>
            {title}
          </strong>
        </div>
      </RenderItemWrapper>
    );
  };

  const userRetreat: User | undefined = retreatDetail?.user;
  const totalDue =
    Number(retreatDetail?.totalCommitment || 0) -
    Number(retreatDetail?.totalGroupCompleted || 0);

  console.log({ listParticipant, parent });

  return (
    <DivRetreatWrapper>
      <Container className='position-relative'>
        <Tabs activeKey={tab} onChange={handleChangeTab} className='hide-tabs'>
          <TabPane
            tab={
              <strong style={{ textTransform: "uppercase" }}>
                {parent?.name}
              </strong>
            }
            key={ETabPane.DETAIL}
          >
            <div>
              <TopCategoryWrapper style={{ marginBottom: isMobile ? 32 : 80 }}>
                <Radio.Group
                  value={activeRetreat}
                  size='large'
                  buttonStyle='solid'
                  onChange={(e) => {
                    setActiveRetreat(e.target.value);
                    form.resetFields();
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "nowrap"
                    }}
                  >
                    {retreats
                      .sort((a, b) =>
                        !b.order ? -1 : Number(a.order) - Number(b.order)
                      )
                      .map((retreat) => {
                        return (
                          <Radio.Button
                            key={`${retreat.id}-selector`}
                            value={retreat.id}
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {retreat.name}
                          </Radio.Button>
                        );
                      })}
                  </div>
                </Radio.Group>
              </TopCategoryWrapper>
              <SubmitFormWrapper>
                <Form
                  onFinish={handleSubmit}
                  form={form}
                  initialValues={{ completedAt: moment() }}
                >
                  <Row gutter={[24, 16]}>
                    <Col span={24} xl={{ span: 16 }}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 24
                          }}
                        >
                          <h2
                            style={{
                              color: THEME.primary,
                              fontSize: 24,
                              textTransform: "uppercase",
                              margin: 0,
                              lineHeight: "28px"
                            }}
                          >
                            {retreatDetail?.name || ""}
                          </h2>
                          {retreatDetail?.user && (
                            <Space
                              size={isMobile ? "small" : "large"}
                              direction={isMobile ? "vertical" : "horizontal"}
                            >
                              <a
                                onClick={() =>
                                  handleChangeTab(ETabPane.LISTING)
                                }
                                type='button'
                                className='link-underline'
                                style={{
                                  color: THEME.link,
                                  fontSize: 15
                                }}
                              >
                                {t("Participant List", {
                                  ns: "retreat"
                                })}
                              </a>
                              <Link href={`/retreat-history/${parent?.id}`}>
                                <a
                                  className='link-underline'
                                  style={{
                                    color: THEME.link,
                                    fontSize: 15
                                  }}
                                >
                                  {t("View history", {
                                    ns: "retreat"
                                  })}
                                </a>
                              </Link>
                            </Space>
                          )}
                        </div>
                        <div
                          style={{
                            height: 160,
                            position: "relative",
                            borderRadius: 16
                          }}
                        >
                          <Image
                            style={{ borderRadius: 16 }}
                            src={retreatDetail?.image?.url ?? ""}
                            {...retreatDetail?.image}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                          />
                        </div>
                        {retreatDetail?.user && (
                          <Row
                            gutter={[24, 16]}
                            style={{
                              marginTop: 24,
                              marginBottom: 24
                            }}
                          >
                            <Col span={24} xl={{ span: 8 }}>
                              <RenderItem
                                title={t("Group Committed", {
                                  ns: "retreat"
                                })}
                                content={formatNumber(
                                  retreatDetail?.totalCommitment || 0
                                )}
                              />
                            </Col>
                            <Col span={24} xl={{ span: 8 }}>
                              <RenderItem
                                title={t("Group Completed", {
                                  ns: "retreat"
                                })}
                                content={formatNumber(
                                  retreatDetail?.totalGroupCompleted || 0
                                )}
                              />
                            </Col>
                            <Col span={24} xl={{ span: 8 }}>
                              <RenderItem
                                title={t("Group Due", { ns: "retreat" })}
                                content={
                                  Number(retreatDetail?.due) < 0
                                    ? 0
                                    : formatNumber(retreatDetail?.due || 0)
                                }
                              />
                            </Col>
                            {/* {retreatDetail?.isGroup && (
                              <>
                                <Col span={24} xl={{ span: 12 }}>
                                  <RenderItem
                                    title={t("Group Daily Average", {
                                      ns: "retreat"
                                    })}
                                    content={userRetreat?.dailyAverage || 0}
                                  />
                                </Col>
                                <Col span={24} xl={{ span: 12 }}>
                                  <RenderItem
                                    title={t("Group Daily Required", {
                                      ns: "retreat"
                                    })}
                                    content={userRetreat?.dailyRequired || 0}
                                  />
                                </Col>
                              </>
                            )} */}
                          </Row>
                        )}
                          <Row
                            gutter={[24, 16]}
                            style={{
                              marginTop: 16,
                              marginBottom: 16
                            }}
                          >
                            <Col span={24} xl={{ span: 24 }}>
                              <RenderItemSmaller
                                title={t("Committed", {
                                  ns: "retreat"
                                })}
                                content={formatNumber(
                                  retreatDetail?.totalCommitment || 0
                                )}
                              />
                            </Col>
                            <Col span={24} xl={{ span: 6 }}>
                              <RenderItemSmaller
                                title={t("Completed", {
                                  ns: "retreat"
                                })}
                                content={formatNumber(
                                  userRetreat?.completed || 0
                                )}
                              />
                            </Col>
                            <Col span={24} xl={{ span: 6 }}>
                              <RenderItemSmaller
                                title={t("Due", { ns: "retreat" })}
                                content={
                                  Number(userRetreat?.due) < 0
                                    ? 0
                                    : formatNumber(userRetreat?.due || 0)
                                }
                              />
                            </Col>
                            {retreatDetail?.isGroup && (
                              <>
                                <Col span={24} xl={{ span: 6 }}>
                                  <RenderItemSmaller
                                    title={t("Daily Average", {
                                      ns: "retreat"
                                    })}
                                    content={userRetreat?.dailyAverage || 0}
                                  />
                                </Col>
                                <Col span={24} xl={{ span: 6 }}>
                                  <RenderItemSmaller
                                    title={t("Daily Required", {
                                      ns: "retreat"
                                    })}
                                    content={userRetreat?.dailyRequired || 0}
                                  />
                                </Col>
                              </>
                            )}
                          </Row>
                        <Row gutter={16}>
                          <Col span={16} md={{ span: 19 }}>
                            <Form.Item
                              style={{
                                display: "inline-block",
                                width: "100%",
                                marginBottom: 0
                              }}
                              name='committedNumber'
                              rules={[
                                {
                                  required: true,
                                  message: "Committed is Number"
                                },
                                {
                                  pattern: /^(?:\d*)$/,
                                  message: "Value should contain just number"
                                }
                              ]}
                            >
                              <Input
                                style={{
                                  width: "100%",
                                  borderRadius: "24px",
                                  paddingLeft: 24,
                                  paddingRight: 24
                                }}
                                size='large'
                                placeholder={t(
                                  "Digits only, no comma or period",
                                  {
                                    ns: "retreat"
                                  }
                                )}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={8} md={{ span: 5 }}>
                            <Form.Item>
                              <Button
                                shape='round'
                                type='primary'
                                className='w-100'
                                htmlType='submit'
                                size='large'
                                loading={isLoadingSubmit}
                              >
                                {t("Committed", { ns: "retreat" })}
                              </Button>
                            </Form.Item>
                          </Col>
                          {submitSuccess && (
                            <>
                              <Col span={16} md={{ span: 19 }} />
                              <Col span={8} md={{ span: 5 }}>
                                <p>{t(submitSuccess)}</p>
                              </Col>
                            </>
                          )}
                        </Row>
                        <Row gutter={16}>
                          <Col span={16} md={{ span: 19 }}>
                            <Form.Item
                              style={{
                                display: "inline-block",
                                width: "100%",
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
                                style={{
                                  width: "100%",
                                  borderRadius: "24px",
                                  paddingLeft: 24,
                                  paddingRight: 24
                                }}
                                size='large'
                                placeholder={t(
                                  "Digits only, no comma or period",
                                  {
                                    ns: "retreat"
                                  }
                                )}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={8} md={{ span: 5 }}>
                            <Form.Item>
                              <Button
                                shape='round'
                                type='primary'
                                className='w-100'
                                htmlType='submit'
                                size='large'
                                loading={isLoadingSubmit}
                              >
                                {t("Submit", { ns: "retreat" })}
                              </Button>
                            </Form.Item>
                          </Col>
                          {submitSuccess && (
                            <>
                              <Col span={16} md={{ span: 19 }} />
                              <Col span={8} md={{ span: 5 }}>
                                <p>{t(submitSuccess)}</p>
                              </Col>
                            </>
                          )}
                        </Row>
                      </div>
                    </Col>
                    <Col span={24} xl={{ span: 8 }}>
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: 16,
                          height: "100%",
                          paddingBottom: isMobile ? 24 : 0
                        }}
                      >
                        <DatePopupWrapper>
                          <Form.Item
                            name='completedAt'
                            label=''
                            style={{
                              display: "inline-block",
                              width: "100%",
                              marginBottom: 0,
                              paddingLeft: "4px"
                            }}
                          >
                            <DatePicker
                              showToday={false}
                              open={true}
                              getPopupContainer={() => {
                                return datePickerRef.current ?? null;
                              }}
                              className='h-100'
                              size='large'
                              format='DD/MM/YYYY'
                              allowClear={false}
                              disabledDate={(current) => {
                                return (
                                  moment(retreatDetail?.dateStart) >= current ||
                                  moment(retreatDetail?.dateEnd) <= current
                                );
                              }}
                            />
                          </Form.Item>
                          <div ref={datePickerRef} />
                        </DatePopupWrapper>
                        <div
                          style={{
                            fontSize: 12,
                            padding: "8px 24px 0"
                          }}
                        >
                          <i>
                            {t(
                              "(*) Please choose date and submit the number for your record"
                            )}
                          </i>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </SubmitFormWrapper>
              <Row gutter={[24, 16]}>
                <Col span={24} xl={{ span: 16 }}>
                  {isLoading ? (
                    <Skeleton active />
                  ) : (
                    <RichText content={retreatDetail?.description || ""} />
                  )}
                </Col>
                <Col span={24} xl={{ span: 8 }}>
                  <div
                    style={{
                      borderRadius: 16,
                      background: "#f1f2f2",
                      padding: "24px"
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 24px",
                        color: THEME.primary
                      }}
                    >
                      {t("Upcoming Events")}
                    </h3>
                    <Row gutter={[24, 24]}>
                      {upcomingEvents?.map((eventItem) => (
                        <Col span={24}>
                          <EventItem {...eventItem} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
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
              <Button
                style={{
                  padding: 0,
                  marginTop: 10,
                  marginBottom: 20,
                  fontWeight: "bold",
                  fontSize: 20
                }}
                type='link'
                icon={<ArrowLeftOutlined />}
                onClick={() => handleChangeTab(ETabPane.DETAIL)}
              >
                {t("Back", { ns: "common" })}
              </Button>
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
  );
};

export default Retreat;
