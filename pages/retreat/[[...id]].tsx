import Retreat from "components/Retreat"
import useRetreat from "components/Retreat/hooks/useRetreat"
import { useApp } from "context/app/AppContext"
import { TRetreat } from "definition"
import { getAllLanguageSlugs, getLanguage } from "lib/lang"
import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext
} from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import React, { FC, useEffect } from "react"
import { getChildRetreats, getParentRetreats } from "services/retreat"

const RetreatPage: FC<{ retreats: TRetreat[]; parent: TRetreat }> = ({
  retreats,
  parent
}) => {
  const { setTitleBanner, setBanner } = useApp()
  const router = useRouter()
  const { getActiveRetreats } = useRetreat(router.locale || "en")
  console.log({ parent, retreats })

  useEffect(() => {
    if (parent?.name) {
      setTitleBanner(parent.name)
    }
    if (parent?.banner) {
      setBanner({ id: parent.banner.id, attributes: parent.banner })
    }
  }, [parent])

  return retreats && parent ? (
    <Retreat
      retreats={retreats}
      parent={parent}
      onGetRetreats={() =>
        getActiveRetreats({
          parentId: parent?.id,
          locale: router.locale || "en"
        })
      }
    />
  ) : (
    <div />
  )
}

export async function getServerSideProps({
  locale,
  params
}: GetServerSidePropsContext) {
  try {
    const { id: parentId } = params || {}

    const result = await getChildRetreats({
      parentId: parseInt(`${parentId}`),
      locale: locale || "en"
    })

    if (!result) {
      throw Error("Data not found")
    }

    const { retreats, parent } = result
    return {
      props: {
        ...(await serverSideTranslations(locale || "en", [
          "common",
          "footer",
          "header",
          "retreat"
        ])),
        retreats,
        parent: parent ?? {}
      }
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale || "en", [
          "common",
          "footer",
          "header",
          "retreat"
        ])),
        retreats: [],
        parent: {}
      }
    }
  }
}

export default RetreatPage
