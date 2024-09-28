import React, { useState } from "react";
import { Welcome, MyApplications, ArchivedApplications } from "../Dashboard";

import { archivedApplicationsData } from "../../constants/data";
function DashboardOverview() {
  return (
    <div className="flex flex-col gap-12 p-4">
      <Welcome username={"Bernard"} />
      <MyApplications />
      <ArchivedApplications applications={archivedApplicationsData} />
    </div>
  );
}

export default DashboardOverview;
