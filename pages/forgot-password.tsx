import ForgotPasswordForm from "components/Auth/ForgotPassword"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { FC } from "react"

const ForgotPassword: FC = () => {
  /* Render */
  return <ForgotPasswordForm />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withTrans))

export default withNavigator(ForgotPassword)
