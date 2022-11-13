// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getEventDetails } from "services/event"

export default function withEvent(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { params, locale } = context
      const { eid } = params || {}
      const eventDetails = await getEventDetails({
        eid,
        locale: locale ?? "en"
      })
      if (!eventDetails) {
        throw Error("Data not found")
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            eventDetails,
            ...ownProps
          }
        }
      }

      return {
        props: {
          eventDetails
        }
      }
    } catch (error) {
      return {
        props: {
          eventDetails: {}
        }
      }
    }
  }
}
