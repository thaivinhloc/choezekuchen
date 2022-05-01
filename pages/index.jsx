import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Button } from "antd";

export default function Home() {
  return <div />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login"])),
      // Will be passed to the page component as props
    },
  };
}
