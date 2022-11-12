import Moti from "components/Motivation";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Motivation({ allLangsData }: any) {
  return <Moti />;
}
export async function getStaticProps({ locale }: { locale: ELanguages }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "login",
        "content",
        "phowa_practice",
      ])),
    },
  };
}
