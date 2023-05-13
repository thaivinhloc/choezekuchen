import "../styles/antd.less"
import "swiper/css"
import "swiper/css/navigation"
import { ThemeProvider } from "styled-components"
import { THEME } from "../common"
import { GlobalStyle } from "../styles/global.style"
import { AppProvider } from "../context/app/AppProvider"
import { AuthProvider } from "../context/auth/AuthProvider"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Head>
        <title>Choeze Kuchen | Life Long Tibetan Buddhism Practice</title>
      </Head>
      <GlobalStyle />
      <AppProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
