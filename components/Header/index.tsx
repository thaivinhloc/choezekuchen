/* eslint-disable @next/next/no-img-element */
import { RightOutlined } from "@ant-design/icons"
import { Button, Space, Typography } from "antd"
import { TNavigatorItem } from "definition"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState, useMemo } from "react"
import ReactCountryFlag from "react-country-flag"
import { useApp } from "../../context/app/AppContext"
import { useAuth } from "../../context/auth/AuthContext"
import HeaderMobile from "./HeaderMobile"
import HeaderProfileDropdown from "./HeaderProfileDropdown"
import {
  DivHeaderWrapperV1,
  NavbarNavStyled,
  NavListStyled,
  TopActionStyled
} from "./index.style"
import { ChevronDown } from "@styled-icons/fa-solid"

export const LANGS = [
  {
    code: "GB",
    name: "English",
    locale: "en"
  },
  {
    code: "VN",
    name: "Việt Nam",
    locale: "vi"
  }
]
const Header = ({
  data,
  isMobile,
  isHeaderFullscreen = false
}: {
  data: TNavigatorItem[]
  isHeaderFullscreen?: boolean
  isMobile: boolean
}) => {
  const router = useRouter()
  const { onGetMe, user } = useAuth()
  const { title, banner } = useApp()
  const { t } = useTranslation(["common", "header", "login"])
  const [isSticky, setSticky] = useState(false)
  const currentLocale = router.locale

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token && !user) {
      onGetMe()
    }
  }, [onGetMe, user])

  useEffect(() => {
    const token = localStorage.getItem("token")

    const isPrivateRoute = ["/login", "signup"].includes(router.pathname)
    if (isPrivateRoute && token) {
      router.push("/")
    }
  }, [router.pathname, router])

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  /* Method that will fix header after a specific scrollable */
  const onScroll = () => {
    const scrollTop = window.scrollY
    setSticky(scrollTop >= 100 ? true : false)
  }

  const handleChangeLocale = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  const isActive = useMemo(() => {
    return false
  }, [router.pathname])

  /* Render */
  if (isMobile) return <HeaderMobile data={data} t={t} />

  const redirectToOtherPage = (path: string) => {
    router.replace(`/${currentLocale}${path}`)
  }

  console.log({ title, banner, isHeaderFullscreen })

  return (
    <DivHeaderWrapperV1
      banner={banner}
      isMobile={isMobile}
      isHeaderFullscreen={isHeaderFullscreen}
    >
      <header className='site-header'>
        <TopActionStyled>
          <Space className='navbar__right' size='middle'>
            {LANGS.filter((lang) => lang.locale !== currentLocale).map(
              (lang) => (
                <Button
                  size='large'
                  type='primary'
                  onClick={() => handleChangeLocale(lang.locale)}
                  key={lang.code}
                  style={{ padding: 0, border: 0 }}
                >
                  <div style={{ color: "#fff" }}>
                    <ReactCountryFlag
                      style={{
                        width: "54px",
                        height: "40px"
                      }}
                      title={lang.name}
                      countryCode={lang.code}
                      svg
                    />
                  </div>
                </Button>
              )
            )}
            <HeaderProfileDropdown />
          </Space>
        </TopActionStyled>
        <NavListStyled className='navbar' isSticky={isSticky}>
          <div className='navbar__logo navbar-logo'>
            <i
              style={{ fontSize: 28, color: "$dark" }}
              className='fa fa-whatsapp'
            />
            <img src={"/logo.png"} width={105} height={105} alt='Logo' />
          </div>
          {/* <button className='navbar-toggler'>
            <i className='fa fa-bars' aria-hidden='true' />
          </button> */}
          <NavbarNavStyled className='navbar-nav'>
            {data.map((route) => (
              <li className='nav-item' key={`nav-root-${route.related.slug}`}>
                <span
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  onClick={() =>
                    redirectToOtherPage(route.related.slug ?? route.path)
                  }
                >
                  {route.related.title}
                  {route.items.length > 0 && (
                    <ChevronDown style={{ marginLeft: 2 }} size={12} />
                  )}
                </span>
                {route.items.length > 0 && (
                  <ul className='dropdown'>
                    {route.items.map((item) => (
                      <li
                        className='dropdown-nav-item nav-item'
                        key={`nav-children-${item.related.slug ?? item.path}`}
                      >
                        <div
                          style={{ display: "flex" }}
                          onClick={() =>
                            redirectToOtherPage(item.related.slug ?? item.path)
                          }
                        >
                          <span className='dropdown-nav-link'>
                            {item.related.title}
                          </span>
                          {item.items.length > 0 && (
                            <RightOutlined className='arrow-right' />
                          )}
                        </div>
                        {item.items.length > 0 && (
                          <ul className='dropdown'>
                            {item.items.map((subItem) => (
                              <li
                                className='dropdown-nav-item nav-item'
                                key={`nav-children-${
                                  subItem.related.slug ?? subItem.path
                                }`}
                                onClick={() =>
                                  redirectToOtherPage(
                                    subItem.related.slug ?? subItem.path
                                  )
                                }
                              >
                                <div style={{ display: "flex" }}>
                                  <span className='dropdown-nav-link'>
                                    {subItem.related.title}
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
          </NavbarNavStyled>
          <Link
            href={user?.id ? "/" : "/login"}
            locale={currentLocale}
            passHref
          >
            <Button type='primary' size='large'>
              {t("On-going Retreat")}
            </Button>
          </Link>
        </NavListStyled>
        <h1 className='navbar__title'>{title.toUpperCase()}</h1>
      </header>
    </DivHeaderWrapperV1>
  )
}

export default Header
