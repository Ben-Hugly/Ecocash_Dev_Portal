import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Axios } from "../../config";
import style from "../../styles";
import { logoDark, logoLight } from "../../assets/Logo";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {};

  //logo change based on the theme
  const [theme, setTheme] = useState("light"); // Initial theme is light
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`${style.navbarContainer}`}>
      <div className={`${style.navbarWrapper}`}>
        <div className={`${style.navbarIconWrapper} relative`}>
          <img
            src={logoLight} // Change logo based on the theme
            alt="EcoCash Developer"
            className={`${style.navbarLogo} block dark:hidden`}
          />
          <img
            src={logoDark} // Change logo based on the theme
            alt="EcoCash Developer"
            className={`${style.navbarLogo} hidden dark:block`}
          />
        </div>

        {/* Menu icon for mobile view */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AiOutlineMenu size={24} />
        </div>

        {/* Buttons for login, SignUp, and logout */}
        <div
          className={`flex items-center space-x-2 lg:space-x-6 md:space-x-4  ${
            menuOpen
              ? "flex-col justify-between gap-5 absolute dark:bg-backgroundDark bg-backgroundLight mt-16 p-4 rounded-3xl right-6 top-0  shadow-lg md:hidden"
              : "hidden md:flex"
          }`}
        >
          <div className="flex md:hidden mb-2">
            <AiOutlineClose
              size={20}
              className="cursor-pointer  dark:text-textWhite text-textBlack text-right"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {isLoggedIn ? (
            {
              /** navigate to dashboard*/
            }
          ) : (
            <>
              <Link
                to="/dashboard"
                className={`${style.navbarLoginButton} transition-all duration-700 ease-in-out hover:scale-105 `}
              >
                <span className="text-[14px] font-poppins">Log In</span>
                <FaUser size={15} />
              </Link>
              <Link
                to="/signup"
                className={`${style.navbarSignupButton} transition-all duration-700 ease-in-out hover:scale-105`}
              >
                <span className="text-[14px] font-poppins">Sign Up</span>
                <AiOutlineRight size={16} />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
