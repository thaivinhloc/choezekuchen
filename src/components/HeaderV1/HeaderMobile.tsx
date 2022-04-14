import { DivHeaderWrapper } from "../Header/index.style";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/routes";
import { DivHeaderMobile } from "./index.style";
import { Drawer, Button, Radio, Space } from "antd";
const HeaderMobile = () => {
  // state = { visible: false, placement: "left" };
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
    // this.setState({
    //   visible: true,
    // });
  };

  const onClose = () => {
    setVisible(false);
    // this.setState({
    //   visible: false,
    // });
  };

  const onChange = (e: any) => {
    setVisible(e.target.value);
    // this.setState({
    //   placement: e.target.value,
    // });
  };

  const placement = "left";
  return (
    <DivHeaderMobile>
      <>
        <Button type="primary" onClick={showDrawer}>
          <div className="headermobile d-flex">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png"
              className="headermobile-ICTab"
              alt="123"
            />
            <img
              src="https://choezekuchen.com/wp-content/uploads/2016/02/Logo-Drikung-Rinpochen-sent.png?690ea8"
              alt="123"
              className="headermobile-logo"
            />
            <h1></h1>
          </div>
        </Button>
        <Drawer
          // title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <ul className="menumobile">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">HOME</a>
            </li>
          </ul>
        </Drawer>
      </>
    </DivHeaderMobile>
  );
};

export default HeaderMobile;
