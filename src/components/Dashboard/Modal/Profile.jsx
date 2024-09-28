import React from "react";
import { TfiClose } from "react-icons/tfi";
import { profile } from "../../../assets";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";

function Profile({ handleModalClose }) {
  return (
    <div className="fixed inset-0 items-end justify-start z-50 bg-black bg-opacity-50 font-poppins flex flex-col text-left">
      <button
        onClick={handleModalClose}
        className="bg-red-600 text-white px-4 py-4 rounded-full hover:bg-red-700 mb-4 absolute top-5 right-5"
      >
        <TfiClose size={12} className="text-textBlack" />
      </button>
      <div className="p-6 w-full max-w-[270px] shadow-lg dark:bg-componentsBackgroundDark bg-backgroundLight border rounded-xl border-buttonBluePastelLight dark:border-borderBlue text-textBlack dark:text-textWhite mt-20 mr-3">
        <div className="flex items-center justify-center flex-col font-poppins text-textBlack dark:text-textWhite">
          <img src={profile} className="w-16 h-16" />
          <span className="text-sm font-medium">{"Inno Reza"}</span>
          <span className="text-[11px] font-medium opacity-40">
            {"inno@hughly.studo"}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center font-poppins mt-4 text-textBlack dark:text-textWhite  hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2 rounded-2xl hover:scale-105">
          <div className="flex flex-row items-center font-poppins">
            <WiMoonAltThirdQuarter size={20} className="text-pearlBlue" />
            <span className="ml-3 text-sm">Theme</span>
          </div>

          <IoChevronForwardOutline size={16} className="text-dangerDark" />
        </div>

        <div className="flex flex-row justify-between items-center font-poppins mt-4 text-textBlack dark:text-textWhite  hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2 rounded-2xl hover:scale-105">
          <div className="flex flex-row items-center font-poppins">
            <LuSettings2 size={20} className="text-pearlBlue" />
            <span className="ml-3 text-sm">Settings</span>
          </div>

          <IoChevronForwardOutline size={16} className="text-dangerDark" />
        </div>

        <div className="flex flex-row justify-between items-center font-poppins mt-4 border-b border-t  dark:bg-componentsBackgroundDark bg-backgroundLight text-textBlack dark:text-textWhite  border-buttonBluePastelLight dark:border-borderBlue py-3  hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2  hover:scale-105">
          <div className="flex flex-row items-center font-poppins">
            <TbWorld size={20} className="text-pearlBlue" />
            <span className="ml-3 text-sm">Community Profile</span>
          </div>

          <IoChevronForwardOutline size={16} className="text-dangerDark" />
        </div>

        <div className="flex flex-row  items-center font-poppins mt-4 text-textBlack dark:text-textWhite  hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2 rounded-2xl hover:scale-105">
          <img src={profile} className="w-6 h-6" />
          <div className="flex flex-col ml-3 ">
            <span className="text-[13px]">Innocent Reza</span>
            <span className="text-[11px] font-medium opacity-40">
              {"innoreza@gmail.com"}
            </span>
          </div>
        </div>
        <div className="flex flex-row  items-center font-poppins mt-4 text-textBlack dark:text-textWhite justify-between  hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2 rounded-2xl hover:scale-105">
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

        <div className="flex flex-row  items-center font-poppins mt-4 text-textBlack dark:text-textWhite  hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2 rounded-2xl hover:scale-105">
          <FaPlus size={20} className="text-pearlBlue" />
          <span className="ml-3 text-sm">Add Account</span>
        </div>
        <div className="flex flex-row items-center font-poppins mt-4 border-t  dark:bg-componentsBackgroundDark bg-backgroundLight text-textBlack dark:text-textWhite  border-buttonBluePastelLight dark:border-borderBlue  pt-3 hover:bg-lightBgHover dark:hover:bg-darkBgHover p-2  hover:scale-105 rounded-b-2xl">
          <MdLogout size={20} className="text-pearlBlue" />
          <span className="ml-3 text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
