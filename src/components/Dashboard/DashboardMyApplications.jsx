import React from "react";
import {
  MyApplicationsTabView,
  DocumentationOverviewSmall,
} from "../Dashboard";
import { SocialMediaLinks, Footer } from "../../components";

function DashboardMyApplications() {
  return (
    <div className="flex flex-col gap-12 p-4">
      <MyApplicationsTabView />
      <DocumentationOverviewSmall />
      <SocialMediaLinks />
      <Footer />
    </div>
  );
}

export default DashboardMyApplications;
