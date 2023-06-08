// @ts-nocheck
import { THEME } from "common";
import { UpcomingEvents } from "components/Home/UpcomingEvents";
import { Button } from "elements/Button";
import usePage from "hook/usePage";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeftIcon from "assets/svgs/circle_arrow_left_icon.svg";
import ArrowRightIcon from "assets/svgs/circle_arrow_right_icon.svg";
import { Navigation } from "swiper";
import { Col, Row } from "antd";
import { RichText } from "elements/RichText";
import { Autoplay } from "swiper";
import { SingleSection } from "container/Section";
import { TeachingItem } from "./TeachingItem";

const TeachingMethodsWrapper = styled.div`
  @media (min-width: 1200px) {
    transform: translateY(-15%);
  }
  position: relative;
  z-index: 10;
`;
const TeachingMethods = ({ data, isMobile }) => {
  const swiperRef = useRef();
  return (
    <TeachingMethodsWrapper>
      <div className='container'>
        {data && (
          <>
            <Swiper
              loop={true}
              autoplay={{
                delay: 30000,
                disableOnInteraction: true
              }}
              speed={1500}
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {data.map(({ title, cover, description, background }) => (
                <SwiperSlide>
                  <div
                    style={{
                      padding: isMobile ? "10px 24px" : "10px 160px"
                    }}
                  >
                    <div
                      style={{
                        padding: 8,
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                        borderRadius: 8,
                        backgroundImage: `url(${background?.data?.attributes?.url})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: THEME.white
                      }}
                    >
                      <Row align='bottom' gutter={[32, 16]}>
                        <Col span={24} md={{ span: 15 }}>
                          <div
                            style={{ padding: isMobile ? 0 : "24px 24px 12px" }}
                          >
                            {isMobile && (
                              <div
                                style={{
                                  height: 200,
                                  width: "100%",
                                  position: "relative",
                                  marginBottom: 12
                                }}
                              >
                                <Image
                                  src={cover?.data?.attributes.url}
                                  {...cover?.data?.attributes}
                                  layout='fill'
                                  objectFit='cover'
                                  objectPosition='center center'
                                />
                              </div>
                            )}
                            <h2 style={{ fontSize: 24, color: THEME.primary }}>
                              {title}
                            </h2>
                            <RichText content={description} />
                          </div>
                        </Col>
                        {!isMobile && (
                          <Col span={24} md={{ span: 9 }}>
                            <Image
                              src={cover?.data?.attributes.url}
                              {...cover?.data?.attributes}
                              layout='responsive'
                            />
                          </Col>
                        )}
                      </Row>
                    </div>
                  </div>
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
          </>
        )}
      </div>
    </TeachingMethodsWrapper>
  );
};

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
  @media (min-width: 1200px) {
    transform: translateY(-7%);
  }
`;

export const Teaching = ({
  locale,
  pageContentEndpoint,
  isMobile,
  globalData
}) => {
  const { t } = useTranslation();
  const { content, getPageContent } = usePage({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "teachingMethods",
      "populate[1]": "teachingMethods.cover",
      "populate[5]": "teachingMethods.background",
      "populate[2]": "ourPractices",
      "populate[3]": "ourPractices.contentList",
      "populate[4]": "ourPractices.contentList.cover",
      "populate[6]": "ourPractices.background",
      "populate[7]": "ourPractices.contentList.redirectPage",
      "populate[8]": "event_banner"
    }
  });

  useEffect(() => {
    if (pageContentEndpoint) {
      getData();
    }
    async function getData() {
      await getPageContent();
    }
  }, [pageContentEndpoint]);

  const { ourPractices, teachingMethods, event_banner } =
    content?.data?.attributes ?? {};
  const { defaultHeadLine } = globalData.attributes;
  return (
    <div>
      <TeachingMethods data={teachingMethods ?? []} isMobile={isMobile} />
      <BackgroundWrapper
        background={ourPractices?.background}
        style={{ paddingTop: 20 }}
      >
        <div className='container'>
          <SingleSection
            headLine={defaultHeadLine}
            title={ourPractices?.title}
            content={ourPractices?.description}
          />
          <div style={{ height: 48 }} />
          <Row
            gutter={[
              { xs: 16, sm: 16, md: 24, xl: 40 },
              { xs: 16, sm: 16, md: 24, xl: 40 }
            ]}
          >
            {ourPractices?.contentList?.map((item) => (
              <Col span={24} md={{ span: 12 }} xl={{ span: 8 }}>
                <TeachingItem {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </BackgroundWrapper>
      <UpcomingEvents
        title={t("Upcoming Events")}
        background={event_banner?.data?.attributes?.url}
        backgroundColor='rgba(0,0,0,0.3)'
        redirectLink='/events.html'
        isMobile={isMobile}
      />
    </div>
  );
};

export default Teaching;
