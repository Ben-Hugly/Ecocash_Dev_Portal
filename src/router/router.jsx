import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import {
  Login,
  OTPVerification,
  SignUp,
  SignUpSuccess,
  PasswordRecovery,
  PasswordRecoverySuccess,
  SetNewPassword,
  SignUpMobileAuth,
  Dashboard,
} from "../pages";

import {
  DashboardOverview,
  DocumentationOverview,
  DashboardMyApplications,
  AddNewApplicationForm,
  NewAppSuccess,
  EditApplication,
  EditSuccessful,
  MyApplicationDetails,
  ReversalTransactionDetails,
  ReversalFailed,
  ReversalSuccessful,
  ReverseTransaction,
  BuildingYourIntegration,
  Payments,
} from "../components/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/otp", element: <OTPVerification /> },
  { path: "/passwordrecovery", element: <PasswordRecovery /> },
  { path: "/recoverysuccess", element: <PasswordRecoverySuccess /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signupsuccessful", element: <SignUpSuccess /> },
  { path: "/newpassword", element: <SetNewPassword /> },
  { path: "/signUpMobileAuth", element: <SignUpMobileAuth /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/home", element: <DashboardOverview /> },
      { path: "/dashboard/documentation", element: <DocumentationOverview /> },
      { path: "/dashboard/myapps", element: <DashboardMyApplications /> },
      { path: "/dashboard/overview", element: <DocumentationOverview /> },
      { path: "/dashboard/myapps/details", element: <MyApplicationDetails /> },
      { path: "/dashboard/myapps/new", element: <AddNewApplicationForm /> },
      {
        path: "/dashboard/myapps/new/success",
        element: <NewAppSuccess />,
      },
      { path: "/dashboard/myapps/edit", element: <EditApplication /> },
      { path: "/dashboard/myapps/editsucess", element: <EditSuccessful /> },

      {
        path: "/dashboard/myapps/transaction/reverse",
        element: <ReverseTransaction />,
      },
      {
        path: "/dashboard/myapps/transaction/reversefailed",
        element: <ReversalFailed />,
      },
      {
        path: "/dashboard/myapps/transaction/reversesuccess",
        element: <ReversalSuccessful />,
      },

      {
        path: "/dashboard/myapps/transaction/reversedetails",
        element: <ReversalTransactionDetails />,
      },
      {
        path: "/dashboard/documentation/dev/byi",
        element: <BuildingYourIntegration />,
      },
      {
        path: "/dashboard/documentation/dev/c2b",
        element: <BuildingYourIntegration />,
      },
      {
        path: "/dashboard/documentation/dev/b2c",
        element: <BuildingYourIntegration />,
      },
      {
        path: "/dashboard/documentation/dev/b2b",
        element: <BuildingYourIntegration />,
      },
      {
        path: "/dashboard/documentation/dev/reversal",
        element: <BuildingYourIntegration />,
      },
      {
        path: "/dashboard/documentation/api/payments",
        element: <Payments />,
      },
      {
        path: "/dashboard/documentation/api/refunds",
        element: <Payments />,
      },

      {
        path: "/dashboard/documentation/api/lookup",
        element: <Payments />,
      },
    ],
  },
]);
