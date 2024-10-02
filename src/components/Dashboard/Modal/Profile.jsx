import React, { useState, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { profile } from "../../../assets";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline, IoChevronDownOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDone, MdArchive, MdLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";

function Profile({ handleModalClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsOpen(false); // Close theme if open
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed inset-0 items-end justify-start z-50 bg-black bg-opacity-50 font-poppins flex flex-col text-left">
      <button
        onClick={handleModalClose}
        className="bg-textRed text-white px-4 py-4 rounded-full hover:bg-red-700 mb-4 absolute top-5 right-5"
      >
        <TfiClose size={12} className="text-textBlack" />
      </button>
      <div className="p-2 w-full max-w-[280px] shadow-lg dark:bg-componentsBackgroundDark bg-backgroundLight border rounded-xl border-buttonBluePastelLight dark:border-borderBlue text-textBlack dark:text-textWhite mt-20 mr-3">
        <div className="flex items-center justify-center flex-col font-poppins text-textBlack dark:text-textWhite mt-5">
          <img src={profile} className="w-16 h-16" />
          <span className="text-sm font-medium">{"Inno Reza"}</span>
          <span className="text-[11px] font-medium opacity-40">
            {"inno@hughly.studo"}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center font-poppins mt-4 text-textBlack dark:text-textWhite  dark:hover:bg-darkBgHover p-2 rounded-2xl transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight">
          <div className="flex flex-row items-center font-poppins">
            <IoIosNotifications size={20} className="text-textBlue" />
            <span className="ml-3 text-sm">Notifications</span>
          </div>

          <div className="bg-textRed w-5 h-4 rounded-full flex items-center justify-center px-3">
            <span className="text-textWhite font-poppins text-xs ">3</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center font-poppins mt-4 text-textBlack dark:text-textWhite   dark:hover:bg-darkBgHover p-2 border-b border-buttonBluePastelLight dark:border-borderBlue pb-5 transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight">
          <div className="flex flex-row items-center font-poppins">
            <MdArchive size={20} className="text-textBlue" />
            <span className="ml-3 text-sm">Archive</span>
          </div>

          <IoChevronForwardOutline size={16} className="text-dangerDark" />
        </div>
        <div className="flex flex-col justify-between items-center font-poppins mt-3 text-textBlack dark:text-textWhite p-1 ">
          <div
            className="flex flex-row items-center font-poppins justify-between w-full
            dark:hover:bg-darkBgHover p-1 rounded-2xl transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight"
            onClick={handleThemeClick}
          >
            <div className="flex flex-row">
              <WiMoonAltThirdQuarter size={20} className="text-textBlue" />
              <span className="ml-3 text-sm">Theme</span>
            </div>
            {isOpen ? (
              <IoChevronDownOutline size={16} className="text-dangerDark" />
            ) : (
              <IoChevronForwardOutline size={16} className="text-dangerDark" />
            )}
          </div>

          {isOpen ? (
            <div className="flex flex-col justify-center  text-[14px] font-normal mt-5 dark:bg-backgroundDark bg-componentsBackgroundLight rounded-2xl  w-full gap-2 items-center p-2">
              <div className="flex flex-row items-center font-poppins justify-between w-full border-b border-buttonBluePastelLight dark:border-borderBlue p-3">
                <div className="flex flex-row">
                  <MdOutlineLightMode
                    size={20}
                    className="text-textBlack dark:text-textBlue"
                  />
                  <span className="ml-3 text-sm ">Light</span>
                </div>
                <input
                  type="radio"
                  value="light"
                  onChange={() => setTheme("light")}
                  checked={theme === "light"}
                  name="theme"
                  className={`form-radio border-2 border-textBlack dark:border-dimBlue rounded-full w-4 h-4 bg-none mr-2 appearance-none flex-shrink-0 ${
                    theme === "light" ? "bg-pearlBlue  p-1" : ""
                  }`}
                />
              </div>
              <div className="flex flex-row items-center font-poppins justify-between w-full border-b border-buttonBluePastelLight dark:border-borderBlue p-3">
                <div className="flex flex-row">
                  <MdDarkMode
                    size={20}
                    className="text-textBlack dark:text-textBlue"
                  />
                  <span className="ml-3 text-sm opacity">Dark</span>
                </div>
                <input
                  type="radio"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => setTheme("dark")}
                  name="theme"
                  className={`form-radio border-2 border-textBlack dark:border-dimBlue rounded-full w-4 h-4 bg-none mr-2 appearance-none flex-shrink-0 ${
                    theme === "dark" ? "bg-pearlBlue  p-1" : ""
                  }`}
                />
              </div>
              <div className="flex flex-row items-center font-poppins justify-between w-full   p-3 ">
                <div className="flex flex-row">
                  <WiMoonAltThirdQuarter
                    size={20}
                    className="text-textBlack dark:text-textBlue"
                  />
                  <span className="ml-3 text-sm">System</span>
                </div>
                <input
                  type="radio"
                  value="system"
                  name="theme"
                  onChange={() => {
                    setTheme("system");
                    // Immediately check and set to current system preference
                    const mediaQuery = window.matchMedia(
                      "(prefers-color-scheme: dark)"
                    );
                    setTheme(mediaQuery.matches ? "dark" : "light");
                  }}
                  checked={theme === "system"}
                  className={`form-radio border-2 border-textBlack dark:border-dimBlue rounded-full w-4 h-4 bg-none mr-2 appearance-none flex-shrink-0 ${
                    theme === "system" ? "bg-pearlBlue  p-1" : ""
                  }`}
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-row justify-between items-center font-poppins mt-4 text-textBlack dark:text-textWhite  transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight dark:hover:bg-darkBgHover p-2 border-t border-buttonBluePastelLight dark:border-borderBlue pt-5">
          <div className="flex flex-row items-center font-poppins ">
            <LuSettings2 size={20} className="text-textBlue" />
            <span className="ml-3 text-sm">Settings</span>
          </div>

          <IoChevronForwardOutline size={16} className="text-dangerDark" />
        </div>

        <div className="flex flex-row justify-between items-center font-poppins mt-4 border-b border-t  dark:bg-componentsBackgroundDark  text-textBlack dark:text-textWhite  border-buttonBluePastelLight dark:border-borderBlue py-5  dark:hover:bg-darkBgHover p-2  transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight">
          <div className="flex flex-row items-center font-poppins bg-rounded-3xl">
            <TbWorld size={20} className="text-textBlue" />
            <span className="ml-3 text-sm">Community Profile</span>
          </div>

          <IoChevronForwardOutline size={16} className="text-dangerDark" />
        </div>

        <div className="flex flex-row  items-center font-poppins mt-4 text-textBlack dark:text-textWhite  transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight dark:hover:bg-darkBgHover p-2 rounded-2xl ">
          <img src={profile} className="w-6 h-6" />
          <div className="flex flex-col ml-3 ">
            <span className="text-[13px]">Innocent Reza</span>
            <span className="text-[11px] font-medium opacity-40">
              {"innoreza@gmail.com"}
            </span>
          </div>
        </div>
        <div className="flex flex-row  items-center font-poppins mt-4 text-textBlack dark:text-textWhite justify-between   dark:hover:bg-darkBgHover p-2 rounded-2xl transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight">
          <div className="flex flex-row  items-center">
            <img src={profile} className="w-6 h-6" />
            <div className="flex flex-col ml-3 ">
              <span className="text-[13px]">Inno Reza</span>
              <span className="text-[11px] font-medium opacity-40">
                {"inno@hugly.com"}
              </span>
            </div>
          </div>

          <MdOutlineDone size={16} className="text-dangerDark" />
        </div>

        <div className="flex flex-row  items-center font-poppins mt-4 text-textBlack dark:text-textWhite transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight dark:hover:bg-darkBgHover p-2 rounded-2xl ">
          <FaPlus size={20} className="text-textBlue" />
          <span className="ml-3 text-sm">Add Account</span>
        </div>
        <div className="flex flex-row items-center font-poppins mt-4 border-t  dark:bg-componentsBackgroundDark bg-backgroundLight text-textBlack dark:text-textWhite  border-buttonBluePastelLight dark:border-borderBlue  pt-3  p-2   rounded-b-2xl transition-all duration-300 ease-in hover:scale-105 hover:bg-componentsBackgroundLight dark:hover:bg-darkBgHover">
          <MdLogout size={20} className="text-textBlue" />
          <span className="ml-3 text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
