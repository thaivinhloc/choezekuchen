import React from "react";
import { DivFooterWrapper } from "./index.style";
import { Icon_fb, Icon_tw } from "../../assets/svgs/index";
const Footer: React.FC<{}> = () => {
  return (
    <DivFooterWrapper>
      <div className="list-icon">
        <div className="icon-facebook">
          <Icon_fb />
        </div>
        <div className="icon-facebook">
          <Icon_tw />
        </div>
        <div className="icon-facebook">
          <Icon_fb />
        </div>
      </div>
    </DivFooterWrapper>
  );
};

export default Footer;
