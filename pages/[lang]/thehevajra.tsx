import React, { FC } from "react";
import Thehevajra from "components/Thehevajra";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const ThehevajraOfChoezenKuchen: FC<{}> = () => {
  return <Thehevajra />;
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
export default ThehevajraOfChoezenKuchen;
