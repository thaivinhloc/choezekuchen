// @ts-nocheck
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { THEME } from "common";
import { ESinglePageLayout, TPage } from "definition";
import { Button } from "elements/Button";
import { GridMedia } from "elements/Media";
import { RichText } from "elements/RichText";
import { getMonasteryPathFromSlug } from "helper";
import useMonastery from "hook/useMonastery";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import eventsBackground from "assets/bg/events_background.png";
import dynamic from "next/dynamic";
const About = dynamic(() => import("components/About"), { ssr: false });
const Teaching = dynamic(() => import("components/Teaching"), { ssr: false });
const Library = dynamic(() => import("components/Library"), { ssr: false });
const RetreatList = dynamic(() => import("components/Retreat/RetreatList"), {
  ssr: false
});
const EventList = dynamic(() => import("components/Event/EventList"), {
  ssr: false
});
const OfferingPage = dynamic(() => import("components/Offering"), {
  ssr: false
});
const TitleWithHeadline = dynamic(
  () => import("components/Title/TitleWithHeadline"),
  { ssr: false }
);
const UpcomingEvents = dynamic(() => import("components/Home/UpcomingEvents"), {
  ssr: false
});
const DrikungKagyuLinage = dynamic(() => import("components/About/Drikung"), {
  ssr: false
});

export const SinglePageContentWrapper = styled.div`
  padding-top: 50px;
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
  @media (min-width: 1400px) {
    width: 1340px;
    max-width: 100%;
  }
`;

function TopSection({
  topTitle,
  topDesciption
}: {
  topTitle?: string;
  topDesciption?: string;
}) {
  return topTitle ? (
    <div
      className='text-center'
      style={{ maxWidth: 800, margin: "0 auto 50px" }}
    >
      <h2>{topTitle}</h2>
      <RichText content={topDesciption ?? ""} />
    </div>
  ) : null;
}

function Horizontal({ globalData }) {
  const { t } = useTranslation();
  const { defaultHeadLine } = globalData.attributes;
  return (
    <SinglePageContentWrapper>
      <div style={{ textAlign: "center", padding: "60px 0 100px" }}>
        <TitleWithHeadline
          title={t("Coming soon")}
          headLine={defaultHeadLine}
        />
      </div>
    </SinglePageContentWrapper>
  );
}

function Monastery({
  locale,
  topTitle,
  topDesciption,
  globalData,
  isMobile
}: TPage) {
  const { t } = useTranslation();
  const { monasteries, getAllMonasteries } = useMonastery({
    locale: locale ?? "en"
  });

  useEffect(() => {
    getAllMonasteries();
  }, []);
  const { defaultHeadLine } = globalData.attributes;
  console.log({ eventsBackground });

  return (
    <>
      <SinglePageContentWrapper>
        {topTitle && (
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <TitleWithHeadline headLine={defaultHeadLine} title={topTitle} />
            <RichText content={topDesciption} />
          </div>
        )}
        <Row
          gutter={[{ xs: 15, sm: 15, md: 32 }, 40]}
          style={{ padding: "40px 0 80px" }}
        >
          {monasteries?.map(({ id, attributes }) => {
            return (
              <Col span={24} xl={{ span: 12 }}>
                <div
                  style={{
                    height: 320,
                    position: "relative",
                    borderRadius: 12
                  }}
                >
                  <Image
                    style={{ borderRadius: 12 }}
                    src={attributes.cover?.data?.attributes?.url}
                    width={640}
                    height={360}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                  />
                </div>
                <h3 style={{ color: THEME.primary }}>{attributes.title}</h3>
                <p className='ellipsis ellipsis-3' style={{ minHeight: 80 }}>
                  {attributes.description}
                </p>
                <Link href={getMonasteryPathFromSlug(id, attributes.slug)}>
                  <a>
                    <div
                      style={{
                        border: `1px solid ${THEME.primary}`,
                        borderRadius: 24,
                        height: 40,
                        position: "relative",
                        lineHeight: "38px",
                        paddingLeft: 20,
                        fontSize: 18,
                        color: THEME.primary,
                        width: 200
                      }}
                    >
                      {t("Discover now")}
                      <Button
                        shape='circle'
                        style={{
                          position: "absolute",
                          right: 3,
                          top: 3,
                          height: 32,
                          width: 32
                        }}
                        type='primary'
                        icon={<ArrowRightOutlined style={{ fontSize: 16 }} />}
                      />
                    </div>
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </SinglePageContentWrapper>
      <UpcomingEvents
        background={eventsBackground.src}
        title={t("Upcoming Events")}
        redirectLink='/events.html'
        isMobile={isMobile}
      />
    </>
  );
}

export function SinglePageLayout({
  data,
  globalData,
  isMobile
}: {
  data: TPage;
}) {
  console.log("SinglePageLayout", { data });
  switch (data.pageContentLayout) {
    case ESinglePageLayout.MONASTERY:
      return (
        <Monastery {...data} isMobile={isMobile} globalData={globalData} />
      );
    case ESinglePageLayout.DRIKUNG_KAGYU_LINEAGE:
      return (
        <DrikungKagyuLinage
          {...data}
          globalData={globalData}
          isMobile={isMobile}
        />
      );
    case ESinglePageLayout.ABOUT:
      return <About {...data} globalData={globalData} isMobile={isMobile} />;
    case ESinglePageLayout.TEACHING:
      return <Teaching {...data} globalData={globalData} isMobile={isMobile} />;
    case ESinglePageLayout.LIBRARY:
      return <Library {...data} globalData={globalData} isMobile={isMobile} />;
    case ESinglePageLayout.RETREAT:
      return (
        <RetreatList {...data} globalData={globalData} isMobile={isMobile} />
      );
    case ESinglePageLayout.EVENT:
      return (
        <EventList {...data} globalData={globalData} isMobile={isMobile} />
      );
    case ESinglePageLayout.OFFERING:
      return (
        <OfferingPage {...data} globalData={globalData} isMobile={isMobile} />
      );
    default:
      return (
        <Horizontal {...data} globalData={globalData} isMobile={isMobile} />
      );
  }
}

export default SinglePageLayout;
