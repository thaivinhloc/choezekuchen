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

const HeaderProfileDropdown: FC = () => {
  const auth = useAuth()
  const { onLogout } = useAuth()
  const user = auth.user as IUser
  const router = useRouter()
  const locale = router.locale

  const menu = (
    <Menu>
      <Menu.Item key='0'>
        <Link href={PROFILE}>Profile</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' onClick={onLogout}>
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      {user?.id && (
        <Dropdown overlay={menu} trigger={["click"]} placement='bottomRight'>
          <Button
            style={{ padding: 0 }}
            type='text'
            size='large'
            className='ant-dropdown-link'
          >
            <span className='bold' style={{ color: "#fff" }}>
              <CircleUser size={40} />
            </span>
          </Button>
        </Dropdown>
      )}
    </>
  )
}

export default HeaderProfileDropdown
