import Retreat from "components/Retreat";
import React, { FC } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const RetreatPage: FC<{}> = () => {
  /* Render */
  return <Retreat />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: { ...(await serverSideTranslations(locale, ["common", "login"])) },
});
export default RetreatPage;
