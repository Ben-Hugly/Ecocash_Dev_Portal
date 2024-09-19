import React from 'react';
import { Footer } from '../components'
import style from '../styles';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
const animationData = await import('../assets/success.json');
import { InputScreensLogo }  from "../components"

function SignUpSuccess() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };
  
  
  return (
    <>
    <div className="h-screen">
  
      <InputScreensLogo/>
    
    <div className={`${style.form} flex flex-col items-center justify-center`}>

          <form className= {`${style.SignUpSuccessContainer}`}>

                    <div className= {`${style.SignUpSuccessLottie}`}>
                        <Lottie options={defaultOptions} height={240} width={240} />
                    </div>
                        
                    <div className={`${style.SignUpSuccessTextWrapper}`}>

                          <span className= {`${style.lgText}`}>Success</span>
                          <span className= {`${style.smallText}`}>You have successfully registered your account. Please check your email and follow instructions.</span>

                    </div>
                    <Link
                      to="/signin" 
                      variant ="gradient"
                      size="sm"
                      type="submit"
                      className= {` ${style.linkButtons} mt-8 `}>
                      Continue to My Account
                    </Link>
                    
          </form>
    </div>
    </div>
  <Footer/>
 
  </>
 
  )
}

export default SignUpSuccess