import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import TableRow from "./TableComponent/TableRow";
import { Link } from "react-router-dom";

function MyApplicationsTabView() {
  const tabs = ["Live", "Archived"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const data = [
    {
      id: 1901,
      name: "Hugly USD Payments: Comprehensive",
      merchantCode: "08658",
      apiKey: "KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy",
      status: "Sandbox",
      category: "C2B",
    },
    {
      id: 1902,
      name: "Hugly USD Payments: Comprehensive",
      merchantCode: "08658",
      apiKey: "KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy",
      status: "Live",
      category: "C2B",
    },
    {
      id: 1903,
      name: "Hugly ZiG",
      merchantCode: "08658",
      apiKey: "KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy",
      status: "Sandbox",
      category: "C2B",
    },
    {
      id: 1904,
      name: "Hugly ZiG",
      merchantCode: "08658",
      apiKey: "KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy",
      status: "Live",
      category: "C2B",
    },
  ];

  return (
    <div className="dark:bg-componentsBackgroundDark bg-componentsBackgroundLight  dark:text-white text-black p-6 rounded-3xl ">
      <div className="flex justify-between mb-4 flex-col gap-5">
        <div className="flex flex-col gap-5 mb-4">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4">
            <h2 className="text-[30px] md:text-[45px] font-semibold font-poppins text-left text-textBlack dark:text-textWhite">
              My Applications
            </h2>
            <div className="flex items-center font-poppins text-sm hover:scale-105">
              <Link
                to="/dashboard/myapps/new"
                className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center"
              >
                {activeTab === "Archived" ? "Restore All" : "New Application"}
                {activeTab === "Archived" ? "" : <FaPlus className="ml-3" />}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-textBlack dark:text-textWhite font-poppins text-sm ${
                tab === activeTab ? "border-b-2 border-red-500" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="dark:divide-borderBlue divide-borderLight border border-borderBlue rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide dark:divide-borderBlue divide-borderLight font-poppins text-sm">
            <thead className="bg-borderLight dark:bg-darkBgComponents">
              <tr>
                <th className="px-3 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  ID
                </th>
                <th className="px-3 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  Name
                </th>
                <th className="px-3 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  Merchant Code
                </th>
                <th className="px-6 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  API Key
                </th>
                <th className="px-6 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  Status
                </th>
                <th className="px-6 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  Category
                </th>
                <th className="px-6 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="dark:bg-darkBgHover bg-white divide-y dark:divide-borderBlue divide-borderLight dark:text-textWhite text-sm">
              {data.map((item) => (
                <TableRow key={item.id} {...item} activeTab={activeTab} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyApplicationsTabView;
