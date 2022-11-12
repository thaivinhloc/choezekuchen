import Footer from "components/Footer"
import Header from "components/Header"
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

    return (
      <PageWrapper>
        {props.navData && <Header data={props.navData} />}
        <RootPageComponent {...props} />
        {props.globalData && <Footer data={props.globalData} />}
      </PageWrapper>
    )
  }
}
