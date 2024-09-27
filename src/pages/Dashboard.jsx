import React, { useState } from "react";
import {
  Sidebar,
  NavbarDashboard,
  DashboardOverview,
  DashboardMyApplications,
  DocumentationOverview,
  BuildingYourIntegration,
  Payments,
} from "../components/Dashboard";

function Dashboard() {
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonSelect = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex flex-row h-full dark:bg-backgroundDark bg-white w-full">
      <div className="flex flex-col flex-grow p-2 gap-6 w-1/5">
        <Sidebar onButtonSelect={handleButtonSelect} />{" "}
        {/* Ensures Sidebar doesn't grow */}
      </div>
      <div className="flex flex-col flex-grow p-2 gap-6 w-4/5">
        <NavbarDashboard />
        {selectedButton === "overview" && <DashboardOverview />}
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
      </div>
    </div>
  );
}

export default Dashboard;
