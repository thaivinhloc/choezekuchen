import "../styles/antd.less";
import { ThemeProvider } from "styled-components";
import { THEME } from "../common";
import { GlobalStyle } from "../styles/global.style";
import { AppProvider } from "../context/app/AppProvider";
import { AuthProvider } from "../context/auth/AuthProvider";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>{`We'll be back`}</h1>
      <p style={{ fontSize: 20 }}>
        {`Our website is under Maintenance. We'll be here soon with our new
        awesome site.`}
      </p>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  const { MAINTENANCE_MODE } = process.env
  return (
    <ThemeProvider theme={THEME}>
      <Head>
        <title>Choeze Kuchen | Life Long Tibetan Buddhism Practice</title>
      </Head>
      <GlobalStyle />
      <AppProvider>
        <AuthProvider>
          {MAINTENANCE_MODE == "true" ? (
            <MaintenancePage />
          ) : (
            <Component {...pageProps} />
          )}
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp);
