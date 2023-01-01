import Footer from "components/Footer"
import Header from "components/Header"
import { useApp } from "context/app/AppContext"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"

const PageWrapper = styled("main")`
  min-height: calc(100vh - 423px);
  @media (max-width: 991.98px) {
    min-height: calc(100vh - 223px);
  }
`

//@ts-ignore
export const withNavigator = (RootPageComponent: NextPage) => {
  return ({ ...props }) => {
    console.log("withNavigator", { props })
    const router = useRouter()
    const { setTitleBanner, setBanner } = useApp()
    const replaceTitle = (title: string) => {
      if (!title) return ""
      return title.replaceAll("-", " ")
    }
    useEffect(() => {
      if (props.data?.title) {
        setTitleBanner(router.pathname !== "/" ? props.data.title : "")
      } else {
        if (
          ![
            "/retreat/[[...id]]",
            "/retreat-history/[[...id]]",
            "/event/[eid]"
          ].includes(router.pathname)
        ) {
          setTitleBanner(replaceTitle(router.pathname.slice(1)))
        }
      }
      console.log("=======", props.data)

      if (props.data?.cover) {
        setBanner({
          id: 0,
          attributes: props.data.cover
        })
      } else {
        if (!["/event/[eid]"].includes(router.pathname)) {
          setBanner(undefined)
        }
      }
    }, [props.data])

    return (
      <PageWrapper>
        {props.navData && (
          <Header data={props.navData} retreats={props.retreats} isMobile={props.isMobile} isHeaderFullscreen={props.isHeaderFullscreen} />
        )}
        <RootPageComponent {...props} isMobile={props.isMobile} />
        {props.globalData && (
          <Footer data={props.globalData} isMobile={props.isMobile} />
        )}
      </PageWrapper>
    )
  }
}
