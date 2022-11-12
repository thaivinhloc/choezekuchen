// @ts-nocheck
import { GetServerSidePropsContext } from "next"

export default function withRetreatHistory(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { params } = context
      const { id: retreatId } = params || {}

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            retreatId: Number(retreatId),
            ...ownProps
          }
        }
      }

      return {
        props: {
          retreatId: Number(retreatId)
        }
      }
    } catch (error) {
      return {
        props: {}
      }
    }
  }
}
