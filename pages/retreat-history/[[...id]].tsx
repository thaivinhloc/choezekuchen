import Retreat from "components/Retreat"
import RetreatHistory from "components/RetreatHistory"
import { getAllLanguageSlugs, getLanguage } from "lib/lang"
import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext
} from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React, { FC } from "react"
import { getParentRetreats } from "services/retreat"

const RetreatHistoryPage: FC<{ retreatId: number }> = ({ retreatId }) => {
  /* Render */
  return <RetreatHistory retreatId={retreatId} />
}

export async function getServerSideProps({
  locale,
  params
}: GetServerSidePropsContext) {
  const { id: retreatId } = params || {}
  console.log("--------- getServerSideProps", { retreatId, locale })

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "common",
        "footer",
        "header",
        "retreat"
      ])),
      retreatId: Number(retreatId)
    }
  }
}

export default RetreatHistoryPage
