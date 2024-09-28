import React from "react";
import style from "../../styles";
import BenefitsCard from "../Cards/Benefits/BenefitsCard";
import { BenefitsData } from "../../constants/data";

function Benefits() {
  return (
    <div className={`${style.benefitsWrapper}`}>
      {BenefitsData.map((nav, index) => (
        <BenefitsCard
          key={index}
          title={nav.title}
          description={nav.description}
          icon={nav.icon}
        />
      ))}
    </div>
  );
}

export default Benefits;
