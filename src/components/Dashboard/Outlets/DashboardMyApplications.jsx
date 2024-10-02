import React, { useState } from "react";

import { MyApplicationEmpty, MyApplications, MyApplicationsTabView } from "..";

function DashboardMyApplications() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className="flex flex-col gap-12 p-4">
      {!showDetails ? <MyApplicationEmpty /> : <MyApplicationsTabView />}
    </div>
  );
}

export default DashboardMyApplications;
