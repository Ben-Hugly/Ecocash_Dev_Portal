import React from 'react';
import style from '../../../styles';


const UseCaseTabCard = ({ image, title, content }) => {
  return (
    <div className="">
      <img src={image} alt={title} className={`${style.UseCaseDropdownTabCardImg}`} />
      <div className={`${style.UseCaseDropdownTabCardBG}`}>
        <div className={`${style.UseCaseDropdownTabCardWrapper}`}>
            <h3 className= {`${style.UseCaseDropdownTabCardTitle}`}>{title}</h3>
            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <div className= {`${style.UseCaseDropdownTabCardBorder}`}></div>
        <p className={`${style.UseCaseDropdownTabCardContent}`}>{content}</p>
      </div>
    </div>
  );
};

export default UseCaseTabCard;