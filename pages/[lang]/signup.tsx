import SignUpForm from "components/Auth/SignUpForm";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const SignUp: FC<{}> = () => {
  const router = useRouter();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) router.push("/");
  }, [router]);

  /* Render */
  return <SignUpForm />;
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

export default SignUp;
