// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getMonasteries, getMonasteryDetails } from "services/monastery"

export default function withMonastery(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { params, locale } = context
      const { mid } = params || {}
      const monastery = await getMonasteryDetails({
        id: mid,
        locale: locale ?? "en"
      })
      const otherMonasteries = await getMonasteries({
        locale: locale ?? "en",
        filter: {
          "filters[id][$ne]": mid
        }
      })

      if (!monastery) {
        throw Error("Data not found")
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            monastery,
            otherMonasteries,
            ...ownProps
          }
        }
      }

      return {
        props: {
          monastery,
          otherMonasteries
        }
      }
    } catch (error) {
      return {
        props: {
          monastery: {},
          otherMonasteries: {}
        }
      }
    }
  }
}
