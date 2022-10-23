import { Document, Page, pdfjs } from "react-pdf"
import { Modal } from "./Modal"
import { ElementRef, useRef, useState } from "react"
import { EMediaType, TMedia } from "definition"
import { Button } from "components/Button"
import { getMediaType } from "helper"
import NextImage, { ImageProps } from "next/image"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

type MediaProps = {
  name?: string
  mediaData: TMedia
}

type ExtendedImageProps = ImageProps & {
  src?: string
}

const MediaWrapper = styled.div`
  .react-pdf {
    &__Page {
      &__canvas {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 3/4 !important;
      }
    }
  }
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

const DownloadButtonWrapper = styled(Button)`
  padding: 0;
`

export const Media: React.FC<MediaProps> = ({ mediaData, name }) => {
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
    <div style={{ marginBottom: 16 }}>
      {type === EMediaType.FILE ? (
        <>
          <div style={{ position: "relative" }}>
            <MediaWrapper>
              <Document file={url} onLoadSuccess={onLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            </MediaWrapper>

            <div
              style={{ position: "absolute", bottom: 4, right: 12, zIndex: 10 }}
            >
              <DownloadButtonWrapper
                className='mr-4'
                type='link'
                onClick={onOpenPDFViewer}
              >
                {t("View")}
              </DownloadButtonWrapper>
              <DownloadButtonWrapper type='link' onClick={onDownload}>
                {t("Download")}
              </DownloadButtonWrapper>
            </div>
          </div>
          <Modal ref={viewModalRef} width='768px'>
            <PreviewMediaWrapper>
              <Document file={url} onLoadSuccess={onLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </PreviewMediaWrapper>
          </Modal>
        </>
      ) : type === EMediaType.VIDEO ? (
        <>
          <video width='100%' controls>
            <source src={url} type='video/mp4' />
            Your browser does not support HTML video.
          </video>
          <div style={{ textAlign: "right" }}>
            <DownloadButtonWrapper type='link' onClick={onDownload}>
              {t("Download")}
            </DownloadButtonWrapper>
          </div>
        </>
      ) : type === EMediaType.AUDIO ? (
        <>
          <audio style={{ display: "block", width: "100%" }} controls>
            <source src={url} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          <div style={{ textAlign: "right" }}>
            <DownloadButtonWrapper type='link' onClick={onDownload}>
              {t("Download")}
            </DownloadButtonWrapper>
          </div>
        </>
      ) : (
        <>
          <Image src={url} alt={name} />
        </>
      )}
    </div>
  )
}
