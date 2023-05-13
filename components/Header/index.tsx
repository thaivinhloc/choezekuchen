/* eslint-disable @next/next/no-img-element */
import { RightOutlined } from "@ant-design/icons"
import { Button, Space, Typography } from "antd"
import { TNavigatorItem, TRetreat } from "definition"
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
import { RETREAT } from "common/navigator"
import { getRetreatPathFromSlug } from "helper"

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
  isHeaderFullscreen = false,
  retreats = [],
  logo
}: {
  data: TNavigatorItem[]
  isHeaderFullscreen?: boolean
  isMobile: boolean
  retreats?: TRetreat[]
  logo?: any
}) => {
  const router = useRouter()
  const { onGetMe, user } = useAuth()
  const { title, banner, desc } = useApp()
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
  if (isMobile) return <HeaderMobile data={data} t={t} logo={logo} />

  const redirectToOtherPage = (path: string) => {
    router.replace(`/${currentLocale}${path}`)
  }

  const getRetreatPath = (_retreats: TRetreat[]) => {
    if (_retreats.length > 1) {
      return RETREAT
    }
    return getRetreatPathFromSlug(_retreats[0].id, _retreats[0].slug)
  }

  console.log({ title, banner, isHeaderFullscreen })
  const activeRetreats = retreats.filter((r) => r.status)

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
                  shape='circle'
                  size='large'
                  type='primary'
                  onClick={() => handleChangeLocale(lang.locale)}
                  key={lang.code}
                  style={{ padding: 0, border: 0 }}
                >
                  <ReactCountryFlag
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                    cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/1x1/'
                    title={lang.name}
                    countryCode={lang.code}
                    svg
                  />
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
            <img
              src={logo?.data?.attributes?.url ?? "/logo.png"}
              width={105}
              height={105}
              alt='Logo'
            />
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
          {activeRetreats.length > 0 ? (
            <Link
              href={
                user?.id
                  ? getRetreatPath(activeRetreats)
                  : `/login?redirect=${getRetreatPath(activeRetreats)}`
              }
              locale={currentLocale}
              passHref
            >
              <Button
                style={{ paddingLeft: 28, paddingRight: 28 }}
                type={isSticky ? "primary" : "default"}
                ghost
                size='large'
                shape='round'
              >
                {t("Retreat")}
              </Button>
            </Link>
          ) : null}
        </NavListStyled>
        {isSticky ? <div style={{ height: 184 }} /> : <div />}
        <div className='navbar__title'>
          <h1>{title.toUpperCase()}</h1>
          <span className='navbar__title__desc'>{desc}</span>
        </div>
      </header>
    </DivHeaderWrapperV1>
  )
}

export default Header
