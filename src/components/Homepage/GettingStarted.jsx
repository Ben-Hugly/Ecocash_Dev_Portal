import React from "react";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";
import style from "../../styles";
import GettingStartedCard from "../Cards/GettingStarted/GettingStartedCard";
import { GettingStartedData } from "../../constants/data";

const GettingStarted = () => {
  return (
    <div className={`${style.gettingStartedWrapper}`}>
      <IoIosRocket color="#EC2125" size={45} />
      <span className={`${style.headings2} mt-3`}>Getting Started</span>

      <div className={`${style.gettingStartedText} `}>
        Resources and guides to help you through every step of the development
        journey
      </div>

      <div className={`${style.gettingStartedCardWrapper}`}>
        {GettingStartedData.map((nav, index) => (
          <GettingStartedCard
            key={index}
            title={nav.title}
            links={nav.links}
            icon={nav.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
