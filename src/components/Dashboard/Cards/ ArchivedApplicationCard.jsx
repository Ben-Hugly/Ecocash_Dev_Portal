import React from "react";
import { step_into, step_out, undo } from "../../../assets/DashboardIcons";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LabelWithCircle = ({ text, color }) => (
  <div
    className={`border border-buttonBluePastelLight dark:border-borderBlue flex items-center rounded`}
  >
    <div className={`h-2 w-2 rounded-full ${color} ml-1`}></div>
    <span className={`text-textBlack dark:text-white bg-${color} px-1 text-xs`}>
      {text}
    </span>
  </div>
);
function ArchivedApplicationCard({
  id,
  title,
  allTimeData,
  weeklyData,
  status,
  currency,
  onRestore,
  onDelete,
}) {
  return (
    <div className="bg-opacity-50 backdrop-blur-lg border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl p-6 flex flex-col shadow-lg transition-all duration-75 ease-in-out hover:scale-105">
      <div className="grid grid-flow-col justify-between items-center mb-2 ">
        <h4 className="text-xl font-semibold">{id}</h4>
        <div className="grid grid-flow-col items-center space-x-1">
          <LabelWithCircle text="Archived" color="bg-red-500" />
          <LabelWithCircle text="Live" color="bg-green-500" />
          <div
            className={`border border-buttonBluePastelLight dark:border-borderBlue flex items-center space-x-1 rounded`}
          >
            <span className={` text-textBlack dark:text-white  px-1 text-xs`}>
              {currency}
            </span>
          </div>
          <Link to="/dashboard/myapps">
            <FaChevronRight className="text-red-500 text-right " />
          </Link>
        </div>
      </div>

      <hr className="my-2 border-buttonBluePastelLight dark:border-borderBlue" />
      <h5 className="text-lg mb-4 text-left mt-3">{title}</h5>

      <h6 className="font-normal text-left mt-4 text-sm">
        All time transactions
      </h6>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="text-left">
          <div className="flex flex-row items-center mt-2 ">
            <p className="mr-2 text-sm">Received</p>
            <img src={step_into} color="#F2F8FF" />
          </div>
          <p className="text-textGreen mt-2 text-sm dark:text-successDark text-successLight">
            <sup className="text-xs mr-2">$</sup>
            {allTimeData.received}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Sent</p>
            <img src={step_out} color="#F2F8FF" />
          </div>
          <p className="text-blue-500 mt-2 text-sm text-textBrightBlue">
            <sup className="text-xs mr-2">$</sup>
            {allTimeData.sent}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Reversed:</p>
            <img src={undo} color="#F2F8FF" height={20} />
          </div>
          <p className="text-red-500 mt-2 text-sm">
            <sup className="text-xs mr-2">$</sup>
            {allTimeData.reversed}
          </p>
        </div>
      </div>

      <h6 className="font-normal text-left mt-4 text-sm">
        This week's transactions
      </h6>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Received</p>
            <img src={step_into} color="#F2F8FF" />
          </div>
          <p className="dark:text-successDark text-successLight mt-2 text-sm">
            <sup className="text-xs mr-2">$</sup>
            {weeklyData.received}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Sent</p>
            <img src={step_out} color="#F2F8FF" />
          </div>
          <p className="text-blue-500 mt-2 text-sm text-textBrightBlue">
            <sup className="text-xs mr-2">$</sup>
            {weeklyData.sent}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Reversed:</p>
            <img src={undo} color="#F2F8FF" height={20} />
          </div>
          <p className="text-red-500 mt-2 text-sm">
            <sup className="text-xs mr-2">$</sup>
            {weeklyData.reversed}
          </p>
        </div>
      </div>
      <hr className="my-3 border-buttonBluePastelLight dark:border-borderBlue mt-7" />

      <div className="flex space-x-4 mt-4">
        <button className="bg-dimBlue text-white px-3 py-2 rounded-full hover:bg-[#023B6A] w-full text-sm transition-all duration-300 ease-in-out hover:scale-105">
          Delete Forever
        </button>
        <button className="bg-buttonBlue text-white px-3 py-2 rounded-full hover:bg-[#024D8F] w-full text-sm transition-all duration-300 ease-in-out hover:scale-105">
          Restore
        </button>
      </div>
    </div>
  );
}

export default ArchivedApplicationCard;
