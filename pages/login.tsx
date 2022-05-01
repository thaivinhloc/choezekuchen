import LoginForm from "components/Auth/LoginForm";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login: FC<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) router.push("/retreat");
  }, [router]);

  /* Render */
  return <LoginForm />;
};
export const getStaticProps = async ({ locale }: any) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "login"])) },
});
export default Login;
