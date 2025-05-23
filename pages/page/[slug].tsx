// @ts-nocheck
import dynamic from "next/dynamic"
const Offering = dynamic(() => import("components/Home/Offering"), {
  ssr: false
})
const SinglePageLayout = dynamic(() => import("container/layout/SinglePage"), {
  ssr: false
})
import { useApp } from "context/app/AppContext"
import { TPage } from "definition"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withPage from "hoc/withPage"
import withTrans from "hoc/withTrans"
import Head from "next/head"
import { useEffect } from "react"
import styled from "styled-components"

const PageContentWrapper = styled.div<Partial<TPage>>`
  padding-top: 0;
  background: ${(props) => props.background ?? "#ffffff"};
`

function Page({ data, globalData, isMobile }: { data: TPage }) {
  const { setTitleBanner, setBanner } = useApp()

  useEffect(() => {
    if (data.title) {
      setTitleBanner(data.title)
    }
  }, [data?.title])
  useEffect(() => {
    if (data.cover) {
      setBanner({
        id: 0,
        attributes: data.cover
      })
    }
  }, [data?.cover])
  console.log("Page", data)
  console.log({ globalData })

  return (
    <>
      <Head>{data?.title && <title>{data?.title}</title>}</Head>
      <PageContentWrapper background={data.background}>
        <SinglePageLayout
          data={data}
          isMobile={isMobile}
          globalData={globalData}
        />
        {data.isEnabledOffering && (
          <Offering
            {...globalData.attributes.offering}
            offeringTitle={data.offeringTitle}
            offeringSubTitle={data.offeringSubTitle}
            offeringRedirectLink={data.offeringRedirectLink}
            offeringRedirectTitle={data.offeringRedirectTitle}
            isMobile={isMobile}
          />
        )}
      </PageContentWrapper>
    </>
  )
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withPage(withTrans))
)

export default withNavigator(Page)
