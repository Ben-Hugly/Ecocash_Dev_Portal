import React from "react";
import style from "../styles";
import { hugly } from "../assets";

function Footer() {
  return (
    <footer className={`${style.footerWrapper}`}>
      <div className={`${style.footerBorderWrapper}`}>
        <div className={`${style.footerBorder}`}>
          <div className={`${style.footerLinkWrapper}`}>
            <div className={`${style.linkHover} text-[12px]`}>
              © Copyright {new Date().getFullYear()} EcoCash Holdings{" "}
            </div>
            <a href="#" className={`${style.linkHover}`}>
              Terms & Condition |
            </a>
            <a href="#" className={`${style.linkHover}`}>
              Privacy Policy |
            </a>
            <a href="#" className={`${style.linkHover}`}>
              Manage cookies{" "}
            </a>
          </div>
          <div className={`${style.footerLinkWrapper} space-x-0 `}>
            <span>Digital Solution by </span>
            <img src={hugly} width={36} height={36} />
            <span className="text-sm font-medium ">Hugly.Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
