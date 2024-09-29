import React, { useState, useEffect } from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { ThemeToggle } from "../Dashboard";
import { MdArchive, MdMenu } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { profile } from "../../assets";
import Profile from "../Dashboard/Modal/Profile";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { Link as ButtonLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavbarDashboard({ toggleSidebar }) {
  const location = useLocation(); // Get the current location
  const [crumbs, setCrumbs] = useState([]);
  const [hasNotifications, setHasNotifications] = useState(true); //For alternating between the has notification or not icons
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDevToolsOpen, setDevToolsOpen] = useState(false);
  const [isApiRefOpen, setApiRefOpen] = useState(false);

  const toggleDevTools = () => {
    setDevToolsOpen(!isDevToolsOpen);
    if (isApiRefOpen) setApiRefOpen(false); // Close API Reference if open
  };

  const toggleApiRef = () => {
    setApiRefOpen(!isApiRefOpen);
    if (isDevToolsOpen) setDevToolsOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleProfileClick = () => {
    setIsModalOpen(true);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /*
  // Function to map paths to breadcrumb names
  const getBreadcrumbName = (path) => {
    switch (path) {
      case "/dashboard/home":
        return "Overview";
      case "/dashboard/documentation":
        return "Documentation Overview";
      case "/dashboard/myapps":
        return "My Applications";
      // Add more cases as needed
      default:
        return "Overview"; // Default value
    }
  };*/

  // Function to map paths to breadcrumb names
  const getBreadcrumbs = (path) => {
    const pathParts = path.split("/").filter(Boolean); // Split and filter empty parts
    const breadcrumbItems = pathParts.map((part, index) => {
      const fullPath = `/${pathParts.slice(0, index + 1).join("/")}`;
      const displayName = part.charAt(0).toUpperCase() + part.slice(1); // Capitalize first letter
      return { name: displayName, path: fullPath };
    });
    return breadcrumbItems;
  };

  useEffect(() => {
    setCrumbs(getBreadcrumbs(location.pathname)); // Update breadcrumbs on location change
  }, [location.pathname]);

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

        <Box m={2} className="flex-row hidden md:block">
          <Breadcrumbs aria-label="breadcrumb">
            {crumbs.map((crumb, index) => (
              <Link
                key={index}
                component={ButtonLink}
                to={crumb.path}
                color="inherit"
                className="font-medium font-poppins text-[14px] dark:text-textWhite text-textBlack hover:text-textBrightBlue"
              >
                {crumb.name} {/* Render the name, not the entire object */}
              </Link>
            ))}
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
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm"
          onClick={handleModalClose}
        >
          <div
            className="absolute top-16  p-4 text-sm font poppins border-buttonBluePastelLight dark:border-borderBlue border rounded-3xl bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-textBlack dark:text-textWhite text-left "
            onClick={handleModalClose}
          >
            {/* Menu Items */}
            <ButtonLink
              to="/dashboard/home"
              className="block px-4 py-2 rounded-3xl"
              onClick={handleMenuToggle}
            >
              Overview
            </ButtonLink>
            <ButtonLink
              to="/dashboard/myapps"
              className="block px-4 py-4"
              onClick={handleMenuToggle}
            >
              My Applications
            </ButtonLink>

            <ButtonLink
              to="/dashboard/documentation"
              className="block px-4 py-4 hover:bg-gray-100"
              onClick={handleMenuToggle}
            >
              Documentation Overview
            </ButtonLink>

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
                <ButtonLink
                  to="/dashboard/documentation/dev/byi"
                  className="flex text-[13px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 space-y-2 py-4 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  Build Your Integration
                </ButtonLink>
                {/* Add similar onClick={handleMenuClose} for other links */}
                <ButtonLink
                  to="/dashboard/documentation/dev/c2b"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  C2B
                </ButtonLink>
                <ButtonLink
                  to="/dashboard/documentation/dev/b2c"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  B2C
                </ButtonLink>
                <ButtonLink
                  to="/dashboard/documentation/dev/b2b"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  B2B
                </ButtonLink>
                <ButtonLink
                  to="/dashboard/documentation/dev/reversal"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  Reversals
                </ButtonLink>
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
                <ButtonLink
                  to="/dashboard/documentation/api/payments"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  Payments
                </ButtonLink>
                <ButtonLink
                  to="/dashboard/documentation/api/refunds"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  Refunds
                </ButtonLink>
                <ButtonLink
                  to="/dashboard/documentation/api/lookup"
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 px-2 py-2 w-full rounded-2xl"
                  onClick={handleMenuToggle}
                >
                  Transaction lookup
                </ButtonLink>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarDashboard;
