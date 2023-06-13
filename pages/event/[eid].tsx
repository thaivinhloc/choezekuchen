/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { ArrowRightOutlined, RightCircleFilled } from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import { THEME } from "common";
import { EventItem } from "components/Event/EventItem";
import Input, { TextArea } from "components/Input";
import { TeachingItem } from "components/Teaching/TeachingItem";
import { TITLE_SIZES, Title } from "components/Title";
import { SinglePageContentWrapper } from "container/layout/SinglePage";
import { useApp } from "context/app/AppContext";
import { TEvent } from "definition";
import { Button } from "elements/Button";
import { RichText } from "elements/RichText";
import withDetectDevice from "hoc/withDetectDevice";
import withEvent from "hoc/withEvent";
import withGlobalData from "hoc/withGlobalData";
import { withNavigator } from "hoc/withNavigator";
import withTrans from "hoc/withTrans";
import useEvents from "hook/useEvents";
import useTeaching from "hook/useTeaching";
import moment from "moment";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import styled from "styled-components";

type TEventDetails = {
  eventDetails: {
    data: {
      id: number;
      attributes: TEvent;
    };
  };
  isMobile: boolean;
};
const BackgroundWrapper = styled.div<{ background?: any }>`
  background: url("images/bg/HomeSite_Lotus_Background.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
  @media (min-width: 1200px) {
    padding: 200px 0;
  }
`;

const PageContentWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
  .card-right {
    margin-bottom: 30px;
    padding: 30px 16px;
    border-radius: 16px;
    background-image: url("images/teaching/background-side-right.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
`;

const EventDetails = ({ eventDetails, isMobile }: TEventDetails) => {
  console.log({ eventDetails, isMobile });
  const { setTitleBanner, setBanner } = useApp();
  const { t } = useTranslation();
  const { attributes } = eventDetails.data || {};
  const router = useRouter();
  const { upcomingEvents, getUpcomingEvents } = useEvents({
    locale: router.locale ?? "en"
  });

  const { teachings, fetchListTeaching } = useTeaching({
    locale: router.locale ?? "en"
  });

  moment.locale(router.locale);

  useEffect(() => {
    if (eventDetails.data?.attributes?.cover) {
      setBanner(eventDetails.data.attributes.cover.data);
    }
    if (eventDetails.data?.attributes?.title) {
      setTitleBanner(t("EVENT"));
    }
  }, [eventDetails, setBanner, setTitleBanner, t]);

  useEffect(() => {
    getUpcomingEvents({
      from: moment(attributes.dateEnd).toISOString()
    });
    fetchListTeaching();
  }, []);

  const {
    banner,
    title,
    createdAt,
    dateStart,
    dateEnd,
    placeName,
    address,
    media,
    image,
    cardTitle,
    cardButtonText,
    cardButtonLink,
    retreatContent,
    buttonRetreatLink,
    buttonRetreatText
  } = attributes;
  const listMedia = media.data || [];

  const listIntro = useMemo(() => {
    const startTime = moment(dateStart).format("h:mm A");
    const endTime = moment(dateEnd).format("h:mm A");

    const start = moment(dateStart);
    const end = moment(dateEnd);
    const durations = moment.duration(end.diff(start));
    var days = durations.asDays();
    return [
      {
        image: "/images/icons/duration.png",
        title: "Duration",
        content: `${days} Days`
      },
      {
        image: "/images/icons/location.png",
        title: "Location",
        content: placeName
      },
      {
        image: "/images/icons/hostedIn.png",
        title: "Hosted In",
        content: address
      },
      {
        image: "/images/icons/time.png",
        title: "Time",
        content: startTime + " - " + endTime
      }
    ];
  }, [address, dateEnd, dateStart, placeName]);

  /* Zoom Images */
  const [indexImages, setIndexImages] = useState(-1);

  const currentImage = listMedia[indexImages]?.attributes;

  const nextIndex = (indexImages + 1) % listMedia.length;
  const nextImage = listMedia[nextIndex]?.attributes || currentImage;
  const prevIndex = (indexImages + listMedia.length - 1) % listMedia.length;
  const prevImage = listMedia[prevIndex]?.attributes || currentImage;
  const handleClick = (index: number) => setIndexImages(index);
  const handleClose = () => setIndexImages(-1);
  const handleMovePrev = () => setIndexImages(prevIndex);
  const handleMoveNext = () => setIndexImages(nextIndex);

  console.log({ currentImage, nextImage });

  const titleStyle = isMobile
    ? { fontSize: 42, lineHeight: "42px" }
    : { fontSize: 100, lineHeight: "60px" };

  console.log({ cardTitle });

  return (
    <div>
      <PageContentWrapper>
        <SinglePageContentWrapper>
          <Row gutter={40}>
            <Col span={24} xl={{ span: 16 }}>
              {banner.data && (
                <Image
                  src={banner.data.attributes.url}
                  {...banner.data.attributes}
                  alt={banner.data.attributes.name}
                  layout='responsive'
                />
              )}
              <div style={{ padding: "20px 0" }}>
                <h2
                  style={{
                    color: THEME.primary,
                    marginBottom: "4px",
                    lineHeight: "45px"
                  }}
                >
                  {title}
                </h2>
                <p style={{ fontStyle: "italic" }}>
                  {t("Published date:")}{" "}
                  {moment(createdAt).format("dddd, Do MMMM, YYYY")}
                </p>
              </div>
              <Row gutter={16} style={{ padding: "20px 0" }}>
                {listIntro.map((item) => (
                  <Col span={12} lg={6} className='d-flex align-items-center '>
                    <div
                      className='d-flex align-items-center justify-content-center'
                      style={{
                        backgroundColor: "#E6E7E8",
                        borderRadius: "50%",
                        width: 60,
                        height: 60
                      }}
                    >
                      <Image src={item.image} alt='' width={50} height={50} />
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <p
                        style={{
                          color: "#6D6E71",
                          marginBottom: 0
                        }}
                      >
                        {item.title}
                      </p>
                      <h5>{item.content}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
              <RichText
                content={attributes?.content || attributes?.description}
              />
              <div style={{ padding: "40px 0" }}>
                <div className='d-flex'>
                  <div>
                    <h3
                      style={{
                        color: THEME.primary,
                        margin: 0,
                        paddingRight: 20
                      }}
                    >
                      {t("Event Images and Videos")}
                    </h3>
                  </div>
                  <div
                    style={{
                      borderBottom: `2px solid ${THEME.primary}`,
                      width: "calc(100% - 300px)"
                    }}
                  />
                </div>
                <div style={{ padding: "20px 0" }}>
                  <Gallery
                    rowHeight={280}
                    margin={10}
                    enableImageSelection={false}
                    onClick={handleClick}
                    images={(listMedia ?? []).map(({ attributes }) => ({
                      src: attributes.url,
                      width: attributes.width,
                      height: attributes.height
                    }))}
                  />
                </div>
              </div>
            </Col>
            <Col span={24} xl={{ span: 8 }}>
              <div className='card-right'>
                <img className='w-100' src='/logo-text.png' alt='logo' />
                <div style={{ padding: "20px 0" }}>
                  <Image
                    src={image.data.attributes.url}
                    {...image.data.attributes}
                    height={400}
                    layout='responsive'
                    alt={image.data.attributes.name}
                  />
                </div>
                <RichText
                  align='center'
                  fontSize='32px'
                  color='#fff'
                  content={cardTitle}
                />
                <div
                  className='d-flex'
                  style={{ justifyContent: "center", paddingTop: "20px" }}
                >
                  <Button
                    shape='round'
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "60%",
                      justifyContent: "space-between"
                    }}
                    onClick={() =>
                      router.push(cardButtonLink ? cardButtonLink : "/")
                    }
                  >
                    <div />
                    <span style={{ color: THEME.primary }}>
                      {cardButtonText}
                    </span>
                    <div className='d-flex'>
                      <RightCircleFilled
                        size={27}
                        color={THEME.primary}
                        style={{ color: THEME.primary, fontSize: 20 }}
                      />
                    </div>
                  </Button>
                </div>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: 24,
                    marginBottom: 25,
                    lineHeight: "28px",
                    color: THEME.primary
                  }}
                >
                  {t("Related Event")}
                </h2>
                <div>
                  {upcomingEvents.length ? (
                    upcomingEvents.map((event, index) => (
                      <EventItem key={event.id + "event"} {...event} />
                    ))
                  ) : (
                    <div>
                      <span style={{ color: THEME.textSecondary }}>
                        {t("No upcoming events")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ padding: "40px 0" }}>
                <h2
                  style={{
                    fontSize: 24,
                    marginBottom: 25,
                    lineHeight: "28px",
                    color: THEME.primary
                  }}
                >
                  {t("Teaching")}
                </h2>
                <div>
                  {teachings.length ? (
                    teachings.map(({ attributes, id }) => (
                      <TeachingItem key={id + "event"} {...attributes} />
                    ))
                  ) : (
                    <div>
                      <span style={{ color: THEME.textSecondary }}>
                        {t("No upcoming events")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col span={24} xl={{ span: 16 }}>
              <div
                className='w-100'
                style={{ borderBottom: `2px solid ${THEME.primary}` }}
              />
              <h3>{t("Have a question?")}</h3>
              <div>
                <h1 style={{ color: THEME.primary }}>
                  {t("Let we hear your comment!")}
                </h1>

                <Form style={{ marginTop: 16 }}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item name='fullName'>
                        <Input placeholder='Full name' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name='phoneNumber'>
                        <Input placeholder='Phone number' />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='email' wrapperCol={{ span: 24 }}>
                        <Input placeholder='Your email' />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='content' wrapperCol={{ span: 24 }}>
                        <TextArea
                          rows={4}
                          cols={4}
                          placeholder='Please leave your message here!'
                        />
                      </Form.Item>
                    </Col>
                    <div className='d-flex justify-content-end w-100'>
                      <Button type='primary' htmlType='submit' shape='round'>
                        <span style={{ padding: "0 16px" }}>Send Request!</span>
                      </Button>
                    </div>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </SinglePageContentWrapper>
        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.url}
            imageTitle={currentImage.name}
            mainSrcThumbnail={currentImage.formats.small.url}
            nextSrc={nextImage.url}
            nextSrcThumbnail={nextImage.formats.small.url}
            prevSrc={prevImage.url}
            prevSrcThumbnail={prevImage.formats.small.url}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            reactModalStyle={{ zIndex: 99999999 }}
          />
        )}
      </PageContentWrapper>

      <BackgroundWrapper background=''>
        <div className='container'>
          <Row align='bottom' gutter={[{ xs: 16, md: 32 }, 24]}>
            <Col span={24} md={{ span: 12 }}>
              <Title
                isMobile={isMobile}
                title={"Teaching &"}
                supTitle={"Retreat"}
                size={TITLE_SIZES.LARGE}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} md={{ span: 12 }} style={{ paddingBottom: 28 }}>
              <h3 style={{ fontWeight: 500 }}>{retreatContent}</h3>
            </Col>
            <Col span={24} md={{ span: 12 }} style={{ paddingBottom: 28 }}>
              <Link href={buttonRetreatLink ?? buttonRetreatLink ?? "/"}>
                <a>
                  <div
                    style={{
                      border: `3px solid ${THEME.primary}`,
                      borderRadius: 40,
                      height: 68,
                      position: "relative",
                      textAlign: "center",
                      lineHeight: "60px",
                      color: THEME.primary,
                      fontSize: 20,
                      fontWeight: 700
                    }}
                  >
                    {buttonRetreatText ?? t("Learn more")}
                    <Button
                      shape='circle'
                      style={{
                        position: "absolute",
                        right: 4,
                        top: 3,
                        height: 54,
                        width: 54
                      }}
                      type='primary'
                      icon={<ArrowRightOutlined style={{ fontSize: 28 }} />}
                    />
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </div>
      </BackgroundWrapper>
    </div>
  );
};

export const getServerSideProps = withDetectDevice(
  withGlobalData(withEvent(withTrans))
);

export default withNavigator(EventDetails);
