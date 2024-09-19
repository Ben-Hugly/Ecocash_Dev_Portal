import React from 'react'
import { logoDark, logoLight } from '../assets/Logo';
import style from '../styles';

function InputScreensLogo() {
  return (
    <div className= {`${style.InputScreensLogoWrapper}`}>

        <img src={logoLight} alt="EcoCash Developer" className={`${style.InputScreensLogo}`}/>
    </div>
 
  )
}

export default InputScreensLogo