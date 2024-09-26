import React from "react";
import style from "../../../styles";
import { MdChevronRight } from "react-icons/md";

function OverviewFeatureCard({ image, title, content }) {
  return (
    <div className="border rounded-3xl border-buttonBluePastelLight dark:border-borderBlue">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-3xl"
      />
      <div className="bg-white dark:bg-primary rounded-b-3xl p-5 w-full">
        <div className="flex justify-between items-center text-center ">
          <h3 className="text-[14px] dark:text-textWhite text-textBlack font-poppins">
            {title}
          </h3>
          <MdChevronRight className="w-6 h-6 text-red-500" />
        </div>
        <div className="border-b border-buttonBluePastelLight dark:border-borderBlue pb-1 mb-2"></div>
        <p className="text-textBlack dark:text-textWhite font-poppins font-light text-[13px] text-left sm:text-center md:text-left w-full opacity-75">
          {content}
        </p>
      </div>
    </div>
  );
}

export default OverviewFeatureCard;
