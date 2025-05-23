// @ts-nocheck
import dynamic from "next/dynamic"
const Retreat = dynamic(() => import("components/Retreat"), { ssr: false })
import useRetreat from "components/Retreat/hooks/useRetreat"
import { useApp } from "context/app/AppContext"
import { TRetreat } from "definition"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withRetreat from "hoc/withRetreat"
import withTrans from "hoc/withTrans"

import { useRouter } from "next/router"
import React, { FC, useEffect } from "react"

const RetreatPage: FC<{ retreats: TRetreat[]; parent: TRetreat }> = ({
  retreats,
  parent,
  isMobile
}) => {
  const { setTitleBanner, setBanner } = useApp()
  const router = useRouter()
  const { getActiveRetreats } = useRetreat(router.locale || "en")
  console.log({ parent, retreats })

  useEffect(() => {
    if (parent?.name) {
      setTitleBanner(parent.name)
    }
    if (parent?.cover) {
      setBanner({ id: parent.cover.id, attributes: parent.cover })
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
      isMobile={isMobile}
    />
  ) : (
    <div />
  )
}

export const getServerSideProps = withDetectDevice(
  withGlobalData(withRetreat(withTrans))
)

export default withNavigator(RetreatPage)
