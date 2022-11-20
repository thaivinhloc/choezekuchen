// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getParentRetreats, getRetreatPage } from "services/retreat"

export default function withRetreats(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { locale } = context
      const retreats = await getParentRetreats({ locale: locale || "en" })

      if (!retreats) {
        throw Error("Data Not Found")
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            retreats,
            ...ownProps
          }
        }
      }

      return {
        props: {
          retreats
        }
      }
    } catch (error) {
      return {
        props: {}
      }
    }
  }
}
