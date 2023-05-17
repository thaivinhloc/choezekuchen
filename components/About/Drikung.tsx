// @ts-nocheck
import { Col, Row } from "antd"
import { TPage } from "definition"
import usePage from "hook/usePage"
import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import { THEME } from "common"
import { RichText } from "elements/RichText"
import { GridMedia } from "elements/Media"
import { TITLE_SIZES, Title } from "components/Title"
import { TitleWithHeadline } from "components/Title/TitleWithHeadline"

const DrikungKagyuLinageWrapper = styled.div`
  padding-top: 50px;
`
const ContentImageWrapper = styled.div`
  table {
    td {
      &:first-of-type {
        img {
          padding: 10px 40px 10px;
        }
      }
      &:last-of-type {
        img {
          padding: 10px 0 10px 40px;
        }
      }
    }
  }
`

export const DrikungKagyuLinage = ({
  locale,
  pageContentEndpoint,
  isMobile,
  globalData
}: TPage) => {
  const { defaultHeadLine } = globalData.attributes
  const { content, getPageContent } = usePage({
    locale,
    endpoint: pageContentEndpoint,
    params: {
      "populate[0]": "introduction",
      "populate[1]": "history",
      "populate[2]": "introduction.background",
      "populate[3]": "section_line_image"
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
  const { introduction, history, section_line_image } =
    content?.data?.attributes || {}
  const subTitleStyle = isMobile
    ? {
        fontSize: 20,
        lineHeight: "24px"
      }
    : { fontSize: 32, lineHeight: "48px" }
  const titleStyle = isMobile
    ? { fontSize: 42, lineHeight: "42px" }
    : { fontSize: 60, lineHeight: "60px" }
  return (
    <DrikungKagyuLinageWrapper>
      <div className='container'>
        {introduction && (
          <Row
            gutter={[
              { xs: 0, sm: 0, md: 16, lg: 48 },
              { xs: 16, sm: 16 }
            ]}
          >
            <Col span={12} lg={{ span: 13 }}>
              <Title
                isMobile={isMobile}
                size={TITLE_SIZES.MEDIUM}
                title={introduction.title}
                supTitle={t("Introduction to the")}
              />

              <RichText
                style={{ marginTop: 32, textAlign: "justify" }}
                content={introduction.description}
              />
            </Col>
            <Col span={12} lg={{ span: 11 }}>
              <GridMedia {...introduction.background?.data?.attributes} />
            </Col>
          </Row>
        )}
        {history && (
          <div style={{ padding: "80px 0" }}>
            <div style={{ textAlign: "center" }}>
              <TitleWithHeadline
                title={history.title}
                headLine={defaultHeadLine}
              />
            </div>
            <ContentImageWrapper>
              <RichText
                style={{ marginTop: 32, textAlign: "justify" }}
                content={history.description}
              />
            </ContentImageWrapper>
          </div>
        )}
      </div>
    </DrikungKagyuLinageWrapper>
  )
}
