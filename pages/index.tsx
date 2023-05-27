const Home = dynamic(() => import("components/Home"), { ssr: false })
import { useApp } from "context/app/AppContext"
import { TPage } from "definition"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import withHome from "hoc/withHome"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { THomePageResponse } from "services/page/home"

function HomePage({
  data,
  content,
  isMobile,
  globalData,
}: {
  data: TPage
  content: THomePageResponse
  isMobile: boolean
  globalData: any
}) {
  console.log("HomePage", { data, content, isMobile })
  return <Home data={data} content={content} isMobile={isMobile} globalData={globalData} />
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withHome(withTrans))
)

export default withNavigator(HomePage)
