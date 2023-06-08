import { Col, Row, Space } from "antd"
import { TMedia } from "definition"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import { formatNumber } from "helper"
import { FC, useState } from "react"
import styled from "styled-components"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const LargeTitleWrapper = styled(Space)`
  .statistic {
    &__title {
      font-size: 32px;
      color: ${(props) => props.theme.secondary};
    }
    &__value {
      font-size: 100px;
      line-height: 80px;
      margin-left: -10px;
    }
    &__description {
    }
  }
  @media (max-width: 991px) {
    .statistic {
      &__title {
        font-size: 28px;
        font-weight: 600;
      }
      &__value {
        font-size: 64px;
        line-height: 72px;
      }
    }
  }
  div,
  span {
    color: inherit;
  }
`

const SmallTitleWrapper = styled.div`
  .statistic {
    &__title {
      font-size: 24px;
      color: ${(props) => props.theme.secondary};
      font-weight: 600;
    }
    &__value {
      font-size: 45px;
      line-height: 45px;
    }
    &__description {
    }
  }
  div,
  span {
    color: inherit;
  }
`

const BackgroundWrapper = styled.div<{ background?: any }>`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
`

const colors = ["#800000", "#FFB103", "#BA0808", "#2C7000"]

export const HomeStatistic: FC<{
  title?: string
  banner?: {
    data: TMedia
  }
  contentList: {
    name: string
    value: string
    description?: string
  }[]
  background?: any
}> = ({ banner, contentList, background }) => {
  const [isCountedUp, setCountedUp] = useState(false)
  return (
    <BackgroundWrapper
      background={background}
      style={{
        backgroundColor: "#F1F2F2",
        padding: "80px 0 0"
      }}
    >
      <div className='container'>
        <Row
          align='bottom'
          gutter={[
            { xs: 16, sm: 16, md: 16, lg: 96 },
            { xs: 16, sm: 16, md: 0, lg: 0 }
          ]}
        >
          <Col span={24} lg={{ span: 12 }}>
            <GridMedia
              width={300}
              height={400}
              url={banner?.data.attributes.url}
            />
          </Col>
          <Col span={24} lg={{ span: 12 }} style={{ paddingBottom: 48 }}>
            <Space direction='vertical' size='large'>
              {contentList.map((item, idx) =>
                !idx ? (
                  <LargeTitleWrapper
                    direction='vertical'
                    key={item.name}
                    style={{ color: colors[idx] }}
                  >
                    <Space size='large'>
                      <strong className='statistic__value'>
                        {formatNumber(Number(item.value))}
                      </strong>
                      <strong
                        className='statistic__title'
                        style={{
                          marginBottom: 0
                        }}
                      >
                        {item.name}
                      </strong>
                    </Space>
                    <RichText
                      className='statistic__description'
                      content={item.description}
                      fontSize='24px'
                    />
                  </LargeTitleWrapper>
                ) : (
                  <SmallTitleWrapper
                    key={item.name}
                    style={{ color: colors[idx] }}
                  >
                    <strong className='statistic__value'>
                      {isCountedUp ? (
                        formatNumber(Number(item.value))
                      ) : (
                        <CountUp end={Number(item.value)}>
                          {({ countUpRef, start }) => (
                            <div>
                              <span ref={countUpRef} />
                              <ScrollTrigger
                                onExit={() => {
                                  setCountedUp(true)
                                }}
                                onEnter={start}
                              />
                            </div>
                          )}
                        </CountUp>
                      )}
                    </strong>
                    <strong
                      className='statistic__title'
                      style={{
                        marginBottom: 0,
                        display: "block"
                      }}
                    >
                      {item.name}
                    </strong>
                    <RichText
                      fontSize='20px'
                      className='statistic__description'
                      content={item.description}
                    />
                  </SmallTitleWrapper>
                )
              )}
            </Space>
          </Col>
        </Row>
      </div>
    </BackgroundWrapper>
  )
}
