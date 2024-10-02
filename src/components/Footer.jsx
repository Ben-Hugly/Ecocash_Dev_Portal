import React, { useState } from "react";
import style from "../styles";
import { hugly } from "../assets";
import { TermsAndConditions } from "./Dashboard/Modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleTermsAndConditionClick = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <footer className={`${style.footerWrapper}`}>
      <div className={`${style.footerBorderWrapper}`}>
        <div className={`${style.footerBorder}`}>
          <div className={`${style.footerLinkWrapper} flex items-center`}>
            <div className={`${style.linkHover} text-[12px]`}>
              © Copyright {new Date().getFullYear()} EcoCash Holdings{" "}
            </div>
            <div className="border-l border-gray-300 h-4 mx-2"></div>
            <button
              onClick={handleTermsAndConditionClick}
              className={`${style.linkHover}`}
            >
              Terms & Conditions
            </button>
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
        {/* Modal for Terms And Conditions */}
        {isModalOpen && (
          <TermsAndConditions handleModalClose={handleModalClose} />
        )}
      </div>
    </footer>
  );
}

export default Footer;
