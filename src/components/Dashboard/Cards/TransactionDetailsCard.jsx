import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";

const TransactionDetailsCard = ({
  appName,
  appId,
  transId,
  amount,
  currency,
  status,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg text-textBlack dark:text-textWhite font-poppins text-sm font-thin">
      <div className="flex items-center gap-2">
        <span className="w-[280px] text-left">Application Name</span>
        <span>{appName}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-[280px] text-left flex flex-row gap-1">
          <span>Application ID</span>
          <HiQuestionMarkCircle size={18} color="#1E92FB" />
        </div>
        <span>{appId}</span>
      </div>

      <div className="flex items-center gap-2 text-left">
        <div className="w-[280px] flex flex-row gap-1">
          <span>Transaction ID</span>
          <HiQuestionMarkCircle size={18} color="#1E92FB" />
        </div>

        <span>{transId}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-[280px] text-left">Amount</span>
        <span>{amount}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-[280px] text-left">Currency</span>
        <span className="border p-1 rounded-lg border-borderLight dark:border-borderBlue shadow-md">
          {currency}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-[280px] text-left">Status</span>
        <span className="border p-1 rounded-lg border-borderLight dark:border-borderBlue shadow-md uppercase">
          {status}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-[280px] text-left">Description</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default TransactionDetailsCard;
