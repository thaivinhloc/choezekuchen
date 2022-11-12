import Home from "components/Home"
import { TPage } from "definition"
import withGlobalData from "hoc/withGlobalData"
import withHome from "hoc/withHome"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"

function HomePage({
  data,
  content
}: {
  data: TPage
  content: Record<string, any>
}) {
  console.log("HomePage", { data, content })
  return <Home />
}

export const getServerSideProps = withGlobalData(withHome(withTrans))

export default withNavigator(HomePage)
