/* eslint-disable @next/next/no-img-element */
import { Col, Row, Space } from "antd"
import { TPage } from "definition"
import { RichText } from "elements/RichText"
import Image from "next/image"
import Link from "next/link"

import React, { FC } from "react"
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

const HighlightWrapper = styled.div`
  background: ${(props) => props.theme.highlightBg};
  padding: 48px 0;
`

const Home: FC<{
  data: TPage
  content: THomePageResponse
}> = ({ data, content }) => {
  const { introduction, statistic, meetUsInPerson, monastery } =
    content?.attributes ?? {}
  return (
    <DivHomeWrapper background={data?.background}>
      <Space direction='vertical' size={120} style={{ width: "100%" }}>
        {introduction && (
          <div className='container'>
            <h2>{introduction.title}</h2>
            <RichText
              fontSize='18px'
              align='left'
              content={introduction.description}
            />
            <Row gutter={[24, 16]} style={{ marginTop: "3em" }}>
              {introduction.contentList.map((item) => (
                <Col
                  key={item.title}
                  className='section-item'
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <Image
                    layout='responsive'
                    width={item.cover.data.attributes.width}
                    height={item.cover.data.attributes.height}
                    src={item.cover.data.attributes.url}
                    alt='home'
                  />
                  <h3>{item.title}</h3>
                  <RichText align='left' content={item.description} />
                </Col>
              ))}
            </Row>
          </div>
        )}
        {meetUsInPerson && (
          <HighlightWrapper>
            <div className='container'>
              <h2>{meetUsInPerson.title}</h2>
              <RichText
                fontSize='18px'
                align='left'
                content={meetUsInPerson.description}
              />
              <Row gutter={[24, 16]} style={{ marginTop: "3em" }}>
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
                    <MeetUsSectionWrapper
                      backgroundUrl={item.cover.data.attributes.url}
                    >
                      <MeetUsSectionOverlay className='meet-us-section__overlay' />
                      <MeetUsSectionContent>
                        <Link href={item.redirectUrl ?? "/"}>
                          <a>{item.title}</a>
                        </Link>
                      </MeetUsSectionContent>
                    </MeetUsSectionWrapper>
                  </Col>
                ))}
              </Row>
            </div>
          </HighlightWrapper>
        )}
        <Monastery {...monastery} />
        {statistic && <HomeStatistic {...statistic} />}
      </Space>
    </DivHomeWrapper>
  )
}

export default Home
