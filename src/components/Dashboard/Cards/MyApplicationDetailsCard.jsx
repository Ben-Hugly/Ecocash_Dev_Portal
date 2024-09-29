import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";

function MyApplicationDetailsCard({
  appName,
  appId,
  appNumber,
  merchantCode,
  apiKey,
  description,
  category,
  status,
}) {
  return (
    <div className="flex flex-col gap-5 text-textBlack dark:text-textWhite font-poppins text-sm font-thin border border-buttonBluePastelLight dark:border-borderBlue p-6 rounded-3xl">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="w-full md:w-[280px] text-left">Application Name</span>
        <span>{appName}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="w-full md:w-[280px] text-left flex flex-row gap-1">
          <span>Application ID</span>
          <HiQuestionMarkCircle size={18} color="#1E92FB" />
        </div>
        <span>{appId}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="w-full md:w-[280px] text-left flex flex-row gap-1">
          <span>Application Number</span>
          <HiQuestionMarkCircle size={18} color="#1E92FB" />
        </div>
        <span>{appNumber}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="w-full md:w-[280px] text-left">Merchant Code</span>
        <span>{merchantCode}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="w-full md:w-[280px] text-left flex flex-row gap-1">
          <span>API Key</span>
          <HiQuestionMarkCircle size={18} color="#1E92FB" />
        </div>
        <span>{apiKey}</span>
      </div>

      <div className="dark:bg-darkBgComponents bg-white border-t border-b py-4 border-buttonBluePastelLight dark:border-borderBlue">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="w-full md:w-[280px] text-left">Description</span>
          <span>{description}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="w-full md:w-[280px] text-left">Category</span>
        <div className="flex flex-wrap gap-2">
          {category.map((cat) => (
            <span
              key={cat}
              className="border p-1 rounded-lg border-borderLight dark:border-borderBlue shadow-md"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <span className="md:w-[280px] lg:w-[280px] text-left">Status</span>
        <div className="border px-2 py-1 rounded-lg border-borderLight dark:border-borderBlue shadow-md flex flex-row items-center gap-2 md:ml-0 lg:ml-0 ml-10">
          <div
            className={
              status === "Live"
                ? "bg-successLight w-2 h-2 rounded-full"
                : "bg-dangerLight w-2 h-2 rounded-full"
            }
          ></div>
          <span className="text-sm font-poppins dark:text-textWhite">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyApplicationDetailsCard;
