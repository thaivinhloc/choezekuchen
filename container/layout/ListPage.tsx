// @ts-nocheck
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Pagination, Radio, Row } from "antd";
import {
  EListPageLayout,
  EMediaType,
  ListItem,
  TEvent,
  TPage
} from "definition";
import { Button } from "elements/Button";
import { GridMedia, Media } from "elements/Media";
import { RichText } from "elements/RichText";
import {
  getEventPathFromSlug,
  getMediaType,
  getRetreatPathFromSlug
} from "helper";
import usePage from "hook/usePage";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import useRetreat from "hook/useRetreat";
import { useRouter } from "next/router";
import { useAuth } from "context/auth/AuthContext";
import { LOGIN } from "common/navigator";
import useEvents from "hook/useEvents";
import moment from "moment";
import { getEventsByTimeRange } from "services/event";
import { MonthEvent } from "components/Event/MonthEvent";

export const ListPageContentWrapper = styled.div<Partial<TPage>>``;

export const ContentListTitleWrapper: any = styled.h3`
  color: ${(props) => props.theme.primary};
`;

function TopSection({
  topTitle,
  topDesciption
}: {
  topTitle?: string;
  topDesciption?: string;
}) {
  return topTitle ? (
    <div
      className="text-center"
      style={{ maxWidth: 800, margin: "0 auto 50px" }}
    >
      <h2>{topTitle}</h2>
      <RichText content={topDesciption ?? ""} />
    </div>
  ) : null;
}

function VerticalGrid({ topTitle, topDesciption, pageContentList }: TPage) {
  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
    </ListPageContentWrapper>
  );
}

function HorizontalGrid({ topTitle, topDesciption, pageContentList }: TPage) {
  const { t } = useTranslation();
  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <Row gutter={[24, 32]}>
        {pageContentList?.map(
          (
            {
              title,
              description,
              cover,
              redirectLink,
              redirectPage,
              redirectTitle
            },
            idx
          ) => {
            return (
              <Col lg={{ span: 12 }} key={`page-list-col-${idx}`}>
                <Row gutter={{ xl: 32 }}>
                  <Col span={24} lg={{ span: 10 }}>
                    <div style={{ marginBottom: 16 }}>
                      <GridMedia {...cover} />
                    </div>
                  </Col>
                  <Col
                    span={24}
                    lg={{ span: 14 }}
                    style={{ alignSelf: "stretch" }}
                  >
                    <ContentListTitleWrapper>{title}</ContentListTitleWrapper>
                    {description && <RichText content={description} />}
                    {redirectPage || redirectLink ? (
                      <Button
                        style={{
                          padding: 0,
                          color: "#A51818",
                          whiteSpace: "normal",
                          height: "fit-content",
                          fontSize: 15,
                          fontWeight: 400
                        }}
                        size="large"
                        type="link"
                        href={redirectPage?.slug || redirectLink}
                      >
                        {redirectTitle ? redirectTitle : t("View more")}{" "}
                        <ArrowRightOutlined />
                      </Button>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            );
          }
        )}
      </Row>
    </ListPageContentWrapper>
  );
}

function ReverseGrid({ topTitle, topDesciption, pageContentList }: TPage) {
  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      {pageContentList?.map(
        ({ title, description, cover, redirectPage, redirectLink }, idx) => {
          let mediaOrder = idx % 2 === 0 ? 0 : 1;
          return (
            <Row
              key={`page-list-row-${idx}`}
              gutter={{ lg: 32 }}
              align="middle"
              style={{ marginBottom: 50 }}
            >
              <Col
                lg={{ order: mediaOrder, span: 12 }}
                span={24}
                style={{ marginTop: 12, marginBottom: 12 }}
              >
                <GridMedia {...cover} />
              </Col>
              <Col span={24} lg={{ span: 12 }}>
                {redirectLink || redirectPage ? (
                  <Link href={redirectPage?.slug ?? redirectLink ?? "/"}>
                    <ContentListTitleWrapper as="a">
                      {title}
                    </ContentListTitleWrapper>
                  </Link>
                ) : (
                  <ContentListTitleWrapper>{title}</ContentListTitleWrapper>
                )}
                {description && <RichText content={description} />}
              </Col>
            </Row>
          );
        }
      )}
    </ListPageContentWrapper>
  );
}

function ReverseWithTitleGrid({
  topTitle,
  topDesciption,
  pageContentList
}: TPage) {
  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      {pageContentList?.map(({ description, gridTitle }, idx) => {
        let mediaOrder = idx % 2 === 0 ? 0 : 1;
        return (
          <Row
            key={`page-list-row-${idx}`}
            gutter={{ lg: 32 }}
            style={{ marginBottom: 50 }}
          >
            <Col
              lg={{ order: mediaOrder, span: 8 }}
              span={24}
              style={{ marginTop: 12, marginBottom: 12 }}
            >
              <div style={{ padding: 24, background: "#1E73BE" }}>
                <RichText
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    lineHeight: "40px",
                    fontWeight: 700,
                    letterSpacing: "3px"
                  }}
                  content={gridTitle}
                />
              </div>
            </Col>
            <Col span={24} lg={{ span: 16 }}>
              {description && <RichText content={description} />}
            </Col>
          </Row>
        );
      })}
    </ListPageContentWrapper>
  );
}

function BlogGrid({ ...props }: TPage) {
  return <ListPageContentWrapper></ListPageContentWrapper>;
}

function EventCalendar({ topTitle, topDesciption }: TPage) {
  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <MonthEvent />
    </ListPageContentWrapper>
  );
}

function EventGrid({ topTitle, topDesciption, locale }: TPage) {
  const pageSize = 3;
  const router = useRouter();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { events, getEventList } = useEvents({ locale, page, pageSize });

  useEffect(() => {
    getData();
    async function getData() {
      await getEventList();
    }
  }, [page]);

  console.log("EventGrid", { events });

  const onEventClick = ({ id, slug }: { id: number; slug: string }) => {
    router.push(getEventPathFromSlug(id, slug));
  };

  const { data, meta } = events || {};

  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <Row gutter={[24, 24]}>
        {data &&
          data.map(({ id, attributes }, idx) => (
            <Col
              span={24}
              key={`event-list-col-${idx}`}
              style={{
                background: "#fff",
                padding: 16
              }}
            >
              <Row gutter={{ xl: 32 }}>
                <Col span={24} lg={{ span: 10 }}>
                  <div
                    style={{ marginBottom: 16, cursor: "pointer" }}
                    onClick={() =>
                      onEventClick({ id, slug: attributes.slug ?? "" })
                    }
                  >
                    {attributes.image && (
                      <GridMedia {...attributes.image.data.attributes} />
                    )}
                  </div>
                </Col>
                <Col
                  span={24}
                  lg={{ span: 14 }}
                  style={{ alignSelf: "stretch" }}
                >
                  {attributes.title && (
                    <ContentListTitleWrapper
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        onEventClick({ id, slug: attributes.slug ?? "" })
                      }
                    >
                      {attributes.title}
                    </ContentListTitleWrapper>
                  )}
                  {attributes.description && (
                    <RichText content={attributes.description} />
                  )}
                  <Button
                    size="large"
                    type="link"
                    onClick={() =>
                      onEventClick({ id, slug: attributes.slug ?? "" })
                    }
                  >
                    {t("View more", { ns: "common" })} <ArrowRightOutlined />
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}
      </Row>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <Pagination
          current={meta?.pagination.page}
          total={meta?.pagination.total}
          onChange={(_page) => setPage(_page)}
          pageSize={pageSize}
        />
      </div>
    </ListPageContentWrapper>
  );
}

export const TopCategoryWrapper = styled.div`
  text-align: center;
  .ant-radio-button-wrapper {
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
    width: 100%;
    border-radius: 24px !important;
    background: transparent;
    @media (min-width: 992px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    &:hover {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
    }
    &-checked {
      background: ${(props) => props.theme.primary};
    }
  }
  .ant-radio-group {
    width: 100%;
  }
`;

const mediaTypes = [
  {
    type: EMediaType.FILE,
    name: "Sadhana"
  },
  {
    type: EMediaType.AUDIO,
    name: "Audio"
  },
  {
    type: EMediaType.VIDEO,
    name: "Video"
  }
];

function LibraryGrid({
  topTitle,
  topDesciption,
  locale,
  pageContentEndpoint
}: TPage) {
  const { t } = useTranslation();
  const [mediaType, setMediaType] = useState(EMediaType.FILE);
  const [mediaList, setMediaList] = useState<ListItem[]>([]);
  const { content, getPageContent, isLoading } = usePage<{
    dataList: ListItem[];
  }>({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "dataList",
      "populate[1]": "dataList.cover",
      "populate[2]": "dataList.media"
    }
  });
  const { dataList } = content?.data?.attributes ?? {};

  useEffect(() => {
    if (dataList) {
      const _mediaList = dataList.filter(({ media }) => {
        const { type } = getMediaType(media?.data);
        return type === mediaType;
      });
      setMediaList([..._mediaList]);
    }
  }, [mediaType, dataList]);

  useEffect(() => {
    if (pageContentEndpoint) {
      getData();
    }
    async function getData() {
      await getPageContent();
    }
  }, [pageContentEndpoint]);

  const getLengthByType = (type: EMediaType) => {
    return dataList
      ? dataList.filter(({ media }) => getMediaType(media.data).type === type)
          .length
      : 0;
  };

  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <TopCategoryWrapper>
        <Radio.Group
          defaultValue={EMediaType.FILE}
          size="large"
          buttonStyle="solid"
          onChange={(e) => setMediaType(e.target.value)}
        >
          {mediaTypes.map(({ name, type }) => {
            const items = getLengthByType(type);
            console.log({ name });

            return (
              <Radio.Button key={`${type}-${name}`} value={type}>
                {t(name)} ({items})
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </TopCategoryWrapper>
      <Row gutter={[24, 24]}>
        {mediaList &&
          mediaList.map(({ title, description, media, cover }, idx) => {
            return (
              <Col key={`page-list-col-${idx}`} span={24} lg={{ span: 6 }}>
                <div>
                  <ContentListTitleWrapper
                    style={{
                      padding: 0,
                      textAlign: "center"
                    }}
                  >
                    {title}
                  </ContentListTitleWrapper>
                  {media && (
                    <Media
                      mediaData={media.data}
                      name={title}
                      cover={cover?.data}
                      previewable
                      downloadable
                      style={{
                        backgroundColor: "#fff",
                        padding: 10,
                        border: "1px solid #DFE2E7",
                        marginBottom: 2
                      }}
                    />
                  )}
                </div>
              </Col>
            );
          })}
      </Row>
    </ListPageContentWrapper>
  );
}

function RetreatGrid({ topTitle, topDesciption, locale }: TPage) {
  const { t } = useTranslation();
  const router = useRouter();
  const { user } = useAuth();
  const { parentRetreats, getPRetreats, isLoading } = useRetreat({
    locale
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
    status
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

  console.log("RetreatGrid", { parentRetreats });

  return (
    <ListPageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <Row gutter={[24, 32]}>
        {parentRetreats &&
          parentRetreats.map(
            ({ id, name, description, image, slug, status }, idx) => {
              return (
                <Col
                  span={24}
                  key={`retreat-list-col-${idx}`}
                  style={{
                    background: "#fff",
                    padding: 16
                  }}
                >
                  <Row gutter={{ xl: 32 }}>
                    <Col span={24} lg={{ span: 10 }}>
                      <div style={{ marginBottom: 16 }}>
                        {image && (
                          <GridMedia
                            url={image.url}
                            name={image.name}
                            width={600}
                            height={400}
                          />
                        )}
                      </div>
                    </Col>
                    <Col
                      span={24}
                      lg={{ span: 14 }}
                      style={{ alignSelf: "stretch" }}
                    >
                      <ContentListTitleWrapper
                        style={{}}
                        onClick={() => {
                          onRetreatClick({ id, slug: slug ?? "", status });
                        }}
                      >
                        {name}
                      </ContentListTitleWrapper>
                      {description && <RichText content={description} />}

                      {status && (
                        <Button
                          style={{
                            padding: 0,
                            color: "#A51818",
                            whiteSpace: "normal",
                            height: "fit-content",
                            fontSize: 15,
                            fontWeight: 400
                          }}
                          size="large"
                          type="link"
                          onClick={() =>
                            onRetreatClick({ id, slug: slug ?? "", status })
                          }
                        >
                          {t(
                            "Welcome to join the Yangzab Ngondro Retreat - Log in or Sign up now!",
                            { ns: "retreat" }
                          )}{" "}
                          <ArrowRightOutlined />
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Col>
              );
            }
          )}
      </Row>
    </ListPageContentWrapper>
  );
}

export function ListPageLayout({ data }: { data: TPage }) {
  console.log("ListPageLayout", {
    data,
    type: data.pageContentListLayout === EListPageLayout.HORIZONTAL_GRID
  });

  switch (data.pageContentListLayout) {
    case EListPageLayout.VERTICAL_GRID:
      return <VerticalGrid {...data} />;
    case EListPageLayout.HORIZONTAL_GRID:
      return <HorizontalGrid {...data} />;
    case EListPageLayout.BLOG:
      return <BlogGrid {...data} />;
    case EListPageLayout.EVENT:
      return <EventCalendar {...data} />;
    case EListPageLayout.LIBRARY:
      return <LibraryGrid {...data} />;
    case EListPageLayout.RETREAT:
      return <RetreatGrid {...data} />;
    case EListPageLayout.REVERSE_WITH_TITLE:
      return <ReverseWithTitleGrid {...data} />;
    default:
      return <ReverseGrid {...data} />;
  }
}
