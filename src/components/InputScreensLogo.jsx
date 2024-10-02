import React from "react";
import { logoDark, logoLight } from "../assets/Logo";
import style from "../styles";

function InputScreensLogo() {
  return (
    <div className={`${style.InputScreensLogoWrapper}`}>
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
    </div>
  );
}

export default InputScreensLogo;
