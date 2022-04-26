import { Col, Form, Input, Row, Skeleton, Tabs, Tooltip } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/app/AppContext";
import { useAuth } from "../../context/auth/AuthContext";
import {
  getListRetreat,
  getRetreatDetail,
  postRetreatRecitation,
} from "../../services/api";
import {
  IResponseListRetreat,
  IResponseRetreat,
  User,
} from "../../services/retreatTypes";
import RetreatListing from "./components/RetreatListing";
import { DivRetreatWrapper } from "./index.style";
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

const Retreat: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form] = useForm();
  const [dataRetreat, setDataRetreat] = useState<IResponseRetreat | null>(null);
  const [tab, setTab] = useState<ETabPane>(ETabPane.DETAIL);
  const [listRetreat, setListRetreat] = useState<IResponseListRetreat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  const { setTitleBanner } = useApp();

  useEffect(() => {
    switch (tab) {
      case ETabPane.DETAIL:
        getRetreatPublic(true);
        setTitleBanner("RETREAT");
        break;
      case ETabPane.LISTING:
        handleGetListRetreat();
        setTitleBanner("PARTICIPANT LISTING");
        break;

      default:
        break;
    }
  }, [tab, setTitleBanner]);

  const getRetreatPublic = async (isLoading = false) => {
    try {
      if (isLoading) {
        setIsLoading(true);
      }
      const isHasToken = !localStorage.getItem("token");
      const result: IResponseRetreat = await getRetreatDetail(isHasToken);
      setDataRetreat(result);
    } catch (error) {
      console.log("----err", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetListRetreat = async () => {
    try {
      const result = await getListRetreat();
      setListRetreat(result);
    } catch (error) {}
  };

  function handleChangeTab(key: string) {
    setTab(key as ETabPane);
    form.resetFields();
  }
  const handleSubmit = async (value: string) => {
    try {
      const values = await form.validateFields();
      const recitationNumber = Number(values.recitationNumber);
      if (!user) {
        navigate("/login");
      } else {
        setIsLoadingSubmit(true);
        await postRetreatRecitation({ recitationNumber }).then(() =>
          getRetreatPublic(false)
        );
      }
    } catch (error) {
    } finally {
      setIsLoadingSubmit(false);
    }
  };

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

  const userRetreat: User | undefined = dataRetreat?.user;
  const totalDue =
    Number(dataRetreat?.totalCommitment || 0) -
    Number(dataRetreat?.totalGroupCompleted || 0);

  return (
    <DivRetreatWrapper>
      <Tabs defaultActiveKey={tab} onChange={handleChangeTab}>
        <TabPane tab={<strong>Retreat</strong>} key={ETabPane.DETAIL}>
          <Row>
            <Col span={7} xs={24} md={7} className="retreat__right">
              <div className="retreat__right-form">
                <div className="box-title">
                  {dataRetreat?.name ||
                    "Update your 100-syllable mantra recitation"}
                </div>
                <div className="retreat-submit">
                  <Form onFinish={handleSubmit} form={form} layout="inline">
                    {/* <div className=" retreat-submit-item"> */}
                    <Form.Item
                      style={{ marginRight: 0, flex: 1, marginBottom: 0 }}
                      name="recitationNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please fill out this filed",
                        },
                        {
                          pattern: /^(?:\d*)$/,
                          message: "Value should contain just number",
                        },
                      ]}
                    >
                      <Input.Search
                        onSearch={handleSubmit}
                        enterButton="Submit"
                        loading={isLoadingSubmit}
                      />
                    </Form.Item>
                  </Form>
                </div>
                {dataRetreat?.user && (
                  <>
                    <div className="box-title">{userRetreat?.name || ""}</div>
                    <div className="box-content">
                      <RenderItem
                        title="Commited:"
                        content={userRetreat?.commited || 0}
                      />
                      <RenderItem
                        title="Completed:"
                        content={userRetreat?.completed || 0}
                      />
                      <RenderItem
                        title="Due:"
                        content={
                          Number(userRetreat?.due) < 0
                            ? 0
                            : userRetreat?.due || 0
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

                <div className="box-title">Group Commitment</div>
                <div className="box-content">
                  <RenderItem
                    title="Total Commitment:"
                    content={dataRetreat?.totalCommitment || 0}
                  />
                  <RenderItem
                    title="No. of Participants:"
                    content={dataRetreat?.totalParticipants || 0}
                  />
                  <RenderItem
                    title="Group Completed:"
                    content={dataRetreat?.totalGroupCompleted || 0}
                  />
                  <RenderItem
                    title="Due:"
                    content={Number(totalDue) < 0 ? 0 : totalDue}
                  />
                </div>
              </div>
            </Col>
            <Col span={17} xs={24} md={17} className="retreat-left">
              <div>
                {isLoading ? (
                  <Skeleton active />
                ) : (
                  <h3 className="bold">{dataRetreat?.name || ""}</h3>
                )}
                {PATH && dataRetreat?.image && (
                  <img src={PATH + dataRetreat?.image?.url} alt="" />
                )}
                <br />
                <br />
                <p
                  dangerouslySetInnerHTML={{
                    __html: dataRetreat?.description || "",
                  }}
                />
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
              <h3 className="bold">{dataRetreat?.name}</h3>
              <RetreatListing listRetreat={listRetreat} />
            </div>
          </TabPane>
        )}
      </Tabs>
    </DivRetreatWrapper>
  );
};

export default Retreat;
