import Retreat from "components/Retreat";
import RetreatHistory from "components/RetreatHistory";
import { ELanguages } from "i18n/config";
import { getAllLanguageSlugs, getLanguage } from "lib/lang";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { FC } from "react";

const RetreatHistoryPage: FC<{}> = () => {
  /* Render */
  return <RetreatHistory />;
};
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "retreat",
      ])),
    },
  };
}

export default RetreatHistoryPage;
