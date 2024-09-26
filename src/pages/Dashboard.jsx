import React from "react";
import {
  MyApplicationEmpty,
  Sidebar,
  DocumentationOverviewSmall,
  Welcome,
  NavbarDashboard,
  AddNewApplication,
  NewAppSuccess,
  MyApplicationsTabView,
  EditApplication,
  EditSuccessful,
  ReverseTransaction,
  ReversalFailed,
  ReversalSuccessful,
  ReversalTransactionDetails,
  MyApplications,
  MyApplicationDetails,
  Overview,
  BuildingYourIntegration,
  Payments,
  CreateApiKey,
} from "../components/Dashboard";
import { SocialMediaLinks, Footer } from "../components";

function Dashboard() {
  return (
    <div className="flex flex-row h-full dark:bg-backgroundDark bg-white w-full">
      <Sidebar /> {/* Ensures Sidebar doesn't grow */}
      <div className="flex flex-col flex-grow p-2 gap-6 ">
        <NavbarDashboard />
        {/** 
         *  <Overview />
        <MyApplicationDetails />
        <MyApplications />
        <ReversalTransactionDetails />
        <ReversalSuccessful />
        <ReversalFailed />
        <ReverseTransaction />
        <EditSuccessful />
        <EditApplication />
        <MyApplicationsTabView />
        <Welcome username={"Bernard"} />
        <NewAppSuccess />
        <AddNewApplication />
        <MyApplicationEmpty />
        <DocumentationOverviewSmall />
        <SocialMediaLinks />
        <Footer />
        <BuildingYourIntegration />
        <CreateApiKey />
        <Payments />
        */}
        <MyApplicationDetails />
      </div>
    </div>
  );
}

export default Dashboard;
