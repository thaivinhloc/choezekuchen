// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { getPageBySlug } from "services/page"

export default function withPage(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { params, locale } = context
      const { slug } = params || {}
      const result = await getPageBySlug({
        slug: !slug.startsWith("/") ? "/" + slug : slug,
        locale: locale || "en"
      })
      console.log("===========", { result })
      if (!result) {
        throw Error("Data not found")
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {}
        console.log({ ownProps })
        return {
          props: {
            data: result,
            ...ownProps
          }
        }
      }

      return {
        props: {
          data: result
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
