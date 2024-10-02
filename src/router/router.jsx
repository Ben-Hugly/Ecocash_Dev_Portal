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
  MyApplicationEmpty,
} from "../components/Dashboard";
import ProtectedRoutes from "../utils/protectedRoutes/ProtectedRoutes"; // Import the ProtectedRoutes component

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
      {
        element: <ProtectedRoutes />, // Wrap the children with ProtectedRoutes
        children: [
          { path: "", element: <DashboardOverview /> }, // Default route
          { path: "home", element: <DashboardOverview /> },
          { path: "documentation", element: <DocumentationOverview /> },
          { path: "myapps", element: <DashboardMyApplications /> },
          { path: "myapps/details/:name", element: <MyApplicationDetails /> },
          { path: "myapps/new", element: <AddNewApplicationForm /> },
          { path: "myapps/new/success", element: <NewAppSuccess /> },
          { path: "myapps/edit", element: <EditApplication /> },
          { path: "myapps/editsucess", element: <EditSuccessful /> },
          { path: "myapps/empty", element: <MyApplicationEmpty /> },
          { path: "myapps/archived", element: <MyApplicationDetails /> },
          { path: "myapps/transaction", element: <MyApplicationDetails /> },
          {
            path: "myapps/transaction/reverse",
            element: <ReverseTransaction />,
          },
          {
            path: "myapps/transaction/reversefailed",
            element: <ReversalFailed />,
          },
          {
            path: "myapps/transaction/reversesuccess",
            element: <ReversalSuccessful />,
          },
          {
            path: "myapps/transaction/reversedetails",
            element: <ReversalTransactionDetails />,
          },
          {
            path: "documentation/dev/byi",
            element: <BuildingYourIntegration />,
          },
          {
            path: "documentation/dev/c2b",
            element: <BuildingYourIntegration />,
          },
          {
            path: "documentation/dev/b2c",
            element: <BuildingYourIntegration />,
          },
          {
            path: "documentation/dev/b2b",
            element: <BuildingYourIntegration />,
          },
          {
            path: "documentation/dev/reversal",
            element: <BuildingYourIntegration />,
          },
          { path: "documentation/api/", element: <DocumentationOverview /> },
          { path: "documentation/dev/", element: <DocumentationOverview /> },
          { path: "documentation/api/payments", element: <Payments /> },
          { path: "documentation/api/refunds", element: <Payments /> },
          { path: "documentation/api/lookup", element: <Payments /> },
        ],
      },
    ],
  },
]);
