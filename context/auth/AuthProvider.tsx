import { ReactNode, useState } from "react"
import { AuthContext } from "./AuthContext"
import {
  IResponseLogin,
  IUser,
  TForgotPassword,
  TLogin,
  TSignup
} from "./AuthTypes"
import { notification } from "antd"
import { useRouter } from "next/router"
import Client from "services/client"
import i18n from "i18next"
import { LOGIN, RETREAT } from "common/navigator"
import { useTranslation } from "next-i18next"

type Props = {
  children: ReactNode
}
export function AuthProvider({ children }: Props) {
  const router = useRouter()
  const { t } = useTranslation("login")
  const [user, setUser] = useState<IUser | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onLogin = async (data: TLogin, callback?: () => void) => {
    try {
      setIsLoading(true)
      const result: IResponseLogin = await Client.createRequest({
        path: "/api/auth/local",
        method: "post",
        body: data,
        external: true
      })
      localStorage.setItem("token", result.jwt)
      setUser(result.user)
      callback?.()
    } catch (error: any) {
      notification.error({
        message: t("error"),
        description: t("incorrectUserNameOrPassword", { ns: "login" }) || ""
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    router.push(LOGIN)
  }

  const onRegister = async (data: TSignup) => {
    try {
      setIsLoading(true)
      const result: IResponseLogin = await Client.createRequest({
        path: "/api/auth/local/register",
        method: "post",
        body: data,
        external: true
      })

      localStorage.setItem("token", result.jwt)
      setUser(result.user)
      router.push(RETREAT)
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error || ""
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onForgotPassword = async (
    data: TForgotPassword,
    callback?: () => void
  ) => {
    try {
      setIsLoading(true)
      await Client.createRequest({
        path: "/api/auth/forgot-password",
        method: "post",
        body: data,
        external: true
      })
      setIsLoading(false)
      notification.success({
        message: "Success",
        description: t(
          "Please check your email and follow the steps to recover your account!"
        )
      })
      callback?.()
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error || ""
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onGetMe = async () => {
    try {
      const result: IUser = await Client.createRequest({
        path: "/api/users/me",
        method: "get"
      })
      const { address, ...values } = result
      const convertAddress = address?.split(",")
      const body = {
        ...values,
        city: convertAddress?.[0] ? convertAddress[0].trimStart() : "",
        country: convertAddress?.[convertAddress?.length - 1]
          ? convertAddress[convertAddress.length - 1].trimStart()
          : ""
      }
      setUser(body)
    } catch (error: any) {
      console.log("error", error)
    }
  }

  const onUpdateProfile = async (body: Partial<IUser>) => {
    try {
      setIsLoading(true)
      const result: IUser = await Client.createRequest({
        path: "/api/users-permissions/me",
        method: "put",
        body
      })
      setUser(result)
      notification.success({
        message: "Success"
      })
      setIsLoading(false)
    } catch (error: any) {
      console.log("----error", error)
      notification.error({
        message: "Error",
        description: error || ""
      })
      setIsLoading(false)
    }
  }

  const onResetPassword = async (data, callback?: () => void) => {
    try {
      setIsLoading(true)
      await Client.createRequest({
        path: "/api/auth/reset-password",
        method: "post",
        body: data,
        external: true
      })
      setIsLoading(false)
      callback?.()
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error || ""
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onRegister,
        onLogout,
        isLoading,
        onGetMe,
        onUpdateProfile,
        onResetPassword,
        onForgotPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
