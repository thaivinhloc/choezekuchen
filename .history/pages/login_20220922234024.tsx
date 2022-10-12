import { RETREAT } from "common/navigator";
import LoginForm from "components/Auth/LoginForm";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Login: FC<{}> = ({ language }: any) => {
  const router = useRouter();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) router.push(RETREAT);
  }, [router]);

  /* Render */
  return <LoginForm />;
};

export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
      ])),
    },
  };
}

export default Login;
