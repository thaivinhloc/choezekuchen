import SignUpForm from "components/Auth/SignUpForm";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SignUp: FC<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) router.push("/");
  }, [router]);

  /* Render */
  return <SignUpForm />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "login"])) },
});
export default SignUp;
