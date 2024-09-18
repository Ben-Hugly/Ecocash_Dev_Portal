import React from 'react'
import style from '../styles';

function Footer() {
  return (
    <footer className={`${style.footerWrapper}`}>
       
       <div className={`${style.footerBorderWrapper}`}>
        <div className={`${style.footerBorder}`}>
          <div className={`${style.footerLinkWrapper}`}>
            <a href="#" className={`${style.linkHover}`}>Terms & Condition |</a>
            <a href="#" className={`${style.linkHover}`}>Privacy Policy |</a>
            <a href="#"className={`${style.linkHover}`} >Manage cookies </a>
        </div>

        <div className={`${style.linkHover} text-[12px]`}>  © Copyright {new Date().getFullYear()} EcoCash Holdings </div>
    </div>
    </div>
</footer>
  )
}

export default Footer




