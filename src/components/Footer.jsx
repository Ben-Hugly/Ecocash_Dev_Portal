import React from "react";
import style from "../styles";
import { hugly } from "../assets";

function Footer() {
  return (
    <footer className={`${style.footerWrapper}`}>
      <div className={`${style.footerBorderWrapper}`}>
        <div className={`${style.footerBorder}`}>
          <div className={`${style.footerLinkWrapper} flex items-center`}>
            <div className={`${style.linkHover} text-[12px]`}>
              © Copyright {new Date().getFullYear()} EcoCash Holdings{" "}
            </div>
            <div className="border-l border-gray-300 h-4 mx-2"></div>
            <a href="#" className={`${style.linkHover}`}>
              Terms & Conditions
            </a>
            <div className="border-l border-gray-300 h-4 mx-2"></div>
            <a href="#" className={`${style.linkHover}`}>
              Privacy Policy
            </a>
            <div className="border-l border-gray-300 h-4 mx-2"></div>
            <a href="#" className={`${style.linkHover}`}>
              Manage Cookies
            </a>
          </div>
          <div
            className={`${style.footerLinkWrapper} flex items-center space-x-1`}
          >
            <span>Digital Solution by</span>
            <img src={hugly} width={36} height={36} alt="Hugly Studio Logo" />
            <span className="text-sm font-medium">Hugly.Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
