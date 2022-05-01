import { appWithTranslation } from "next-i18next";
import "../styles/antd.less";
import { ThemeProvider } from "styled-components";
import { THEME } from "../common";
import { GlobalStyle } from "../styles/global.style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProvider } from "../context/app/AppProvider";
import { AuthProvider } from "../context/auth/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <AppProvider>
        <AuthProvider>
          <Header />
          <div className="container ">
            <div className="content">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
