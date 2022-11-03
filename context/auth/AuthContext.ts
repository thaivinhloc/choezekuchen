import { createContext, useContext } from "react";
import { IUser, TLogin, TSignup } from "./AuthTypes";

type authContextType = {
  isLoading: boolean;
  user: IUser | null;
  onLogin: (data: TLogin, callback?: () => void) => any;
  onRegister: (data: TSignup) => any;
  onLogout: () => any;
  onGetMe: () => any;
  onResetPassword: () => any;
};

const authContextDefaultValues: authContextType = {
  isLoading: false,
  user: null,
  onLogin: (data: TLogin) => {},
  onRegister: async (data: TSignup) => {},
  onLogout: () => {},
  onGetMe: () => {},
  onResetPassword: () => {},
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
);

export function useAuth() {
  return useContext(AuthContext);
}
