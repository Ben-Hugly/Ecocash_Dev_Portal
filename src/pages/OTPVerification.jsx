import React, { useState } from 'react';
import { Footer } from '../components';
import style from '../styles';
import 'react-toastify/dist/ReactToastify.css';
import { InputScreensLogo }  from "../components"

function OTPVerification() {
    const [otp, setOtp] = useState('');
    // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); 
  };


  return (
    <>
      <InputScreensLogo/>
        <div className={`${style.form} gap-4`}>
              <h2 className={`${style.headings}`}>One Time Password (OTP)</h2>

                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    
                        {/* OTP input */}
                        <div className="form-group">

                            <label htmlFor="otp" className={`${style.otpTextOne}`}> Authenticator OTP </label>
                            <div className="relative">
                                  <input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    placeholder="Enter OTP"
                                    className={`${style.inputs}`}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}/>

                                <label htmlFor="otp" className={`${style.inputLabels}`}> One Time Password (OTP)</label>
                            </div>

                            <label htmlFor="otp" className={`${style.otpTextTwo}`}>Please check your authenticator for the OTP</label>

                        </div>

                        {/* Login button */}
                        <button type="submit" className={`${style.buttons}`}> Log in</button>

                  </form>
        </div>

      <Footer />
    </>
  )
}

export default OTPVerification