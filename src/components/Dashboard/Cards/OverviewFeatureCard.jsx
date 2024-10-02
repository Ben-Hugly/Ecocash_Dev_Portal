import React from "react";
import style from "../../../styles";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

function OverviewFeatureCard({ image, title, content, link }) {
  return (
    <div className="border rounded-3xl border-buttonBluePastelLight dark:border-borderBlue transition-all duration-300 ease-in-out hover:transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-3xl transition-all duration-300 ease-in-out"
      />
      <div className="bg-white dark:bg-primary rounded-b-3xl p-5 w-full transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center text-center transition-all duration-300 ease-in-out">
          <h3 className="text-[14px] dark:text-textWhite text-textBlack font-poppins transition-all duration-300 ease-in-out">
            {title}
          </h3>
          <Link to={link}>
            <MdChevronRight className="w-6 h-6 text-red-500 transition-all duration-300 ease-in-out" />
          </Link>
        </div>
        <div className="border-b border-buttonBluePastelLight dark:border-borderBlue pb-1 mb-2 transition-all duration-300 ease-in-out"></div>
        <p className="text-textBlack dark:text-textWhite font-poppins font-light text-[13px] text-left sm:text-center md:text-left w-full opacity-75 transition-all duration-300 ease-in-out">
          {content}
        </p>
      </div>
    </div>
  );
}

export default OverviewFeatureCard;
