// @ts-nocheck
import {
  ArrowRightOutlined,
  LeftCircleOutlined,
  RightCircleOutlined
} from "@ant-design/icons"
import { Button, Space } from "antd"
import { EventItem } from "components/Event/EventItem"
import useEvents from "hook/useEvents"
import moment from "moment"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { THEME } from "common"

const HighlightWrapper = styled.div`
  padding: 80px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.white};
  ${(props) =>
    props.background && `background-image: url(${props.background});`}
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
`

const CustomSwiper = styled(Swiper)`
  .swiper-slide {
    @media (min-width: 1200px) {
      width: 35%;
    }
  }
`

export const UpcomingEvents: React.FC = ({
  title,
  redirectLink,
  background,
  backgroundColor = THEME.primary,
  isMobile,
  headerColor = THEME.white
}) => {
  const { t } = useTranslation()
  const carouselRef = useRef<SwiperRef>(null)
  const router = useRouter()
  const { upcomingEvents, getUpcomingEvents } = useEvents({
    locale: router.locale ?? "en"
  })

  useEffect(() => {
    getUpcomingEvents({ from: moment().toISOString() })
  }, [])

  return upcomingEvents?.length ? (
    <HighlightWrapper
      style={{ paddingBottom: isMobile ? 0 : 100 }}
      background={background}
      backgroundColor={backgroundColor}
    >
      <div className='container' style={{ position: "relative" }}>
        <h2
          style={{
            color: headerColor,
            display: isMobile ? "block" : "inline",
            marginRight: 24,
            marginBottom: isMobile ? 8 : 0
          }}
        >
          {title}
        </h2>
        <Space size='small'>
          <Button
            style={{ padding: 0 }}
            type='text'
            onClick={() => carouselRef.current?.swiper.slidePrev()}
          >
            <LeftCircleOutlined style={{ fontSize: 28, color: headerColor }} />
          </Button>
          <Button
            style={{ padding: 0 }}
            type='text'
            onClick={() => carouselRef.current?.swiper.slideNext()}
          >
            <RightCircleOutlined style={{ fontSize: 28, color: headerColor }} />
          </Button>
        </Space>
        {!isMobile && !!redirectLink && (
          <div style={{ position: "absolute", right: 15, top: 0 }}>
            <Link href={redirectLink ?? "/"}>
              <Button
                ghost
                shape='round'
                style={{ color: headerColor }}
                size='large'
              >
                {t("See all Events")}{" "}
                <ArrowRightOutlined
                  style={{ color: headerColor, fontSize: 16 }}
                />
              </Button>
            </Link>
          </div>
        )}
        <div style={{ height: isMobile ? 12 : 24 }} />
        {upcomingEvents && (
          <CustomSwiper
            speed={1500}
            ref={carouselRef}
            slidesPerView='auto'
            spaceBetween={48}
            loop={false}
          >
            {upcomingEvents.map((eventItem) => (
              <SwiperSlide key={`event-${eventItem.id}`}>
                <EventItem {...eventItem} />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        )}
        {isMobile && !!redirectLink && (
          <div style={{ textAlign: "right", padding: "0 0 24px" }}>
            <Link href={redirectLink ?? "/"}>
              <Button
                ghost
                shape='round'
                style={{ color: headerColor }}
                size='large'
              >
                {t("See all Events")}{" "}
                <ArrowRightOutlined
                  style={{ color: headerColor, fontSize: 16 }}
                />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </HighlightWrapper>
  ) : null
}

export default UpcomingEvents
