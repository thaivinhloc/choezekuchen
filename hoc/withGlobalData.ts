// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { globalDataReq } from "services/global"
import { navigationReq } from "services/global/navigator"

export default function withGlobalData(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { locale } = context
      const globalData = await globalDataReq()
      const navData = await navigationReq({ locale })

      console.log({ globalData, navData })

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
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
          navData
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
