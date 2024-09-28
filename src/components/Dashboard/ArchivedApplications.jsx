import React from "react";
import { FaChevronRight, FaTrash } from "react-icons/fa";
import { ArchivedApplicationCard } from "./Cards";

const ArchivedApplications = ({ applications }) => {
  return (
    <div className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-black dark:text-white p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-left">Archived Applications</h2>
        <div className="flex items-center">
          <button className="bg-[#02437D] text-white pl-5 pr-4 py-2 rounded-3xl hover:bg-[#023B6A] mr-2 text-sm">
            <FaTrash className="justify-center mr-1 my-1" />
          </button>
          <button className="bg-buttonBlue text-sm text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center">
            View All <FaChevronRight className="ml-3 " />
          </button>
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
