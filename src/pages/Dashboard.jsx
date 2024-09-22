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
} from "../components/Dashboard";
import { SocialMediaLinks, Footer } from "../components";

function Dashboard() {
  return (
    <div className="flex flex-row w-full h-full dark:bg-backgroundDark bg-white">
      <Sidebar /> {/* Ensures Sidebar doesn't grow */}
      <div className="flex flex-col flex-grow p-2">
        <NavbarDashboard />
        <MyApplicationsTabView />
        <Welcome username={"Bernard"} />
        <NewAppSuccess />
        <AddNewApplication />
        <MyApplicationEmpty />
        <DocumentationOverviewSmall />
        <SocialMediaLinks />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
