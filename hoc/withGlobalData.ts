// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { globalDataReq } from "services/global"
import { navigationReq } from "services/global/navigator"
import { getParentRetreats } from "services/retreat"

export default function withGlobalData(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { locale } = context
      const globalData = await globalDataReq()
      const navData = await navigationReq({ locale })

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        return {
          props: {
            globalData: globalData?.data
              ? {
                  ...globalData.data
                }
              : {},
            navData,
            ...ownProps
          }
        }
      }

      return {
        props: {
          globalData: globalData?.data
            ? {
                ...globalData.data
              }
            : {},
          navData,
        }
      }
    } catch (e) {
      console.log(e)
      return {
        props: {}
      }
    }
  }
}
