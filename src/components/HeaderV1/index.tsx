import React from "react";
import { DivHeaderWrapperV1 } from "./index.style";
const index = () => {
  return (
    <DivHeaderWrapperV1>
      {/* Search Popup */}

      {/* Navigation menu (default bg-primary) */}
      <header className="demo demo1">
        <nav className="navbar bg-primary">
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
            <li className="nav-item">
              <a href="#" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                ABOUT RINPOCHE
              </a>
              <ul className="dropdown">
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    GURUS
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    HISTORY OF CHOEZE KUCHEN RINPOCHE
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    JIGME CHOEWANG LODRO - THE 10TH REINCARNATION OF CHOEZE
                    KUCHEN RIPOCHE
                  </a>
                </li>

                <li className="dropdown-nav-item nav-item">
                  <div style={{ display: "flex" }}>
                    <a href="#" className="dropdown-nav-link ">
                      THE 11TH CHOEZE KUCHEN RIPOCHE
                    </a>
                    <div className="arrow-right"></div>
                  </div>

                  <ul className="dropdown">
                    <li className="dropdown-nav-item nav-item">
                      <a href="#" className="dropdown-nav-link ">
                        YOUNG CHOEZE KUCHEN RIPOCHE - 2 YEARS OF AGE
                      </a>
                    </li>
                    <li className="dropdown-nav-item nav-item">
                      <a href="#" className="dropdown-nav-link">
                        THE HEVAJRA RETREAT
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                TEACHING
              </a>
              <ul className="dropdown">
                <li className="dropdown-nav-item nav-item">
                  <div style={{ display: "flex" }}>
                    <a href="#" className="dropdown-nav-link">
                      DRAMA TECHING
                    </a>
                    <div className="arrow-right"></div>
                  </div>
                  <ul className="dropdown">
                    <li className="dropdown-nav-item nav-item">
                      <a href="#" className="dropdown-nav-link ">
                        PURE MOTIVATION AND GREAT CONVICTION
                      </a>
                    </li>
                    <li className="dropdown-nav-item nav-item">
                      <a href="#" className="dropdown-nav-link">
                        THE PERFECT DEDICATION
                      </a>
                    </li>
                    <li className="dropdown-nav-item nav-item">
                      <a href="#" className="dropdown-nav-link ">
                        THE PERFECT WAY TO PRACTICE
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    NGONDRO
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    PHOWA PRACTICE
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    ACHI CHOKYI DROLMA
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    GURU RINPOCHE
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    VAJRASATTVA
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                MONASTERY
              </a>
              <ul className="dropdown">
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    TIBET – CHOEZE MONASTARY
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    BUTAN PROJECTS
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    NEPAL – PHARBING CENTER
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    SINGAPORE CENTER
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                PRAYERS
              </a>
              <ul className="dropdown">
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    SADHANAS
                  </a>
                </li>
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link ">
                    CHOEZE KUCHEN RINPOCHE'S CHANTING AUTIO
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                EVENTS
              </a>
              <ul className="dropdown">
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    INFORMATION REGISTRATION
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                OFFERING
              </a>
              <ul className="dropdown">
                <li className="dropdown-nav-item nav-item">
                  <a href="#" className="dropdown-nav-link">
                    THÔNG TIN ĐĂNG KÝ
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                BLOG
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </DivHeaderWrapperV1>
  );
};

export default index;
