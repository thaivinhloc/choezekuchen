// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getPageBySlug } from "services/page"
import { getHomePage } from "services/page/home"

export default function withHome(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { locale } = context

      const result = await getPageBySlug({
        slug: "/",
        locale: locale || "en"
      })
      console.log("------", { result })

      const content = await getHomePage({ locale: locale || "en" })
      console.log("------", { content: JSON.stringify(content) })
      if (!result) {
        throw Error("Data not found")
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            isHeaderFullscreen: true,
            data: result,
            content: content?.data ?? {},
            ...ownProps
          }
        }
      }

      return {
        props: {
          isHeaderFullscreen: true,
          data: result,
          content: content?.data ?? {}
        }
      }
    } catch (error) {
      return {
        props: {
          data: {}
        }
      }
    }
  }
}
