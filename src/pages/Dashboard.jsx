import React, { useState, useEffect } from "react";
import {
  Sidebar,
  NavbarDashboard,
  DocumentationOverviewSmall,
} from "../components/Dashboard";
import { SocialMediaLinks, Footer } from "../components";
import { Outlet } from "react-router-dom";
function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row h-full dark:bg-backgroundDark bg-white w-full">
      <div
        className="flex flex-col flex-grow p-2 gap-6 w-1/5"
        style={{ display: isSidebarVisible ? "block" : "none" }}
      >
        <Sidebar />
        {/* Ensures Sidebar doesn't grow */}
      </div>
      <div className="flex flex-col flex-grow p-2 gap-6 w-4/5">
        <NavbarDashboard toggleSidebar={isSidebarVisible} />
        <Outlet />

        <DocumentationOverviewSmall />
        <SocialMediaLinks />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
/**
 *  {selectedButton === "overview" && <DashboardOverview />}
        {selectedButton === "myApplications" && <DashboardMyApplications />}
        {selectedButton === "documentationOverview" && (
          <DocumentationOverview />
        )}
        {selectedButton === "devBuildIntegration" && (
          <BuildingYourIntegration />
        )}
        {selectedButton === "devC2B" && <DocumentationOverview />}
        {selectedButton === "devB2C" && <DocumentationOverview />}
        {selectedButton === "devB2B" && <DocumentationOverview />}
        {selectedButton === "devReversal" && <DocumentationOverview />}
        {selectedButton === "apiReferencePayment" && <Payments />}
        {selectedButton === "apiReferenceRefund" && <DocumentationOverview />}
        {selectedButton === "apiReferenceLookup" && <DocumentationOverview />}
 */
