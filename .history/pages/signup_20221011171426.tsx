import SignUpForm from "components/Auth/SignUpForm";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const SignUpPage: FC<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) router.push("/");
  }, [router]);

  /* Render */
  return <SignUpForm />;
};

export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login"
        "content",
      ])),
    },
  };
}

export default SignUpPage;
