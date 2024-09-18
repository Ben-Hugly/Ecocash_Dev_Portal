import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import style from '../../../styles';

const GettingStartedCard = ({ title, links, icon: Icon }) => {
  return (
    <div className={`${style.GettingStartedbg}`}>

    <div className=" items-center mb-4">
        <div className={`${style.GettingStartedCardBorder}`}>
            <h3 className={`${style.smallText} pb-3 text-start font-semibold text-[15px]`}>{title}</h3>
            {Icon && (
                <span className={`${style.GettingStartedCardSpan}`}>
                <Icon className= {`${style.GettingStartedCardIcon}`}/>
                </span>
          )}
        </div>
        
    </div>


      <div className="space-y-3">
            {links.map((link, index) => (
              <a key={index} href={link.url} className={`${style.smallTextBlue}`}>
                {link.label}
                <AiOutlineRight className= {`${style.GettingStartedCardRightOutline}`}/>
              </a>
            ))}
      </div>
  </div>
  );
};

export default GettingStartedCard;