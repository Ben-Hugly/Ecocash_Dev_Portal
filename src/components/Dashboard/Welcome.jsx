import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
function Welcome({ username }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      <div className="flex flex-col text-left mb-4 md:mb-0">
        <span className="text-[30px] md:text-[45px] font-poppins font-semibold text-textBlack dark:text-textWhite">
          Welcome {username}!
        </span>
        <span className="font-poppins max-w-[640px] text-sm text-textBlack dark:text-textWhite">
          You can create new applications to access APIs and associated
          credentials, reference material, etc.
        </span>
      </div>

      <Link
        to={"/dashboard/myapps/new"}
        className="bg-textDimBlue hover:bg-textBlue text-white font-poppins px-4 py-2 h-[44px] rounded-3xl flex items-center text-sm ml-0 md:ml-2 transition-all duration-300 ease-in-out hover:scale-105"
      >
        New Application
        <FiPlus className="ml-2" size={24} />
      </Link>
    </div>
  );
}

export default Welcome;
