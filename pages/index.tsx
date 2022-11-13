import Home from "components/Home"
import { TPage } from "definition"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import withHome from "hoc/withHome"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { THomePageResponse } from "services/page/home"

function HomePage({
  data,
  content
}: {
  data: TPage
  content: THomePageResponse
}) {
  console.log("HomePage", { data, content })
  return <Home data={data} content={content} />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withHome(withTrans)))

export default withNavigator(HomePage)
