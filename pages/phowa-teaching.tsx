import PhowaPractice from "components/PhowaPractice";
import { ELanguages } from "i18n/config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PhowaPracticePage({ allLangsData }: any) {
  return <PhowaPractice />;
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
        "phowa_teaching",
      ])),
    },
  };
}
