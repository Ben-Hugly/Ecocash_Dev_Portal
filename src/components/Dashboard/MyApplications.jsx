import React from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import MyApplicationsCard from "./Cards/MyApplicationsCard";

// Sample data for the graph
const graphData = [
  { day: "S", received: 0, sent: 0 },
  { day: "M", received: 2000, sent: 480 },
  { day: "T", received: 1150, sent: 1400 },
  { day: "W", received: 4000, sent: 1000 },
  { day: "T", received: 3000, sent: 2500 },
  { day: "F", received: 4000, sent: 1500 },
  { day: "S", received: 3000, sent: 1800 },
];
// Sample data for the component
const applicationsData = [
  {
    id: "1902",
    title: "Hugly USD Payments: Comprehensive",
    allTimeData: {
      received: "14,589.31",
      sent: "8,111.25",
      reversed: "1,342.97",
    },
    weeklyData: { received: "589.31", sent: "311.25", reversed: "42.53" },
    status: "Live",
    currency: "USD",
  },
  {
    id: "1901",
    title: "Hugly USD Payments: Comprehensive",
    allTimeData: {
      received: "14,589.31",
      sent: "8,111.25",
      reversed: "1,342.97",
    },
    weeklyData: { received: "589.31", sent: "311.25", reversed: "42.53" },
    status: "Sandbox",
    currency: "ZiG",
  },
];

const MyApplications = () => {
  return (
    <div className=" bg-componentsBackgroundLight dark:bg-[#1f303f] p-6 rounded-3xl text-textBlack dark:text-textWhite">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-left  text-textBlack dark:text-textWhite font-poppins">
          My Applications
        </h2>
        <div className="flex items-center">
          <button className="bg-[#02437D] text-white pl-5 pr-4 py-2 rounded-3xl hover:bg-[#023B6A] mr-2">
            <FaPlus className="justify-center mr-1 my-1" />
          </button>
          <button className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center">
            View All <FaChevronRight className="ml-3 " />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {applicationsData.map((applicationData) => (
          <MyApplicationsCard
            key={applicationData.id}
            {...applicationData}
            graphData={graphData}
          />
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
