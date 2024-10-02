import React from "react";
import { FaChevronRight, FaTrash } from "react-icons/fa";
import { ArchivedApplicationCard } from "../Cards";
import { Link } from "react-router-dom";

const ArchivedApplications = ({ applications }) => {
  return (
    <div className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-black dark:text-white p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-left">Archived Applications</h2>
        <div className="flex flex-col items-center sm:flex-row md:flex-row lg:flex-row gap-y-3">
          <Link
            to="/dashboard/myapps/new"
            className="bg-[#02437D] text-white pl-5 pr-4 py-2 rounded-3xl hover:bg-[#023B6A] mr-2 text-sm font-poppins transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaTrash className="justify-center mr-1 my-1" />
          </Link>
          <Link
            to="/dashboard/myapps"
            className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center text-xs font-poppins transition-all duration-300 ease-in-out hover:scale-105"
          >
            View All <FaChevronRight className="ml-3" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {applications.map((app) => (
          <ArchivedApplicationCard
            key={app.id}
            id={app.id}
            title={app.title}
            allTimeData={app.allTimeData}
            weeklyData={app.weeklyData}
            status={app.status}
            currency={app.currency}
            onRestore={app.onRestore}
            onDelete={app.onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ArchivedApplications;
