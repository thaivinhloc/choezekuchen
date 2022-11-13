import Profile from "components/Auth/Profile"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"

function ProfilePage({ allLangsData }: any) {
  return <Profile />
}

export const getServerSideProps = withGlobalData(withTrans)

export default withNavigator(ProfilePage)
