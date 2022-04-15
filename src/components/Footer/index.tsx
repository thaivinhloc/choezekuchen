import React from "react";
import { DivFooterWrapper } from "./index.style";
import { IconFB, IconInstagram, IconTW } from "../../assets/svgs/index";
const Footer: React.FC<{}> = () => {
  return (
    <DivFooterWrapper>
      <div className="list-icon">
        <div className="icon">
          <IconFB />
        </div>
        <div className="icon">
          <IconTW />
        </div>
        <div className="icon">
          <IconInstagram />
        </div>
      </div>
    </DivFooterWrapper>
  );
};

export default Footer;
