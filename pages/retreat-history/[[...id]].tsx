import Retreat from "components/Retreat"
import RetreatHistory from "components/RetreatHistory"
import { ELanguages } from "i18n/config"
import { getAllLanguageSlugs, getLanguage } from "lib/lang"
import { GetStaticPathsContext, GetStaticPropsContext } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React, { FC } from "react"
import { getParentRetreats } from "services/retreat"

const RetreatHistoryPage: FC<{ retreatId: number }> = ({ retreatId }) => {
  /* Render */
  return <RetreatHistory retreatId={retreatId} />
}

export async function getStaticPaths({ defaultLocale }: GetStaticPathsContext) {
  try {
    const retreats = await getParentRetreats({ locale: defaultLocale || "en" })

    const paths = retreats.map(({ id }: { id: number }) => ({
      params: {
        id: [id.toString()]
      }
    }))
    paths.push({
      params: {
        id: []
      }
    })

    return {
      paths,
      fallback: false // can also be true or 'blocking'
    }
  } catch (error) {
    return {
      paths: [
        {
          params: {}
        }
      ],
      fallback: false // can also be true or 'blocking'
    }
  }
}
export async function getStaticProps({
  locale,
  params
}: GetStaticPropsContext) {
  const { id: retreatId } = params || {}
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "footer",
        "header",
        "login",
        "retreat"
      ])),
      retreatId
    }
  }
}

export default RetreatHistoryPage
