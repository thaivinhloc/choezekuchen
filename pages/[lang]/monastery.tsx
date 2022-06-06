import React, { FC } from "react";
import Monastery from "components/Monastery";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const HistoryOfChoezenKuchen: FC<{}> = () => {
  return <Monastery />;
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
export default HistoryOfChoezenKuchen;
