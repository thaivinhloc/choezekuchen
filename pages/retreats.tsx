import Retreat from "components/Retreat"
import { DivRetreatWrapper } from "components/Retreat/index.style"
import ListLayout from "container/ListLayout"
import { useApp } from "context/app/AppContext"
import { EListType, TRetreat } from "definition"
import { getRetreatPathFromSlug, transformRetreatToListItem } from "helper"
import { ELanguages } from "i18n/config"
import { getAllLanguageSlugs, getLanguage } from "lib/lang"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import React, { FC, useEffect } from "react"
import { Container } from "react-bootstrap"
import { getParentRetreats } from "services/retreat"

interface RetreatPageProps {
  retreats: TRetreat[]
}
const RetreatPage: FC<RetreatPageProps> = ({ retreats }) => {
  const { setTitleBanner } = useApp()
  const router = useRouter()
  const dataList = (retreats ?? []).map((retreat) =>
    transformRetreatToListItem(retreat)
  )
  console.log({ dataList })

  useEffect(() => {
    setTitleBanner("RETREAT")
  }, [])

  return (
    <DivRetreatWrapper>
      <Container>
        <ListLayout
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

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "footer",
          "header",
          "retreat"
        ])),
        retreats
      }
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
      }
    }
  }
}

export default RetreatPage
