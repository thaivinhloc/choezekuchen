import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { PROFILE, RETREAT } from "common/navigator";
import i18next from "i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { TFunction } from "react-i18next";
import { useAuth } from "../../context/auth/AuthContext";
import { IUser } from "../../context/auth/AuthTypes";

type THeaderProfileDropdown = {
  t: TFunction<("common" | "login")[], undefined>;
};
const HeaderProfileDropdown: FC<THeaderProfileDropdown> = ({ t }) => {
  const auth = useAuth();
  const { onLogout } = useAuth();
  const user = auth.user as IUser;
  const router = useRouter();
  const locale = router.locale;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href={PROFILE}>Profile</Link>
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
          <Link href="/login" locale={locale} passHref>
            <Button type="text">
              <span
                className="bold"
                style={{ color: "#fff", paddingTop: "2px" }}
              >
                {t("linkLogin")}
              </span>
            </Button>
          </Link>
          <Link href="/signup" locale={locale} passHref>
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
