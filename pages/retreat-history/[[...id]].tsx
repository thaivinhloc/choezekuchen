import RetreatHistory from "components/RetreatHistory"
import withDetectDevice from "hoc/withDetectDevice"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withRetreatHistory from "hoc/withRetreatHistory"
import withTrans from "hoc/withTrans"
import React, { FC } from "react"

const RetreatHistoryPage: FC<{ retreatId: number }> = ({ retreatId }) => {
  /* Render */
  return <RetreatHistory retreatId={retreatId} />
}

export const getServerSideProps = withDetectDevice(withGlobalData(withRetreatHistory(withTrans)))

export default withNavigator(RetreatHistoryPage)
