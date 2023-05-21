// @ts-nocheck
import { Document, Page, pdfjs } from "react-pdf"
import { Modal } from "./Modal"
import { ElementRef, useRef, useState } from "react"
import { EMediaType, TMedia } from "definition"
import { Button } from "components/Button"
import { getMediaType } from "helper"
import NextImage, { ImageProps } from "next/image"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import {
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined
} from "@ant-design/icons"
import { Col, Row, Space } from "antd"
import { THEME } from "common"
import { RichText } from "./RichText"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export type MediaProps = {
  name?: string
  mediaData: TMedia
  cover?: TMedia
  ratioHeight?: number
  previewable?: boolean
  downloadable?: boolean
  ratio?: string
  width?: number
  height?: number
} & React.HTMLProps<HTMLDivElement>

type ExtendedImageProps = ImageProps & {
  src?: string
}

const AudioWrapper = styled.div<Partial<MediaProps>>`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: ${(props) => props.ratioHeight ?? 240}px;
  height: 100%;
`

const MediaWrapper = styled.div<Partial<MediaProps>>`
  .react-pdf {
    &__Page {
      &__canvas {
        border-radius: 2px 2px 0 0;
        height: ${(props) => props.ratioHeight ?? 240}px !important;
        width: 100% !important;
        @supports (aspect-ratio: ${(props) => props.ratio ?? "3/2"}) {
          aspect-ratio: ${(props) => props.ratio ?? "3/2"};
          width: 100% !important;
          height: auto !important;
        }
      }
      &__textContent {
        display: none;
      }
    }
  }
  position: relative;
  border-radius: 4px;
`

const Wrapper = styled.div`
  video,
  audio {
    border-radius: 2px 2px 0 0;
  }
  img {
    border-radius: 2px;
  }
  position: relative;
  height: 100%;
`

const PreviewMediaWrapper = styled.div`
  .react-pdf {
    &__Page {
      &__canvas {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
`

export const Image: React.FC<ExtendedImageProps> = ({ src, alt, ...props }) => {
  return (
    <NextImage
      {...props}
      src={src ? src : "/assets/svgs/Placeholder.svg"}
      alt={alt ? alt : ""}
    />
  )
}

const TitleWithDescription = ({ title, description }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: 40
      }}
    >
      <h3
        className='ellipsis'
        style={{
          fontSize: 20,
          margin: "16px 0 12px",
          color: THEME.primary
        }}
      >
        {title}
      </h3>
      <RichText fontSize='15px' content={description} />
    </div>
  )
}

export const Media: React.FC<MediaProps> = ({
  mediaData,
  name,
  description,
  cover,
  width = 600,
  height = 400,
  ratioHeight,
  previewable,
  downloadable,
  style
}) => {
  const { t } = useTranslation("common")
  const [numPages, setNumPages] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  const viewModalRef = useRef<ElementRef<typeof Modal>>(null)
  const { type } = getMediaType(mediaData)
  const { url } = mediaData.attributes

  const onOpenPDFViewer = () => {
    viewModalRef.current?.handleOpen()
  }

  const onDownload = async () => {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf"
      }
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", `${name}${mediaData.attributes.ext}`)
        // Append to html link element page
        document.body.appendChild(link)
        // Start download
        link.click()
        // Clean up and remove the link
        link.parentNode?.removeChild(link)
      })
  }

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <Wrapper>
      {type === EMediaType.FILE ? (
        <>
          <div style={{ position: "relative", height: "100%" }}>
            <MediaWrapper style={style} ratioHeight={ratioHeight}>
              {cover ? (
                <Image
                  layout='responsive'
                  src={cover.attributes.url}
                  alt={name}
                  width={width}
                  height={height}
                  style={{ borderRadius: 8 }}
                />
              ) : (
                <Document file={url} onLoadSuccess={onLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
              )}
            </MediaWrapper>
            <TitleWithDescription title={name} description={description} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
              }}
            >
              <Row gutter={16}>
                <Col span={12}>
                  {previewable && (
                    <Button
                      style={{ width: "100%" }}
                      shape='round'
                      type='primary'
                      ghost
                      icon={<ZoomInOutlined />}
                      onClick={onOpenPDFViewer}
                    >
                      {t("Preview")}
                    </Button>
                  )}
                </Col>
                <Col span={12}>
                  {downloadable && (
                    <Button
                      style={{ width: "100%" }}
                      shape='round'
                      type='primary'
                      icon={<DownloadOutlined />}
                      onClick={onDownload}
                    >
                      {t("Download")}
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          </div>
          <Modal ref={viewModalRef} width='768px'>
            <PreviewMediaWrapper>
              <Document file={url} onLoadSuccess={onLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <div className='d-flex justify-content-center'>
                <Button
                  type='text'
                  icon={<LeftOutlined />}
                  onClick={() => {
                    if (pageNumber > 1) {
                      setPageNumber(pageNumber - 1)
                    }
                  }}
                />
                <p className='mx-2'>
                  {pageNumber}/{numPages}
                </p>
                <Button
                  type='text'
                  icon={<RightOutlined />}
                  onClick={() => {
                    if (pageNumber < numPages) {
                      setPageNumber(pageNumber + 1)
                    }
                  }}
                />
              </div>
            </PreviewMediaWrapper>
          </Modal>
        </>
      ) : type === EMediaType.VIDEO ? (
        <>
          <div style={{ position: "relative", height: "100%" }}>
            <div style={{ position: "relative" }}>
              {cover ? (
                <>
                  <Image
                    layout='responsive'
                    src={cover.attributes.url}
                    alt={name}
                    width={width}
                    height={height}
                    style={{ borderRadius: 8 }}
                  />
                  <div
                    onClick={onOpenPDFViewer}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      backgroundColor: "rgba(0,0,0,0.2)",
                      borderRadius: 8
                    }}
                  >
                    <svg
                      width='130'
                      height='130'
                      viewBox='0 0 130 130'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M65 119.166C94.9155 119.166 119.167 94.9151 119.167 64.9997C119.167 35.0842 94.9155 10.833 65 10.833C35.0846 10.833 10.8334 35.0842 10.8334 64.9997C10.8334 94.9151 35.0846 119.166 65 119.166Z'
                        fill='#000000'
                        fill-opacity='0.5'
                      />
                      <path
                        d='M52.1433 44.1484C50.1399 45.2219 48.75 47.2321 48.75 50.0731V79.8648C48.75 85.5469 54.4181 88.2714 59.0981 85.6173L81.1569 73.094C88.6384 68.4627 88.3669 61.3127 81.1569 56.844L59.0981 44.3179C56.7581 42.9914 54.1466 43.0753 52.1433 44.1484Z'
                        fill='#F8F8F8'
                      />
                    </svg>
                  </div>
                  <Modal
                    ref={viewModalRef}
                    width='768px'
                    bodyStyle={{ padding: 0 }}
                  >
                    <video width='100%' controls>
                      <source src={url} type='video/mp4' />
                      Your browser does not support HTML video.
                    </video>
                  </Modal>
                </>
              ) : (
                <video width='100%' controls>
                  <source src={url} type='video/mp4' />
                  Your browser does not support HTML video.
                </video>
              )}
            </div>
            <TitleWithDescription title={name} description={description} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
              }}
            >
              <Row gutter={16}>
                <Col span={12}></Col>
                <Col span={12}>
                  {downloadable && (
                    <Button
                      style={{ width: "100%" }}
                      shape='round'
                      type='primary'
                      icon={<DownloadOutlined />}
                      onClick={onDownload}
                    >
                      {t("Download")}
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : type === EMediaType.AUDIO ? (
        <>
          <AudioWrapper ratioHeight={ratioHeight}>
            {cover ? (
              <Image
                layout='responsive'
                src={cover.attributes.url}
                alt={name}
                width={width}
                height={height}
                style={{ borderRadius: 8 }}
              />
            ) : null}
            <div
              style={{
                width: "100%",
                marginTop: 4,
                position: "relative",
                zIndex: 20
              }}
            >
              <audio
                style={{
                  display: "block",
                  width: "100%"
                }}
                controls
              >
                <source src={url} type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
            </div>
            <TitleWithDescription title={name} description={description} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%"
              }}
            >
              <Row gutter={16}>
                <Col span={12}></Col>
                <Col span={12}>
                  {downloadable && (
                    <Button
                      style={{ width: "100%" }}
                      shape='round'
                      type='primary'
                      icon={<DownloadOutlined />}
                      onClick={onDownload}
                    >
                      {t("Download")}
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          </AudioWrapper>
        </>
      ) : (
        <>
          <Image
            objectFit='cover'
            src={url}
            alt={name}
            layout='responsive'
            width={width}
            height={height}
          />
        </>
      )}
    </Wrapper>
  )
}

export const GridMedia = ({
  url,
  name,
  width = 600,
  height = 300,
  style = {}
}: {
  url?: string
  name?: string
  width?: number
  height?: number
  style?: Record<string, any>
}) => {
  return (
    <Image
      style={style}
      objectFit='cover'
      src={url ?? ""}
      alt={name ?? "-"}
      layout='responsive'
      width={width}
      height={height}
    />
  )
}
