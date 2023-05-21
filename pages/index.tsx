import Home from "components/Home"
import { useApp } from "context/app/AppContext"
import { TPage } from "definition"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import withHome from "hoc/withHome"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { useEffect } from "react"
import { THomePageResponse } from "services/page/home"

function HomePage({
  data,
  content,
  isMobile
}: {
  data: TPage
  content: THomePageResponse
  isMobile: boolean
}) {
  console.log("HomePage", { data, content })
  return <Home data={data} content={content} isMobile={isMobile} />
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withHome(withTrans))
)

export default withNavigator(HomePage)
