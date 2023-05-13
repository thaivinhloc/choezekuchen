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
  isMobile
}: TPage) => {
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
              <strong
                style={{
                  display: "block",
                  color: THEME.primary,
                  ...subTitleStyle
                }}
              >
                {t("Introduction to the")}
              </strong>
              <h2
                style={{
                  color: THEME.primary,
                  marginBottom: 12,
                  fontWeight: "bolder",
                  ...titleStyle
                }}
              >
                {introduction.title}
              </h2>
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
        {section_line_image && (
          <div style={{ margin: "48px auto" }}>
            <GridMedia {...section_line_image?.data?.attributes} />
          </div>
        )}
        {history && (
          <div>
            <h2
              style={{
                color: THEME.primary,
                marginBottom: 12,
                fontWeight: "bolder",
                textAlign: "center",
                ...titleStyle
              }}
            >
              {history.title}
            </h2>
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
