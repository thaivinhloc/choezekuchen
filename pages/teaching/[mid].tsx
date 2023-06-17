// @ts-check
import { Button, Col, Row } from "antd";
import { THEME } from "common";
import { useApp } from "context/app/AppContext";
import { RichText } from "elements/RichText";
import withDetectDevice from "hoc/withDetectDevice";
import withGlobalData from "hoc/withGlobalData";
import withNavigator from "hoc/withNavigator";
import withTeaching from "hoc/withTeaching";
import withTrans from "hoc/withTrans";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ArrowRightAlt, ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import { getTeachingContent } from "services/teaching";
import TeachingBackground from "assets/bg/background-teaching.jpg";
import { getTeachingDetailPathFromSlug } from "helper";

const TeachingDetailWrapper = styled.div`
  padding-top: 50px;
  .list-teaching {
    padding: 40px 0;
    .teaching-card {
      margin-bottom: 16px;
      border-radius: 8px;
      padding: 8px;
      border: 1px solid ${THEME.primary};
    }
  }
  .socials {
    background-color: #f1f2f2;
    padding: 40px 0;
    .icon-link {
      display: flex;
      border: 1px solid ${THEME.primary};
      border-radius: 50%;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .section2 {
    padding: 40px 0;
    background-image: url("images/teaching/background-teaching.jpg");
  }
  .suggest-reading {
    margin-bottom: 40px;
    border: 1px solid ${THEME.primary};
    &-header {
      background-color: ${THEME.primary};
    }
    &-content {
      padding: 20px 8px;
    }
  }
`;
const TeachingDetail = ({
  teaching,
  listTeaching,
  context
}: {
  teaching: any;
  listTeaching: any;
  context: any;
}) => {
  console.log("----", { listTeaching, teaching, context });

  const { setTitleBanner, setBanner } = useApp();
  const [socialMedia, setSocialMedia] = useState<any>({});
  const { t } = useTranslation();

  const { attributes } = teaching.data || {};
  const {
    longDescription,
    images,
    images2,
    title2,
    description2,
    suggestReadingContent
  } = attributes;

  useEffect(() => {
    if (attributes.title) {
      setTitleBanner(attributes.title);
    }
    if (attributes.cover) {
      setBanner(attributes.cover.data);
    }
  }, [attributes, setBanner, setTitleBanner]);

  useEffect(() => {
    fetchTeachingContent();
  }, []);

  const fetchTeachingContent = async () => {
    try {
      const response = await getTeachingContent({ locale: context.locale });
      setSocialMedia(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* Zoom Images */
  const [indexImages, setIndexImages] = useState(-1);

  const listImages = [...images?.data, ...(images2?.data || [])] || [];
  const currentImage = listImages[indexImages]?.attributes;

  const nextIndex = (indexImages + 1) % listImages.length;
  const nextImage = listImages[nextIndex]?.attributes || currentImage;
  const prevIndex = (indexImages + listImages.length - 1) % listImages.length;
  const prevImage = listImages[prevIndex]?.attributes || currentImage;

  const handleClick = (index: number) => setIndexImages(index);
  const handleClose = () => setIndexImages(-1);
  const handleMovePrev = () => setIndexImages(prevIndex);
  const handleMoveNext = () => setIndexImages(nextIndex);

  return (
    <TeachingDetailWrapper>
      <div className='container'>
        <div className='about-course'>
          <div className='d-flex'>
            <div>
              <h3 style={{ color: THEME.primary, margin: 0, paddingRight: 20 }}>
                {t("About this course")}
              </h3>
            </div>
            <div
              style={{
                borderBottom: `2px solid ${THEME.primary}`,
                width: "calc(100% - 220px)"
              }}
            />
          </div>
          <Row gutter={16} style={{ paddingTop: 40 }}>
            <Col span={24} lg={18}>
              <RichText fontSize='18px' content={longDescription} />
            </Col>
            <Col span={24} lg={6}>
              {(images?.data || []).map(
                ({ attributes }: any, index: number) => (
                  <div
                    key={attributes?.url}
                    style={{ marginBottom: 40, cursor: "pointer" }}
                    onClick={() => handleClick(index)}
                  >
                    <Image
                      src={attributes.url}
                      {...attributes}
                      layout='responsive'
                      alt={attributes.name}
                    />
                    <p className='text-center' style={{ marginTop: 10 }}>
                      {attributes?.name}
                    </p>
                  </div>
                )
              )}
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
            </Col>
          </Row>
        </div>
      </div>
      {!!socialMedia.attributes?.socialMedia?.image &&
        Object.values(socialMedia).length > 0 && (
          <div className='socials'>
            <div className='container'>
              <Row gutter={32}>
                <Col span={24} lg={12}>
                  <div>
                    <Image
                      src={
                        socialMedia.attributes.socialMedia.image.data.attributes
                          .url
                      }
                      layout='responsive'
                      {...socialMedia.attributes.socialMedia.image.data
                        .attributes}
                      alt={
                        socialMedia.attributes.socialMedia.image.data.attributes
                          .name
                      }
                      style={{ borderRadius: 16 }}
                    />
                  </div>
                </Col>
                <Col span={24} lg={12}>
                  <div>
                    <h3>{socialMedia?.attributes?.socialMedia?.title}</h3>
                    <p>{socialMedia?.attributes?.socialMedia?.description}</p>
                  </div>
                  <div>
                    {socialMedia?.attributes?.socialMedia?.social_links
                      .split(",")
                      .map((link: any, idx: any) => (
                        <div key={link + idx} className='d-flex'>
                          <div className='icon-link'>
                            <ArrowForward
                              style={{ color: THEME.primary, fontSize: "22px" }}
                            />
                          </div>
                          <a href={link} target='_blank' rel='noreferrer'>
                            {link}
                          </a>
                        </div>
                      ))}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      <div className='container'>
        <div className='list-teaching'>
          <div className='d-flex'>
            <div>
              <h3 style={{ color: THEME.primary, margin: 0, paddingRight: 20 }}>
                {t("Other teaching")}
              </h3>
            </div>
            <div
              style={{
                borderBottom: `2px solid ${THEME.primary}`,
                width: "calc(100% - 220px)"
              }}
            />
          </div>
          <Row gutter={16} style={{ padding: "40px 0" }}>
            {listTeaching?.data?.map(
              (
                { attributes, id }: { attributes: any; id: number },
                idx: number
              ) => {
                console.log("---slug", { id, slug: attributes.slug ?? "/" });

                const { attributes: cover } = attributes?.thumbnail?.data;
                return (
                  <Col span={24} lg={8} key={idx + "list-teaching"}>
                    <Link
                      href={getTeachingDetailPathFromSlug(
                        id,
                        attributes.slug ?? "/"
                      )}
                    >
                      <div className='teaching-card'>
                        <Image
                          src={cover?.url}
                          {...cover}
                          layout='responsive'
                          alt={cover?.name}
                        />
                        <h3
                          className='text-center'
                          style={{ color: THEME.primary, fontSize: 18 }}
                        >
                          {attributes?.title}
                        </h3>
                        <p className='text-center'>
                          {attributes.shortDescription}
                        </p>
                        <Button
                          onClick={() =>
                            getTeachingDetailPathFromSlug(
                              id,
                              attributes.slug ?? "/"
                            )
                          }
                          size='large'
                          style={{
                            borderRadius: 4,
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                          type='primary'
                          block
                        >
                          {t("Learn more")}
                          <ArrowRightAlt style={{ color: THEME.white }} />
                        </Button>
                      </div>
                    </Link>
                  </Col>
                );
              }
            )}
          </Row>
        </div>
      </div>
      <div className='section2'>
        <div className='container'>
          <Row gutter={32}>
            <Col span={24} lg={8}>
              {(images2?.data || []).map(
                ({ attributes }: any, index: number) => (
                  <div
                    key={attributes?.url}
                    style={{ marginBottom: 40, cursor: "pointer" }}
                    onClick={() => handleClick(index)}
                  >
                    <Image
                      src={attributes.url}
                      {...attributes}
                      layout='responsive'
                      alt={attributes.name}
                    />
                    <p className='text-center' style={{ marginTop: 10 }}>
                      {attributes?.name}
                    </p>
                  </div>
                )
              )}
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
            </Col>
            <Col span={24} lg={16}>
              <h3
                className='text-center'
                style={{ color: THEME.primary, paddingRight: 20 }}
              >
                {title2}
              </h3>
              <RichText fontSize='18px' content={description2} />

              <div className='suggest-reading'>
                <div className='suggest-reading-header'>
                  <h3
                    style={{
                      margin: 0,
                      padding: 8,
                      color: "#fff",
                      fontSize: "22px"
                    }}
                  >
                    {t("Suggested reading")}
                  </h3>
                </div>
                <div className='suggest-reading-content'>
                  <RichText fontSize='16px' content={suggestReadingContent} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </TeachingDetailWrapper>
  );
};

export const getServerSideProps = withDetectDevice(
  withGlobalData(withTeaching(withTrans))
);

export default withNavigator(TeachingDetail);
