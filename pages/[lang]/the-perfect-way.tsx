import React, { FC } from "react";
import Theperfectway from "components/Theperfectway";
import { getAllLanguageSlugs, getLanguage } from "../../lib/lang";

const TheperfectwayOfChoezenKuchen: FC<{}> = () => {
  return <Theperfectway />;
};
export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}
// localhost:300/theperfectway
export async function getStaticProps({ params }: any) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}
export default TheperfectwayOfChoezenKuchen;
