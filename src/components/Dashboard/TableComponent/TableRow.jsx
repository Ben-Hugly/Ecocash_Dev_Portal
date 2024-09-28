import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import SecretText from "../../Dashboard/TableComponent/SecretText";
import { MdEdit, MdArchive } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaTrashCan, FaTrashArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TableRow({
  id,
  name,
  merchantCode,
  apiKey,
  status,
  category,
  activeTab,
}) {
  return (
    <tr>
      <td className="px-4 py-4 whitespace-nowrap text-textBlack dark:text-textWhite font-poppins text-left">
        {id}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-textBlack dark:text-textWhite font-poppins text-left">
        {name}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-textBlack dark:text-textWhite font-poppins text-left">
        {merchantCode}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-textBlack dark:text-textWhite font-poppins text-left">
        <SecretText text={apiKey} />
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-textBlack dark:text-textWhite font-poppins text-left">
        <div className="flex flex-row gap-3 items-center">
          <div
            className={
              status === "Live"
                ? "bg-successLight w-2 h-2 rounded-full"
                : "bg-dangerLight w-2 h-2 rounded-full"
            }
          ></div>
          <span className="text-sm dark:text-textWhite">{status}</span>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-textWhite font-poppins">
        {category}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-gray-900 flex justify-end">
        <div className="flex flex-row items-center justify-between gap-6 text-headerTextLight">
          <span className="text-sm  hover:scale-105 hover:text-textBlue font-poppins">
            View Transactions
          </span>
          <Link to="/dashboard/myapps/edit">
            <MdEdit
              size={20}
              className=" hover:text-textBlue font-poppins hover:scale-105"
            />
          </Link>

          {activeTab === "Archived" ? (
            <div className="flex flex-row gap-4">
              <FaTrashArrowUp
                size={20}
                className=" hover:text-textBlue font-poppins hover:scale-105"
              />
              <FaTrashCan
                size={20}
                className=" hover:text-textBlue font-poppins hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex flex-row gap-4 ">
              <GrPowerReset
                size={20}
                className=" hover:text-textBlue font-poppins hover:scale-105"
              />
              <MdArchive
                size={20}
                className=" hover:text-textBlue font-poppins hover:scale-105"
              />
            </div>
          )}
          <Link to="/dashboard/myapps/details">
            <IoChevronForward
              size={20}
              className="text-dangerLight  hover:scale-105"
            />
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
