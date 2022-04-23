import {
  DownOutlined,
  MenuOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Dropdown, Menu, Space } from "antd";
import React, { useState } from "react";
import { ROUTES } from "../../common/routes";
import { DivHeaderMobile } from "./index.style";
import { Link } from "react-router-dom";
import { IUser } from "../../context/auth/AuthTypes";
import { useAuth } from "../../context/auth/AuthContext";

const { SubMenu } = Menu;

const HeaderMobile = () => {
  const auth = useAuth();
  const user = auth.user as IUser;
  const { onLogout } = useAuth();

  const { Panel } = Collapse;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/retreat">Retreat</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={onLogout}>
        Log out
      </Menu.Item>
    </Menu>
  );

  const name = user?.username?.charAt(0).toUpperCase();
  const [activeKey, setActiveKey] = useState<string>("");

  console.log("user", user);

  /* Render */
  return (
    <DivHeaderMobile className="container" style={{ width: "100%" }}>
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
                src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                alt="logo"
                className="headermobile-logo"
              />
            </div>
          }
          className="headermobile"
          key="1"
          extra={
            !user?.username ? (
              <div onClick={(e) => e.stopPropagation()}>
                <Link to="/login">
                  <UserOutlined
                    // onClick={(event) => event.stopPropagation()}
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
                  <>
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
                  </>
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
