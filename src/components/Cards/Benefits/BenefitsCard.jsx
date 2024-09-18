import React from 'react'
import style from '../../../styles';

function BenefitsCard({ icon: Icon, title, description}) {
  return (
    <div className={`${style.benefitsCardBG}`}>
  
  <div className= {`${style.benefitsCardBorder}`}>
        <h4 className={`${style.smallText} pb-3 text-left -left overflow-hidden whitespace-nowrap text-ellipsis `}>{title}</h4>
        {Icon && (
        <span className={`${style.benefitsCardSpan} `}>
        <Icon className= {`${style.benefitsCardIcon} `} />
        </span>
    )}
    </div>
    <p className={`${style.smallText}  ${style.benefitsCardDescription}`}>{description}</p>
  </div>
  )
}

export default BenefitsCard





