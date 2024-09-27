import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import TableRow from "./TableComponent/TableRow";

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
    <div className="dark:bg-darkBgComponents bg-white text-white p-6 rounded-3xl ">
      <div className="flex justify-between mb-4 flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-[45px] font-semibold font-poppins text-left text-textBlack dark:text-textWhite">
            My Applications
          </h2>
          <div className="flex items-center font-poppins text-sm hover:scale-105">
            <button className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center">
              {activeTab === "Archived" ? "Restore All" : "New Application"}
              {activeTab === "Archived" ? "" : <FaPlus className="ml-3" />}
            </button>
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

      <div className="dark:divide-borderBlue divide-borderLight border border-borderBlue rounded-3xl">
        <table className="divide dark:divide-borderBlue divide-borderLight font-poppins text-sm rounded-3xl overflow-hidden">
          <thead className="bg-borderLight dark:bg-darkBgComponents">
            <tr>
              <th className="px-7 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                ID
              </th>
              <th className="px-6 py-3 text-left font-medium text-textBlack dark:text-textWhite">
                Name
              </th>
              <th className="px-5 py-3 text-left font-medium text-textBlack dark:text-textWhite">
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
  );
}

export default MyApplicationsTabView;
