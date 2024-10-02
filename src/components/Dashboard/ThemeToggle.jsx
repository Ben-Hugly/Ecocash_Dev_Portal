import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  console.log("Current Theme Toogle:", theme);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3 hover:bg-textDimBlue"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode
          size={28}
          className="text-yellow-400 hover:scale-125"
        />
      ) : (
        <MdDarkMode size={28} className="text-textBlue hover:scale-125" />
      )}
    </div>
  );
}

export default ThemeToggle;
