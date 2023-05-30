// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { Col, Row, Space } from "antd"
import { TPage } from "definition"
import { RichText } from "elements/RichText"
import Image from "next/image"
import Link from "next/link"

import React, { FC, useEffect } from "react"
import { THomePageResponse } from "services/page/home"
import styled from "styled-components"
import {
  DivHomeWrapper,
  MeetUsSectionContent,
  MeetUsSectionOverlay,
  MeetUsSectionWrapper
} from "./index.styles"
import { Monastery } from "./Monastery"
import { HomeStatistic } from "./Statistic"
import { UpcomingEvents } from "./UpcomingEvents"
import { Offering } from "./Offering"
import { EVENT } from "common/navigator"
import { useTranslation } from "next-i18next"
import { THEME } from "common"

const BackgroundWrapper = styled.div<{ background?: any }>`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
`

const Home: FC<{
  data: TPage
  content: THomePageResponse
  isMobile: boolean
  globalData: any
}> = ({ data, content, isMobile, globalData }) => {
  const { t } = useTranslation()
  const { introduction, statistic, meetUsInPerson, monastery, offering } =
    content?.attributes ?? {}
  console.log({
    introduction,
    statistic,
    meetUsInPerson,
    monastery,
    offering
  })

  return (
    <DivHomeWrapper background={data?.background}>
      {introduction && (
        <BackgroundWrapper background={introduction.background}>
          <div className='container'>
            <h2>{introduction.title}</h2>
            <RichText
              fontSize='20px'
              align='left'
              color={THEME.dark}
              content={introduction.description}
            />
            <Row
              gutter={[{ xs: 15, sm: 15, md: 48 }, 15]}
              style={{ marginTop: "3em" }}
            >
              {introduction.contentList.map((item) => (
                <Col
                  key={item.title}
                  className='section-item'
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={8}
                >
                  <MeetUsSectionWrapper
                    backgroundUrl={item.cover.data.attributes.url}
                  >
                    <Link href={item.redirectLink ?? "/"}>
                      <a>
                        <MeetUsSectionOverlay className='meet-us-section__overlay' />
                        <MeetUsSectionContent>
                          <span
                            style={{
                              textDecoration: "none",
                              fontSize: 28,
                              fontWeight: "600",
                              color: THEME.white
                            }}
                          >
                            {item.title}
                          </span>
                        </MeetUsSectionContent>
                      </a>
                    </Link>
                  </MeetUsSectionWrapper>
                </Col>
              ))}
            </Row>
          </div>
        </BackgroundWrapper>
      )}
      {meetUsInPerson && (
        <BackgroundWrapper background={meetUsInPerson.background}>
          <div className='container'>
            <h2>{meetUsInPerson.title}</h2>
            <RichText
              fontSize='20px'
              align='left'
              content={meetUsInPerson.description}
            />
            <Row gutter={[32, 16]} style={{ marginTop: "3em" }}>
              {meetUsInPerson.contentList.map((item) => (
                <Col
                  key={item.title}
                  className='section-item'
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={8}
                >
                  <Link href={item.redirectLink ?? "/"}>
                    <a>
                      <div
                        style={{
                          borderRadius: 8,
                          background: "#800000",
                          height: "100%",
                          color: THEME.white
                        }}
                      >
                        <Image
                          style={{ borderRadius: "8px 8px 0 0" }}
                          layout='responsive'
                          width={item.cover.data.attributes.width}
                          height={item.cover.data.attributes.height}
                          src={item.cover.data.attributes.url}
                          alt='home'
                        />
                        <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                          <h3 style={{ color: THEME.white, fontSize: 24 }}>
                            {item.title}
                          </h3>
                          <div style={{ paddingBottom: 15 }}>
                            <RichText
                              color={THEME.white}
                              align='left'
                              content={item.description}
                              fontWeight='300'
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </BackgroundWrapper>
      )}
      <Monastery {...monastery} />
      {statistic && <HomeStatistic {...statistic} />}
      <UpcomingEvents
        redirectLink={EVENT}
        title={t("Upcoming Events")}
        background={null}
        isMobile={isMobile}
      />
      {data?.isEnabledOffering && (
        <Offering
          {...globalData.attributes.offering}
          offeringTitle={data.offeringTitle}
          offeringSubTitle={data.offeringSubTitle}
          offeringRedirectLink={data.offeringRedirectLink}
          offeringRedirectTitle={data.offeringRedirectTitle}
          isMobile={isMobile}
        />
      )}
    </DivHomeWrapper>
  )
}

export default Home
