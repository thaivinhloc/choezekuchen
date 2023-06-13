// @ts-nocheck
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { THEME } from "common";
import { Button } from "elements/Button";
import { RichText } from "elements/RichText";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { TITLE_SIZES, Title } from "components/Title";

const BackgroundWrapper = styled.div<{ background?: any }>`
  background: url(${(props) => props.background?.data?.attributes?.url});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
  @media (min-width: 1200px) {
    padding: 200px 0;
  }
`;

export const Offering: React.FC = ({
  description,
  redirectLink,
  background,
  isMobile,
  offeringTitle,
  offeringSubTitle,
  offeringRedirectTitle,
  offeringRedirectLink
}) => {
  const { t } = useTranslation();
  const contentSize = isMobile ? "18px" : "24px";
  return (
    <BackgroundWrapper background={background}>
      <div className='container'>
        <Row align='bottom' gutter={[{ xs: 16, md: 32 }, 24]}>
          <Col span={24} md={{ span: 12 }}>
            <Title
              isMobile={isMobile}
              title={offeringTitle ?? t("Offering")}
              supTitle={
                offeringSubTitle ? offeringSubTitle + " &" : t("Support &")
              }
              size={TITLE_SIZES.LARGE}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24} md={{ span: 12 }} style={{ paddingBottom: 28 }}>
            <RichText fontSize={contentSize} content={description} />
          </Col>
          <Col span={24} md={{ span: 12 }} style={{ paddingBottom: 28 }}>
            <Link href={offeringRedirectLink ?? redirectLink ?? "/"}>
              <a>
                <div
                  style={{
                    border: `3px solid ${THEME.primary}`,
                    borderRadius: 40,
                    height: 68,
                    position: "relative",
                    textAlign: "center",
                    lineHeight: "60px",
                    fontSize: contentSize,
                    color: THEME.primary
                  }}
                >
                  {offeringRedirectTitle ?? t("Make an Offering")}
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
  );
};

export default Offering;
