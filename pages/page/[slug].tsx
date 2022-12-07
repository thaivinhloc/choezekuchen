import { ListPageLayout } from "container/layout/ListPage"
import { SinglePageLayout } from "container/layout/SinglePage"
import { useApp } from "context/app/AppContext"
import { EPageType, TPage } from "definition"
import { RichText } from "elements/RichText"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withPage from "hoc/withPage"
import withTrans from "hoc/withTrans"
import Head from "next/head"
import { useEffect } from "react"
import styled from "styled-components"

const PageContentWrapper = styled.div<Partial<TPage>>`
  padding-top: 50px;
  padding-bottom: 80px;
  background: ${(props) => props.background ?? "#f9f9f9"};
`

function Page({ data }: { data: TPage }) {
  const { setTitleBanner, setBanner } = useApp()

  useEffect(() => {
    if (data.title) {
      setTitleBanner(data.title)
    }
  }, [data.title])
  useEffect(() => {
    if (data.cover) {
      setBanner({
        id: 0,
        attributes: data.cover
      })
    }
  }, [data.cover])
  console.log("Page", data)
  return (
    <>
      <Head>{data.title && <title>{data.title}</title>}</Head>
      <PageContentWrapper background={data.background}>
        {data.pageType === EPageType.LIST ? (
          <ListPageLayout data={data} />
        ) : (
          <SinglePageLayout data={data} />
        )}
      </PageContentWrapper>
    </>
  )
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withPage(withTrans))
)

export default withNavigator(Page)
