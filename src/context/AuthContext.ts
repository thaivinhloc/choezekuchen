import { createContext, useContext } from "react";
import { IUser, TLogin, TSignup } from "./AuthTypes";

type authContextType = {
  isLoading: boolean;
  user: IUser | null;
  onLogin: (data: TLogin) => any;
  onRegister: (data: TSignup) => any;
  onLogout: () => any;
};

const authContextDefaultValues: authContextType = {
  isLoading: false,
  user: null,
  onLogin: (data: TLogin) => {},
  onRegister: async (data: TSignup) => {},
  onLogout: () => {},
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
);

export function useAuth() {
  return useContext(AuthContext);
}
