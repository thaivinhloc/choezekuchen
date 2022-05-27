import { RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import LinkComponent from "components/Link";
import i18next from "i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { isDesktop } from "react-device-detect";
// import Logo from "./logo.png";
import { ROUTES } from "../../common/routes";
import { useApp } from "../../context/app/AppContext";
import { useAuth } from "../../context/auth/AuthContext";
import HeaderMobile from "./HeaderMobile";
import HeaderProfileDropdown from "./HeaderProfileDropdown";
import { DivHeaderWrapperV1 } from "./index.style";

const langs = [
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
  const { t } = i18next;
  const [classHead, setClassHead] = useState("");
  const currentLocale = i18next.language;

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

    if (router.pathname == "/[lang]") {
      console.log("home page");
      setClassHead("header-desktop homepage");
    } else {
      setClassHead("header-desktop");
    }
  }, [router.pathname, router]);

  const handleChangeLocale = (locale: string) => {
    const href = router.pathname.replace("[lang]", locale);
    router.push(href);
  };

  /* Render */
  if (!isDesktop) return <HeaderMobile />;

  const redirectToOtherPage = (path: string) => {
    console.log("path", path);

    router.replace(`/${currentLocale}${path}`);
  };

  return (
    <DivHeaderWrapperV1>
      <div className={classHead}>
        <header className=" bg-primary">
          <div
            style={{
              padding: "5px 45px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {langs
              .filter((lang) => lang.locale !== currentLocale)
              .map((lang) => (
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
              ))}

            <HeaderProfileDropdown t={t} />
          </div>
          <nav className="navbar ">
            <div className="navbar-logo">
              <i
                style={{ fontSize: 28, color: "$dark" }}
                className="fa fa-whatsapp"
              />
              <Image src={"/logo.png"} width={105} height={105} alt="Logo" />
            </div>
            <button className="navbar-toggler">
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <ul className="navbar-nav">
              <li className="nav-close">
                <button className="btn-nav-close">
                  <span className="close-btn">+</span>
                </button>
              </li>
              {ROUTES.map((route) => (
                <li
                  className="nav-item"
                  key={route.path}
                  onClick={() => redirectToOtherPage(route.path)}
                >
                  <a className="nav-link">{route.label}</a>
                  {route.childrent.length > 0 && (
                    <ul className="dropdown">
                      {route.childrent.map((childrent) => (
                        <li
                          className="dropdown-nav-item nav-item"
                          key={childrent.path}
                          onClick={() => redirectToOtherPage(childrent.path)}
                        >
                          <div style={{ display: "flex" }}>
                            <a className="dropdown-nav-link">
                              {childrent.label}
                            </a>

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
                                  <a className="dropdown-nav-link">
                                    {route.label}
                                  </a>
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
          <h1 className="navbar__title">{t(title)}</h1>
        </header>
      </div>
    </DivHeaderWrapperV1>
  );
};

export default Header;
