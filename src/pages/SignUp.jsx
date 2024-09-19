import React, { useState } from 'react';
import { Footer } from '../components'
import style from '../styles';
import { Axios }from '../config';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';
import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';
import { InputScreensLogo }  from "../components"



function SignUp() {

  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber,  setPhoneNumber]  = useState('');
  const [physicalAddress, setPhysicalAddress]  = useState('');
  const [role, setRole]  = useState('');
  const [department, setDepartment]  = useState('');
  const [companyName, setCompanyName]  = useState('');
  const [companyAddress, setCompanyAddress]  = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const handleDateChange = (date) => {
      setDob(date);
    };

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

 // Function to validate user input
 const validateInput = () => {
  return firstname.trim() !== '' && surname.trim() !== '' && email.trim() !== '' && idNumber.trim() !== '' && password.trim() !== '' && gender.trim() !== '' && dob !== '' && phoneNumber.trim() !== '' && physicalAddress.trim() !== '' && role.trim() !== '' && department.trim() !== '' && companyName.trim() !== '' && companyAddress.trim() !== '';
};

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// Function to make the date shorter 
function formatDate(dateString) {
  const date = new Date(dateString);
  
  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Function to validate the phone number
function isValidPhoneNumber(phoneNumber) {
  // Check if the phone number is valid: starts with 0 or has a country code
  const regex = /^(0\d{9}|\+\d{1,3}\d{9,12})$/; // Country code can be 1-3 digits, followed by 9-12 digits
  const isValidLength = phoneNumber.length >= 10 && phoneNumber.length <= 13; // Length check

  return regex.test(phoneNumber) && isValidLength;
}


const handleSubmit = async (event) => {
  event.preventDefault();

  // Validate user input
  if (!validateInput()) {
    toast.error('Please fill in all required fields');
    return;
  }
  // Validate terms and condition agreement
  if (!termsChecked) {
    toast.error('You have to agree to the terms and condition first');
    return;
  }

  //Validate email
  if(!isValidEmail(email)){
    toast.error('Please enter a valid email address.');
    return; // Stop further execution if email is invalid
  }

  //Validate phone number
  if(!isValidPhoneNumber(phoneNumber)){
    toast.error('Please enter a valid phone number.');
    return;
  }

  console.log("firstname: " + firstname + "\n"
     + "surname: " + surname + "\n" 
     + "email: "+  email + "\n" 
     +"idNumber: "+  idNumber + "\n"
     +"password: " +  password + "\n"
     +"gender: " + gender + "\n"
     +"dob: " +  formatDate(dob) + "\n"+
     "phoneNumber:" +  phoneNumber + "\n"+
     +"physicalAddress: " +  physicalAddress + "\n"
     +"role: " +  role+ "\n" 
     +"department: " +  department+ "\n"
     + "comapnyName: " + companyName+ "\n"
     +"companyAdress: " +  companyAddress)
 
     
  try {
    // Make an API call to create a new account
    const response = await Axios.post('register',
    {
        firstname: firstname,
        surname: surname,
        email: email,
        idNumber: idNumber,
        password: password,
        gender: gender,
        dob: formatDate(dob),
        phoneNumber: phoneNumber,
        physicalAddress: physicalAddress,
        role: role,
        department: department,
        companyName: companyName,
        companyAddress: companyAddress,
    });

    console.log(response);
      // If the registration is successful, navigate to the home screen
    if (response.status === 200 && response.data !== null) {

      toast.success('Account created successfully!');
      navigate('/successful'); // Navigate to the home page RegistrationSuccess

    } else {
      
       toast.error(response.data.message || 'Registration failed!');
    }
  
  
  } catch (error) {
    // If there's an error, show an error toast message
    toast.error(error.response?.data?.message || 'An error occurred during account registration. Please try again.');
    console.error('Login error:', error);
  }
};



  return (
    <>
      <ToastContainer />
      <InputScreensLogo/>
        <div className={`${style.form}`}>
             <h2 className={`${style.headings}`}>Sign Up</h2>

                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <span className={`${style.smallText}  ${style.SignUpSectionHeadingText}`}> Personal details</span>

                          <div className="form-group">

                                <div className="relative">
                                      <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Enter firstname"
                                        className={`${style.inputs}`}
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}/>
                                      <label htmlFor="firstname" className={`${style.inputLabels}`}> First Name: </label>
                                </div>
                          </div>

                          <div className="form-group">

                                <div className="relative">
                                      <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        placeholder="Enter your surname"
                                        className={`${style.inputs}`}
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)} />
                                      <label htmlFor="surname" className={`${style.inputLabels}`}>Surname:</label>
                                </div>
                          </div>
            
                          <div className="form-group">
                              <div className="relative">
                                      <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className={`${style.inputs}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                      <label htmlFor="email" className={`${style.inputLabels}`}>Email Address:</label>
                                </div>
                          </div>

                          <div className="form-group">
                                <div className="relative">
                                      <input
                                        type="text"
                                        id="idNumber"
                                        name="idNumber"
                                        placeholder="Enter your ID number"
                                        className={`${style.inputs}`}
                                        value={idNumber}
                                        onChange={(e) => setIdNumber(e.target.value)} />
                                      <label htmlFor="idNumber" className={`${style.inputLabels}`}>ID Number: </label>
                                  </div>
                          </div>
                            
                          <div className="form-group">
                                <div className="relative">
                                      <select

                                          id="gender"
                                          name="gender"
                                          onChange={handleGenderChange}
                                          required
                                          className={`${style.SignUpGenderSelector}`}>
                                          <option value="">Select your gender</option>
                                          <option value="male">Male</option>
                                          <option value="female">Female</option>
                                          <option value="other">Other</option>

                                      </select>
                                      <label htmlFor="gender" className={`${style.inputLabels}`}>Gender:</label>
                                  </div>
                              </div>


                              <div className="form-group">
                                  <div className="relative">
                                        <div className={`${style.SignUpDatePicker}`}>
                                              <DatePicker
                                                id="dob"
                                                name="dob"
                                                selected={dob}
                                                onChange={handleDateChange}
                                                placeholderText="02/02/04"
                                                className={`${style.inputs}`}
                                                dateFormat="MM/dd/yy"
                                                wrapperClassName='w-full'
                                                showYearDropdown
                                                showMonthDropdown
                                                dropdownMode="select"/>
                                        </div>
                                        <label htmlFor="dob" className={`${style.inputLabels}`}> Date of Birth: </label>
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
                                          onChange={(e) => setPassword(e.target.value)}/>
                                        <label htmlFor="password" className={`${style.inputLabels}`}> Password: </label>
                                          <button
                                            type="button"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
                                            onClick={togglePasswordVisibility}>
                                            {
                                              showPassword ? <MdArrowDropUp className="w-5 h-5 dark:text-textWhite text-textBlack" /> : <MdArrowDropDown  className="w-5 h-5 dark:text-textWhite text-textBlack" />
                                            }

                                          </button>
                                  </div>

                              <span className={`${style.smallText} ${style.SignUpSectionHeadingTextContact} `}> Contact details</span>


                                  <div className="form-group">
                                      <div className="relative">
                                            <input
                                              type="text"
                                              id="phoneNumber"
                                              name="phoneNumber"
                                              placeholder="0771 354 643"
                                              className={`${style.inputs}`}
                                              value={phoneNumber}
                                              onChange={(e) => setPhoneNumber(e.target.value)}/>
                                            <label htmlFor="phoneNumber" className={`${style.inputLabels}`}>Cellphone Number:</label>
                                        </div>
                                  </div>

                              <div className="form-group">
                                <div className="relative">
                                      
                                      <input
                                        type="text"
                                        id="physicalAddress"
                                        name="physicalAddress"
                                        placeholder="Enter your physical address"
                                        className={`${style.inputs}`}
                                        value={physicalAddress}
                                        onChange={(e) => setPhysicalAddress(e.target.value)}/>
                                      <label htmlFor="physicalAddress" className={`${style.inputLabels}`}>Physical Address</label>

                                  </div>
                              </div>


                            <span className={`${style.smallText} ${style.SignUpSectionHeadingTextOrg}`}> Organization details</span>

                              <div className="form-group">
                                   <div className="relative">

                                        <input
                                          type="text"
                                          id="role"
                                          name="role"
                                          placeholder="Enter your role"
                                          className={`${style.inputs}`}
                                          value={role}
                                          onChange={(e) => setRole(e.target.value)} />
                                        <label htmlFor="role" className={`${style.inputLabels}`}> Role</label>

                                    </div>
                              </div>

                              <div className="form-group">
                                    <div className="relative">
                                        
                                        <input
                                          type="text"
                                          id="department"
                                          name="department"
                                          placeholder="Enter your department"
                                          className={`${style.inputs}`}
                                          value={department}
                                          onChange={(e) => setDepartment(e.target.value)}/>
                                        <label htmlFor="department" className={`${style.inputLabels}`}>Department </label>

                                    </div>
                              </div>


                              <div className="form-group">
                                   <div className="relative">
                                        
                                        <input
                                          type="text"
                                          id="companyName"
                                          name="companyName"
                                          placeholder="Enter your company name"
                                          className={`${style.inputs}`}
                                          value={companyName}
                                          onChange={(e) => setCompanyName(e.target.value)}/>
                                        <label htmlFor="companyName" className={`${style.inputLabels}`}>Company Name</label>

                                     </div>
                              </div>


                              <div className="form-group">
                                  <div className="relative">
                                        
                                        <input
                                          type="text"
                                          id="companyAddress"
                                          name="companyAddress"
                                          placeholder="Enter your company address"
                                          className={`${style.inputs}`}
                                          value={companyAddress}
                                          onChange={(e) => setCompanyAddress(e.target.value)}/>

                                        <label htmlFor="companyAddress" className={`${style.inputLabels}`}>Company Address </label>

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
                                            I accept the
                                            <Link to ="" className={`${style.links} mr-2 ml-2`}>terms</Link> 
                                            &
                                            <Link to ="" className={`${style.links} mr-2 ml-2`}>conditions</Link> 

                                      </span>
                                  
                                  </label>
                               </div>


                 <button type="submit" className={`${style.buttons}`}> Register </button>

          </form>


                <div className="text-center mt-4">
                      <p className={`${style.smallText} mt-2`}>
                        Already have an account?{' '}
                        <Link to ="/login" className={`${style.links} ml-2 font-semibold `}>Log in</Link>
                      </p>
                </div>
        </div>


       <Footer/>
    </>
  )
}

export default SignUp