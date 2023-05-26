// @ts-nocheck
import { Col, Row, Tabs, Tooltip } from "antd"
import { THEME } from "common"
import { TITLE_SIZES, Title } from "components/Title"
import { SingleSection } from "container/Section"
import { Button } from "elements/Button"
import { RichText } from "elements/RichText"
import usePage from "hook/usePage"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Navigation } from "swiper"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import ArrowLeftIcon from "assets/svgs/circle_arrow_left_icon.svg"
import ArrowRightIcon from "assets/svgs/circle_arrow_right_icon.svg"
import StarIcon from "assets/svgs/star_icon.svg"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { TitleWithHeadline } from "components/Title/TitleWithHeadline"

const AboutWrapper = styled.div``

const BackgroundWrapper = styled.div<{
  background?: any
  backgroundColor?: string
}>`
  background: ${(props) =>
    props.background?.data
      ? `url(${props.background?.data?.attributes?.url})`
      : props.backgroundColor || "#fff"};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
`

const TabsWrapper = styled(Tabs)`
  .ant-tabs-nav-list {
    align-items: flex-start;
    @media (min-width: 1200px) {
      justify-content: space-between;
      min-width: 100%;
    }
  }
`

export const About = ({
  locale,
  pageContentEndpoint,
  globalData,
  isMobile
}) => {
  const swiperRef = useRef()
  const historySwiperRef = useRef()
  const historyTabRef = useRef()
  const eleventhHistorySwiperRef = useRef()
  const eleventhHistoryTabRef = useRef()
  const [historyIndex, setHistoryIndex] = useState(0)
  const [eleventhHistoryIndex, setEleventhHistoryIndex] = useState(0)
  const [isTabInit, setTabsInit] = useState(false)
  const { content, getPageContent } = usePage({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "introduction",
      "populate[5]": "introduction.background",
      "populate[1]": "gurus",
      "populate[6]": "gurus.background",
      "populate[7]": "gurus.contentList",
      "populate[14]": "gurus.contentList.cover",
      "populate[2]": "history",
      "populate[9]": "history.background",
      "populate[8]": "history.contentList",
      "populate[15]": "history.contentList.cover",
      "populate[3]": "eleventhHistory",
      "populate[10]": "eleventhHistory.background",
      "populate[11]": "eleventhHistory.contentList",
      "populate[16]": "eleventhHistory.contentList.cover",
      "populate[4]": "reincarnation",
      "populate[12]": "reincarnation.background",
      "populate[13]": "reincarnation.contentList"
    }
  })
  const { t } = useTranslation()

  useEffect(() => {
    if (pageContentEndpoint) {
      getData()
    }
    async function getData() {
      await getPageContent()
    }
  }, [pageContentEndpoint])

  useEffect(() => {
    if (content) {
      setTimeout(() => {
        setTabsInit(true)
      }, 2000)
    }
  }, [content])

  const { introduction, gurus, history, eleventhHistory, reincarnation } =
    content?.data?.attributes ?? {}
  const { defaultHeadLine } = globalData.attributes
  const {
    title: introductionTitle,
    description: introductionDescription,
    background: introductionBackground,
    backgroundColor: introductionBackgroundColor
  } = introduction ?? {}

  const {
    contentList: gurusContentList,
    background: gurusBackground,
    backgroundColor: gurusBackgroundColor
  } = gurus ?? {}

  const gurusItemsByGroup = Object.values(
    gurusContentList?.reduce((res, cur) => {
      res[cur.order] = res[cur.order] ?? []
      res[cur.order].push(cur)
      return res
    }, {}) ?? {}
  )

  const findNextHasHistory = (_historyContentList, idx) => {
    return _historyContentList?.find(
      (h, index) => index > idx && !!h.description
    )
  }

  const findPrevHasHistory = (_historyContentList, idx) => {
    return _historyContentList?.find(
      (h, index) => index < idx && !!h.description
    )
  }

  const findNextHasHistoryIndex = (_historyContentList, idx) => {
    return _historyContentList?.findIndex(
      (h, index) => index > idx && !!h.description
    )
  }

  const findPrevHasHistoryIndex = (_historyContentList, idx) => {
    return _historyContentList?.findIndex(
      (h, index) => index < idx && !!h.description
    )
  }

  console.log({
    introduction,
    gurusItemsByGroup,
    history,
    historySwiperRef: historySwiperRef.current
  })

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
        style={{ textAlign: "center" }}
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
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}
            >
              {gurusItemsByGroup?.map((item) => (
                <SwiperSlide style={{ textAlign: "center" }}>
                  <Row gutter={24} justify='center'>
                    {item.map(({ title, cover, description }) => (
                      <Col span={Math.floor(20 / item.length)}>
                        <div style={{ maxWidth: 240, margin: "0 auto" }}>
                          <Image
                            src={cover?.data?.attributes.url}
                            {...cover?.data?.attributes}
                            layout='responsive'
                          />
                        </div>
                        <h3 style={{ color: THEME.white }}>{title}</h3>
                        <RichText
                          style={{ maxWidth: 500, margin: "0 auto" }}
                          color={THEME.white}
                          content={description}
                        />
                      </Col>
                    ))}
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
              <Image src={ArrowLeftIcon} width={40} height={40} />
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
              <Image src={ArrowRightIcon} width={40} height={40} />
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
            <Image src={StarIcon} width={18} height={18} />
            <i style={{ display: "block", marginLeft: 8, fontSize: 20 }}>
              {t("Updating information")}
            </i>
          </div>
          <div ref={historyTabRef} />
          {history && (
            <TabsWrapper
              activeKey={historyIndex}
              size='large'
              onChange={(ak) => {
                historySwiperRef.current?.slideTo(ak)
                setHistoryIndex(ak)
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
                          color={THEME.primary}
                          overlayInnerStyle={{
                            borderRadius: 4,
                            fontWeight: 600,
                            width: "max-content",
                            padding: "12px 15px"
                          }}
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
                                <Image src={StarIcon} width={14} height={14} />
                              </div>
                            )}
                          </div>
                        </Tooltip>
                      </div>
                    }
                    key={idx}
                  />
                )
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
                setHistoryIndex(swiper.realIndex)
                historyTabRef.current?.scrollIntoView({ behavior: "smooth" })
              }}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                historySwiperRef.current = swiper
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
                      <RichText color={THEME.dark} content={description} />
                    </Col>
                  </Row>
                </SwiperSlide>
              ))}
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
                        {
                          history?.contentList?.[
                            findPrevHasHistoryIndex(
                              history?.contentList,
                              historyIndex
                            )
                          ]?.title
                        }
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
                        {
                          history?.contentList?.[
                            findNextHasHistoryIndex(
                              history?.contentList,
                              historyIndex
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
      <div style={{ textAlign: "center", paddingTop: 80 }}>
        <div className='container'>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <SingleSection
              title={eleventhHistory?.title}
              content={eleventhHistory?.content}
              headLine={defaultHeadLine}
            />
          </div>
          <div ref={eleventhHistoryTabRef} />
          <TabsWrapper
            activeKey={eleventhHistoryIndex}
            size='large'
            onChange={(ak) => {
              eleventhHistorySwiperRef.current?.slideTo(ak)
              setEleventhHistoryIndex(ak)
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
                      color={THEME.primary}
                      overlayInnerStyle={{
                        borderRadius: 4,
                        fontWeight: 600,
                        width: "max-content",
                        padding: "12px 15px"
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
                            <Image src={StarIcon} width={14} height={14} />
                          </div>
                        )}
                      </div>
                    </Tooltip>
                  }
                  key={idx}
                />
              )
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
                setEleventhHistoryIndex(swiper.realIndex)
                eleventhHistoryTabRef.current?.scrollIntoView({
                  behavior: "smooth"
                })
              }}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                eleventhHistorySwiperRef.current = swiper
              }}
            >
              {eleventhHistory?.contentList?.map(
                ({ cover, title, description }) => (
                  <SwiperSlide style={{ textAlign: "center" }}>
                    <Row gutter={[{ xs: 15, sm: 15, md: 32 }, 15]}>
                      <Col span={24} md={{ span: 7 }}>
                        <div>
                          <Image
                            src={cover?.data?.attributes.url}
                            {...cover?.data?.attributes}
                            layout='responsive'
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
                        <RichText color={THEME.dark} content={description} />
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
              isMobile={isMobile}
              size={TITLE_SIZES.MEDIUM}
              supTitle={t("Reincarnations of")}
              title={t("CHOEZE KUCHEN RINPOCHE")}
            />
          </div>
          <div
            style={{
              border: "5px solid #d2aa66",
              padding: isMobile ? 16 : "32px 48px"
            }}
          >
            <Row gutter={[{ xs: 15, sm: 15, md: 40 }, 12]}>
              {reincarnation?.contentList?.map((item) => (
                <Col span={24} md={12} lg={8}>
                  <strong style={{ lineHeight: "32px", fontSize: 20 }}>
                    {item.title}
                  </strong>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
}

export default About