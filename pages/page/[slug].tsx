import { TPage } from "definition"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withPage from "hoc/withPage"
import withTrans from "hoc/withTrans"

function Page({ data }: { data: TPage }) {
  console.log("Page", data)
  return <div></div>
}

export const getServerSideProps = withGlobalData(withPage(withTrans))

export default withNavigator(Page)
