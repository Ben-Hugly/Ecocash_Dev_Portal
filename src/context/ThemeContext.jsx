import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light"; // Default to light if nothing is saved
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaChange = (e) => {
      if (theme === "system") {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    // Initial setting based on system preference if "system" is selected
    if (theme === "system") {
      setTheme(mediaQuery.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [theme]);

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
