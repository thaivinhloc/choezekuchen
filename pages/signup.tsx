import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withTrans from "hoc/withTrans"
import { ELanguages } from "i18n/config"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"
const SignUpForm = dynamic(() => import("components/Auth/SignUpForm"), { ssr: false })

const SignUpPage: FC<{}> = () => {
  const router = useRouter()

  useEffect(() => {
    const token = !!localStorage.getItem("token")
    if (token) router.push("/")
  }, [router])

  /* Render */
  return <SignUpForm />
}

export const getServerSideProps = withGlobalData(withDetectDevice(withTrans))

export default withNavigator(SignUpPage)
