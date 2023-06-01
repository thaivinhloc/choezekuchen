import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import dynamic from "next/dynamic"
import { FC } from "react"
const ForgotPasswordForm = dynamic(() => import("components/Auth/ResetPassword"), { ssr: false })

const ForgotPassword: FC = () => {
  /* Render */
  return <ForgotPasswordForm />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withTrans))

export default withNavigator(ForgotPassword)
