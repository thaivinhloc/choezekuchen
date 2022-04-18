import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/auth/AuthContext";
import { IUser } from "../../context/auth/AuthTypes";
import { Link } from "react-router-dom";

const HeaderProfileDropdown = () => {
  const auth = useAuth();
  const { onLogout } = useAuth();
  const user = auth.user as IUser;

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

  return (
    <>
      {!user?.username ? (
        <>
          <Link to="/login">
            <Button type="text">
              <span
                className="bold"
                style={{ color: "#fff", paddingTop: "2px" }}
              >
                Login
              </span>
            </Button>
          </Link>
          <Link to="/signup">
            <Button type="text">
              <span
                className="bold"
                style={{ color: "#fff", paddingTop: "2px" }}
              >
                Register
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
