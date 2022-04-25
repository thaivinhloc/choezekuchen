import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { IResponseLogin, IUser, TLogin, TSignup } from "./AuthTypes";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import Client from "../../services/Client";

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
      const result: IResponseLogin = await Client.createRequest({
        path: "/api/auth/local",
        method: "post",
        body: data,
        external: true,
      });
      localStorage.setItem("token", result.jwt);
      setUser(result.user);
      navigate("/retreat");
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error || "",
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
      const result: IResponseLogin = await Client.createRequest({
        path: "/api/auth/local/register",
        method: "post",
        body: data,
        external: true,
      });

      localStorage.setItem("token", result.jwt);
      setUser(result.user);
      navigate("/retreat");
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error || "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onGetMe = async () => {
    try {
      const result: IUser = await Client.createRequest({
        path: "/api/users/me",
        method: "get",
      });
      const { address, ...values } = result;
      const convertAddress = address?.split(",");
      const body = {
        ...values,
        country: convertAddress?.[0],
        city: convertAddress?.[convertAddress?.length - 1],
      };
      setUser(body);
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const onResetPassword = async () => {
    try {
      const result = await Client.createRequest({
        path: "/api/auth/reset-password",
        method: "post",
      });
    } catch (error) {
      console.log("----error", error);
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
        onResetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
