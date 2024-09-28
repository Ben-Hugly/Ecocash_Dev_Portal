import React, { useState } from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { ThemeToggle } from "../Dashboard";
import { MdArchive, MdMenu } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { profile } from "../../assets";
import Profile from "../Dashboard/Modal/Profile";

function NavbarDashboard({ toggleSidebar }) {
  const [crumbs, setCrumbs] = useState("Overview");
  const [hasNotifications, setHasNotifications] = useState(true); //For alternating between the has notification or not icons
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleProfileClick = () => {
    setIsModalOpen(true);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        {!toggleSidebar && (
          <div className="relative w-16 h-16 flex items-center cursor-pointer">
            <MdMenu
              size={28}
              className="text-textBlue hover:scale-125"
              onClick={handleMenuToggle}
            />
          </div>
        )}

        <Box m={2} className="flex flex-row">
          <Breadcrumbs arial-label="breadcrumb">
            <button className="font-medium font-poppins text-[14px] dark:text-textWhite text-textBlack hover:text-textBrightBlue">
              {crumbs}
            </button>
          </Breadcrumbs>
        </Box>
      </div>

      <div className="flex flex-row items-center">
        <ThemeToggle />
        <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3  hover:bg-textDimBlue">
          <MdArchive size={28} className="text-textBlue hover:scale-125" />
        </div>

        <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3  hover:bg-textDimBlue">
          {hasNotifications ? (
            <div className="relative flex flex-row">
              <IoIosNotifications
                size={28}
                className="text-textBlue hover:scale-125"
              />
              <div className="w-2 h-2 rounded-full bg-red-600 absolute right-1"></div>
            </div>
          ) : (
            <IoIosNotifications
              size={28}
              className="text-textBlue hover:scale-125"
            />
          )}
        </div>

        <div
          className="cursor-pointer rounded-full p-3 "
          onClick={handleProfileClick}
        >
          <img src={profile} width={44} height={44} />
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && <Profile handleModalClose={handleModalClose} />}

      {/* Menu Content (conditionally displayed) */}
      {isMenuOpen && (
        <div className="absolute top-16 left- shadow-md rounded-lg p-4 text-sm font poppins border-buttonBluePastelLight dark:border-borderBlue border rounder-3xl bg-componentsBackgroundLight dark:bg-componentsBackgroundDark  text-textBlack dark:text-textWhite">
          {/* Menu Items */}
          <button className="block px-4 py-2 hover:bg-gray-100">
            Overview
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100">
            My Applications
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100">
            Documentation
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100">
            Documentation Overview
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100">
            Developer Tools
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100">
            API Reference
          </button>
        </div>
      )}
    </div>
  );
}

export default NavbarDashboard;
