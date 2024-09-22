import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { logoDashboard } from "../../assets/Logo";
import style from "../../styles";
import { GoHomeFill } from "react-icons/go";
import { MdFolderSpecial, MdArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [isDevToolsOpen, setDevToolsOpen] = useState(false);
  const [isApiRefOpen, setApiRefOpen] = useState(false);
  const [overviewActive, setOverviewActive] = useState(false);
  const [myAppsActive, setMyAppsActive] = useState(false);

  const toggleDevTools = () => {
    setDevToolsOpen(!isDevToolsOpen);
    if (isApiRefOpen) setApiRefOpen(false); // Close API Reference if open
  };

  const toggleApiRef = () => {
    setApiRefOpen(!isApiRefOpen);
    if (isDevToolsOpen) setDevToolsOpen(false); // Close Developer Tools if open
  };

  const toggleOverview = () => {
    setOverviewActive(!overviewActive);
    if (myAppsActive) setMyAppsActive(false); // Close Developer Tools if open
  };

  const toggleMyApps = () => {
    setMyAppsActive(!myAppsActive);
    if (overviewActive) setOverviewActive(false); // Close Developer Tools if open
  };

  return (
    <div className="bg-white dark:bg-darkBgComponents  w-[320px] flex flex-col p-4 h-full p-3">
      <div className="flex justify-between items-center  py-3">
        <img src={logoDashboard} />
      </div>

      <div className="mt-5 border-b border-t border-borderLight dark:border-borderBlue ">
        <ul className="space-y-3 font-poppins text-lg">
          <li
            className="hover:bg-lightBgHover dark:hover:bg-darkBgHover hover:scale-110 hover:rounded-2xl"
            onClick={toggleOverview}
          >
            <div className="flex flex-row items-center">
              {overviewActive ? <MdArrowRight size={24} color="#037aa9" /> : ""}
              <button className="flex items-center space-x-3 px-2 py-2">
                <GoHomeFill size={16} color="#035AA9" />
                <span className="text-[15px] font-poppins text-gray-900 dark:text-white">
                  Overview
                </span>
              </button>
            </div>
          </li>
          <li
            className="hover:bg-lightBgHover dark:hover:bg-darkBgHover hover:rounded-2xl hover:scale-110"
            onClick={toggleMyApps}
          >
            <div className="flex flex-row items-center">
              {myAppsActive ? <MdArrowRight size={24} color="#037aa9" /> : ""}
              <button className="flex items-center space-x-3 px-2 py-2">
                <MdFolderSpecial size={16} color="#035AA9" />
                <span className="text-[15px] font-poppins text-gray-900 dark:text-white">
                  My Applications
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <span className="text-xs font-poppins font-thin p-3 text-left text-textBlack dark:text-textWhite">
        Documentation
      </span>
      <div className="bg-bgWhite dark:bg-backgroundDark rounded-2xl p-4 ml-2 ">
        <button className="flex items-center space-x-3 px-2 py-2 border-b border-borderLight w-full hover:bg-slate-200  hover:rounded-2xl">
          <span className="text-[14px] font-poppins text-gray-900 dark:text-white">
            Overview
          </span>
        </button>

        <button
          className="flex items-center space-x-3 space-y-4 px-2 py-2 border-b border-borderLight w-full justify-between hover:bg-slate-200 hover:rounded-2xl"
          onClick={toggleDevTools}
        >
          <span className="text-[14px] font-poppins text-gray-900 dark:text-white">
            Developer Tools
          </span>
          {isDevToolsOpen ? (
            <IoChevronUpOutline size={18} color="#ef4444" />
          ) : (
            <IoChevronDownOutline size={18} color="#ef4444" />
          )}
        </button>

        {isDevToolsOpen && (
          <div className="pl-3 mt-5 space-y-5">
            <button className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl">
              Tool 1
            </button>
            <button className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl">
              Tool 2
            </button>
          </div>
        )}

        <button
          className="flex items-center space-x-3 px-2 py-2 w-full justify-between hover:bg-slate-200 rounded-2xl"
          onClick={toggleApiRef}
        >
          <span className="text-[14px] font-poppins text-gray-900 dark:text-white">
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
            <button className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl">
              Payments
            </button>
            <button className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl">
              Refunds
            </button>
            <button className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl">
              Transaction lookup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
