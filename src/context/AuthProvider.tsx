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
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const onGetMe = async () => {
    try {
      console.log("get me");
      const result: IUser = await Client.get("/users/me");
      console.log("result", result);
      setUser(result);
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error?.error?.message || "",
      });
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
        onGetMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
