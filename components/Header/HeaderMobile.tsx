/* eslint-disable @next/next/no-img-element */
import {
  DownOutlined,
  MenuOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Dropdown, Menu, Space } from "antd";
import { LOGIN } from "common/navigator";
import { useApp } from "context/app/AppContext";
import { TFunction } from "i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { LANGS } from ".";
import { ROUTES } from "../../common/routes";
import { useAuth } from "../../context/auth/AuthContext";
import { IUser } from "../../context/auth/AuthTypes";
import { DivHeaderMobile } from "./index.style";

const { SubMenu } = Menu;

const HeaderMobile = ({ t }: { t: TFunction }) => {
  const auth = useAuth();
  const user = auth.user as IUser;
  const { onLogout } = useAuth();
  const { title } = useApp();

  const router = useRouter();
  const currentLocale = router.locale;

  const { Panel } = Collapse;

  const handleChangeLocale = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/retreat">Retreat</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={onLogout}>
        Log out
      </Menu.Item>
    </Menu>
  );

  const name = user?.username?.charAt(0).toUpperCase();
  const [activeKey, setActiveKey] = useState<string>("");

  console.log("title", title);

  /* Render */
  return (
    <div>
      <DivHeaderMobile className="header-mobile" style={{ width: "100%" }}>
        <div className="container">
          <Collapse
            collapsible="header"
            ghost
            activeKey={activeKey}
            expandIcon={({ isActive }) => {
              return (
                <MenuOutlined
                  onClick={() => setActiveKey(() => (activeKey ? "" : "1"))}
                  style={{ margin: "0px", fontSize: "17px" }}
                />
              );
            }}
            expandIconPosition="left"
          >
            <Panel
              header={
                <div onClick={(e) => e.stopPropagation()}>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="headermobile-logo"
                    width={65}
                    height={65}
                  />
                </div>
              }
              className="headermobile"
              key="1"
              extra={
                <Space size={6}>
                  {LANGS.filter((lang) => lang.locale !== currentLocale).map(
                    (lang) => (
                      <Button
                        className="h-auto"
                        size="small"
                        type="link"
                        onClick={() => handleChangeLocale(lang.locale)}
                        key={lang.code}
                        style={{ marginRight: "6px" }}
                      >
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
                        {/* {lang.name} */}
                      </Button>
                    )
                  )}
                  {!user?.username ? (
                    <div onClick={(e) => e.stopPropagation()}>
                      <Link passHref href={LOGIN}>
                        <UserOutlined
                          style={{ fontSize: "20px" }}
                          className="headermobile-user"
                        />
                      </Link>
                    </div>
                  ) : (
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      overlayStyle={{ width: "140px" }}
                      placement="bottomRight"
                    >
                      <div
                        className="headermobile-avatar"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {name}
                      </div>
                    </Dropdown>
                  )}
                </Space>
              }
            >
              <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className="headermobile__menu"
                inlineIndent={0}
                expandIcon={(...props: any) => {
                  console.log("props", props[0].isHasChildrent);
                  const isHasChildrent = !!props[0]?.isHasChildrent;
                  const isOpen = props[0].isOpen;
                  if (!isHasChildrent) return <div />;
                  return (
                    <div className="headermobile__menu-icon">
                      {!isOpen ? <RightOutlined /> : <DownOutlined />}
                    </div>
                  );
                }}
              >
                {ROUTES.map((route) => (
                  <SubMenu
                    key={route.path}
                    title={
                      <Link href={route.path}>
                        <a
                          rel="noreferrer"
                          target={route.isOpenTab ? "_blank" : "_self"}
                          className="headermobile__menu"
                        >
                          {route.label}
                        </a>
                      </Link>
                    }
                    {...{ isHasChildrent: !!route.childrent.length }}
                  >
                    {route.childrent.map((subRoute) => (
                      <React.Fragment key={subRoute.path}>
                        {subRoute.childrent.length < 0 ? (
                          <Menu.Item key={subRoute.path} icon={() => <div />}>
                            <Link href={route.path}>
                              <a
                                target={route.isOpenTab ? "_blank" : "_self"}
                                rel="noreferrer"
                              >
                                {subRoute.label}
                              </a>
                            </Link>
                          </Menu.Item>
                        ) : (
                          <SubMenu
                            key={subRoute.path}
                            {...{
                              isHasChildrent: !!subRoute.childrent.length,
                            }}
                            title={
                              <Link href={subRoute.path}>
                                <a
                                  rel="noreferrer"
                                  target={route.isOpenTab ? "_blank" : "_self"}
                                >
                                  {subRoute.label}
                                </a>
                              </Link>
                            }
                          >
                            {subRoute.childrent.map((children) => (
                              <Menu.Item key={children.path}>
                                <Link href={children.path}>
                                  <a
                                    target={
                                      route.isOpenTab ? "_blank" : "_self"
                                    }
                                    rel="noreferrer"
                                  >
                                    {children.label}
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
            </Panel>
          </Collapse>
        </div>
        <div className="w-100 banner">
          {router.pathname === "/" ? (
            <img
              className="w-100"
              src="/images/title-image-homepage.jpg"
              alt="banner"
            />
          ) : (
            <img
              className="w-100 "
              src="/images/title-image-3.jpeg"
              alt="banner"
              style={{ height: "160px", objectFit: "cover" }}
            />
          )}
          <div className="banner__content" style={{ top: 0 }}>
            {t(title, { ns: "header" }).toUpperCase()}
          </div>
        </div>
      </DivHeaderMobile>
    </div>
  );
};

export default HeaderMobile;
