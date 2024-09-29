import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { logoDark, logoLight } from "../../assets/Logo";
import style from "../../styles";
import { GoHomeFill } from "react-icons/go";
import { MdFolderSpecial, MdArrowRight } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const Sidebar = () => {
  const [isDevToolsOpen, setDevToolsOpen] = useState(false);
  const [isApiRefOpen, setApiRefOpen] = useState(false);
  const [overviewActive, setOverviewActive] = useState(true);
  const [myAppsActive, setMyAppsActive] = useState(false);
  const [documentationActive, setDocumentationActive] = useState(false);

  const toggleDevTools = () => {
    setDevToolsOpen(!isDevToolsOpen);
    if (isApiRefOpen) setApiRefOpen(false); // Close API Reference if open
  };

  const toggleApiRef = () => {
    setApiRefOpen(!isApiRefOpen);
    if (isDevToolsOpen) setDevToolsOpen(false);
  };

  const toggleOverview = () => {
    if (!overviewActive) {
      setOverviewActive(true);
      if (myAppsActive) setMyAppsActive(false);
      if (documentationActive) setDocumentationActive(false);
    }
  };

  const toggleMyApps = () => {
    if (!myAppsActive) {
      setMyAppsActive(true);
      if (overviewActive) setOverviewActive(false);
      if (documentationActive) setDocumentationActive(false);
    }
  };

  const toggleDocumentation = () => {
    if (!documentationActive) {
      setDocumentationActive(true);
      if (overviewActive) setOverviewActive(false);
      if (myAppsActive) setMyAppsActive(false);
    }
  };

  return (
    <div className="bg-white dark:bg-darkBgComponents flex flex-col p-4 h-full">
      <div className="flex justify-between items-center py-3 relative">
        <img
          src={logoLight}
          alt="EcoCash Developer"
          className={`${style.navbarLogo} block dark:hidden`}
        />
        <img
          src={logoDark}
          alt="EcoCash Developer"
          className={`${style.navbarLogo} hidden dark:block`}
        />
      </div>

      <div className="mt-5 border-b border-t border-borderLight dark:border-borderBlue">
        <ul className="space-y-3 font-poppins text-lg py-2">
          <li
            className={`hover:bg-lightBgHover dark:hover:bg-darkBgHover hover:scale-105 hover:rounded-2xl ${
              overviewActive
                ? "bg-lightBgHover dark:bg-darkBgHover rounded-3xl"
                : ""
            }`}
            onClick={toggleOverview}
          >
            <Link
              to="/dashboard/home"
              className="flex items-center space-x-3 px-2 py-4"
            >
              {overviewActive ? <MdArrowRight size={28} color="#037aa9" /> : ""}
              <GoHomeFill size={20} color="#035AA9" />
              <span className="text-[15px] font-poppins text-gray-900 dark:text-white">
                Overview
              </span>
            </Link>
          </li>
          <li
            className={`hover:bg-lightBgHover dark:hover:bg-darkBgHover hover:rounded-2xl ${
              myAppsActive
                ? "bg-lightBgHover dark:bg-darkBgHover rounded-3xl"
                : ""
            }`}
            onClick={toggleMyApps}
          >
            <Link
              to="/dashboard/myapps"
              className="flex items-center space-x-3 px-2 py-4"
            >
              {myAppsActive ? <MdArrowRight size={28} color="#037aa9" /> : ""}
              <MdFolderSpecial size={20} color="#035AA9" />
              <span className="text-[15px] font-poppins font-thin text-gray-900 dark:text-white">
                My Applications
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="flex flex-row items-center py-3"
        onClick={toggleDocumentation}
      >
        <Link
          to="/dashboard/documentation"
          className={`flex items-center space-x-3 px-2 py-5 pr-7 hover:bg-lightBgHover dark:hover:bg-darkBgHover hover:scale-105 hover:rounded-2xl w-full ${
            documentationActive
              ? "bg-lightBgHover dark:bg-darkBgHover rounded-3xl"
              : ""
          }`}
        >
          {documentationActive ? (
            <MdArrowRight size={28} color="#037aa9" />
          ) : (
            ""
          )}
          <IoDocumentText size={20} color="#035AA9" />
          <span className="text-[15px] font-poppins text-gray-900 dark:text-white">
            Documentation
          </span>
        </Link>
      </div>

      <div className="bg-bgWhite dark:bg-backgroundDark rounded-2xl p-4">
        <Link
          to="/dashboard/documentation"
          className="flex items-center space-x-3 px-2 py-2 border-b border-borderLight w-full hover:bg-lightBgHover dark:border-borderBlue dark:hover:bg-darkBgHover hover:rounded-3xl hover:scale-110"
        >
          <span className="text-[14px] font-poppins text-gray-900 dark:text-white py-2">
            Overview
          </span>
        </Link>

        <button
          className="flex items-center space-x-3 space-y-2 px-2 py-4 border-b border-borderLight w-full hover:scale-110 justify-between hover:bg-lightBgHover dark:border-borderBlue dark:hover:bg-darkBgHover hover:rounded-3xl"
          onClick={toggleDevTools}
        >
          <span className="text-[14px] font-poppins text-gray-900 dark:text-white py-2">
            Developer Tools
          </span>
          {isDevToolsOpen ? (
            <IoChevronUpOutline size={18} color="#ef4444" />
          ) : (
            <IoChevronDownOutline size={18} color="#ef4444" />
          )}
        </button>

        {isDevToolsOpen && (
          <div className="pl-1 mt-5 space-y-5">
            <Link
              to="/dashboard/documentation/dev/byi"
              className="flex text-[13px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 space-y-2 py-4 w-full rounded-2xl"
            >
              Build Your Integration
            </Link>
            <Link
              to="/dashboard/documentation/dev/c2b"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              C2B
            </Link>
            <Link
              to="/dashboard/documentation/dev/b2c"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              B2C
            </Link>
            <Link
              to="/dashboard/documentation/dev/b2b"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              B2B
            </Link>
            <Link
              to="/dashboard/documentation/dev/reversal"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              Reversals
            </Link>
          </div>
        )}

        <button
          className="flex items-center space-x-3 px-2 py-2 w-full justify-between rounded-2xl hover:bg-lightBgHover dark:border-borderBlue dark:hover:bg-darkBgHover hover:rounded-3xl hover:scale-110"
          onClick={toggleApiRef}
        >
          <span className="text-[14px] font-poppins text-gray-900 dark:text-white py-2">
            API Reference
          </span>
          {isApiRefOpen ? (
            <IoChevronUpOutline size={18} color="#ef4444" />
          ) : (
            <IoChevronDownOutline size={18} color="#ef4444" />
          )}
        </button>

        {isApiRefOpen && (
          <div className="pl-3 mt-5 space-y-5 pb-5">
            <Link
              to="/dashboard/documentation/api/payments"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              Payments
            </Link>
            <Link
              to="/dashboard/documentation/api/refunds"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              Refunds
            </Link>
            <Link
              to="/dashboard/documentation/api/lookup"
              className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
            >
              Transaction lookup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
