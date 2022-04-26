import {
  DownOutlined,
  MenuOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Collapse, Dropdown, Menu } from "antd";
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
  // function callback(key: string | string[]) {
  //   console.log(key);
  // }
  const { Panel } = Collapse;
  const handleClick = (e: any) => {
    console.log("click", e);
  };
  const { onLogout } = useAuth();

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

  // //JS NAME LOGIN:
  const text = user?.username;
  const letter = text?.charAt(0);
  //text :
  const [activeKey, setactiveKey] = useState("");
  console.log("aaaaaaaaaaa------------", { activeKey });
  return (
    <DivHeaderMobile className="container" style={{ width: "100%" }}>
      <Collapse
        collapsible="header"
        ghost
        // defaultActiveKey={["1"]}
        activeKey={activeKey}
        expandIcon={({ isActive, ...props }) => {
          return (
            <MenuOutlined
              onClick={() => setactiveKey(() => (activeKey ? "" : "1"))}
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
              <Link to="/profile">
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
                    {letter}
                  </div>
                </Dropdown>
              </Link>
            )
          }
        >
          <Menu
            onClick={handleClick}
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
