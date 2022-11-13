// @ts-nocheck
import { GetServerSidePropsContext } from "next"
import { useDeviceSelectors } from "react-device-detect"
export default function withDetectDevice(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    const { locale, query } = context
    const [selectors, data] = useDeviceSelectors(
      context.req.headers["user-agent"] ?? ""
    )
    if (getServerSidePropsFunc) {
      return {
        props: {
          context: { query, locale },
          isMobile: selectors.isMobile,
          ...((await getServerSidePropsFunc(context)).props || {})
        }
      }
    }

    return {
      props: {
        context: { query, locale },
        isMobile: selectors.isMobile
      }
    }
  }
}
