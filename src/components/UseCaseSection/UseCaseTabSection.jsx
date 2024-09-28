import React, { useState } from "react";
import UseCaseTabCard from "../Cards/UseCases/UseCaseTabCard";
import { useCaseData } from "../../constants/data";
import style from "../../styles";
import { FaAngleRight } from "react-icons/fa";
function UseCaseTabSection() {
  const [activeTab, setActiveTab] = useState("Large Enterprise");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={`${style.useCaseTabSectionBG}`}>
      <div className={`${style.useCaseTabSectionWrapper}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {[
              "Large Enterprise",
              "Small to Medium Business",
              "Merchant",
              "Individual",
            ].map((tab) => (
              <button
                key={tab}
                className={`md:px-4 px-2 md:py-2 py-0 md:text-[14px] text-[12px] hover:bg-hoverbg hover:text-textDimBlue hover:scale-105 hover:rounded-3xl font-poppins font-medium ${
                  activeTab === tab
                    ? " bg-secondary text-bgWhite dark:bg-bgWhite dark:text-secondary rounded-3xl"
                    : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <a
            href="#"
            className={`${style.useCaseTabSectionLink} sm:text-[10px] hover:scale-105`}
          >
            See all
            <svg
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className={`${style.useCaseTabSectionCardWrapper}`}>
          {useCaseData[activeTab].map((useCase, index) => (
            <UseCaseTabCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseCaseTabSection;
