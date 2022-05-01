import React, { FC } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/auth/AuthContext";
import { IUser } from "../../context/auth/AuthTypes";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { TFunction } from "react-i18next";

type THeaderProfileDropdown = {
  t: TFunction<("common" | "login")[], undefined>;
};
const HeaderProfileDropdown: FC<THeaderProfileDropdown> = ({ t }) => {
  const auth = useAuth();
  const { onLogout } = useAuth();
  const user = auth.user as IUser;

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

  return (
    <>
      {!user?.username ? (
        <>
          <Link href="/login">
            <Button type="text">
              <span
                className="bold"
                style={{ color: "#fff", paddingTop: "2px" }}
              >
                {t("linkLogin")}
              </span>
            </Button>
          </Link>
          <Link href="/signup">
            <Button type="text">
              <span
                className="bold"
                style={{ color: "#fff", paddingTop: "2px" }}
              >
                {t("linkSignUp")}
              </span>
            </Button>
          </Link>
        </>
      ) : (
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          overlayStyle={{ width: "140px" }}
          placement="bottomRight"
        >
          <Button type="text" className="ant-dropdown-link">
            <span className="bold" style={{ color: "#fff" }}>
              {user.username} <DownOutlined style={{ fontSize: "12px" }} />
            </span>
          </Button>
        </Dropdown>
      )}
    </>
  );
};

export default HeaderProfileDropdown;
