import { DownOutlined, MenuOutlined, RightOutlined } from "@ant-design/icons";
import { Collapse, Menu } from "antd";
import React from "react";
import { ROUTES } from "../../common/routes";
import { DivHeaderMobile } from "./index.style";

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
    <DivHeaderMobile className="container">
      <Collapse
        onChange={callback}
        ghost
        expandIcon={({ isActive }) => (
          <MenuOutlined style={{ margin: "0px", fontSize: "17px" }} />
        )}
        expandIconPosition="left"
      >
        <Panel
          header={<div />}
          className="headermobile"
          key="1"
          extra={
            <div>
              <img
                src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
                alt="logo"
                className="headermobile-logo"
                width="70px"
                height="70px"
              />
            </div>
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
