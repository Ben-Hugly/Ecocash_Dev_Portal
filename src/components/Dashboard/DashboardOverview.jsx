import React, { useState } from "react";
import {
  DocumentationOverviewSmall,
  Welcome,
  MyApplications,
  ArchivedApplications,
} from "../Dashboard";
import { SocialMediaLinks, Footer } from "../../components";
import { archivedApplicationsData } from "../../constants/data";
import { AddNewApplication } from "../Dashboard";

function DashboardOverview() {
  const [addNewApp, setAddNewApp] = useState(false);

  const handleAddNewAppClick = (status) => {
    setAddNewApp(status);
  };
  const handleDiscardAddNewAppClick = () => {
    setAddNewApp(false);
  };

  return (
    <div className="flex flex-col gap-12 p-4">
      {!addNewApp ? (
        <>
          <Welcome
            username={"Bernard"}
            handleAddNewApp={() => handleAddNewAppClick(true)}
          />
          <MyApplications />
          <ArchivedApplications applications={archivedApplicationsData} />
        </>
      ) : (
        <AddNewApplication handleDiscard={() => setAddNewApp(false)} />
      )}

      <DocumentationOverviewSmall />
      <SocialMediaLinks />
      <Footer />
    </div>
  );
}

export default DashboardOverview;
