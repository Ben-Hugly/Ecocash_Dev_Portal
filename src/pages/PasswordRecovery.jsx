import React, { useState } from 'react';
import { Footer } from '../components';
import style from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { InputScreensLogo }  from "../components"


function PasswordRecovery() {
  // Initialize state variables
  const [username, setUsername] = useState('');
  const navigate = useNavigate();



  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    
  };

  return (
    <>
    <div className="h-screen">
      <InputScreensLogo/>
        <div className={`${style.form} gap-4`}>
              <h2 className={`${style.PasswordRecoveryHeading} `}>Recover Password</h2>
              <h3 className={`${style.smallText} font-thin `}>We will be sending you a reset password link to your email.</h3>
                 <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-10">

                        {/* Username input */}
                        <div className="form-group">
                              <div className="relative">

                                  <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username or email"
                                    className={`${style.inputs}`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>

                                  <label htmlFor="username" className={`${style.inputLabels}`}>Username / Email</label>

                              </div>
                        </div>

                

                        {/* Login button */}
                        <button type="submit" className={`${style.buttons}`}> Reset Password</button>

                  </form>

              <div className="text-center mt-4">

                    <p className={`${style.smallText} mt-6`}>
                        Remember your password?{' '}
                        <Link to="/login" className={`${style.links} ml-2 font-semibold`}>Log in</Link>
                    </p>
                    
            </div>
        </div>
    </div>
      <Footer />
    </>
  );
}

export default PasswordRecovery;