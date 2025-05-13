// @ts-nocheck

import { ArrowRightAlt } from "@mui/icons-material";
import { Col, Radio, Row, Space } from "antd";
import { THEME } from "common";
import { UpcomingEventItem } from "components/Event/UpcomingEvent";
import { TITLE_SIZES, Title } from "components/Title";
import { TitleWithHeadline } from "components/Title/TitleWithHeadline";
import {
  ContentListTitleWrapper,
  ListPageContentWrapper,
  TopCategoryWrapper
} from "container/layout/ListPage";
import { EMediaType, ListItem, TPage } from "definition";
import { Button } from "elements/Button";
import { Media } from "elements/Media";
import { RichText } from "elements/RichText";
import { getMediaType } from "helper";
import useEvents from "hook/useEvents";
import useLibrary from "hook/useLibrary";
import usePage from "hook/usePage";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const mediaTypes = [
  {
    type: "SADHANA",
    name: "Sadhana"
  },
  {
    type: "AUDIO",
    name: "Audio"
  },
  {
    type: "VIDEO",
    name: "Video"
  },
  {
    type: "IMAGES",
    name: "Images"
  }
];

const LibraryItemWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.primary};
  padding: 16px;
  height: 100%;
`;

const PracticeWrapper = styled.div`
  ${(props) =>
    props.background && `background-image: url(${props.background});`}
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
  background-size: cover;
  background-repeat: no-repeat;
  padding: 120px 0;
`;

export const Library = ({ locale, globalData, isMobile }) => {
  const { t } = useTranslation();
  const { nextEvents, getUpcomingEventsFromNow } = useEvents({ locale });
  const { medias, getMedias } = useLibrary({
    locale
  });

  const [mediaType, setMediaType] = useState(mediaTypes[0].type);

  useEffect(() => {
    getMedias();
    getUpcomingEventsFromNow();
  }, []);

  const getLengthByType = (type) => {
    return medias
      ? medias.filter((media) => media.attributes.category === type).length
      : 0;
  };

  const newReleaseMedias =
    medias
      ?.sort((a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix())
      .slice(0, 2) ?? [];

  const mediaList =
    medias?.filter((m) => m.attributes.category === mediaType) ?? [];
  console.log({ nextEvents, mediaList, newReleaseMedias });

  const latestEvent = nextEvents?.sort(
    (a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix()
  )?.[0];
  console.log({ latestEvent });

  const { practice } = globalData.attributes;
  console.log({ practice });
  const contentSize = isMobile ? "18px" : "24px";

  return (
    <ListPageContentWrapper>
      <div className='container'>
        <div style={{ padding: "80px 0" }}>
          <Row gutter={[40, 24]}>
            <Col span={24} lg={{ span: 8 }}>
              {latestEvent && (
                <UpcomingEventItem
                  {...latestEvent}
                  style={{
                    height: "100%"
                    // display: "flex",
                    // alignItems: "flex-end"
                  }}
                />
              )}
            </Col>
            <Col span={24} lg={{ span: 16 }}>
              <TitleWithHeadline title={t("New Release!")} />
              <Row gutter={[24, 24]}>
                {newReleaseMedias &&
                  newReleaseMedias.map(({ id, attributes }, idx) => {
                    const { name, description, media, cover } = attributes;
                    return (
                      <Col
                        key={`page-list-col-${idx}`}
                        span={24}
                        lg={{ span: 12 }}
                      >
                        <LibraryItemWrapper>
                          {media && (
                            <Media
                              mediaData={media.data}
                              name={name}
                              description={description}
                              cover={cover?.data}
                              previewable
                              downloadable
                            />
                          )}
                        </LibraryItemWrapper>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </div>
        <div style={{ paddingBottom: 80 }}>
          <TitleWithHeadline title={t("Category")} />
          <Row gutter={[40, 24]}>
            <Col span={24} lg={{ span: 8 }}>
              <TopCategoryWrapper>
                <Radio.Group
                  defaultValue={mediaType}
                  size='large'
                  buttonStyle='solid'
                  onChange={(e) => setMediaType(e.target.value)}
                >
                  <Space
                    size='middle'
                    direction='vertical'
                    style={{ width: "100%" }}
                  >
                    {mediaTypes.map(({ name, type }) => {
                      const items = getLengthByType(type);
                      return (
                        <Radio.Button key={`${type}-${name}`} value={type}>
                          {t(name)} ({items})
                        </Radio.Button>
                      );
                    })}
                  </Space>
                </Radio.Group>
              </TopCategoryWrapper>
            </Col>
            <Col span={24} lg={{ span: 16 }}>
              <Row gutter={[24, 24]}>
                {mediaList &&
                  mediaList.map(({ id, attributes }, idx) => {
                    const { name, description, media, cover } = attributes;
                    return (
                      <Col
                        key={`page-list-col-${idx}`}
                        span={24}
                        lg={{ span: 12 }}
                      >
                        <LibraryItemWrapper>
                          {media && (
                            <Media
                              mediaData={media.data}
                              name={name}
                              description={description}
                              cover={cover?.data}
                              previewable
                              downloadable
                            />
                          )}
                        </LibraryItemWrapper>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <PracticeWrapper
        background={practice?.background?.data?.attributes?.url}
        backgroundColor='#f2f1f1'
      >
        <div className='container'>
          <Row align='bottom'>
            <Col span={24} lg={{ span: 12 }}>
              <Title
                isMobile={isMobile}
                size={TITLE_SIZES.LARGE}
                title={t("Practice")}
                supTitle={t("How to")}
              />
              <Link href={practice.redirectLink ?? "/"}>
                <a>
                  <div
                    style={{
                      border: `1px solid ${THEME.primary}`,
                      borderRadius: 40,
                      height: 50,
                      maxWidth: 435,
                      position: "relative",
                      textAlign: "center",
                      lineHeight: "44px",
                      fontSize: contentSize,
                      color: THEME.primary
                    }}
                  >
                    {t("See more")}
                    <div
                      style={{
                        position: "absolute",
                        right: 16,
                        top: 0
                      }}
                    >
                      <ArrowRightAlt style={{ fontSize: 40 }} />
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <RichText
                fontSize={isMobile ? "16px" : "20px"}
                content={practice?.description}
              />
            </Col>
          </Row>
        </div>
      </PracticeWrapper>
    </ListPageContentWrapper>
  );
};

export default Library;
