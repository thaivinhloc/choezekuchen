import History from "components/History";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

const HistoryOfChoezenKuchen: FC<{}> = () => {
  return <History />;
};

export default HistoryOfChoezenKuchen;
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "content",
      ])),
    },
  };
}
