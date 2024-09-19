import React, { useState } from 'react';
import { Footer } from '../components';
import style from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";
import { Axios }from '../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputScreensLogo }  from "../components"


function SetNewPassword() {
  // Initialize state variables

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate user input

    if (!password.trim()) {
      toast.error('Please enter a password');
      return;
    }
    if (!confirmPassword.trim()) {
        toast.error('Please enter second password');
        return;
      }
    
  };

  return (
    <>
    <ToastContainer /> {/* Display toast notifications */}
    <div className="h-screen">
      <InputScreensLogo/>
        <div className={`${style.form}`}>
        <h2 className={`${style.PasswordRecoveryHeading} `}>Set New Password</h2>
        <h3 className={`${style.smallText} font-thin `}>You need to change your password to activate your account</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-7">
                        {/* Password input */}

            <div className="form-group relative mt-6">

                   <input
                    type={showPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter your new password"
                    className={`${style.inputs} pr-10`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="newPassword" className={`${style.inputLabels}`}> New Password  </label>

                     <button
                      type="button"
                      className={`${style.LoginPasswordVisibility}`}
                      onClick={()=>togglePasswordVisibility('password')}>
                      {
                        showPassword ? <MdArrowDropUp className="w-5 h-5 dark:text-textWhite text-textBlack" /> : <MdArrowDropDown className="w-5 h-5 dark:text-textWhite text-textBlack" />
                      }
                    </button>


             </div>

             <div className="form-group relative">

                        <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Confirm your password"
                              className={`${style.inputs} pr-10`}
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)} />

                         <label htmlFor="confirmPassword" className={`${style.inputLabels}`}>Confirm Password  </label>

                        <button
                        type="button"
                        className={`${style.LoginPasswordVisibility}`}
                        onClick={() => togglePasswordVisibility('confirmPassword')}>
                            {
                            showPassword ? <MdArrowDropUp className="w-5 h-5 dark:text-textWhite text-textBlack" /> : <MdArrowDropDown className="w-5 h-5 dark:text-textWhite text-textBlack" />
                            }
                        </button>


            </div>
                        
           {/* Remember me checkbox */}
          <div className="form-group ">

                              <label htmlFor="remember" className="flex items-center">

                                  <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    value="remember"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="ml-3 w-4 h-4 "/>

                                  <span className={`${style.smallText} ml-2`}>Remember me</span>

                              </label>
            </div>

           {/* Login button */}
             <Link
                to="/Login" 
                variant = "gradient"
                size="sm"
                type="submit"
                className= {` ${style.linkButtons}`}>
                Continue
              </Link>

                  </form>

             
        </div>
     </div>
      <Footer />
    </>
  );
}

export default SetNewPassword;