import React, { FC } from "react";
import Achi from "components/Achi";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const AchiOfChoezenKuchen: FC<{}> = () => {
  return <Achi />;
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
export default AchiOfChoezenKuchen;
