const Profile = dynamic(() => import("components/Auth/Profile"), { ssr: false })
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import dynamic from "next/dynamic"

function ProfilePage({ allLangsData }: any) {
  return <Profile />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withTrans))

export default withNavigator(ProfilePage)
