import App from '../App'
import { createBrowserRouter} from 'react-router-dom'
import React from 'react'
import { Login,OTPVerification, SignUp, SignUpSuccess, PasswordRecovery,PasswordRecoverySuccess,SetNewPassword,SignUpMobileAuth,} from '../pages'

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/login", element: <Login/>},
    {path: "/otp", element: <OTPVerification/>},
    {path: "/passwordrecovery", element: <PasswordRecovery/>},
    {path: "/recoverysuccess", element: <PasswordRecoverySuccess/>},
    {path: "/signup", element: <SignUp/>},
    {path: "/signupsuccessful", element: < SignUpSuccess/>},
    {path: "/newpassword", element: < SetNewPassword/>},
    {path: "/SignUpMobileAuth", element: < SignUpMobileAuth/>}
     
])

    