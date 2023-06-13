/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { Col, Row, Space, Tabs, Tooltip } from "antd";
import { THEME } from "common";
import { TITLE_SIZES, Title } from "components/Title";
import { SingleSection } from "container/Section";
import { Button } from "elements/Button";
import { RichText } from "elements/RichText";
import usePage from "hook/usePage";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ArrowLeftIcon from "assets/svgs/circle_arrow_left_icon.svg";
import ArrowRightIcon from "assets/svgs/circle_arrow_right_icon.svg";
import StarIcon from "assets/svgs/star_icon.svg";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { TitleWithHeadline } from "components/Title/TitleWithHeadline";
import { Autoplay } from "swiper";
import ReadMoreReact from "container/readMore/components/ReadMore";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Link from "next/link";

const AboutWrapper = styled.div``;

const BackgroundWrapper = styled.div<{
  background?: any;
  backgroundColor?: string;
}>`
  background: ${(props) =>
    props.background?.data
      ? `url(${props.background?.data?.attributes?.url})`
      : props.backgroundColor || "#fff"};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
`;

const TabsWrapper = styled(Tabs)`
  .ant-tabs-nav {
    &::before {
      border-bottom: unset;
    }
  }
  .ant-tabs-nav-list {
    align-items: flex-start;
    @media (min-width: 1200px) {
      justify-content: space-between;
      min-width: 100%;
    }
  }
`;

export const About = ({
  locale,
  pageContentEndpoint,
  globalData,
  isMobile
}) => {
  const swiperRef = useRef();
  const historySwiperRef = useRef();
  const historyTabRef = useRef();
  const eleventhHistorySwiperRef = useRef();
  const eleventhHistoryTabRef = useRef();
  const [historyIndex, setHistoryIndex] = useState(0);
  const [eleventhHistoryIndex, setEleventhHistoryIndex] = useState(0);
  const [isTabInit, setTabsInit] = useState(false);
  const { content, getPageContent } = usePage({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "gurus",
      "populate[2]": "history",
      "populate[3]": "eleventhHistory",
      "populate[4]": "reincarnation",
      "populate[5]": "introduction.background",
      "populate[6]": "gurus.background",
      "populate[7]": "gurus.contentList",
      "populate[9]": "history.background",
      "populate[8]": "history.contentList",
      "populate[10]": "eleventhHistory.background",
      "populate[11]": "eleventhHistory.contentList",
      "populate[12]": "reincarnation.background",
      "populate[13]": "reincarnation.contentList",
      "populate[14]": "gurus.contentList.cover",
      "populate[15]": "history.contentList.cover",
      "populate[16]": "eleventhHistory.contentList.cover",
      "populate[17]": "eleventhHistory.contentList.images",
      "populate[18]": "reincarnation.borderButtonImage"
    }
  });

  const { t } = useTranslation();

  useEffect(() => {
    if (pageContentEndpoint) {
      getData();
    }
    async function getData() {
      await getPageContent();
    }
  }, [pageContentEndpoint]);

  useEffect(() => {
    if (content) {
      setTimeout(() => {
        setTabsInit(true);
      }, 2000);
    }
  }, [content]);

  const { introduction, gurus, history, eleventhHistory, reincarnation } =
    content?.data?.attributes ?? {};
  const { defaultHeadLine } = globalData.attributes;
  const {
    title: introductionTitle,
    description: introductionDescription,
    background: introductionBackground,
    backgroundColor: introductionBackgroundColor
  } = introduction ?? {};

  const {
    contentList: gurusContentList,
    background: gurusBackground,
    backgroundColor: gurusBackgroundColor
  } = gurus ?? {};

  const gurusItemsByGroup = Object.values(
    gurusContentList?.reduce((res, cur) => {
      res[cur.order] = res[cur.order] ?? [];
      res[cur.order].push(cur);
      return res;
    }, {}) ?? {}
  );

  /* Zoom Images */
  const [indexImages, setIndexImages] = useState(-1);

  const listImages = useMemo(() => {
    if (!eleventhHistory?.contentList) return [];
    if (!eleventhHistory?.contentList?.data) return [];
    return eleventhHistory.contentList.map((item) => item.images?.data);
  }, [eleventhHistory]);
  console.log("listImages", { listImages, eleventhHistory });

  const currentImage = listImages[indexImages]?.[0]?.attributes;

  const nextIndex = (indexImages + 1) % listImages.length;
  const nextImage = listImages[nextIndex]?.[0]?.attributes || currentImage;
  const prevIndex = (indexImages + listImages.length - 1) % listImages.length;
  const prevImage = listImages[prevIndex]?.[0]?.attributes || currentImage;

  const handleClick = (index: number, item: CustomImage) =>
    setIndexImages(index);
  const handleClose = () => setIndexImages(-1);
  const handleMovePrev = () => setIndexImages(prevIndex);
  const handleMoveNext = () => setIndexImages(nextIndex);

  const findNextHasHistory = (_historyContentList, idx) => {
    return _historyContentList?.find(
      (h, index) => index > idx && !!h.description
    );
  };

  const findPrevHasHistory = (_historyContentList, idx) => {
    return _historyContentList?.find(
      (h, index) => index < idx && !!h.description
    );
  };

  const findNextHasHistoryIndex = (_historyContentList, idx) => {
    return _historyContentList?.findIndex(
      (h, index) => index > idx && !!h.description
    );
  };

  const findPrevHasHistoryIndex = (_historyContentList, idx) => {
    return _historyContentList?.findIndex(
      (h, index) => index < idx && !!h.description
    );
  };
  console.log("gurusItemsByGroup", {
    gurusItemsByGroup,
    gurusContentList
  });

  return (
    <AboutWrapper>
      <BackgroundWrapper
        background={introductionBackground}
        backgroundColor={introductionBackgroundColor}
      >
        <SingleSection
          title={introductionTitle}
          content={introductionDescription}
          headLine={defaultHeadLine}
        />
      </BackgroundWrapper>
      <BackgroundWrapper
        style={{
          textAlign: "center",
          padding: "40px 0px 20px",
          backgroundPosition: "center"
        }}
        background={gurusBackground}
        backgroundColor={gurusBackgroundColor}
      >
        <div className='container'>
          <div style={{ marginBottom: 50 }}>
            <Title
              isMobile={isMobile}
              color={THEME.white}
              size={TITLE_SIZES.LARGE}
              title={t("GURUS")}
              supTitle={t("Meet the")}
            />
          </div>
          <div style={{ position: "relative" }}>
            <Swiper
              speed={1500}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView='auto'
              breakpoints={{
                768: {
                  slidesPerView: 1
                },
                1000: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                }
              }}
            >
              {gurusContentList
                ?.sort()
                ?.map(({ cover, title, description }) => (
                  <SwiperSlide style={{ textAlign: "center" }}>
                    <Row gutter={24} justify='center'>
                      {/* {item.map(({ title, cover, description }) => ( */}
                      <Col span={18}>
                        <div style={{ margin: "0 auto" }}>
                          <Image
                            src={cover?.data?.attributes.url}
                            {...cover?.data?.attributes}
                            layout='responsive'
                            alt=''
                          />
                        </div>
                        <h3 style={{ color: THEME.white }}>{title}</h3>
                        <RichText
                          style={{ maxWidth: 500, margin: "0 auto" }}
                          color={THEME.white}
                          content={description}
                        />
                      </Col>
                    </Row>
                  </SwiperSlide>
                ))}
            </Swiper>
            <Button
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: isMobile
                  ? "translate(10%,-50%)"
                  : "translate(100%,-50%)",
                zIndex: 1001
              }}
              shape='circle'
              type='text'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Image src={ArrowLeftIcon} width={40} height={40} alt='' />
            </Button>
            <Button
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: isMobile
                  ? "translate(-10%,-50%)"
                  : "translate(-100%,-50%)",
                zIndex: 1001
              }}
              shape='circle'
              type='text'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Image src={ArrowRightIcon} width={40} height={40} alt='' />
            </Button>
          </div>
        </div>
      </BackgroundWrapper>
      <div style={{ textAlign: "center", paddingTop: 80 }}>
        <div className='container'>
          <div style={{ textAlign: "center" }}>
            <SingleSection
              title={history?.title}
              content={history?.content}
              headLine={defaultHeadLine}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 80
            }}
          >
            <Image src={StarIcon} width={18} height={18} alt='' />
            <i style={{ display: "block", marginLeft: 8, fontSize: 20 }}>
              {t("Updating information")}
            </i>
          </div>
          <div
            style={{ transform: "translateY(-100px)", height: 1 }}
            ref={historyTabRef}
          />
          {history && (
            <TabsWrapper
              activeKey={historyIndex}
              size='large'
              onChange={(ak) => {
                setTabsInit(false);
                historySwiperRef.current?.slideTo(ak);
                setHistoryIndex(ak);
                setTimeout(() => {
                  setTabsInit(true);
                }, 1500);
              }}
            >
              {history.contentList?.map((item, idx) => {
                return (
                  <Tabs.TabPane
                    disabled={!item.description}
                    tab={
                      <div>
                        <Tooltip
                          trigger={["click", "focus"]}
                          placement={
                            idx < history?.contentList?.length / 2
                              ? "topRight"
                              : "topLeft"
                          }
                          visible={
                            idx == historyIndex &&
                            !!item.actionTitle &&
                            isTabInit
                          }
                          title={item.actionTitle}
                          color={"#fff"}
                          overlayInnerStyle={{
                            borderRadius: 4,
                            fontWeight: 600,
                            width: "max-content",
                            padding: "12px 15px",
                            color: THEME.primary
                          }}
                        >
                          <div>
                            <div
                              style={{
                                color: THEME.white,
                                backgroundColor: !item.description
                                  ? "#a7a9ac"
                                  : THEME.primary,
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 16
                              }}
                            >
                              {idx + 1}
                              <sup>
                                {idx % 10 === 0
                                  ? "st"
                                  : idx % 10 === 1
                                  ? "nd"
                                  : idx % 10 === 2
                                  ? "rd"
                                  : "th"}
                              </sup>
                            </div>
                            {!item.description && (
                              <div style={{ textAlign: "center" }}>
                                <Image src={StarIcon} width={14} height={14} />
                              </div>
                            )}
                          </div>
                        </Tooltip>
                      </div>
                    }
                    key={idx}
                  />
                );
              })}
            </TabsWrapper>
          )}
          <div
            style={{
              position: "relative",
              border: `1px solid ${THEME.primary}`,
              borderRadius: 12,
              padding: isMobile ? 15 : 24,
              backgroundColor: "#f1f2f2"
            }}
          >
            <Swiper
              autoHeight
              speed={1500}
              onSlideChange={(swiper) => {
                setTabsInit(false);
                setHistoryIndex(swiper.realIndex);
                historyTabRef.current?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  setTabsInit(true);
                }, 1500);
              }}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                historySwiperRef.current = swiper;
              }}
            >
              {history?.contentList?.map(({ cover, title, description }) => (
                <SwiperSlide style={{ textAlign: "center" }}>
                  <Row gutter={[{ xs: 15, sm: 15, md: 32 }, 15]}>
                    <Col span={24} md={{ span: 7 }}>
                      <div>
                        <Image
                          src={cover?.data?.attributes.url}
                          {...cover?.data?.attributes}
                          layout='responsive'
                          alt={cover?.data?.attributes?.name}
                        />
                      </div>
                    </Col>
                    <Col
                      span={24}
                      md={{ span: 17 }}
                      style={{ textAlign: "left" }}
                    >
                      <h3 style={{ color: THEME.primary, marginTop: 0 }}>
                        {title}
                      </h3>
                      <ReadMoreReact
                        scrollHeight={isMobile ? 200 : 400}
                        charLimit={1000}
                        text={description}
                      />
                    </Col>
                  </Row>
                </SwiperSlide>
              ))}
            </Swiper>
            <Row
              gutter={[{ xs: 15, sm: 15, md: 32 }, 15]}
              style={{ marginTop: 40 }}
            >
              {/* <Col span={24} md={{ span: 7 }}></Col> */}
              <Col span={24} md={{ span: 24 }} style={{ textAlign: "left" }}>
                <Space
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "flex-start" : "space-between",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: isMobile ? "flex-start" : "space-between",
                      alignItems: "center"
                    }}
                  >
                    {findPrevHasHistory(history?.contentList, historyIndex) && (
                      <Button
                        style={{
                          padding: 0,
                          color: THEME.primary,
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center"
                        }}
                        onClick={() =>
                          historySwiperRef.current?.slideTo(
                            findPrevHasHistoryIndex(
                              history?.contentList,
                              historyIndex
                            )
                          )
                        }
                        type='link'
                      >
                        <ChevronLeft />
                        <span className='ellipsis'>
                          {
                            history?.contentList?.[
                              findPrevHasHistoryIndex(
                                history?.contentList,
                                historyIndex
                              )
                            ]?.title
                          }
                        </span>
                      </Button>
                    )}
                  </div>
                  <div>
                    {findNextHasHistory(history?.contentList, historyIndex) && (
                      <Button
                        style={{
                          padding: 0,
                          color: THEME.primary,
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center"
                        }}
                        onClick={() =>
                          historySwiperRef.current?.slideTo(
                            findNextHasHistoryIndex(
                              history?.contentList,
                              historyIndex
                            )
                          )
                        }
                        type='link'
                      >
                        <span className='ellipsis'>
                          {
                            history?.contentList?.[
                              findNextHasHistoryIndex(
                                history?.contentList,
                                historyIndex
                              )
                            ]?.title
                          }
                        </span>

                        <ChevronRight />
                      </Button>
                    )}
                  </div>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", paddingTop: 80 }}>
        <div className='container'>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <SingleSection
              title={eleventhHistory?.title}
              content={eleventhHistory?.content}
              headLine={defaultHeadLine}
            />
          </div>
          <div
            style={{ transform: "translateY(-100px)", height: 1 }}
            ref={eleventhHistoryTabRef}
          />
          <TabsWrapper
            activeKey={eleventhHistoryIndex}
            size='large'
            onChange={(ak) => {
              eleventhHistorySwiperRef.current?.slideTo(ak);
              setEleventhHistoryIndex(ak);
            }}
          >
            {eleventhHistory?.contentList?.map((item, idx) => {
              return (
                <Tabs.TabPane
                  disabled={!item.description}
                  tab={
                    <Tooltip
                      placement={
                        idx < eleventhHistory?.contentList?.length / 2
                          ? "topRight"
                          : "topLeft"
                      }
                      visible={
                        idx == eleventhHistoryIndex &&
                        !!item.actionTitle &&
                        isTabInit
                      }
                      title={item.actionTitle}
                      color={"#fff"}
                      overlayInnerStyle={{
                        borderRadius: 4,
                        fontWeight: 600,
                        width: "max-content",
                        padding: "12px 15px",
                        color: THEME.primary
                      }}
                      trigger={["click", "focus"]}
                    >
                      <div>
                        <div
                          style={{
                            color: THEME.white,
                            backgroundColor: !item.description
                              ? "#a7a9ac"
                              : THEME.primary,
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 20
                          }}
                        >
                          {idx + 1}
                          <sup>
                            {idx % 10 === 0
                              ? "st"
                              : idx % 10 === 1
                              ? "nd"
                              : idx % 10 === 2
                              ? "rd"
                              : "th"}
                          </sup>
                        </div>
                        {!item.description && (
                          <div style={{ textAlign: "center" }}>
                            <Image
                              src={StarIcon}
                              width={14}
                              height={14}
                              alt=''
                            />
                          </div>
                        )}
                      </div>
                    </Tooltip>
                  }
                  key={idx}
                />
              );
            })}
          </TabsWrapper>
          <div
            style={{
              position: "relative",
              border: `1px solid ${THEME.primary}`,
              borderRadius: 12,
              padding: isMobile ? 15 : 24,
              backgroundColor: "#f1f2f2"
            }}
          >
            <Swiper
              autoHeight
              onSlideChange={(swiper) => {
                setEleventhHistoryIndex(swiper.realIndex);
                eleventhHistoryTabRef.current?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                eleventhHistorySwiperRef.current = swiper;
              }}
            >
              {eleventhHistory?.contentList?.map(
                ({ cover, title, description, images }, index) => (
                  <SwiperSlide style={{ textAlign: "center" }}>
                    <Row gutter={[{ xs: 15, sm: 15, md: 32 }, 15]}>
                      <Col span={24} md={{ span: 7 }}>
                        <div>
                          <Image
                            src={cover?.data?.attributes.url}
                            {...cover?.data?.attributes}
                            layout='responsive'
                            alt=''
                          />
                          {images?.data && (
                            <span onClick={() => handleClick(index)}>
                              {t("More images")}
                            </span>
                          )}
                        </div>
                        {!!currentImage && (
                          /* @ts-ignore */
                          <Lightbox
                            mainSrc={currentImage.url}
                            imageTitle={currentImage.name}
                            mainSrcThumbnail={currentImage.formats.small.url}
                            nextSrc={nextImage.url}
                            nextSrcThumbnail={nextImage.formats.small.url}
                            prevSrc={prevImage.url}
                            prevSrcThumbnail={prevImage.formats.small.url}
                            onCloseRequest={handleClose}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                            reactModalStyle={{ zIndex: 99999999 }}
                          />
                        )}
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 17 }}
                        style={{ textAlign: "left" }}
                      >
                        <h3 style={{ color: THEME.primary, marginTop: 0 }}>
                          {title}
                        </h3>
                        <ReadMoreReact
                          scrollHeight={400}
                          text={description}
                          charLimit={1100}
                        />
                      </Col>
                    </Row>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <Row
              gutter={[{ xs: 15, sm: 15, md: 32 }, 15]}
              style={{ marginTop: 40 }}
            >
              <Col span={24} md={{ span: 7 }}></Col>
              <Col span={24} md={{ span: 17 }} style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "flex-start" : "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>
                    {findPrevHasHistory(
                      eleventhHistory?.contentList,
                      eleventhHistoryIndex
                    ) && (
                      <Button
                        style={{
                          padding: 0,
                          color: THEME.primary,
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center"
                        }}
                        onClick={() =>
                          eleventhHistorySwiperRef.current?.slideTo(
                            findPrevHasHistoryIndex(
                              eleventhHistory?.contentList,
                              eleventhHistoryIndex
                            )
                          )
                        }
                        type='link'
                      >
                        <ChevronLeft />
                        {
                          eleventhHistory?.contentList?.[
                            findPrevHasHistoryIndex(
                              eleventhHistory?.contentList,
                              eleventhHistoryIndex
                            )
                          ]?.title
                        }
                      </Button>
                    )}
                  </div>
                  <div>
                    {findNextHasHistory(
                      eleventhHistory?.contentList,
                      eleventhHistoryIndex
                    ) && (
                      <Button
                        style={{
                          padding: 0,
                          color: THEME.primary,
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center"
                        }}
                        onClick={() =>
                          eleventhHistorySwiperRef.current?.slideTo(
                            findNextHasHistoryIndex(
                              eleventhHistory?.contentList,
                              eleventhHistoryIndex
                            )
                          )
                        }
                        type='link'
                      >
                        {
                          eleventhHistory?.contentList?.[
                            findNextHasHistoryIndex(
                              eleventhHistory?.contentList,
                              eleventhHistoryIndex
                            )
                          ]?.title
                        }
                        <ChevronRight />
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div style={{ padding: "80px 0" }}>
        <div className='container'>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <TitleWithHeadline headLine={defaultHeadLine} />
            <Title
              isSecondaryFont
              isMobile={isMobile}
              size={TITLE_SIZES.MEDIUM}
              supTitle={t("Reincarnations of")}
              title={t("CHOEZE KUCHEN RINPOCHE")}
            />
          </div>
          <div
            style={{
              position: "relative"
            }}
          >
            <div
              style={{
                border: isMobile ? "5px solid #d2aa66" : "unset",
                padding: isMobile ? 32 : "32px 48px",
                borderRadius: "8px"
              }}
            >
              <Row gutter={[{ xs: 15, sm: 15, md: 40 }, 12]}>
                {reincarnation?.contentList?.map((item) => (
                  <Col span={24} md={12} lg={8}>
                    <strong
                      style={{ lineHeight: "32px", fontSize: 28 }}
                      className='tx-secondary'
                    >
                      {item.title}
                    </strong>
                  </Col>
                ))}
              </Row>
              {!isMobile && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                >
                  <img
                    src='images/bg/box-gold.png'
                    style={{
                      height: "100%",
                      width: "100%"
                    }}
                    alt=''
                  />
                </div>
              )}
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            {(reincarnation?.reincarnationLinks || []).map(({ url, label }) => (
              <Link key={url + label} passHref href={url ?? "/"}>
                <div
                  style={{
                    height: 50,
                    position: "relative",
                    margin: "24px 0"
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: 700
                    }}
                  >
                    {label}
                  </div>
                  {!isMobile && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                      }}
                    >
                      <img
                        src={
                          reincarnation?.borderButtonImage?.data?.attributes
                            ?.url ?? "images/bg/box-gold.png"
                        }
                        style={{
                          height: "100%",
                          width: "100%"
                        }}
                        alt=''
                      />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
