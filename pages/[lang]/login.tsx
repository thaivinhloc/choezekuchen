import LoginForm from "components/Auth/LoginForm";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";
import i18next from "i18next";
import { RETREAT } from "common/navigator";

const Login: FC<{}> = ({ language }: any) => {
  const router = useRouter();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) router.push("/" + i18next.language + RETREAT);
  }, [router]);

  /* Render */
  return <LoginForm />;
};

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}

export default Login;
