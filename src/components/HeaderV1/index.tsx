import { Button, Typography } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/routes";
import { useAuth } from "../../context/AuthContext";
import HeaderProfileDropdown from "../Header/HeaderProfileDropdown";
import { DivHeaderWrapperV1 } from "./index.style";

const langs = [
  // {
  //   code: "GB",
  //   name: "English",
  // },
  {
    code: "VN",
    name: "",
  },
];
const HeaderV1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const token = localStorage.getItem("token");
  const { onGetMe, user } = useAuth();

  useLayoutEffect(() => {
    if (token && !user) {
      onGetMe();
    }
  }, []);

  useLayoutEffect(() => {
    const isPrivateRoute = ["/login", "signup"].includes(location.pathname);
    if (isPrivateRoute && token) {
      navigate("/");
    }
  }, [location.pathname, token, navigate]);

  useEffect(() => {
    let text = "";
    switch (location.pathname) {
      case "/login":
        text = "LOG IN";
        break;
      case "/signup":
        text = "SIGN UP";
        break;
      case "/retreat":
        text = "RETREAT";
        break;
      case "/retreat":
        text = "RETREAT";
        break;
      default:
        text = "CHOEZE KUCHEN";
        break;
    }
    setTitle(text);
  }, [location.pathname]);

  return (
    <DivHeaderWrapperV1>
      {/* Search Popup */}

      {/* Navigation menu (default bg-primary) */}
      <header className="demo demo1 bg-primary">
        <div
          style={{
            padding: "5px 45px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {langs.map((lang) => (
            <Button type="link">
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

          <HeaderProfileDropdown />
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
                            <div className="arrow-right" />
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
        <h1 className="navbar__title">{title}</h1>
      </header>
    </DivHeaderWrapperV1>
  );
};

export default HeaderV1;
