// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getChildRetreats } from "services/retreat"

export default function withRetreat(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { params, locale } = context
      const { id: parentId } = params || {}

      const result = await getChildRetreats({
        parentId: parseInt(`${parentId}`),
        locale: locale || "en"
      })

      if (!result) {
        throw Error("Data not found")
      }

      const { retreats, parent } = result

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            retreats,
            parent: parent ?? {},
            ...ownProps
          }
        }
      }

      return {
        props: {
          retreats,
          parent: parent ?? {}
        }
      }
    } catch (error) {
      return {
        props: {
          retreats: [],
          parent: {}
        }
      }
    }
  }
}
