import React from "react";
import { DocumentationOverviewCardSmall } from "./Cards";

function DocumentationOverviewSmall() {
  const cards = [
    {
      title: "Building Your Integration",
      description: "Generate API Key",
    },
    {
      title: "C2B",
      description: "Customer-to-Business transactions",
    },
    {
      title: "B2C",
      description: "Business-to-Customer transactions",
    },
    {
      title: "B2B",
      description: "Business-to-Business transactions",
    },
    {
      title: "Reversals",
      description: "Initiate a reversal on a transaction",
    },
    {
      title: "API - Payments",
      description: "Libraries to assist with integrations.",
    },
    {
      title: "API - Refunds",
      description: "Libraries to assist with integrations.",
    },
    {
      title: "API - Transactions Lookup",
      description: "Generate API Key",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 rounded-3xl w-full p-4 bg-componentsBackgroundLight dark:bg-componentsBackgroundDark">
      <div className="flex flex-col ">
        <h1 className="text-[26px] font-poppins font-semibold text-left ml-5 dark:text-textWhite text-textBlack">
          Documentation Overview
        </h1>

        <div className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
          {cards.map((card) => (
            <DocumentationOverviewCardSmall key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocumentationOverviewSmall;
