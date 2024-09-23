import React from "react";
import { IoChevronForward } from "react-icons/io5";
import SecretText from "../../Dashboard/TableComponent/SecretText";
import { MdEdit, MdArchive } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaTrashCan, FaTrashArrowUp } from "react-icons/fa6";

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
        <div className="flex flex-row gap-2 items-center">
          <div
            className={
              status === "Live"
                ? "bg-successLight w-2 h-2 rounded-full"
                : "bg-dangerLight w-2 h-2 rounded-full"
            }
          ></div>
          <span className="text-xs dark:text-textWhite">{status}</span>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-textWhite font-poppins">
        {category}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-gray-900 flex justify-end">
        <div className="flex flex-row items-center justify-between gap-4 text-headerTextLight">
          <span className="text-xs  hover:scale-105 hover:text-textBlue font-poppins">
            View Transactions
          </span>
          <MdEdit size={16} />

          {activeTab === "Archived" ? (
            <div className="flex flex-row gap-3">
              <FaTrashArrowUp size={16} />
              <FaTrashCan size={16} />
            </div>
          ) : (
            <div className="flex flex-row gap-3">
              <GrPowerReset size={16} />
              <MdArchive size={16} />
            </div>
          )}

          <IoChevronForward size={18} className="text-textRed" />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
