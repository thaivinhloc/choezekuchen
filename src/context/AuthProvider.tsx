import { ReactNode, useState } from "react";
import Client from "../services/client";
import { AuthContext } from "./AuthContext";
import { IResponseLogin, IUser, TLogin, TSignup } from "./AuthTypes";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

type Props = {
  children: ReactNode;
};
export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onLogin = async (data: TLogin) => {
    try {
      setIsLoading(true);
      const result: IResponseLogin = await Client.post("/auth/local", data);
      localStorage.setItem("token", result.jwt);
      setUser(result.user);
      navigate("/retreat");
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error?.error?.message || "",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const onLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };
  const onRegister = async (data: TSignup) => {
    try {
      setIsLoading(true);

      const result: IResponseLogin = await Client.post(
        "/auth/local/register",
        data
      );
      localStorage.setItem("token", result.jwt);
      setUser(result.user);
      navigate("/retreat");
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error?.error?.message || "",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onRegister,
        onLogout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
