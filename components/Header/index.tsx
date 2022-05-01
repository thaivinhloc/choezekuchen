import { Button, Typography } from "antd";
import React, { useEffect, useLayoutEffect, FC } from "react";
import ReactCountryFlag from "react-country-flag";
import { isDesktop } from "react-device-detect";
import { ROUTES } from "../../common/routes";
import { useAuth } from "../../context/auth/AuthContext";
import HeaderProfileDropdown from "./HeaderProfileDropdown";
import HeaderMobile from "./HeaderMobile";
import { DivHeaderWrapperV1 } from "./index.style";
import { useApp } from "../../context/app/AppContext";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
const Header: FC<{}> = (...props) => {
  const router = useRouter();
  const { onGetMe, user } = useAuth();
  const { title } = useApp();
  const { t } = useTranslation(["common", "login"]);
  const currentLocale = router.locale;

  useLayoutEffect(() => {
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
  }, [router.pathname, router]);

  const handleChangeLocale = (locale: string) => {
    router.push(router.route, router.asPath, { locale: locale });
  };

  /* Render */
  if (!isDesktop) return <HeaderMobile />;

  return (
    <DivHeaderWrapperV1>
      {/* Search Popup */}

      <header className="demo demo1 bg-primary">
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
            <img
              src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
              alt=""
            />
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
              <li className="nav-item" key={route.path}>
                <a href={route.path} className="nav-link">
                  {route.label}
                </a>
                {route.childrent.length > 0 && (
                  <ul className="dropdown">
                    {route.childrent.map((childrent) => (
                      <li className="dropdown-nav-item nav-item">
                        <div style={{ display: "flex" }}>
                          <a href={route.path} className="dropdown-nav-link">
                            {childrent.label}
                          </a>
                          {childrent.childrent.length > 0 && (
                            <RightOutlined className="arrow-right" />
                          )}
                        </div>
                        {childrent.childrent.length > 0 && (
                          <ul className="dropdown">
                            {childrent.childrent.map((route) => (
                              <li className="dropdown-nav-item nav-item">
                                <a
                                  href={route.path}
                                  className="dropdown-nav-link"
                                >
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
    </DivHeaderWrapperV1>
  );
};

export default Header;
