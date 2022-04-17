import { DivHeaderWrapper } from "../Header/index.style";
import React, { Children, useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/routes";
import { DivHeaderMobile } from "./index.style";
import { Drawer, Button, Radio, Space, Collapse, Menu } from "antd";
import { MenuOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const HeaderMobile = () => {
  function callback(key: string | string[]) {
    console.log(key);
  }
  const { Panel } = Collapse;
  const handleClick = (e: any) => {
    console.log("click ", e);
  };
  return (
    <DivHeaderMobile>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={callback}
        ghost
        expandIcon={({ isActive }) => (
          <MenuOutlined
            style={{ margin: "25px 0 20px 0px", fontSize: "17px" }}
          />
        )}
      >
        <Panel
          header={
            <img
              src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
              alt="123"
              className="headermobile-logo"
            />
          }
          className="headermobile"
          key="1"
        >
          <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            className="headermobile__menu"
            inlineIndent={12}
            expandIcon={(...props: any) => {
              console.log("props", props[0].isHasChildrent);
              const isHasChildrent = !!props[0]?.isHasChildrent;
              const isOpen = props[0].isOpen;
              if (!isHasChildrent) return <div />;
              return (
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    right: 0,
                    padding: "10px 41px",
                    color: "#303030",
                    fontWeight: "900",
                    fontSize: "12px",
                  }}
                >
                  {!isOpen ? (
                    <RightOutlined
                      style={{
                        fontWeight: "bold",
                        color: "#303030",
                        fontSize: "12px",
                      }}
                    />
                  ) : (
                    <DownOutlined
                      style={{
                        fontWeight: "bold",
                        color: "#303030",
                        fontSize: "12px",
                      }}
                    />
                  )}
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
                        {...{ isHasChildrent: !!subRoute.childrent.length }}
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
    </DivHeaderMobile>
  );
};

export default HeaderMobile;
