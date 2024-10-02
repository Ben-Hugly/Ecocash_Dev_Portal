import React from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import MyApplicationsCard from "../Cards/MyApplicationsCard";
import { Link } from "react-router-dom";

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
    <div className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark p-6 rounded-3xl text-textBlack dark:text-textWhite">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-left text-textBlack dark:text-textWhite font-poppins mb-2 md:mb-0">
          My Applications
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <Link
            to="/dashboard/myapps/new"
            className="bg-textDimBlue hover:bg-textBlue text-white pl-5 pr-4 py-2 rounded-3xl  mb-2 md:mb-0 md:mr-2 text-sm font-poppins transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaPlus className="justify-center mr-1 my-1" />
          </Link>
          <Link
            to="/dashboard/myapps"
            className="bg-textDimBlue hover:bg-textBlue text-white px-4 py-2 rounded-full flex items-center text-sm font-poppins transition-all duration-300 ease-in-out hover:scale-105"
          >
            View All <FaChevronRight className="ml-3" />
          </Link>
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
