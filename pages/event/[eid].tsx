// @ts-nocheck
import { Breadcrumb, Col, Row } from "antd"
import { SinglePageContentWrapper } from "container/layout/SinglePage"
import { useApp } from "context/app/AppContext"
import { TEvent } from "definition"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import withDetectDevice from "hoc/withDetectDevice"
import withEvent from "hoc/withEvent"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import useEvents from "hook/useEvents"
import moment from "moment"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import { getEventPathFromSlug } from "helper"
import Link from "next/link"
import { THEME } from "common"
import { EventItem } from "components/Event/EventItem"

type TEventDetails = {
  eventDetails: {
    data: {
      id: number
      attributes: TEvent
    }
  }
  isMobile: boolean
}

const PageContentWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`

const EventDetails = ({ eventDetails, isMobile }: TEventDetails) => {
  console.log({ eventDetails, isMobile })
  const { setTitleBanner, setBanner } = useApp()
  const { t } = useTranslation()
  const { attributes } = eventDetails.data || {}
  const router = useRouter()
  const { upcomingEvents, getUpcomingEvents } = useEvents({
    locale: router.locale ?? "en"
  })
  moment.locale(router.locale)

  useEffect(() => {
    if (eventDetails.data?.attributes?.cover) {
      setBanner(eventDetails.data.attributes.cover.data)
    }
    if (eventDetails.data?.attributes?.title) {
      setTitleBanner(
        eventDetails.data.attributes.title,
        `${moment(attributes.dateStart).format("MMMM DD, YYYY")} - ${moment(
          attributes.dateEnd
        ).format("MMMM DD, YYYY")}`
      )
    }
  }, [eventDetails])

  useEffect(() => {
    getUpcomingEvents({
      from: moment(attributes.dateEnd).toISOString()
    })
  }, [])

  return (
    <PageContentWrapper>
      <SinglePageContentWrapper>
        <Breadcrumb style={{ marginBottom: 25 }}>
          <Breadcrumb.Item>
            <Link href='/events.html'>
              <a style={{ color: THEME.primary }}>{t("Events")}</a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{attributes.title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={40}>
          <Col span={24} xl={{ span: 16 }}>
            <RichText
              content={attributes?.content || attributes?.description}
            />
          </Col>
          <Col span={24} xl={{ span: 8 }}>
            <h2 style={{ fontSize: 24, marginBottom: 25, lineHeight: "28px" }}>
              {t("Upcoming Events")}
            </h2>
            <div>
              {upcomingEvents.length ? (
                upcomingEvents.map((event, index) => <EventItem {...event} />)
              ) : (
                <div>
                  <span style={{ color: THEME.textSecondary }}>
                    {t("No upcoming events")}
                  </span>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </SinglePageContentWrapper>
    </PageContentWrapper>
  )
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withEvent(withTrans))
)

export default withNavigator(EventDetails)
