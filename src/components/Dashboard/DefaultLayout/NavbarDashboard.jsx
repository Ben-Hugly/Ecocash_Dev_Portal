import React, { useState, useEffect } from "react";
import { Box, Breadcrumbs, Link, Menu, MenuItem, Button } from "@mui/material";
import { MdArchive, MdMenu, MdArrowDropDown } from "react-icons/md";
import { ThemeToggle } from "..";
import { IoIosNotifications } from "react-icons/io";
import { profile } from "../../../assets";
import Profile from "../Modal/Profile";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { Link as ButtonLink } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

function NavbarDashboard({ toggleSidebar }) {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);
  const [hasNotifications, setHasNotifications] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDevToolsOpen, setDevToolsOpen] = useState(false);
  const [isApiRefOpen, setApiRefOpen] = useState(false);
  const { name: appName } = useParams();
  const [selectedOption, setSelectedOption] = useState("General");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const toggleDevTools = () => {
    setDevToolsOpen(!isDevToolsOpen);
    if (isApiRefOpen) setApiRefOpen(false);
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

  const getCustomBreadcrumbs = (path) => {
    const breadcrumbMap = {
      "/dashboard": "Overview",
      "/dashboard/home": "Overview",
      "/dashboard/documentation": "Documentation",
      "/dashboard/myapps": "My Applications",
      "/dashboard/myapps/new": "Add New Application",
      "/dashboard/myapps/transaction": "Transactions",
      "/dashboard/myapps/transaction/reverse": "Reversal",
      "/dashboard/myapps/transaction/reversefailed": "Reversal",
      "/dashboard/myapps/transaction/reversesuccess": "Reversal",
      "/dashboard/myapps/transaction/reversedetails": "2094",
      "/dashboard/documentation/dev": "Developer Tools",
      "/dashboard/documentation/dev/byi": "Build Your Integration",
      "/dashboard/documentation/dev/c2b": "C2B",
      "/dashboard/documentation/dev/b2c": "B2C",
      "/dashboard/documentation/dev/b2b": "B2B",
      "/dashboard/documentation/api": "API Reference",
      "/dashboard/documentation/dev/reversal": "Reversals",
      "/dashboard/documentation/api/payments": "Payments",
      "/dashboard/documentation/api/refunds": "Refunds",
      "/dashboard/documentation/api/lookup": "Transaction Lookup",
    };

    const pathSegments = path.split("/").filter(Boolean);
    const crumbs = pathSegments.slice(1).map((segment, index) => {
      const currentPath = `/${pathSegments.slice(0, index + 2).join("/")}`;
      const name =
        currentPath === "/dashboard/myapps/details"
          ? decodeURIComponent(appName)
          : breadcrumbMap[currentPath] ||
            segment.charAt(0).toUpperCase() + segment.slice(1);

      return {
        name,
        path: currentPath,
      };
    });
    return crumbs;
  };

  useEffect(() => {
    const currentPath = location.pathname;
    setCrumbs(getCustomBreadcrumbs(currentPath));
    console.log(crumbs);
  }, [location.pathname]);

  const isDetailsPage = location.pathname.startsWith(
    "/dashboard/myapps/details"
  );

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
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<span className="dark:text-white text-black">/</span>}
            sx={{ textDecoration: "none" }}
          >
            {crumbs.map((crumb, index) => (
              <Link
                key={index}
                component={ButtonLink}
                underline="hover"
                color="inherit"
                to={crumb.path} //"/dashboard/myapps"
                className="dark:text-textWhite text-textBlack no-underline hover:underline hover:scale-105"
                sx={{ textDecoration: "none" }}
              >
                {index === crumbs.length - 1 && isDetailsPage ? (
                  <Button
                    className="text-textWhite flex  items-center"
                    onClick={handleDropdownClick}
                    endIcon={<IoChevronDown color="rgb(183, 20, 20)" />}
                  >
                    {`${selectedOption}`}
                  </Button>
                ) : (
                  crumb.name
                )}
              </Link>
            ))}
          </Breadcrumbs>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {["General", "Transactions", "User & Permissions"].map((option) => (
              <MenuItem key={option} onClick={() => handleOptionSelect(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>

      <div className="flex flex-row items-center">
        <ThemeToggle />
        <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3 hover:bg-textDimBlue transition-all duration-300 ease-in-out hover:scale-105">
          <MdArchive size={28} className="text-textBlue hover:scale-125" />
        </div>

        <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3 hover:bg-textDimBlue transition-all duration-300 ease-in-out hover:scale-105">
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
          className="cursor-pointer rounded-full p-3"
          onClick={handleProfileClick}
        >
          <img src={profile} width={44} height={44} alt="Profile" />
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
            className="absolute top-16 p-4 text-sm font poppins border-buttonBluePastelLight dark:border-borderBlue border rounded-3xl bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-textBlack dark:text-textWhite text-left"
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
                  className="flex text-[14px] font-poppins text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-darkBgHover items-center space-x-3 py-2 w-full rounded-2xl"
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
                  Transaction Lookup
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
