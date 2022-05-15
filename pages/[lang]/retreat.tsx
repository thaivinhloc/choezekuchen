import Retreat from "components/Retreat";
import React, { FC } from "react";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const RetreatPage: FC<{}> = () => {
  /* Render */
  return <Retreat />;
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

export default RetreatPage;
