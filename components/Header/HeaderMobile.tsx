/* eslint-disable @next/next/no-img-element */
import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  RightOutlined,
  UserOutlined
} from "@ant-design/icons"
import { Button, Collapse, Drawer, Dropdown, Menu, Space } from "antd"
import { THEME } from "common"
import { LOGIN, RETREAT } from "common/navigator"
import { useApp } from "context/app/AppContext"
import { TNavigatorItem } from "definition"
import { TFunction } from "i18next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { LANGS } from "."
import { ROUTES } from "../../common/routes"
import { useAuth } from "../../context/auth/AuthContext"
import { IUser } from "../../context/auth/AuthTypes"
import { DivHeaderMobile } from "./index.style"

const { SubMenu } = Menu

const HeaderMobile = ({
  t,
  data,
  logo
}: {
  t: TFunction
  data: TNavigatorItem[]
  logo?: any
}) => {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const auth = useAuth()
  const user = auth.user as IUser
  const { onLogout } = useAuth()
  const { title, banner } = useApp()

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const onScroll = () => {
    const scrollTop = window.scrollY
    setSticky(scrollTop >= 100 ? true : false)
  }

  const router = useRouter()
  const currentLocale = router.locale

  const handleChangeLocale = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const headerStyle = isSticky
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        paddingTop: 12,
        paddingBottom: 12,
        zIndex: 10,
        background: THEME.white,
        boxShadow: "0 9px 35px rgb(0 0 0 / 5%)"
      }
    : {
        paddingTop: 12,
        paddingBottom: 12
      }

  /* Render */
  return (
    <DivHeaderMobile className='headermobile' style={{ width: "100%" }}>
      <Drawer
        width='85%'
        visible={isOpenMenu}
        placement='right'
        onClose={() => setOpenMenu(false)}
        getContainer={false}
        closeIcon={null}
        headerStyle={{ display: "none" }}
      >
        <div style={{ position: "relative", minHeight: "100%" }}>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              left: 0,
              width: "100%"
            }}
          >
            <Space direction='vertical' style={{ width: "100%" }}>
              {user?.username && (
                <Link href='/profile'>
                  <Button block>
                    <span>{t("Profile")}</span>
                  </Button>
                </Link>
              )}
              <Link href={!user?.username ? LOGIN : "/"}>
                <Button type='primary' block>
                  <span style={{ color: THEME.white }}>Retreat</span>
                </Button>
              </Link>
            </Space>
          </div>
          <a
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              WebkitAppearance: "none"
            }}
            type='button'
            onClick={() => setOpenMenu(false)}
          >
            <CloseOutlined style={{ fontSize: 24 }} />
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img
              src={logo?.data?.attributes?.url ?? "/logo.png"}
              alt='Logo'
              className='headermobile-logo'
            />
          </div>
          <Menu
            style={{ width: "100%" }}
            defaultSelectedKeys={["1"]}
            mode='inline'
            className='headermobile__menu'
            inlineIndent={0}
            expandIcon={(...props: any) => {
              console.log("props", props[0].isHasChildren)
              const isHasChildren = !!props[0]?.isHasChildren
              const isOpen = props[0].isOpen
              if (!isHasChildren) return <div />
              return (
                <div className='headermobile__menu-icon'>
                  {!isOpen ? <RightOutlined /> : <DownOutlined />}
                </div>
              )
            }}
          >
            {data.map((route) => (
              <SubMenu
                key={route.related.slug}
                title={
                  <Link href={route.related.slug}>
                    <a
                      rel='noreferrer'
                      target={"_self"}
                      className='headermobile__menu'
                    >
                      {route.related.title}
                    </a>
                  </Link>
                }
                {...{ isHasChildren: !!route.items.length }}
              >
                {route.items.map((subRoute) => (
                  <React.Fragment key={subRoute.related.slug}>
                    {subRoute.items.length < 0 ? (
                      <Menu.Item
                        key={subRoute.related.slug}
                        icon={() => <div />}
                      >
                        <Link href={route.related.slug}>
                          <a target={"_self"} rel='noreferrer'>
                            {subRoute.related.title}
                          </a>
                        </Link>
                      </Menu.Item>
                    ) : (
                      <SubMenu
                        key={subRoute.related.slug}
                        {...{
                          isHasChildren: !!subRoute.items.length
                        }}
                        title={
                          <Link href={subRoute.related.slug}>
                            <a rel='noreferrer' target={"_self"}>
                              {subRoute.related.title}
                            </a>
                          </Link>
                        }
                      >
                        {subRoute.items.map((children) => (
                          <Menu.Item key={children.related.slug}>
                            <Link href={children.related.slug}>
                              <a target={"_self"} rel='noreferrer'>
                                {children.related.title}
                              </a>
                            </Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    )}
                  </React.Fragment>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </Drawer>
      {/* @ts-ignore */}
      <div className='container' style={{ ...headerStyle }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <img src='/logo.png' alt='Logo' width={50} />
          <div style={{ display: "flex", alignItems: "center" }}>
            {LANGS.filter((lang) => lang.locale !== currentLocale).map(
              (lang) => (
                <Button
                  className='h-auto'
                  size='small'
                  type='link'
                  onClick={() => handleChangeLocale(lang.locale)}
                  key={lang.code}
                  style={{ marginRight: "6px" }}
                >
                  <ReactCountryFlag
                    style={{
                      fontSize: "2em",
                      lineHeight: "2em",
                      marginRight: 8
                    }}
                    title={lang.name}
                    countryCode={lang.code}
                    svg
                  />
                  {/* {lang.name} */}
                </Button>
              )
            )}
            <MenuOutlined
              onClick={() => setOpenMenu(true)}
              style={{ margin: "0px", fontSize: "17px" }}
            />
          </div>
        </div>
      </div>
      <div className='w-100 banner'>
        {router.pathname === "/" ? (
          <img
            className='w-100'
            src={banner?.attributes?.url ?? "/images/title-image-homepage.jpg"}
            alt='banner'
          />
        ) : (
          <img
            className='w-100 '
            src={banner?.attributes?.url ?? "/images/title-image-3.jpeg"}
            alt='banner'
            style={{ height: "160px", objectFit: "cover" }}
          />
        )}
        <div className='banner__content' style={{ top: 0 }}>
          {title}
        </div>
      </div>
    </DivHeaderMobile>
  )
}

export default HeaderMobile
