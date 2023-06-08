import { HOME } from "common/navigator"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"
import dynamic from "next/dynamic"
import { useApp } from "context/app/AppContext"
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
