import { HOME, RETREAT } from "common/navigator"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { ELanguages } from "i18n/config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"
import dynamic from "next/dynamic"
const LoginForm = dynamic(() => import("components/Auth/LoginForm"), { ssr: false })

const Login: FC<{}> = ({ language }: any) => {
  const router = useRouter()

  useEffect(() => {
    const token = !!localStorage.getItem("token")
    if (token) router.push(HOME)
  }, [router])

  /* Render */
  return <LoginForm />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withTrans))

export default withNavigator(Login)
