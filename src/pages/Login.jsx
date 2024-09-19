import React, { useState } from 'react';
import { Footer } from '../components';
import style from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputScreensLogo }  from "../components"


function Login() {
  // Initialize state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate user input
    if (!username.trim()) {
      toast.error('Please enter username');
      return;
    }

    if (!password.trim()) {
      toast.error('Please enter password');
      return;
    }
    
  };

  return (
    <>
    <ToastContainer /> {/* Display toast notifications */}
    <div className ='h-screen'>
      <InputScreensLogo/>
        <div className={`${style.form} gap-4 `}>
              <h2 className={`${style.headings}`}>Login</h2>

                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* Username input */}
                        <div className="form-group">
                              <div className="relative">

                                  <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter username"
                                    className={`${style.inputs}`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>

                                  <label htmlFor="username" className={`${style.inputLabels}`}>Username:</label>

                              </div>
                        </div>

                        {/* Password input */}

                        <div className="form-group relative">

                            <input
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              name="password"
                              placeholder="Enter password"
                              className={`${style.inputs} pr-10`}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} />

                            <label htmlFor="password" className={`${style.inputLabels}`}> Password: </label>

                          <button
                              type="button"
                              className={`${style.LoginPasswordVisibility}`}
                              onClick={togglePasswordVisibility}>
                                {
                                  showPassword ? <MdArrowDropUp className="w-5 h-5 dark:text-textWhite text-textBlack" /> : <MdArrowDropDown  className="w-5 h-5 dark:text-textWhite text-textBlack" />
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
                        <button type="submit" className={`${style.buttons}`}> Log in</button>

                  </form>

              <div className="text-center mt-4">

                  <a href="#" className={`${style.forgotPass} mt-2`}>Forgot your password?</a>

                    <p className={`${style.smallText} mt-2`}>
                        Don't have an account?{' '}
                        <Link to="/signup" className={`${style.links} ml-2`}>Sign up</Link>
                    </p>
                    
            </div>
        </div>
    </div>
      <Footer />
    </>
  );
}

export default Login;