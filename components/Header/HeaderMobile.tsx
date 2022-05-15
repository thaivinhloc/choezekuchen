import {
  DownOutlined,
  MenuOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Collapse, Dropdown, Menu } from "antd";
import { LOGIN } from "common/navigator";
import LinkComponent from "components/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import { ROUTES } from "../../common/routes";
import { useAuth } from "../../context/auth/AuthContext";
import { IUser } from "../../context/auth/AuthTypes";
import { DivHeaderMobile } from "./index.style";

const { SubMenu } = Menu;

const HeaderMobile = () => {
  const auth = useAuth();
  const user = auth.user as IUser;
  const { onLogout } = useAuth();
  const router = useRouter();

  const { Panel } = Collapse;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <LinkComponent href="/profile">Profile</LinkComponent>
      </Menu.Item>
      <Menu.Item key="2">
        <LinkComponent href="/retreat">Retreat</LinkComponent>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={onLogout}>
        Log out
      </Menu.Item>
    </Menu>
  );

  const name = user?.username?.charAt(0).toUpperCase();
  const [activeKey, setActiveKey] = useState<string>("");

  /* Render */
  return (
    <DivHeaderMobile
      className="container header-mobile"
      style={{ width: "100%" }}
    >
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
              <Image
                src={Logo}
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
            !user?.username ? (
              <div onClick={(e) => e.stopPropagation()}>
                <LinkComponent href={LOGIN}>
                  <UserOutlined
                    style={{ fontSize: "20px" }}
                    className="headermobile-user"
                  />
                </LinkComponent>
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
            )
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
                  <a
                    href={route.path}
                    rel="noreferrer"
                    target={route.isOpenTab ? "_blank" : "_self"}
                    className="headermobile__menu"
                  >
                    {route.label}
                  </a>
                }
                {...{ isHasChildrent: !!route.childrent.length }}
              >
                {route.childrent.map((subRoute) => (
                  <React.Fragment key={subRoute.path}>
                    {subRoute.childrent.length < 0 ? (
                      <Menu.Item key={subRoute.path} icon={() => <div />}>
                        <a
                          target={route.isOpenTab ? "_blank" : "_self"}
                          rel="noreferrer"
                          href={route.path}
                        >
                          {subRoute.label}
                        </a>
                      </Menu.Item>
                    ) : (
                      <SubMenu
                        key={subRoute.path}
                        {...{
                          isHasChildrent: !!subRoute.childrent.length,
                        }}
                        title={
                          <a
                            href={subRoute.path}
                            rel="noreferrer"
                            target={route.isOpenTab ? "_blank" : "_self"}
                          >
                            {subRoute.label}
                          </a>
                        }
                      >
                        {subRoute.childrent.map((children) => (
                          <Menu.Item key={children.path}>
                            <a
                              target={route.isOpenTab ? "_blank" : "_self"}
                              rel="noreferrer"
                              href={children.path}
                            >
                              {children.label}
                            </a>
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
      {/* </Space> */}
    </DivHeaderMobile>
  );
};

export default HeaderMobile;
