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

const HighlightWrapper = styled.div`
  padding: 80px 0;
  background: ${(props) =>
    props?.background ? `url(${props.background})` : props.theme.primary};
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
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
  isMobile
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
    <HighlightWrapper background={background}>
      <div className='container' style={{ position: "relative" }}>
        <h2
          style={{
            color: "#fff",
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
            <LeftCircleOutlined style={{ fontSize: 28, color: "#ffffff80" }} />
          </Button>
          <Button
            style={{ padding: 0 }}
            type='text'
            onClick={() => carouselRef.current?.swiper.slideNext()}
          >
            <RightCircleOutlined style={{ fontSize: 28, color: "#ffffff80" }} />
          </Button>
        </Space>
        {!isMobile && (
          <div style={{ position: "absolute", right: 15, top: 0 }}>
            <Link href={redirectLink ?? "/"}>
              <Button
                ghost
                shape='round'
                style={{ color: "#fff" }}
                size='large'
              >
                {t("See all Events")}{" "}
                <ArrowRightOutlined style={{ color: "#fff", fontSize: 16 }} />
              </Button>
            </Link>
          </div>
        )}
        <div style={{ height: 48 }} />
        {upcomingEvents && (
          <CustomSwiper
            ref={carouselRef}
            slidesPerView={isMobile ? "auto" : 3}
            spaceBetween={32}
            loop={false}
          >
            {upcomingEvents.map((eventItem) => (
              <SwiperSlide key={`event-${eventItem.id}`}>
                <EventItem {...eventItem} />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        )}
        {isMobile && (
          <div style={{ textAlign: "right", marginTop: 24 }}>
            <Link href={redirectLink ?? "/"}>
              <Button
                ghost
                shape='round'
                style={{ color: "#fff" }}
                size='large'
              >
                {t("See all Events")}{" "}
                <ArrowRightOutlined style={{ color: "#fff", fontSize: 16 }} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </HighlightWrapper>
  ) : null
}
