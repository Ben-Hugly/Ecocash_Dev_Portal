import React, { useState } from 'react';
import { Footer } from '../components';
import style from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { InputScreensLogo,QR }  from "../components"


function SignUpMobileAuth() {
  // Initialize state variables
  const [otp, setOtp] = useState('');
  const [device, setDevice] = useState('')
  const [termsChecked, setTermsChecked] = useState(false);
  const navigate = useNavigate();



  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    
  };

  return (
    <>
  
      <InputScreensLogo/>
        <div className={`${style.form} gap-4`}>
              <h2 className={`${style.PasswordRecoveryHeading} -mt-7 `}>Mobile Authenticator Setup</h2>
              <h3 className={`${style.smallText} font-semibold mt-10`}>Mobile Authenticator Setup </h3>


              <div className="flex flex-col gap-6 mt-8">
                
                    <h3 className={`${style.smallText} font-thin text-left`}>
                        You need to set up mobile authenticator to active your account.
                    </h3>

                    <h3 className={`${style.smallText} font-thin text-left`}>
                        Install  
                        <Link to="" className={`${style.links} ml-2`}>FreeOTP</Link>  on your mobile phone. Open the application and scan the QR code below.
                    </h3>
              </div>
              
            <QR/>

            <div className= 'flex flex-col gap-1 mt-3'>
                <h3 className={`${style.smallText} font-semibold text-left`}>Unable to scan? </h3>
                <span className={`${style.smallText} font-thin text-left w-full`}>
                    Enter the one-time code provided by the application and click Submit to finish the setup. Provide a device name to help you manage your OTP devices.
                 </span>
              </div>
                 <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-10">

                 <div className="form-group">
                    <div className="relative">
                         <input
                           type="text"
                           id="otp"
                           name="otp"
                           placeholder="One Time Password"
                           className={`${style.inputs}`}
                           value={otp}
                           onChange={(e) => setOtp(e.target.value)}/>

                           <label htmlFor="otp" className={`${style.inputLabels}`}>One Time Password</label>

                     </div>
                </div>

                        <div className="form-group">
                              <div className="relative">

                                  <input
                                    type="text"
                                    id="device"
                                    name="device"
                                    placeholder="Device Name"
                                    className={`${style.inputs}`}
                                    value={device}
                                    onChange={(e) => setDevice(e.target.value)}/>

                                  <label htmlFor="username" className={`${style.inputLabels}`}>Device Name</label>

                              </div>
                        </div>


                        <div className="form-group">
                            <label htmlFor="terms" className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="terms"
                                  name="terms"
                                  value="terms"
                                  checked={termsChecked}
                                  onChange={(e) => setTermsChecked(e.target.checked)}
                                  className="ml-3  border-borderBlueSecond "/>
                                  <span className= {`${style.smallText} ml-2`}>
                                     Signup from other devices 
                                   </span>
                                  
                             </label>
                         </div>

                       

                

                        {/* register button */}
                        <button type="submit" className={`${style.buttons}`}> Register</button>

                  </form>

        </div>

      <Footer />
    </>
  );
}

export default SignUpMobileAuth;