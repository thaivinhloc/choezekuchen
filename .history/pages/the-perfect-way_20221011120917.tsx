import Theperfectway from "components/Theperfectway";

export default function TheperfectwayPage({ allLangsData }: any) {
  return <Theperfectway />;
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
