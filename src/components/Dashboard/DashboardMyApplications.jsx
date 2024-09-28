import React, { useState } from "react";
import { MyApplicationsTabView } from "../Dashboard";
import { MyApplicationDetails } from "../Dashboard";

function DashboardMyApplications() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="flex flex-col gap-12 p-4">
      {showDetails ? <MyApplicationDetails /> : <MyApplicationsTabView />}
    </div>
  );
}

export default DashboardMyApplications;
