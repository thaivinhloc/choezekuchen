import "../styles/antd.less";
import { ThemeProvider } from "styled-components";
import { THEME } from "../common";
import { GlobalStyle } from "../styles/global.style";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"), { ssr: false });
// import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProvider } from "../context/app/AppProvider";
import { AuthProvider } from "../context/auth/AuthProvider";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={THEME}>
      <Head>
        <title>Choeze Kuchen | Life Long Tibetan Buddhism Practice</title>
      </Head>
      <GlobalStyle />
      <AppProvider>
        <AuthProvider>
          <Header />
          <div className="content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
