import React from "react";
import OverviewFeatureCard from "./Cards/OverviewFeatureCard";
import { overviewDeveloperData } from "../../constants/data";

const OverviewDeveloperTools = ({ id }) => {
  return (
    <div id={id} className="bg-componentsBackgroundDark rounded-3xl p-5">
      <h2 className="dark:text-textWhite text-textBlack text-left font-poppins text-[28px] font-semibold p-4">
        Developer Tools
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {overviewDeveloperData.map((info, index) => (
          <OverviewFeatureCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default OverviewDeveloperTools;
