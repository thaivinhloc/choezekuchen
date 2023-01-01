import { createContext, useContext } from "react"
import { IUser, TForgotPassword, TLogin, TSignup } from "./AuthTypes"

type authContextType = {
  isLoading: boolean
  user: IUser | null
  onLogin: (data: TLogin, callback?: () => void) => any
  onRegister: (data: TSignup) => any
  onForgotPassword: (data: TForgotPassword, callback?: () => void) => any
  onLogout: () => any
  onGetMe: () => any
  onUpdateProfile: (user: IUser) => any
  onResetPassword: () => any
}

const authContextDefaultValues: authContextType = {
  isLoading: false,
  user: null,
  onLogin: (data: TLogin) => {},
  onRegister: async (data: TSignup) => {},
  onLogout: () => {},
  onGetMe: () => {},
  onUpdateProfile: () => {},
  onResetPassword: () => {},
  onForgotPassword: () => {}
}

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
)

export function useAuth() {
  return useContext(AuthContext)
}
