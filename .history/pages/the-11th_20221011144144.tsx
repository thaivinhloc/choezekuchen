import The from "components/The11th";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function The11th({ allLangsData }: any) {
  return <The />;
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
      ])),
    },
  };
}
