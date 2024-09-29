import React from "react";
import OverviewDeveloperTools from "./OverviewDeveloperTools";
import OverviewApiReference from "./OverviewApiReference";
import { Footer, SocialMediaLinks } from "..";
import RightSideBar from "./RightSideBar";

const components = [
  { name: "Developer Tools", id: "developer-tools" },
  { name: "API Reference", id: "api-reference" },
];

function DocumentationOverview() {
  return (
    <div className="grid grid-cols-[4fr_1fr] grid-flow-col">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col text-left p-2 ml-3">
          <span className="text-[45px] font-poppins font-semibold text-textBlack dark:text-textWhite">
            Overview
          </span>
          <span className="font-poppins max-w-[455px] text-sm text-textBlack dark:text-textWhite opacity-75 leading">
            Welcome to the EcoCash developer guides. These documents teach you
            how to build EcoCash apps using APIs.
          </span>
        </div>
        <div>
          <OverviewDeveloperTools id="developer-tools" />
          <OverviewApiReference id="api-reference" />
        </div>
      </div>
      <div className="hidden md:block lg:block">
        <RightSideBar components={components} />
      </div>
    </div>
  );
}

export default DocumentationOverview;
