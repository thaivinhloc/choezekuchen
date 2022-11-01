import Retreat from "components/Retreat"
import useRetreat from "components/Retreat/hooks/useRetreat"
import { useApp } from "context/app/AppContext"
import { TRetreat } from "definition"
import { ELanguages } from "i18n/config"
import { getAllLanguageSlugs, getLanguage } from "lib/lang"
import { GetStaticPathsContext, GetStaticPropsContext } from "next"
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

  return (
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
  )
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
        ...(await serverSideTranslations(locale ?? "en", [
          "common",
          "footer",
          "header",
          "retreat"
        ])),
        retreats,
        parent: parent ?? {}
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", [
          "common",
          "footer",
          "header",
          "retreat"
        ])),
        retreats: [],
        parent: {}
      },
      revalidate: 10
    }
  }
}

export default RetreatPage
