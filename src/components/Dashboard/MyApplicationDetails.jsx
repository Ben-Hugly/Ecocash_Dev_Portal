import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import MyApplicationDetailsCard from "../Dashboard/Cards/MyApplicationDetailsCard";

function MyApplicationDetails() {
  const tabs = ["General", "Transactions", "Users & Permissions"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const cardProps = {
    appName: "Hughly USD Payments: Comprehensive",
    appId: 1901,
    appNumber: 890194,
    merchantCode: "08658",
    apiKey: "KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy",
    category: ["C2B", "B2B", "B2C", "Reversal"],
    status: "Live",
    description:
      "This application is for Hugly's USD. For C2B, B2B, B2C and Reversal",
  };
  return (
    <div>
      <div className="dark:bg-darkBgComponents bg-white text-white p-6 rounded-3xl ">
        <div className="flex justify-between mb-4 flex-col gap-5">
          <div className="flex flex-row items-center justify-between">
            <div className="font-poppins text-left max-w-[640px] text-textBlack dark:text-textWhite flex flex-col gap-4">
              <h2 className="text-[45px] font-semibold ">
                {"Hughly USD Payment: Comprehensive"}
              </h2>
              <span className="text-sm font-thin">
                This application is for {"Hugly's USD."} For C2B, B2B, B2C and
                Reversal
              </span>
            </div>

            <div className="flex items-center font-poppins text-sm hover:scale-105">
              <button className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center font-poppins">
                Edit Application
                <MdEdit size={15} className="ml-3" />
              </button>
            </div>
          </div>

          <div className="flex mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-textBlack dark:text-textWhite ${
                  tab === activeTab ? "border-b-2 border-red-500" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl p-4">
          <MyApplicationDetailsCard {...cardProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApplicationDetails;
