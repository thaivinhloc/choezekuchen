import React, { FC } from "react";
import Home from "components/Home";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const HomePage: FC<{}> = () => {
  /* Render */
  return <Home />;
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

export default HomePage;
