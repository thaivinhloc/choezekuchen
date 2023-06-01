// @ts-nocheck
import { DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, Menu } from "antd"
import { PROFILE, RETREAT } from "common/navigator"
import i18next from "i18next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { useAuth } from "../../context/auth/AuthContext"
import { IUser } from "../../context/auth/AuthTypes"
import { CircleUser } from "@styled-icons/fa-solid"
import { useTranslation } from "next-i18next"

const HeaderProfileDropdown: FC = ({ isSticky }) => {
  const { onLogout, user } = useAuth()
  const router = useRouter()
  const locale = router.locale
  const { t } = useTranslation()

  const menu = (
    <Menu style={{ width: 200 }}>
      <Menu.Item key='0'>
        <Link href={PROFILE}>{t("Profile")}</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' onClick={onLogout}>
        {t("Log out")}
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      {user?.id && (
        <Dropdown overlay={menu} trigger={["click"]} placement='bottomRight'>
          <Button
            style={{ paddingLeft: 28, paddingRight: 28 }}
            type={isSticky ? "primary" : "default"}
            ghost
            size='large'
            shape='round'
          >
            {user.username.split(" ")[0]}
          </Button>
        </Dropdown>
      )}
    </>
  )
}

export default HeaderProfileDropdown
