import { HOME, RETREAT } from "common/navigator"
import ForgotPasswordForm from "components/Auth/ResetPassword"
import LoginForm from "components/Auth/LoginForm"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { ELanguages } from "i18n/config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"

const ForgotPassword: FC = () => {
  /* Render */
  return <ForgotPasswordForm />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withTrans))

export default withNavigator(ForgotPassword)
