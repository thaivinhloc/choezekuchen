import Retreat from "components/Retreat";
import RetreatHistory from "components/RetreatHistory";
import React, { FC } from "react";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const RetreatHistoryPage: FC<{}> = () => {
  /* Render */
  return <RetreatHistory />;
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

export default RetreatHistoryPage;
