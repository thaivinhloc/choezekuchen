// @ts-nocheck
import { ArrowRightAlt } from "@mui/icons-material";
import { Col, Row, Space } from "antd";
import { THEME } from "common";
import { LOGIN } from "common/navigator";
import { SingleSection } from "container/Section";
import { ListPageContentWrapper } from "container/layout/ListPage";
import { useAuth } from "context/auth/AuthContext";
import { TPage } from "definition";
import { Button } from "elements/Button";
import { GridMedia } from "elements/Media";
import { RichText } from "elements/RichText";
import { getRetreatPathFromSlug } from "helper";
import useRetreat from "hook/useRetreat";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const LatestRetreatWrapper = styled.div`
  padding: 60px 16px;
  @media (min-width: 1200px) {
    max-width: 992px;
    margin: 0 auto;
  }
`;

const RetreatListWrapper = styled.div`
  padding-bottom: 100px;
`;

const RetreatListItemLabel = styled.div`
  position: absolute;
  left: 5%;
  top: 0;
  background: #fff;
  z-index: 10;
  padding: 12px;
  border-radius: 0 0 4px 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

export const RetreatList = ({ locale, globalData }: TPage) => {
  const { t } = useTranslation(["content", "login", "common"]);
  const router = useRouter();
  const { user } = useAuth();
  const { parentRetreats, getPRetreats, isLoading } = useRetreat({
    locale,
  });

  useEffect(() => {
    getData();
    async function getData() {
      await getPRetreats();
    }
  }, []);

  const onRetreatClick = ({
    id,
    slug,
    status,
  }: {
    id: number;
    slug: string;
    status: boolean;
  }) => {
    if (status) {
      router.push(
        user
          ? getRetreatPathFromSlug(id, slug)
          : `${LOGIN}?redirect=${getRetreatPathFromSlug(id, slug)}`
      );
    }
  };

  const latestActiveRetreat = parentRetreats
    ?.filter(({ status }) => status)
    .sort(
      (a, b) => moment(b.dateStart).unix() - moment(a.dateStart).unix()
    )?.[0];

  console.log("RetreatGrid", { parentRetreats, latestActiveRetreat });
  const restOfAllRetreats = parentRetreats?.filter(
    (r) => r.id !== latestActiveRetreat?.id
  );

  const { defaultHeadLine } = globalData.attributes;
  const titleStyle = {
    fontSize: 24,
    lineHeight: "28px",
    color: THEME.primary,
    margin: 0,
  };

  return (
    <ListPageContentWrapper>
      {latestActiveRetreat && (
        <LatestRetreatWrapper>
          <Row gutter={[40, 24]} align="top">
            <Col span={24} xl={{ span: 12 }}>
              <div style={{ position: "relative" }}>
                <GridMedia
                  url={latestActiveRetreat.image?.url}
                  name={latestActiveRetreat.image?.name}
                  width={600}
                  height={450}
                  style={{ borderRadius: 12, cursor: "pointer" }}
                  onClick={() =>
                    onRetreatClick({
                      id: latestActiveRetreat.id,
                      slug: latestActiveRetreat.slug ?? "",
                      status: latestActiveRetreat.status,
                    })
                  }
                />
                <Button
                  style={{
                    position: "absolute",
                    left: "5%",
                    top: 0,
                    transform: "translateY(-50%)",
                    borderRadius: 12,
                    cursor: "auto",
                    height: 50,
                    fontSize: 24,
                  }}
                  type="primary"
                  size="large"
                >
                  {t("New", { ns: "common" })}
                </Button>
              </div>
            </Col>
            <Col span={24} xl={{ span: 12 }}>
              <h2
                style={{ ...titleStyle, cursor: "pointer" }}
                onClick={() =>
                  onRetreatClick({
                    id: latestActiveRetreat.id,
                    slug: latestActiveRetreat.slug ?? "",
                    status: latestActiveRetreat.status,
                  })
                }
              >
                {latestActiveRetreat.name}
              </h2>
              {/* {latestActiveRetreat.dateEnd && (
                <i
                  style={{
                    color: THEME.dark,
                    fontWeight: 300,
                    fontSize: 14,
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {t("Time: ")}
                  {moment(latestActiveRetreat.dateStart).format("hh:mmA")}-
                  {moment(latestActiveRetreat.dateEnd).format("hh:mmA")}
                </i>
              )} */}
              <RichText
                fontSize="16px"
                lineHeight="20px"
                content={latestActiveRetreat.description}
              />
              <div style={{ marginBottom: 10 }}>
                <strong
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    onRetreatClick({
                      id: latestActiveRetreat.id,
                      slug: latestActiveRetreat.slug ?? "",
                      status: latestActiveRetreat.status,
                    })
                  }
                >
                  {t("Welcome to join the")} {latestActiveRetreat.name} Retreat!
                </strong>
              </div>
              <Space>
                {!user && (
                  <>
                    <Button
                      shape="round"
                      type="primary"
                      ghost
                      onClick={() =>
                        onRetreatClick({
                          id: latestActiveRetreat.id,
                          slug: latestActiveRetreat.slug ?? "",
                          status: latestActiveRetreat.status,
                        })
                      }
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {t("login", { ns: "login" })}
                    </Button>
                    or
                  </>
                )}
                {!user && (
                  <Button
                    shape="round"
                    type="primary"
                    ghost
                    onClick={() =>
                      onRetreatClick({
                        id: latestActiveRetreat.id,
                        slug: latestActiveRetreat.slug ?? "",
                        status: latestActiveRetreat.status,
                      })
                    }
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {t("Register Now", { ns: "content" })}
                    <ArrowRightAlt />
                  </Button>
                )}
              </Space>
            </Col>
          </Row>
        </LatestRetreatWrapper>
      )}
      <RetreatListWrapper>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <SingleSection
              content=""
              title={t("ALL RETREAT SECTION", { ns: "common" })}
              headLine={defaultHeadLine}
            />
          </div>
          <Row gutter={[24, 32]}>
            {parentRetreats &&
              parentRetreats.map(
                (
                  {
                    id,
                    name,
                    description,
                    image,
                    slug,
                    status,
                    dateEnd,
                    dateStart,
                  },
                  idx
                ) => {
                  return (
                    <Col
                      span={24}
                      xl={{ span: 8 }}
                      key={`retreat-list-col-${idx}`}
                      style={{
                        background: "#fff",
                        padding: 16,
                      }}
                    >
                      <div
                        style={{
                          boxShadow:
                            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                          borderRadius: 12,
                          height: "100%",
                          position: "relative",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <RetreatListItemLabel
                          style={{ textAlign: "center", color: THEME.primary }}
                        >
                          <span
                            style={{
                              display: "block",
                              fontWeight: 600,
                              fontSize: 28,
                              lineHeight: "28px",
                            }}
                          >
                            {moment(dateStart).format("DD")}
                          </span>
                          <span>{moment(dateStart).format("MMM YYYY")}</span>
                        </RetreatListItemLabel>
                        <div style={{ marginBottom: 16 }}>
                          {image && (
                            <GridMedia
                              url={image.url}
                              name={image.name}
                              width={600}
                              height={400}
                              style={{ borderRadius: "12px 12px 0 0" }}
                            />
                          )}
                        </div>
                        <div style={{ padding: 16 }}>
                          <h2
                            style={titleStyle}
                            onClick={() => {
                              onRetreatClick({ id, slug: slug ?? "", status });
                            }}
                          >
                            {name}
                          </h2>
                          {/* <i
                            style={{
                              color: THEME.dark,
                              fontWeight: 300,
                              fontSize: 14,
                              display: "block",
                              marginBottom: 8
                            }}
                          >
                            {t("Time: ")}
                            {moment(dateStart).format("hh:mmA")}-
                            {moment(dateEnd).format("hh:mmA")}
                          </i> */}
                          <div style={{ paddingBottom: 40 }}>
                            {description && <RichText content={description} />}
                          </div>
                          <Button
                            shape="round"
                            type="primary"
                            ghost
                            onClick={() =>
                              onRetreatClick({ id, slug: slug ?? "", status })
                            }
                            style={{
                              display: "flex",
                              alignItems: "center",
                              position: "absolute",
                              bottom: 16,
                              left: 16,
                            }}
                            disabled={!status}
                          >
                            {t("Register Now", { ns: "content" })}
                            <ArrowRightAlt />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  );
                }
              )}
          </Row>
        </div>
      </RetreatListWrapper>
    </ListPageContentWrapper>
  );
};

export default RetreatList;
