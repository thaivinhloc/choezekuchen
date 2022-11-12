// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getPrayerPage } from "services/prayers"

export default function withLibrary(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { locale } = context
      const prayerPage = await getPrayerPage({ locale: locale || "en" })
      if (!prayerPage?.data) {
        throw Error("Data Not Found")
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            ...prayerPage.data,
            ...ownProps
          }
        }
      }

      return {
        props: {
          ...prayerPage.data
        }
      }
    } catch (error) {
      return {
        props: {}
      }
    }
  }
}
