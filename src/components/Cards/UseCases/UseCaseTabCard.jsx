import React from "react";
import style from "../../../styles";
import { FaAngleRight } from "react-icons/fa";

const UseCaseTabCard = ({ image, title, content }) => {
  return (
    <div className="hover:scale-105">
      <img
        src={image}
        alt={title}
        className={`${style.UseCaseDropdownTabCardImg}`}
      />
      <div className={`${style.UseCaseDropdownTabCardBG}`}>
        <div className={`${style.UseCaseDropdownTabCardWrapper}`}>
          <h3 className={`${style.UseCaseDropdownTabCardTitle}`}>{title}</h3>
          <FaAngleRight color="#ff0000" />
        </div>
        <div className={`${style.UseCaseDropdownTabCardBorder}`}></div>
        <p className={`${style.UseCaseDropdownTabCardContent}`}>{content}</p>
      </div>
    </div>
  );
};

export default UseCaseTabCard;
