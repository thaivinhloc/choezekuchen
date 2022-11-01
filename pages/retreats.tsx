import Retreat from "components/Retreat"
import { DivRetreatWrapper } from "components/Retreat/index.style"
import ListLayout from "container/ListLayout"
import { useApp } from "context/app/AppContext"
import {
  EListType,
  TMedia,
  TPageConfigurationAttributes,
  TRetreat
} from "definition"
import { getRetreatPathFromSlug, transformRetreatToListItem } from "helper"
import { ELanguages } from "i18n/config"
import { getAllLanguageSlugs, getLanguage } from "lib/lang"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import React, { FC, useEffect } from "react"
import { Container } from "react-bootstrap"
import { getParentRetreats, getRetreatPage } from "services/retreat"

interface RetreatPageProps {
  retreats: TRetreat[]
}
const RetreatPage: FC<RetreatPageProps & TPageConfigurationAttributes> = ({
  retreats,
  title,
  banner,
  background,
  action_title
}) => {
  const { setTitleBanner, setBanner } = useApp()
  const router = useRouter()
  const dataList = (retreats ?? []).map((retreat) =>
    transformRetreatToListItem(retreat)
  )
  console.log({ banner })

  useEffect(() => {
    if (title) {
      setTitleBanner(title)
    }
    if (banner?.data) {
      setBanner(banner.data)
    }
  }, [title, banner])

  return (
    <DivRetreatWrapper style={{ background }}>
      <Container>
        <ListLayout
          action_title={action_title}
          listItemStyle={{
            background: "#fff",
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16
          }}
          listType={EListType.BLOG}
          dataList={dataList}
          onRowClick={({ id, slug }) =>
            router.push(getRetreatPathFromSlug(id, slug))
          }
          mediaProps={{
            width: 600,
            height: 400,
            ratio: "3/2"
          }}
        />
      </Container>
    </DivRetreatWrapper>
  )
}

export async function getStaticProps({ locale }: { locale: ELanguages }) {
  try {
    const retreats = await getParentRetreats({ locale })

    if (!retreats) {
      throw Error("Data Not Found")
    }

    const pageRes = await getRetreatPage({ locale })

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "footer",
          "header",
          "retreat"
        ])),
        retreats,
        ...(pageRes?.data?.attributes || {})
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "footer",
          "header",
          "retreat"
        ]))
      },
      revalidate: 10
    }
  }
}

export default RetreatPage
