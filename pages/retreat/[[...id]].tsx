import Retreat from "components/Retreat"
import useRetreat from "components/Retreat/hooks/useRetreat"
import { useApp } from "context/app/AppContext"
import { TRetreat } from "definition"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withRetreat from "hoc/withRetreat"
import withTrans from "hoc/withTrans"

import { useRouter } from "next/router"
import React, { FC, useEffect } from "react"

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

export const getServerSideProps = withGlobalData(withRetreat(withTrans))

export default withNavigator(RetreatPage)
