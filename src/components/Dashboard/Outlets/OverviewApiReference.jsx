import React from "react";
import OverviewFeatureCard from "../Cards/OverviewFeatureCard";
import { overviewApiOverviewData } from "../../../constants/data";

const OverviewApiReference = ({ id }) => {
  return (
    <div
      id={id}
      className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark rounded-3xl p-5"
    >
      <h2 className="dark:text-textWhite text-textBlack text-left font-poppins text-[28px] font-semibold p-4">
        API Reference
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 ">
        {overviewApiOverviewData.map((info, index) => (
          <OverviewFeatureCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default OverviewApiReference;
