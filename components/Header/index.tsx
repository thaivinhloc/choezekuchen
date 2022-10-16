/* eslint-disable @next/next/no-img-element */
import { RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import LinkComponent from "components/Link";
import i18next from "i18next";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState, useMemo } from "react";
import ReactCountryFlag from "react-country-flag";
import { isDesktop } from "react-device-detect";
// import Logo from "./logo.png";
import { ROUTES } from "../../common/routes";
import { useApp } from "../../context/app/AppContext";
import { useAuth } from "../../context/auth/AuthContext";
import HeaderMobile from "./HeaderMobile";
import HeaderProfileDropdown from "./HeaderProfileDropdown";
import { DivHeaderWrapperV1 } from "./index.style";

export const LANGS = [
  {
    code: "GB",
    name: "English",
    locale: "en",
  },
  {
    code: "VN",
    name: "Việt Nam",
    locale: "vi",
  },
];
const Header = ({ ...props }) => {
  const router = useRouter();
  const { onGetMe, user } = useAuth();
  const { title } = useApp();
  const { t } = useTranslation(["common", "header", "login"]);
  const [classHead, setClassHead] = useState("");
  const currentLocale = router.locale;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      onGetMe();
    }
  }, [onGetMe, user]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const isPrivateRoute = ["/login", "signup"].includes(router.pathname);
    if (isPrivateRoute && token) {
      router.push("/");
    }

    if (router.pathname == "/") {
      console.log("home page");
      setClassHead("header-desktop homepage");
    } else {
      setClassHead("header-desktop");
    }
  }, [router.pathname, router]);

  const handleChangeLocale = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const isActive = useMemo(() => {
    if (router.asPath.split("/").length < 3) {
      return ["/"];
    }
    const paths = router.asPath.split("/");
    const pathName = paths[paths.length - 1];
    console.log("----", { paths, pathName });

    return router.asPath;
  }, [router.asPath]);

  /* Render */
  if (!isDesktop) return <HeaderMobile t={t} />;

  const redirectToOtherPage = (path: string) => {
    router.replace(`/${currentLocale}${path}`);
  };

  return (
    <DivHeaderWrapperV1>
      <div className={classHead}>
        <header className="site-header">
          <div
            style={{
              padding: "5px 45px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {LANGS.filter((lang) => lang.locale !== currentLocale).map(
              (lang) => (
                <Button
                  type="link"
                  onClick={() => handleChangeLocale(lang.locale)}
                  key={lang.code}
                >
                  <Typography.Paragraph style={{ color: "#fff" }}>
                    <ReactCountryFlag
                      style={{
                        fontSize: "2em",
                        lineHeight: "2em",
                        marginRight: 8,
                      }}
                      title={lang.name}
                      countryCode={lang.code}
                      svg
                    />
                    {lang.name}
                  </Typography.Paragraph>
                </Button>
              )
            )}

            <HeaderProfileDropdown t={t} />
          </div>
          <nav className="navbar ">
            <div className="navbar-logo">
              <i
                style={{ fontSize: 28, color: "$dark" }}
                className="fa fa-whatsapp"
              />
              <img src={"/logo.png"} width={105} height={105} alt="Logo" />
            </div>
            <button className="navbar-toggler">
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <ul className="navbar-nav flex-row">
              <li className="nav-close">
                <button className="btn-nav-close">
                  <span className="close-btn">+</span>
                </button>
              </li>
              {ROUTES.map((route) => (
                <li className="nav-item" key={route.path}>
                  <span
                    className="nav-link"
                    onClick={() => redirectToOtherPage(route.path)}
                  >
                    {t(route.label, { ns: "header" })}
                  </span>
                  {route.childrent.length > 0 && (
                    <ul className="dropdown">
                      {route.childrent.map((childrent) => (
                        <li
                          className="dropdown-nav-item nav-item"
                          key={childrent.path}
                        >
                          <div
                            style={{ display: "flex" }}
                            onClick={() => redirectToOtherPage(childrent.path)}
                          >
                            <span className="dropdown-nav-link">
                              {childrent.label}
                            </span>
                            {childrent.childrent.length > 0 && (
                              <RightOutlined className="arrow-right" />
                            )}
                          </div>
                          {childrent.childrent.length > 0 && (
                            <ul className="dropdown">
                              {childrent.childrent.map((route) => (
                                <li
                                  className="dropdown-nav-item nav-item"
                                  key={route.path}
                                  onClick={() =>
                                    redirectToOtherPage(route.path)
                                  }
                                >
                                  <div style={{ display: "flex" }}>
                                    <span className="dropdown-nav-link">
                                      {route.label}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <h1 className="navbar__title">
            {t(title, { ns: ["header", "login"] }).toUpperCase()}
          </h1>
        </header>
      </div>
    </DivHeaderWrapperV1>
  );
};

export default Header;
