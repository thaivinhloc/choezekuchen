import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Row,
  Skeleton,
  Tabs,
  Tooltip,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useApp } from "../../context/app/AppContext";
import { useAuth } from "../../context/auth/AuthContext";
import {
  getParticipants,
  getRetreatDetail,
  getRetreatDetailById,
  postRetreatRecitation,
} from "../../services/api";
import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
  User,
} from "../../services/retreatTypes";
import RetreatListing from "./components/RetreatListing";
import { DivRetreatWrapper } from "./index.style";
import { formatNumber } from "../../helper";
import { useRouter } from "next/router";
import i18next from "i18next";
import { LOGIN, RETREAT_HISTORY } from "common/navigator";
import moment from "moment";
import Link from "components/Link";
import { DownOutlined } from "@ant-design/icons";
import useRetreat from "./hooks/useRetreat";

const { TabPane } = Tabs;

const PATH = process.env.REACT_APP_API_URL;
enum ETabPane {
  DETAIL = "detail",
  LISTING = "listing",
}
type TRenderItem = {
  title: string;
  content: string | number;
};
type TRetreatForm = {
  recitationNumber: number;
  completedAt: string | moment.Moment;
};

const Retreat: React.FC<{}> = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [form] = useForm<TRetreatForm>();

  const currentLng = i18next.language;
  const { listRetreat, isLoading: loading, getActiveRetreat } = useRetreat();
  const { setTitleBanner } = useApp();

  /* All State */
  const [tab, setTab] = useState<ETabPane>(ETabPane.DETAIL);
  const [activeRetreat, setActiveRetreat] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);

  const [listParticipant, setListParticipant] = useState<
    IResponseListRetreat[]
  >([]);

  const [retreatDetail, setRetreatDetail] = useState<IResponseRetreatDetail>();

  // const [dataRetreat, setDataRetreat] = useState<IResponseRetreat | null>(null);
  // const [listRetreat, setListRetreat] = useState<IResponseListRetreat[]>([]);

  useEffect(() => {
    switch (tab) {
      case ETabPane.DETAIL:
        getActiveRetreat()
          .then((res: IResponseActiveRetreat[]) => {
            if (res) {
              const response = res.sort((a, b) => a.id - b.id);
              console.log("response", response);

              setActiveRetreat(response[0].id);
            }
          })
          .catch((error) => console.log("---error", error));
        setTitleBanner("RETREAT");
        break;
      case ETabPane.LISTING:
        getActiveRetreat();
        getListParticipant();
        setTitleBanner("PARTICIPANT LISTING");
        break;
      default:
        break;
    }
  }, [tab]);

  useEffect(() => {
    if (!activeRetreat) return;
    handleGetRetreatDetail(activeRetreat);
  }, [activeRetreat]);

  useEffect(() => {
    form.setFieldsValue({
      completedAt: moment(),
    });
  }, []);

  const getListParticipant = async () => {
    try {
      setIsLoading(true);
      const result = await getParticipants();
      const data = result.map((item) => {
        const address = item.address?.split(",");

        const retreats = item.completed.reduce((prev: any, curr) => {
          prev[curr.retreatName] = {
            name: curr.retreatName,
            ...curr,
          };
          return prev;
        }, {});

        return {
          city: address?.[0],
          country: address?.[address?.length - 1],
          ...retreats,
          ...item,
        };
      });

      setListParticipant(data);
      return data;
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetRetreatDetail = async (retreatId: number) => {
    try {
      setIsLoading(true);
      const response = await getRetreatDetail(retreatId);
      setRetreatDetail(response);
    } catch (error) {
      console.log("----failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (value: TRetreatForm) => {
    if (!activeRetreat) return;

    try {
      const values = await form.validateFields();
      const recitationNumber = Number(values.recitationNumber);
      const completedAt = moment(values.completedAt).format("YYYY-MM-DD");
      if (!user) {
        // navigate("/login");
      } else {
        setIsLoadingSubmit(true);
        await postRetreatRecitation({
          recitationNumber,
          completedAt,
          retreatId: activeRetreat,
        }).then(() => {
          handleGetRetreatDetail(activeRetreat);
          form.setFieldsValue({
            recitationNumber: undefined,
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

  /* Render */
  const RenderItem = ({ title, content }: TRenderItem) => {
    return (
      <Row className="retreat-row">
        <Col span={12}>
          <div className="retreat-label">{title}</div>
        </Col>
        <Col span={12}>
          <div className="retreat-content ellipsis">
            <Tooltip title={content}>{content}</Tooltip>
          </div>
        </Col>
      </Row>
    );
  };

  const userRetreat: User | undefined = retreatDetail?.user;
  const totalDue =
    Number(retreatDetail?.totalCommitment || 0) -
    Number(retreatDetail?.totalGroupCompleted || 0);

  const retreats = React.useMemo(() => {
    const retreats = listRetreat.map((retreat) => ({
      key: retreat.id,
      label: retreat.name,
      disabled: retreat.id === activeRetreat,
    }));
    return (
      <Menu
        onClick={(evt) => {
          setActiveRetreat(Number(evt.key));
        }}
        items={retreats}
      />
    );
  }, [activeRetreat, listRetreat]);

  return (
    <DivRetreatWrapper>
      <div className="container">
        <Tabs defaultActiveKey={tab} onChange={handleChangeTab}>
          <TabPane tab={<strong>Retreat</strong>} key={ETabPane.DETAIL}>
            <Row gutter={32}>
              <Col span={8} xs={24} lg={8} xl={7} className="retreat__right">
                <div className="retreat__right-form">
                  <Dropdown
                    overlay={retreats}
                    trigger={["click"]}
                    placement="bottomCenter"
                  >
                    <div className="box-title d-flex justify-content-between align-items-center">
                      {retreatDetail?.name || ""}
                      <DownOutlined style={{ color: "#fff" }} />
                    </div>
                  </Dropdown>
                  <div className="retreat-submit">
                    <Form onFinish={handleSubmit} form={form}>
                      <Form.Item style={{ marginBottom: 10 }}>
                        <Form.Item
                          style={{
                            display: "inline-block",
                            width: "60%",
                            marginBottom: 0,
                          }}
                          name="recitationNumber"
                          rules={[
                            {
                              required: true,
                              message: "Recitation is Number",
                            },
                            {
                              pattern: /^(?:\d*)$/,
                              message: "Value should contain just number",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            placeholder="Digits only, no comma or period"
                          />
                        </Form.Item>
                        <Form.Item
                          name="completedAt"
                          label=""
                          style={{
                            display: "inline-block",
                            width: "40%",
                            marginBottom: 0,
                            paddingLeft: "4px",
                          }}
                        >
                          <DatePicker
                            className="h-100"
                            size="large"
                            style={{ height: "47px" }}
                            format="MM/DD/YYYY"
                            allowClear={false}
                            defaultValue={moment()}
                            disabledDate={(current) => {
                              return (
                                moment(retreatDetail?.dateStart) >= current ||
                                moment(retreatDetail?.dateEnd) <= current
                              );
                            }}
                          />
                        </Form.Item>
                      </Form.Item>
                      <Row>
                        <Button
                          type="primary"
                          className="w-100"
                          htmlType="submit"
                          size="large"
                          loading={isLoadingSubmit}
                        >
                          Submit
                        </Button>
                      </Row>
                    </Form>
                  </div>
                  {retreatDetail?.user && (
                    <>
                      <Row className="box-title d-flex justify-content-between">
                        {userRetreat?.name || ""}
                        <Link href={RETREAT_HISTORY}>
                          <a className="link-underline">View history</a>
                        </Link>
                      </Row>

                      <div className="box-content">
                        <RenderItem
                          title="Commited:"
                          content={formatNumber(userRetreat?.commited || 0)}
                        />
                        <RenderItem
                          title="Completed:"
                          content={formatNumber(userRetreat?.completed || 0)}
                        />
                        <RenderItem
                          title="Due:"
                          content={
                            Number(userRetreat?.due) < 0
                              ? 0
                              : formatNumber(userRetreat?.due || 0)
                          }
                        />
                        <RenderItem
                          title="Daily Everage:"
                          content={userRetreat?.dailyAverage || 0}
                        />
                        <RenderItem
                          title="Daily Required:"
                          content={userRetreat?.dailyRequired || 0}
                        />
                        <RenderItem
                          title="Last Updated:"
                          content={userRetreat?.lastUpdated || 0}
                        />
                      </div>
                    </>
                  )}

                  {retreatDetail?.isGroup && (
                    <div>
                      <div className="box-title">Group Commitment</div>
                      <div className="box-content">
                        <RenderItem
                          title="Total Commitment:"
                          content={formatNumber(
                            retreatDetail?.totalCommitment || 0
                          )}
                        />
                        <RenderItem
                          title="No. of Participants:"
                          content={formatNumber(
                            retreatDetail?.totalParticipants || 0
                          )}
                        />
                        <RenderItem
                          title="Group Completed:"
                          content={formatNumber(
                            retreatDetail?.totalGroupCompleted || 0
                          )}
                        />
                        <RenderItem
                          title="Due:"
                          content={
                            Number(totalDue) < 0 ? 0 : formatNumber(totalDue)
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Col>
              <Col span={17} xs={24} lg={16} xl={17} className="retreat-left">
                <div>
                  {loading ? (
                    <Skeleton active />
                  ) : (
                    <h3 className="bold text-center title">
                      {retreatDetail?.name || ""}
                    </h3>
                  )}
                  <div className="text-center" style={{ marginTop: "20px" }}>
                    {PATH && retreatDetail?.image && (
                      <img src={PATH + retreatDetail?.image?.url} alt="" />
                    )}
                  </div>

                  <br />
                  <br />
                  {loading ? (
                    <Skeleton active />
                  ) : (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: retreatDetail?.description || "",
                      }}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </TabPane>
          {user && (
            <TabPane
              tab={<strong>Participant Listing</strong>}
              key={ETabPane.LISTING}
            >
              <div className="text-center">
                <h3 className="bold">{retreatDetail?.name}</h3>
                <RetreatListing
                  listParticipant={listParticipant}
                  isLoading={isLoading}
                />
              </div>
            </TabPane>
          )}
        </Tabs>
      </div>
    </DivRetreatWrapper>
  );
};

export default Retreat;
