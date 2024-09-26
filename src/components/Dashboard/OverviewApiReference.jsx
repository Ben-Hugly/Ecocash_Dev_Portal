import React from "react";
import OverviewFeatureCard from "./Cards/OverviewFeatureCard";
import { overviewApiOverviewData } from "../../constants/data";

const OverviewApiReference = ({ id }) => {
  return (
    <div id={id} className="bg-componentsBackgroundDark rounded-3xl p-5">
      <h2 className="dark:text-textWhite text-textBlack text-left font-poppins text-[28px] font-semibold p-4">
        API Reference
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {overviewApiOverviewData.map((info, index) => (
          <OverviewFeatureCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default OverviewApiReference;
