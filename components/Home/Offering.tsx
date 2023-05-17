// @ts-nocheck
import { ArrowRightOutlined } from "@ant-design/icons"
import { Col, Row } from "antd"
import { THEME } from "common"
import { Button } from "elements/Button"
import { RichText } from "elements/RichText"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import styled from "styled-components"
import { TITLE_SIZES, Title } from "components/Title"

const BackgroundWrapper = styled.div<{ background?: any }>`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 200px 0;
`

export const Offering: React.FC = ({
  description,
  redirectLink,
  background,
  isMobile
}) => {
  const { t } = useTranslation()
  const contentSize = isMobile ? "18px" : "32px"
  return (
    <BackgroundWrapper background={background}>
      <div className='container'>
        <Row align='bottom' gutter={[{ xs: 16, md: 32 }, 24]}>
          <Col span={24} md={{ span: 12 }}>
            <Title
              isMobile={isMobile}
              title={t("Offering")}
              supTitle={t("Support &")}
              size={TITLE_SIZES.LARGE}
            />
            <RichText fontSize={contentSize} content={description} />
          </Col>
          <Col span={24} md={{ span: 12 }} style={{ paddingBottom: 60 }}>
            <Link href={redirectLink ?? "/"}>
              <a>
                <div
                  style={{
                    border: `3px solid ${THEME.primary}`,
                    borderRadius: 40,
                    height: 78,
                    position: "relative",
                    textAlign: "center",
                    lineHeight: "70px",
                    fontSize: contentSize,
                    color: THEME.primary
                  }}
                >
                  {t("Make an Offering")}
                  <Button
                    shape='circle'
                    style={{
                      position: "absolute",
                      right: 4,
                      top: 3,
                      height: 64,
                      width: 64
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
  )
}
