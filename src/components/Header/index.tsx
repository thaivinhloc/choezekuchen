import React, { useEffect, useState } from "react";
import { DivHeaderWrapper } from "./index.style";
import { useLocation } from "react-router-dom";

const Header: React.FC<{}> = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    let text = "";
    switch (location.pathname) {
      case "/login":
        text = "";
        break;
      case "/signup":
        text = "";
        break;
      default:
        text = "";
        break;
    }
    setTitle(text);
  }, [location.pathname]);

  return (
    <DivHeaderWrapper>
      <header className="has_top scroll_header_top_area stick transparent scrolled_not_transparent page_header">
        <div className="header_inner clearfix">
          <div className="header_top_bottom_holder">
            <div
              className="header_bottom clearfix"
              style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            >
              <div className="header_inner_left">
                <div className="mobile_menu_button">
                  {" "}
                  <span>
                    {" "}
                    <span
                      aria-hidden="true"
                      className="qode_icon_font_elegant icon_menu "
                    />{" "}
                  </span>
                </div>
                <div className="logo_wrapper">
                  <div className="q_logo">
                    {" "}
                    <a
                      itemProp="url"
                      href="https://choezekuchen.com/"
                      style={{ height: 105, visibility: "visible" }}
                    >
                      {" "}
                      <img
                        itemProp="image"
                        className="normal"
                        src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                        alt="Logo"
                        style={{ height: "100%" }}
                      />{" "}
                      <img
                        itemProp="image"
                        className="light"
                        src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                        alt="Logo"
                        style={{ height: "100%" }}
                      />{" "}
                      <img
                        itemProp="image"
                        className="dark"
                        src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                        alt="Logo"
                        style={{ height: "100%" }}
                      />{" "}
                      <img
                        itemProp="image"
                        className="sticky"
                        src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                        alt="Logo"
                        style={{ height: "100%" }}
                      />{" "}
                      <img
                        itemProp="image"
                        className="mobile"
                        src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                        alt="Logo"
                        style={{ height: "100%" }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="header_inner_right">
                <div className="side_menu_button_wrapper right">
                  <div className="side_menu_button" />
                </div>
              </div>
              <nav className="main_menu drop_down right">
                <ul id="menu-main-menu">
                  <li
                    id="nav-menu-item-2119"
                    className="menu-item menu-item-type-post_type menu-item-object-page narrow active"
                  >
                    <a
                      href="https://choezekuchen.com/home/"
                      className="current"
                    >
                      <i className="menu_icon blank fa" />
                      <span>Home</span>
                      <span className="plus" />
                    </a>
                  </li>
                  <li
                    id="nav-menu-item-1052"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://choezekuchen.com/about-rinpoche/">
                      <i className="menu_icon blank fa" />
                      <span>ABOUT RINPOCHE</span>
                      <span className="plus" />
                    </a>
                    <div className="second" style={{ height: 0 }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-1062"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/gurus/">
                              <i className="menu_icon blank fa" />
                              <span>Gurus</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-1053"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/about-rinpoche/history-of-choeze-kuchen-rinpoche/">
                              <i className="menu_icon blank fa" />
                              <span>HISTORY OF CHOEZE KUCHEN RINPOCHE</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-1858"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/jigme-choewang-lodro-the-10th-reincarnation-of-choeze-kuchen-rinpoche/">
                              <i className="menu_icon blank fa" />
                              <span>
                                Jigme Choewang Lodro – The 10th reincarnation of
                                Choeze Kuchen Rinpoche
                              </span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-1054"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
                          >
                            <a href="https://choezekuchen.com/about-rinpoche/previous-reincarnation-the-10th-choeze-kuchen-rinpoche/">
                              <i className="menu_icon blank fa" />
                              <span>The 11th Choeze Kuchen Rinpoche</span>
                              <span className="plus" />
                              <i className="q_menu_arrow fa fa-angle-right" />
                            </a>
                            <ul>
                              <li
                                id="nav-menu-item-1349"
                                className="menu-item menu-item-type-post_type menu-item-object-page"
                              >
                                <a href="https://choezekuchen.com/about-rinpoche/tieu-su-duc-choeze-kuchen-rinpoche-doi-thu-11-2/the-11th-choeze-kuchen-rinpoche/young-choeze-kuchen-rinpoche-2-years-of-age/">
                                  <i className="menu_icon blank fa" />
                                  <span>
                                    Young Choeze Kuchen Rinpoche – 2 years of
                                    age
                                  </span>
                                  <span className="plus" />
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-1058"
                                className="menu-item menu-item-type-post_type menu-item-object-page"
                              >
                                <a href="https://choezekuchen.com/about-rinpoche/tieu-su-duc-choeze-kuchen-rinpoche-doi-thu-11-2/the-11th-choeze-kuchen-rinpoche/the-hevajra-retreat/">
                                  <i className="menu_icon blank fa" />
                                  <span>The Hevajra Retreat</span>
                                  <span className="plus" />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-1048"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://choezekuchen.com/teaching/">
                      <i className="menu_icon blank fa" />
                      <span>Teaching</span>
                      <span className="plus" />
                    </a>
                    <div className="second" style={{ height: 0 }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-2102"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
                          >
                            <a href="https://choezekuchen.com/dharma-teaching/">
                              <i className="menu_icon blank fa" />
                              <span>DHARMA TEACHING</span>
                              <span className="plus" />
                              <i className="q_menu_arrow fa fa-angle-right" />
                            </a>
                            <ul>
                              <li
                                id="nav-menu-item-1857"
                                className="menu-item menu-item-type-post_type menu-item-object-page"
                              >
                                <a href="https://choezekuchen.com/teaching/pure-motivation-and-great-conviction-2/">
                                  <i className="menu_icon blank fa" />
                                  <span>
                                    PURE MOTIVATION AND GREAT CONVICTION
                                  </span>
                                  <span className="plus" />
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-1050"
                                className="menu-item menu-item-type-post_type menu-item-object-page"
                              >
                                <a href="https://choezekuchen.com/teaching/the-perfect-dedication-2/">
                                  <i className="menu_icon blank fa" />
                                  <span>THE PERFECT DEDICATION</span>
                                  <span className="plus" />
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-1051"
                                className="menu-item menu-item-type-post_type menu-item-object-page"
                              >
                                <a href="https://choezekuchen.com/teaching/the-perfect-way-to-practice-2/">
                                  <i className="menu_icon blank fa" />
                                  <span>THE PERFECT WAY TO PRACTICE</span>
                                  <span className="plus" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-2095"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/ngondro/">
                              <i className="menu_icon blank fa" />
                              <span>NGONDRO</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-1851"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/teaching/phowa-practice/">
                              <i className="menu_icon blank fa" />
                              <span>PHOWA PRACTICE</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-2086"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/achi-chokyi-drolma/">
                              <i className="menu_icon blank fa" />
                              <span>ACHI CHOKYI DROLMA</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-2082"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/guru-rinpoche/">
                              <i className="menu_icon blank fa" />
                              <span>GURU RINPOCHE</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-2096"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/vajrasattva/">
                              <i className="menu_icon blank fa" />
                              <span>VAJRASATTVA</span>
                              <span className="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-1063"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://choezekuchen.com/monastery/">
                      <i className="menu_icon blank fa" />
                      <span>Monastery</span>
                      <span className="plus" />
                    </a>
                    <div className="second" style={{ height: 0 }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-2105"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/about-rinpoche/history-of-choeze-kuchen-rinpoche-2/">
                              <i className="menu_icon blank fa" />
                              <span>TIBET – CHOEZE MONASTARY</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-2076"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/monastery/tibetan-monastery/">
                              <i className="menu_icon blank fa" />
                              <span>BUTAN PROJECTS</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-2109"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/neban/">
                              <i className="menu_icon blank fa" />
                              <span>NEPAL – PHARBING CENTER</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-1982"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/singapore-center/">
                              <i className="menu_icon blank fa" />
                              <span>SINGAPORE CENTER</span>
                              <span className="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-2055"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://choezekuchen.com/prayers/">
                      <i className="menu_icon blank fa" />
                      <span>Prayers</span>
                      <span className="plus" />
                    </a>
                    <div className="second" style={{ height: 0 }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-2059"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/sadhanas/">
                              <i className="menu_icon blank fa" />
                              <span>Sadhanas</span>
                              <span className="plus" />
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-2063"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/choeze-kuchen-rinpoches-chanting-audio/">
                              <i className="menu_icon blank fa" />
                              <span>
                                Choeze Kuchen Rinpoche’s chanting Audio
                              </span>
                              <span className="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-1072"
                    className="menu-item menu-item-type-post_type_archive menu-item-object-ai1ec_event menu-item-has-children has_sub narrow"
                  >
                    <a href="https://choezekuchen.com/event/">
                      <i className="menu_icon blank fa" />
                      <span>Events</span>
                      <span className="plus" />
                    </a>
                    <div className="second" style={{ height: 0 }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-1336"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/information-registration/">
                              <i className="menu_icon blank fa" />
                              <span>Information Registration</span>
                              <span className="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-1064"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub narrow"
                  >
                    <a href="https://choezekuchen.com/offering/">
                      <i className="menu_icon blank fa" />
                      <span>Offering</span>
                      <span className="plus" />
                    </a>
                    <div className="second" style={{ height: 0 }}>
                      <div className="inner">
                        <ul>
                          <li
                            id="nav-menu-item-1334"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/thong-tin-dang-ky/">
                              <i className="menu_icon blank fa" />
                              <span>Thông Tin Đăng Ký</span>
                              <span className="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    id="nav-menu-item-1060"
                    className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent narrow"
                  >
                    <a href="https://choezekuchen.com/the-blog/">
                      <i className="menu_icon blank fa" />
                      <span>Blog</span>
                      <span className="plus" />
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="mobile_menu">
                <ul id="menu-main-menu-1">
                  <li
                    id="mobile-menu-item-2119"
                    className="menu-item menu-item-type-post_type menu-item-object-page active"
                  >
                    <a
                      href="https://choezekuchen.com/home/"
                      className="current"
                    >
                      <span>Home</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                  </li>
                  <li
                    id="mobile-menu-item-1052"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                  >
                    <a href="https://choezekuchen.com/about-rinpoche/">
                      <span>ABOUT RINPOCHE</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub_menu">
                      <li
                        id="mobile-menu-item-1062"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/gurus/">
                          <span>Gurus</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-1053"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/about-rinpoche/history-of-choeze-kuchen-rinpoche/">
                          <span>HISTORY OF CHOEZE KUCHEN RINPOCHE</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-1858"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/jigme-choewang-lodro-the-10th-reincarnation-of-choeze-kuchen-rinpoche/">
                          <span>
                            Jigme Choewang Lodro – The 10th reincarnation of
                            Choeze Kuchen Rinpoche
                          </span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-1054"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                      >
                        <a href="https://choezekuchen.com/about-rinpoche/previous-reincarnation-the-10th-choeze-kuchen-rinpoche/">
                          <span>The 11th Choeze Kuchen Rinpoche</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub_menu">
                          <li
                            id="mobile-menu-item-1349"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/about-rinpoche/tieu-su-duc-choeze-kuchen-rinpoche-doi-thu-11-2/the-11th-choeze-kuchen-rinpoche/young-choeze-kuchen-rinpoche-2-years-of-age/">
                              <span>
                                Young Choeze Kuchen Rinpoche – 2 years of age
                              </span>
                            </a>
                            <span className="mobile_arrow">
                              <i className="fa fa-angle-right" />
                              <i className="fa fa-angle-down" />
                            </span>
                          </li>
                          <li
                            id="mobile-menu-item-1058"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/about-rinpoche/tieu-su-duc-choeze-kuchen-rinpoche-doi-thu-11-2/the-11th-choeze-kuchen-rinpoche/the-hevajra-retreat/">
                              <span>The Hevajra Retreat</span>
                            </a>
                            <span className="mobile_arrow">
                              <i className="fa fa-angle-right" />
                              <i className="fa fa-angle-down" />
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="mobile-menu-item-1048"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                  >
                    <a href="https://choezekuchen.com/teaching/">
                      <span>Teaching</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub_menu">
                      <li
                        id="mobile-menu-item-2102"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                      >
                        <a href="https://choezekuchen.com/dharma-teaching/">
                          <span>DHARMA TEACHING</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub_menu">
                          <li
                            id="mobile-menu-item-1857"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/teaching/pure-motivation-and-great-conviction-2/">
                              <span>PURE MOTIVATION AND GREAT CONVICTION</span>
                            </a>
                            <span className="mobile_arrow">
                              <i className="fa fa-angle-right" />
                              <i className="fa fa-angle-down" />
                            </span>
                          </li>
                          <li
                            id="mobile-menu-item-1050"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/teaching/the-perfect-dedication-2/">
                              <span>THE PERFECT DEDICATION</span>
                            </a>
                            <span className="mobile_arrow">
                              <i className="fa fa-angle-right" />
                              <i className="fa fa-angle-down" />
                            </span>
                          </li>
                          <li
                            id="mobile-menu-item-1051"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href="https://choezekuchen.com/teaching/the-perfect-way-to-practice-2/">
                              <span>THE PERFECT WAY TO PRACTICE</span>
                            </a>
                            <span className="mobile_arrow">
                              <i className="fa fa-angle-right" />
                              <i className="fa fa-angle-down" />
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="mobile-menu-item-2095"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/ngondro/">
                          <span>NGONDRO</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-1851"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/teaching/phowa-practice/">
                          <span>PHOWA PRACTICE</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-2086"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/achi-chokyi-drolma/">
                          <span>ACHI CHOKYI DROLMA</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-2082"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/guru-rinpoche/">
                          <span>GURU RINPOCHE</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-2096"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/vajrasattva/">
                          <span>VAJRASATTVA</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="mobile-menu-item-1063"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                  >
                    <a href="https://choezekuchen.com/monastery/">
                      <span>Monastery</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub_menu">
                      <li
                        id="mobile-menu-item-2105"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/about-rinpoche/history-of-choeze-kuchen-rinpoche-2/">
                          <span>TIBET – CHOEZE MONASTARY</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-2076"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/monastery/tibetan-monastery/">
                          <span>BUTAN PROJECTS</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-2109"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/neban/">
                          <span>NEPAL – PHARBING CENTER</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-1982"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/singapore-center/">
                          <span>SINGAPORE CENTER</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="mobile-menu-item-2055"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                  >
                    <a href="https://choezekuchen.com/prayers/">
                      <span>Prayers</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub_menu">
                      <li
                        id="mobile-menu-item-2059"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/sadhanas/">
                          <span>Sadhanas</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                      <li
                        id="mobile-menu-item-2063"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/choeze-kuchen-rinpoches-chanting-audio/">
                          <span>Choeze Kuchen Rinpoche’s chanting Audio</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="mobile-menu-item-1072"
                    className="menu-item menu-item-type-post_type_archive menu-item-object-ai1ec_event menu-item-has-children has_sub"
                  >
                    <a href="https://choezekuchen.com/event/">
                      <span>Events</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub_menu">
                      <li
                        id="mobile-menu-item-1336"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/information-registration/">
                          <span>Information Registration</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="mobile-menu-item-1064"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has_sub"
                  >
                    <a href="https://choezekuchen.com/offering/">
                      <span>Offering</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub_menu">
                      <li
                        id="mobile-menu-item-1334"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <a href="https://choezekuchen.com/thong-tin-dang-ky/">
                          <span>Thông Tin Đăng Ký</span>
                        </a>
                        <span className="mobile_arrow">
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-down" />
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="mobile-menu-item-1060"
                    className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent"
                  >
                    <a href="https://choezekuchen.com/the-blog/">
                      <span>Blog</span>
                    </a>
                    <span className="mobile_arrow">
                      <i className="fa fa-angle-right" />
                      <i className="fa fa-angle-down" />
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </DivHeaderWrapper>
  );
};

export default Header;
