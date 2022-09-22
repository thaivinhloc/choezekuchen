import React, { FC } from "react";
import Achi from "components/Achi";
import { getAllLanguageSlugs, getLanguage } from "lib/lang";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AchiOfChoezenKuchen: FC<{}> = () => {
  return <Achi />;
};
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    },
  };
}
export default AchiOfChoezenKuchen;
