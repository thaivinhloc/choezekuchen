import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space } from "antd"
import { TMedia } from "definition"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import Link from "next/link"
import { FC, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import useMonastery from "hook/useMonastery"
import { useRouter } from "next/router"
import { getMonasteryPathFromSlug } from "helper"

const CustomSwiper = styled(Swiper)`
  .swiper-slide {
    @media (min-width: 1200px) {
      width: 60%;
    }
    .project {
      &__title {
        padding: 16px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: 600;
        color: ${(props) => props.theme.white};
        z-index: 2;
        @media (min-width: 1200px) {
          font-size: 28px;
        }
      }
      &__backdrop {
        background: linear-gradient(
          360deg,
          #000000 -5.27%,
          rgba(0, 0, 0, 0.0001) 57.85%
        );
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 0 0 8px 8px;
      }
    }
  }
`
const CustomContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 15px;
  @media (min-width: 1200px) {
    width: calc(1140px + (100vw - 1140px) / 2);
    margin-right: unset !important;
  }
  @media (min-width: 1400px) {
    width: calc(1340px + (100vw - 1340px) / 2);
  }
`

export const Monastery: FC<{
  title?: string
  description?: string
  redirectTitle?: string
  redirectLink?: string
  contentList: {
    title: string
    cover: {
      data: TMedia
    }
    redirectLink?: string
  }[]
}> = ({ title, description, contentList, redirectLink, redirectTitle }) => {
  const carouselRef = useRef<SwiperRef>(null)
  const router = useRouter()
  const { monasteries, getAllMonasteries } = useMonastery({
    locale: router.locale ?? "en"
  })

  useEffect(() => {
    getAllMonasteries()
  }, [])

  console.log({ monasteries })

  return (
    <CustomContainer>
      <Row gutter={[32, 24]}>
        <Col span={24} lg={{ span: 8 }}>
          <h2>{title}</h2>
          <RichText fontSize='20px' content={description} />
          <Button
            style={{ padding: 0, fontWeight: 500 }}
            href={redirectLink}
            type='link'
          >
            {redirectTitle} <ArrowRightOutlined />
          </Button>
          <br />
          <Space size='middle' style={{ marginTop: 32 }}>
            <Button
              onClick={() => carouselRef.current?.swiper.slidePrev()}
              shape='circle'
              icon={<ArrowLeftOutlined />}
              type='ghost'
              style={{
                width: 52,
                height: 52,
                background: "#f1f1f1",
                borderColor: "#f1f1f1"
              }}
            />
            <Button
              onClick={() => carouselRef.current?.swiper.slideNext()}
              shape='circle'
              icon={<ArrowRightOutlined />}
              type='ghost'
              style={{
                width: 52,
                height: 52,
                background: "#f1f1f1",
                borderColor: "#f1f1f1"
              }}
            />
          </Space>
        </Col>
        <Col span={24} lg={{ span: 16 }}>
          {monasteries?.length && (
            <CustomSwiper
              speed={1500}
              ref={carouselRef}
              spaceBetween={32}
              slidesPerView='auto'
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              modules={[Autoplay]}
              loop
            >
              {monasteries.map(({ id, attributes }) => (
                <SwiperSlide key={attributes.title}>
                  <Link
                    href={getMonasteryPathFromSlug(id, attributes.slug ?? "/")}
                  >
                    <div style={{ position: "relative", cursor: "pointer" }}>
                      <GridMedia
                        style={{ borderRadius: 8 }}
                        url={attributes.cover.data.attributes.url}
                      />
                      <div className='project__backdrop' />
                      <div className='project__title'>{attributes.title}</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </CustomSwiper>
          )}
        </Col>
      </Row>
    </CustomContainer>
  )
}
