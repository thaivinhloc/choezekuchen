// @ts-nocheck
import { ArrowRightAlt } from "@mui/icons-material"
import { Col, Row } from "antd"
import { THEME } from "common"
import { TITLE_SIZES, Title } from "components/Title"
import { TitleWithHeadline } from "components/Title/TitleWithHeadline"
import { SingleSection, SingleSectionSmall } from "container/Section"
import { Button } from "elements/Button"
import { GridMedia } from "elements/Media"
import { RichText } from "elements/RichText"
import usePage from "hook/usePage"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"

const OfferingPageWrapper = styled.div``
const IntroductionWrapper = styled.div`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
  padding: 50px 0;
`

const OfferingItem = styled.div`
  text-align: center;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 12px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  strong {
    font-size: 20px;
    display: block;
  }
  &:hover {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
    color: ${(props) => props.theme.white};
    > div {
      &:first-of-type {
        display: none !important;
      }
    }
  }
`

const PrayersWrapper = styled.div`
  height: 100%;
  padding: 16px;
  position: relative;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 12px;
  h3,
  button {
    color: ${(props) => props.theme.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    h3,
    button,
    p,
    span {
      color: ${(props) => props.theme.white};
    }
  }
`

const MakeOfferingWrapper = styled.div``

export const OfferingPage = ({
  locale,
  isMobile,
  globalData,
  pageContentEndpoint
}) => {
  const router = useRouter()
  const { content, getPageContent } = usePage({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "introduction.headLine",
      "populate[2]": "introduction.background",
      "populate[3]": "introduction.contentList",
      "populate[4]": "introduction.contentList.cover",
      "populate[5]": "introduction.contentList.actionIcon",
      "populate[6]": "makeOffering",
      "populate[7]": "makeOffering.contentList",
      "populate[8]": "makeOffering.contentList.cover",
      "populate[13]": "makeOffering.contentList.actionIcon",
      "populate[9]": "otherOffering",
      "populate[10]": "otherOffering.contentList",
      "populate[11]": "otherOffering.contentList.cover",
      "populate[12]": "banner"
    }
  })

  const { t } = useTranslation()

  useEffect(() => {
    if (pageContentEndpoint) {
      getData()
    }
    async function getData() {
      await getPageContent()
    }
  }, [pageContentEndpoint])

  console.log({ content })
  const { introduction, makeOffering, otherOffering, banner } =
    content?.data?.attributes ?? {}
  return (
    <OfferingPageWrapper>
      {introduction && (
        <IntroductionWrapper background={introduction.background}>
          <div className='container' style={{ marginBottom: 50 }}>
            <SingleSectionSmall
              title={introduction.title}
              content={introduction.content}
              headLine={introduction.headLine}
            />
          </div>
          <div className='container'>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <TitleWithHeadline
                title={t("Make an Offering by Credit Card or PayPal")}
              />
            </div>
            <Row justify='space-between' gutter={[0, 24]}>
              {introduction.contentList?.map(({ title, actionIcon }) => (
                <Col span={12} lg={{ span: 4 }}>
                  <OfferingItem>
                    <div style={{ width: 80, margin: "0 auto 10px" }}>
                      <Image
                        src={actionIcon?.data?.attributes?.url}
                        {...(actionIcon?.data?.attributes ?? {})}
                        layout='responsive'
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "1 1 auto"
                      }}
                    >
                      <strong>{title}</strong>
                    </div>
                  </OfferingItem>
                </Col>
              ))}
            </Row>
          </div>
        </IntroductionWrapper>
      )}
      {otherOffering && (
        <div style={{ padding: "50px 0" }}>
          <div className='container'>
            <SingleSection
              title={otherOffering.title}
              content={otherOffering.content}
            />
            <div style={{ height: 50 }} />
            <Row gutter={[40, 24]} align='top'>
              {otherOffering.contentList?.map((item) => (
                <Col
                  span={24}
                  lg={{ span: 12 }}
                  style={{ alignSelf: "stretch" }}
                >
                  <PrayersWrapper>
                    <GridMedia
                      url={item.cover?.data?.attributes.url}
                      name={item.cover?.data?.attributes.name}
                      width={600}
                      height={400}
                      style={{ borderRadius: 4 }}
                    />
                    <div>
                      <div style={{ paddingBottom: 50 }}>
                        <h3 style={{ fontSize: 28 }}>{item.title}</h3>
                        <RichText content={item.description} />
                      </div>
                      <div
                        style={{ position: "absolute", bottom: 16, left: 16 }}
                      >
                        <Button
                          type='text'
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 0"
                          }}
                        >
                          <span style={{ display: "block", marginRight: 10 }}>
                            {t("See more")}
                          </span>{" "}
                          <ArrowRightAlt />
                        </Button>
                      </div>
                    </div>
                  </PrayersWrapper>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
      {banner && (
        <div style={{ padding: "24px 0 50px" }}>
          <div className='container'>
            <GridMedia
              url={banner?.data?.attributes.url}
              name={banner?.data?.attributes.name}
              width={banner?.data?.attributes?.width}
              height={banner?.data?.attributes?.height}
              style={{ borderRadius: 16 }}
            />
          </div>
        </div>
      )}
      {makeOffering && (
        <div style={{ padding: "24px 0 80px" }}>
          <div className='container'>
            <Title
              size={TITLE_SIZES.MEDIUM}
              title={t("Make an Offering")}
              supTitle={t("Other ways to")}
            />
            <div style={{ height: 42 }} />
            <MakeOfferingWrapper>
              <Row gutter={[24, 24]}>
                {makeOffering.contentList?.map(
                  ({ id, order, title, description, actionIcon }) => (
                    <Col span={24} xl={{ span: order === 1 ? 24 : 12 }}>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{ width: 40, minWidth: 40, marginRight: 10 }}
                        >
                          <Image
                            src={actionIcon?.data?.attributes.url}
                            {...actionIcon?.data?.attributes}
                            layout='responsive'
                          />
                        </div>
                        <div>
                          <h3
                            style={{
                              color: THEME.primary,
                              margin: "6px 0 12px",
                              fontWeight: "bold"
                            }}
                          >
                            {title}
                          </h3>
                          <RichText content={description} />
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </MakeOfferingWrapper>
          </div>
        </div>
      )}
    </OfferingPageWrapper>
  )
}
