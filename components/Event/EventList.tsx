// @ts-nocheck
import { ArrowRightAlt } from "@mui/icons-material"
import { Col, Form, Input, Pagination, Row, Select } from "antd"
import { THEME } from "common"
import { UpcomingEvents } from "components/Home/UpcomingEvents"
import { TitleWithHeadline } from "components/Title/TitleWithHeadline"
import { Button } from "elements/Button"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import { getEventPathFromSlug } from "helper"
import useEvents from "hook/useEvents"
import moment from "moment"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"

const EventListWrapper = styled.div``
const SearchEventWrapper = styled.div`
  padding: 40px 0 30px;
  .ant-select-selector {
    height: 42px !important;
    border-radius: 28px !important;
    background-color: #f1f2f2 !important;
    border-color: #a7a9ac !important;
    display: flex;
    align-items: center;
  }
  .ant-form-item-control-input {
    .ant-input {
      height: 42px !important;
      border-radius: 28px !important;
      background-color: #f1f2f2 !important;
      border-color: #a7a9ac !important;
    }
  }
`
const HighlightedEventWrapper = styled.div`
  padding: 40px 0;
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
`
const SearchEventResultWrapper = styled.div``
const EventListItemsWrapper = styled.div`
  padding-bottom: 40px;
`
const EventListItemLabel = styled.div`
  position: absolute;
  right: 2%;
  top: 0;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  text-align: center;
  z-index: 10;
  padding: 12px;
  border-radius: 0 0 4px 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`

export const EventList = ({ locale, isMobile }) => {
  const router = useRouter()
  const { events, highlightedEvent, getHighlightedEvent, getEventList } =
    useEvents({ locale })
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchRange, setSearchRange] = useState()

  useEffect(() => {
    getHighlightedEvent()
  }, [])
  useEffect(() => {
    const timeRange = getTimeRange(searchRange)
    getEventList({
      page,
      from: timeRange?.from,
      to: timeRange?.to,
      qs: searchQuery
    })
  }, [page, searchQuery, searchRange])

  const getTimeRange = (type) => {
    return type == "today"
      ? {
          from: moment().startOf("day").toISOString(),
          to: moment().endOf("day").toISOString()
        }
      : type == "month"
      ? {
          from: moment().startOf("month").toISOString(),
          to: moment().endOf("month").toISOString()
        }
      : type == "next_month"
      ? {
          from: moment().add(1, "month").startOf("month").toISOString(),
          to: moment().add(1, "month").endOf("month").toISOString()
        }
      : undefined
  }

  const titleStyle = {
    fontSize: 24,
    lineHeight: "28px",
    color: THEME.primary,
    margin: 0
  }

  console.log({ events, highlightedEvent })

  return (
    <EventListWrapper>
      <SearchEventWrapper>
        <div className='container'>
          <Row gutter={[16, 8]}>
            <Col span={24} lg={{ span: 8 }}>
              <Select
                style={{ width: "100%" }}
                value={searchRange}
                allowClear
                placeholder='Search filter'
                onChange={(value) => setSearchRange(value)}
                onClear={() => setSearchRange(undefined)}
              >
                <Select.Option value='today'>{t("Today")}</Select.Option>
                <Select.Option value='month'>{t("Month")}</Select.Option>
                <Select.Option value='next_month'>
                  {t("Next Month")}
                </Select.Option>
              </Select>
            </Col>
            <Col span={24} lg={{ span: 16 }}>
              <Form
                name='search-form'
                initialValues={{ qs: "" }}
                onFinish={({ qs }) => {
                  console.log({ qs })

                  setSearchQuery(qs)
                }}
              >
                <Form.Item name='qs'>
                  <Input size='large' placeholder='Search for event' />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </SearchEventWrapper>
      {!searchQuery && !searchRange && highlightedEvent && (
        <>
          <HighlightedEventWrapper backgroundColor={THEME.primary}>
            <div className='container'>
              <h2 style={{ color: THEME.white, marginBottom: 32 }}>
                {t("Highlight Event")}
              </h2>

              <Row gutter={[40, 24]} align='top'>
                <Col span={24} xl={{ span: 12 }}>
                  <GridMedia
                    url={
                      highlightedEvent.attributes.image?.data?.attributes.url
                    }
                    name={
                      highlightedEvent.attributes.image?.data?.attributes.name
                    }
                    width={600}
                    height={300}
                    style={{ borderRadius: 12 }}
                  />
                </Col>
                <Col
                  span={24}
                  xl={{ span: 12 }}
                  style={{ alignSelf: "stretch" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%"
                    }}
                  >
                    <div>
                      <Button
                        type='primary'
                        style={{
                          backgroundColor: THEME.white,
                          color: THEME.dark,
                          borderRadius: 4
                        }}
                      >
                        {moment(highlightedEvent.attributes.dateStart).format(
                          "dddd, MMMM Do, YYYY"
                        )}
                      </Button>
                      <h3 style={{ color: THEME.white, fontSize: 28 }}>
                        {highlightedEvent.attributes.title}
                      </h3>
                      <RichText
                        color={THEME.white}
                        content={highlightedEvent.attributes.description}
                      />
                    </div>
                    <Button
                      type='text'
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: THEME.white,
                        padding: "12px 0"
                      }}
                      onClick={() =>
                        router.push(
                          getEventPathFromSlug(
                            highlightedEvent.id,
                            highlightedEvent.attributes.slug
                          )
                        )
                      }
                    >
                      <span style={{ display: "block", marginRight: 10 }}>
                        {t("See more")}
                      </span>{" "}
                      <ArrowRightAlt />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </HighlightedEventWrapper>
          <UpcomingEvents
            title={t("Upcoming Events")}
            backgroundColor={THEME.white}
            isMobile={isMobile}
            headerColor={THEME.primary}
          />
        </>
      )}
      {events?.data?.length ? (
        <EventListItemsWrapper>
          <div className='container'>
            <h2 style={{ color: THEME.primary, marginBottom: 24 }}>
              {!searchQuery && !searchRange
                ? t("All Events")
                : t("Search Results")}
            </h2>
            <SearchEventResultWrapper>
              <Row gutter={[0, 40]}>
                {events.data.map((item) => (
                  <Col
                    span={24}
                    style={{
                      backgroundColor: "#f1f1f1",
                      borderRadius: 12,
                      position: "relative"
                    }}
                  >
                    <EventListItemLabel>
                      <span
                        style={{
                          display: "block",
                          fontWeight: 600,
                          fontSize: 28,
                          lineHeight: "28px"
                        }}
                      >
                        {moment(item.attributes.dateStart).format("DD")}
                      </span>
                      <span>
                        {moment(item.attributes.dateStart).format("MMM YYYY")}
                      </span>
                    </EventListItemLabel>
                    <Row gutter={[16, 16]}>
                      <Col span={24} md={{ span: 9 }}>
                        <GridMedia
                          url={item.attributes.image?.data?.attributes.url}
                          name={item.attributes.image?.data?.attributes.name}
                          width={600}
                          height={300}
                          style={{ borderRadius: 12 }}
                        />
                      </Col>
                      <Col
                        span={24}
                        md={{ span: 12 }}
                        style={{ alignSelf: "stretch" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            padding: 24
                          }}
                        >
                          <div>
                            <h2 style={{ ...titleStyle }}>
                              {item.attributes.title}
                            </h2>
                            <i
                              style={{
                                color: "#000",
                                fontWeight: 300,
                                fontSize: 14,
                                display: "block",
                                marginBottom: 8
                              }}
                            >
                              {t("Time: ")}
                              {moment(item.attributes.dateStart).format(
                                "hh:mmA"
                              )}
                              -
                              {moment(item.attributes.dateEnd).format("hh:mmA")}
                            </i>
                            <RichText
                              fontSize='16px'
                              lineHeight='20px'
                              content={item.attributes.description}
                            />
                          </div>
                          <Button
                            type='text'
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: THEME.primary,
                              padding: "12px 0"
                            }}
                            onClick={() =>
                              router.push(
                                getEventPathFromSlug(
                                  item.id,
                                  item.attributes.slug ?? ""
                                )
                              )
                            }
                          >
                            <span style={{ display: "block", marginRight: 10 }}>
                              {t("See more")}
                            </span>{" "}
                            <ArrowRightAlt />
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </SearchEventResultWrapper>
          </div>
          <div style={{ textAlign: "center", marginTop: isMobile ? 24 : 40 }}>
            <Pagination
              total={events.meta.pagination.total}
              pageSize={events.meta.pagination.pageSize}
              current={page}
              onChange={(page) => setPage(page)}
            />
          </div>
        </EventListItemsWrapper>
      ) : (
        <div style={{ textAlign: "center", paddingBottom: 80, fontSize: 32 }}>
          {t("No events")}
        </div>
      )}
    </EventListWrapper>
  )
}
