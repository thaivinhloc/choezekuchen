import { Carousel, Col, Image, Row } from "antd"
import { ESinglePageLayout, TMedia, TPage } from "definition"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import usePage from "hook/usePage"
import { useEffect } from "react"
import styled from "styled-components"

export const SinglePageContentWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 992px) {
    max-width: 960px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`

function TopSection({
  topTitle,
  topDesciption
}: {
  topTitle?: string
  topDesciption?: string
}) {
  return topTitle ? (
    <div
      className='text-center'
      style={{ maxWidth: 800, margin: "0 auto 50px" }}
    >
      <h2>{topTitle}</h2>
      <RichText content={topDesciption ?? ""} />
    </div>
  ) : null
}
function Vertical({ ...props }: TPage) {
  return <SinglePageContentWrapper></SinglePageContentWrapper>
}

function Horizontal({
  topTitle,
  topDesciption,
  pageContentBanner,
  pageContent
}: TPage) {
  return (
    <SinglePageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <Row gutter={[32, 32]} align='middle'>
        <Col span={24} lg={{ span: 12 }}>
          <GridMedia {...(pageContentBanner ?? {})} />
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <RichText content={pageContent} />
        </Col>
      </Row>
    </SinglePageContentWrapper>
  )
}

function Gurus({
  topTitle,
  topDesciption,
  pageContentEndpoint,
  locale
}: TPage) {
  const { content, getPageContent, isLoading } = usePage<{
    guruList: {
      title: string
      description: string
      cover?: {
        data: TMedia
      }
    }[]
  }>({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "guruList",
      "populate[1]": "guruList.cover"
    }
  })

  useEffect(() => {
    if (pageContentEndpoint) {
      getData()
    }
    async function getData() {
      await getPageContent()
    }
  }, [pageContentEndpoint])
  const { guruList } = content?.data.attributes ?? {}
  return (
    <SinglePageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      {!isLoading && guruList ? (
        <Row gutter={[32, 32]}>
          {guruList.map(({ title, description, cover }, idx) => (
            <Col span={24} lg={{ span: idx !== 0 ? 12 : 24 }}>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: idx !== 0 ? 400 : 500,
                  margin: "0 auto"
                }}
              >
                <GridMedia
                  {...(cover?.data.attributes ?? {})}
                  width={500}
                  height={500}
                />
                <h3>{title}</h3>
                <RichText content={description} />
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <div></div>
      )}
    </SinglePageContentWrapper>
  )
}

const MonasteryImageWrapper = styled.div`
  background: #fff;
  .ant-image {
    width: 100%;
  }
  img {
    width: 100%;
    object-fit: contain;
    object-position: center center;
    height: calc(100vw - 30px);
    @media (min-width: 992px) {
      height: calc(888px / 4);
    }
    @media (min-width: 1200px) {
      height: calc(998px / 4);
    }
  }
`

function Monastery({
  locale,
  pageContentEndpoint,
  topTitle,
  topDesciption,
  pageContent
}: TPage) {
  const { content, getPageContent, isLoading } = usePage<{
    images: {
      data: TMedia[]
    }
  }>({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "images"
    }
  })

  useEffect(() => {
    if (pageContentEndpoint) {
      getData()
    }
    async function getData() {
      await getPageContent()
    }
  }, [pageContentEndpoint])
  console.log({ content })
  const { images } = content?.data.attributes ?? {}
  return (
    <SinglePageContentWrapper>
      <TopSection topTitle={topTitle} topDesciption={topDesciption} />
      <div>
        <RichText content={pageContent} />
      </div>
      <Row gutter={[24, 24]}>
        {!isLoading && images ? (
          images.data.map((image) => (
            <Col span={24} lg={{ span: 6 }}>
              <MonasteryImageWrapper>
                <Image src={image.attributes.url} alt={image.attributes.name} />
              </MonasteryImageWrapper>
            </Col>
          ))
        ) : (
          <Col></Col>
        )}
      </Row>
    </SinglePageContentWrapper>
  )
}

export function SinglePageLayout({ data }: { data: TPage }) {
  console.log("SinglePageLayout", { data })
  switch (data.pageContentLayout) {
    case ESinglePageLayout.HORIZONTAL:
      return <Horizontal {...data} />
    case ESinglePageLayout.VERTICAL:
      return <Vertical {...data} />
    case ESinglePageLayout.GURUS:
      return <Gurus {...data} />
    case ESinglePageLayout.MONASTERY:
      return <Monastery {...data} />
    default:
      return <Horizontal {...data} />
  }
}
