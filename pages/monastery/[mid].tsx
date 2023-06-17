/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { PlayCircle } from "@mui/icons-material";
import { Col, Row } from "antd";
import { THEME } from "common";
import {
  MeetUsSectionContent,
  MeetUsSectionOverlay,
  MeetUsSectionWrapper
} from "components/Home/index.styles";
import { TITLE_SIZES, Title } from "components/Title";
import { useApp } from "context/app/AppContext";
import { Button } from "elements/Button";
import { Modal } from "elements/Modal";
import { getMonasteryPathFromSlug } from "helper";
import withDetectDevice from "hoc/withDetectDevice";
import withGlobalData from "hoc/withGlobalData";
import withMonastery from "hoc/withMonastery";
import { withNavigator } from "hoc/withNavigator";
import withTrans from "hoc/withTrans";
import moment from "moment";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";
import styled from "styled-components";

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const Offering = dynamic(() => import("components/Home/Offering"), {
  ssr: false
});
const SingleSection = dynamic(() => import("container/Section"), {
  ssr: false
});
const TitleWithHeadline = dynamic(
  () => import("components/Title/TitleWithHeadline"),
  { ssr: false }
);

const PageContentWrapper = styled.div``;

const SectionWrapper = styled.div`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 130px 0 80px;
`;

const GaleryWrapper = styled.div`
  background-color: #f1f2f2;
  padding: 80px 0;
  .ReactGridGallery_tile {
    &-viewport {
      border-radius: 8px;
    }
  }
`;

const ContactWrapper = styled.div`
  padding: 80px 0;
`;

const OtherWrapper = styled.div`
  padding: 0 0 80px;
`;

enum SWITCHER_VALUES {
  IMAGE,
  VIDEO
}

const SwitcherWrapper = styled.div`
  display: flex;
  > button {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 16px !important;
    &:not(:last-of-type) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
    &.ant-btn-link {
      border-bottom: 3px solid;
    }
    @media (min-width: 992px) {
      font-size: 24px;
    }
  }
`;

const Switcher = ({ value = SWITCHER_VALUES.IMAGE, onChange }) => {
  const { t } = useTranslation();
  return (
    <SwitcherWrapper>
      <Button
        style={{ fontWeight: "bold" }}
        type={value == SWITCHER_VALUES.IMAGE ? "link" : "text"}
        onClick={() => onChange(SWITCHER_VALUES.IMAGE)}
      >
        {t("Images")}
      </Button>
      <Button
        style={{ fontWeight: "bold" }}
        type={value == SWITCHER_VALUES.VIDEO ? "link" : "text"}
        onClick={() => onChange(SWITCHER_VALUES.VIDEO)}
      >
        {t("Videos")}
      </Button>
    </SwitcherWrapper>
  );
};

const ImageComponent = (props: ThumbnailImageProps) => {
  return (
    <>
      {/* <img
        src={props.item.src}
        style={{ ...props.imageProps.style, borderRadius: 12 }}
      /> */}
      <LightgalleryItem src={props.item.src} thumb={props.item.src}>
        <img
          src={props.item.src}
          style={{ ...props.imageProps.style, borderRadius: 12 }}
          alt=''
        />
      </LightgalleryItem>
    </>
  );
};

const VideoComponent = (props: ThumbnailImageProps) => {
  const viewModalRef = useRef<ElementRef<typeof Modal>>(null);
  return (
    <>
      <div style={{ ...props.imageProps.style }}>
        <div style={{ position: "relative" }}>
          <div
            onClick={() => viewModalRef.current?.handleOpen()}
            style={{
              position: "absolute",
              zIndex: 2,
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,0,0,0.3)",
              cursor: "pointer"
            }}
          >
            <PlayCircle style={{ color: "#ffffff", fontSize: 40 }} />
          </div>
          <video style={{ ...props.imageProps.style }}>
            <source src={props.imageProps.src} type='video/mp4' />
            Your browser does not support HTML video.
          </video>
        </div>
        <Modal
          destroyOnClose
          ref={viewModalRef}
          width='768px'
          bodyStyle={{ padding: 0 }}
        >
          <video width='100%' controls>
            <source src={props.imageProps.src} type='video/mp4' />
            Your browser does not support HTML video.
          </video>
        </Modal>
      </div>
    </>
  );
};

const CustomGallery = ({
  data,
  type = SWITCHER_VALUES.IMAGE,
  handleClick
}: {
  data: Record<string, any>[];
  type?: SWITCHER_VALUES;
  handleClick: () => void;
}) => {
  return (
    <Gallery
      rowHeight={280}
      margin={10}
      enableImageSelection={false}
      images={(data ?? []).map(({ attributes }) => ({
        src: attributes.url,
        width: attributes.width,
        height: attributes.height
      }))}
      onClick={handleClick}
      thumbnailImageComponent={
        type === SWITCHER_VALUES.VIDEO ? VideoComponent : ImageComponent
      }
    />
  );
};

const Monastery = ({ monastery, otherMonasteries, isMobile, globalData }) => {
  const { setTitleBanner, setBanner } = useApp();
  const { t } = useTranslation();
  const [galleryState, setGalleryState] = useState(SWITCHER_VALUES.IMAGE);
  const router = useRouter();
  const { attributes } = monastery.data || {};
  moment.locale(router.locale);

  useEffect(() => {
    if (attributes.title) {
      setTitleBanner(attributes.title);
    }
    if (attributes.cover) {
      setBanner(attributes.cover.data);
    }
  }, [attributes]);

  const {
    title,
    content,
    background,
    images,
    videos,
    phone,
    address,
    email,
    facebook,
    address_pin
  } = attributes;
  const { defaultHeadLine } = globalData.attributes;
  console.log({ otherMonasteries });

  /* Zoom Images */
  const [indexImages, setIndexImages] = useState(-1);

  const listImages = images?.data || [];
  const currentImage = listImages[indexImages]?.attributes;

  const nextIndex = (indexImages + 1) % listImages.length;
  const nextImage = listImages[nextIndex]?.attributes || currentImage;
  const prevIndex = (indexImages + listImages.length - 1) % listImages.length;
  const prevImage = listImages[prevIndex]?.attributes || currentImage;

  const handleClick = (index: number, item: CustomImage) =>
    setIndexImages(index);
  const handleClose = () => setIndexImages(-1);
  const handleMovePrev = () => setIndexImages(prevIndex);
  const handleMoveNext = () => setIndexImages(nextIndex);
  const GROUP2 = [
    "https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818896795-35ad7bcf3c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818896744-57eca4d47b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818897077-aec41f55241f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
  ];

  return (
    <PageContentWrapper>
      <SectionWrapper background={background}>
        <SingleSection
          title={title}
          content={content}
          headLine={defaultHeadLine}
        />
      </SectionWrapper>
      <GaleryWrapper>
        <div className='container'>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48
            }}
          >
            <div>
              <Title
                isMobile={isMobile}
                title={t("Monastery Gallery")}
                supTitle={t("From our")}
                size={TITLE_SIZES.MEDIUM}
              />
            </div>
            <div>
              <Switcher value={galleryState} onChange={setGalleryState} />
            </div>
          </div>
          <LightgalleryProvider currentPagerPosition='middle'>
            <CustomGallery
              type={galleryState}
              data={
                galleryState === SWITCHER_VALUES.IMAGE
                  ? images?.data
                  : videos?.data
              }
              handleClick={() => {}}
            />
          </LightgalleryProvider>
        </div>
      </GaleryWrapper>
      <ContactWrapper>
        <div className='container'>
          <Row align='top'>
            <Col span={24} xl={{ span: 12 }}>
              <TitleWithHeadline title={t("Contact us")} />
              <h3>{title}</h3>
              <div style={{ color: THEME.dark }}>
                {address && (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        padding: 4,
                        marginRight: 8,
                        height: 24,
                        width: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Image
                        width={16}
                        height={16}
                        src={require("assets/svgs/pin-icon-black.svg")}
                        alt=''
                      />
                    </div>
                    <p>
                      <Link href={`http://maps.google.com/?q=${address}`}>
                        <a
                          target='_blank'
                          style={{ color: THEME.dark, fontWeight: 400 }}
                        >
                          {address}
                        </a>
                      </Link>
                    </p>
                  </div>
                )}
                {phone && (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        padding: 4,
                        marginRight: 8,
                        height: 24,
                        width: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Image
                        width={16}
                        height={16}
                        src={require("assets/svgs/phone-icon-black.svg")}
                        alt=''
                      />
                    </div>
                    <p>
                      <Link href={`tel:${phone}`}>
                        <a
                          target='_blank'
                          style={{ color: THEME.dark, fontWeight: 400 }}
                        >
                          {phone}
                        </a>
                      </Link>
                    </p>
                  </div>
                )}
                {facebook && (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        padding: 4,
                        marginRight: 8,
                        height: 24,
                        width: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Image
                        width={16}
                        height={16}
                        src={require("assets/svgs/fb-icon-black.svg")}
                      />
                    </div>
                    <p>
                      <Link href={facebook}>
                        <a
                          target='_blank'
                          style={{ color: THEME.dark, fontWeight: 400 }}
                        >
                          {facebook}
                        </a>
                      </Link>
                    </p>
                  </div>
                )}
                {email && (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        border: "1px solid #000",
                        borderRadius: "50%",
                        padding: 4,
                        marginRight: 8,
                        height: 24,
                        width: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Image
                        width={16}
                        height={16}
                        src={require("assets/svgs/mail-icon-black.svg")}
                      />
                    </div>
                    <p>
                      <Link href={`mailto:${email}`}>
                        <a
                          target='_blank'
                          style={{ color: THEME.dark, fontWeight: 400 }}
                        >
                          {email}
                        </a>
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </Col>
            <Col span={24} xl={{ span: 12 }}>
              {address_pin && (
                <Image
                  width={address_pin.data?.attributes.width}
                  height={address_pin.data?.attributes.height}
                  src={address_pin.data?.attributes.url}
                  layout='responsive'
                  alt={address_pin.data?.attributes?.name}
                />
              )}
            </Col>
          </Row>
        </div>
      </ContactWrapper>
      <OtherWrapper style={{ textAlign: "center" }}>
        <div className='container'>
          <TitleWithHeadline
            title={t("Others Monastery")}
            headLine={defaultHeadLine}
          />
          <Row
            gutter={[{ xs: 15, sm: 15, md: 48 }, 15]}
            style={{ marginTop: "3em" }}
          >
            {otherMonasteries?.data?.slice(0, 3)?.map(({ id, attributes }) => (
              <Col
                key={`monastery-${id}`}
                className='section-item'
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
              >
                <MeetUsSectionWrapper
                  backgroundUrl={attributes.cover?.data?.attributes?.url}
                >
                  <Link href={getMonasteryPathFromSlug(id, attributes.slug)}>
                    <a>
                      <MeetUsSectionOverlay className='meet-us-section__overlay' />
                      <MeetUsSectionContent>
                        <span
                          style={{
                            textDecoration: "none",
                            fontSize: 28,
                            fontWeight: "600",
                            color: "#fff"
                          }}
                        >
                          {attributes.title}
                        </span>
                      </MeetUsSectionContent>
                    </a>
                  </Link>
                </MeetUsSectionWrapper>
              </Col>
            ))}
          </Row>
        </div>
      </OtherWrapper>
      <Offering {...globalData.attributes.offering} isMobile={isMobile} />
    </PageContentWrapper>
  );
};

export const getServerSideProps = withDetectDevice(
  withGlobalData(withMonastery(withTrans))
);

export default withNavigator(Monastery);
