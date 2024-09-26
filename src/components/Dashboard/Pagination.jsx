import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [selectedItemsPerPage, setSelectedItemsPerPage] =
    useState(itemsPerPage);

  const handleItemPerPageChange = (newItemsPerPage) => {
    const itemsPerPageNumber = parseInt(newItemsPerPage, 10);
    setSelectedItemsPerPage(itemsPerPageNumber);
    onItemsPerPageChange(itemsPerPageNumber); // Notify parent component about the change
    onPageChange(1); // Reset to the first page when items per page changes
  };

  return (
    <div className="mt-4 flex items-center justify-between mb-4 rounded-2xl dark:bg-backgroundDark bg-bgWhite p-2 text-textBlack">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            className="mr-2 px-2 py-1 rounded-3xl bg-borderLight dark:bg-dimBlue dark:text-textBlue"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft size={24} className="p-1" color="#1E92FB" />
          </button>
          <span className="font-poppins text-xs text-textBlack dark:text-textWhite">
            {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </span>
          <button
            className="px-2 py-1 rounded-3xl bg-borderLight dark:bg-dimBlue"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= totalItems}
          >
            <FaAngleRight size={24} className="p-1" color="#1E92FB" />
          </button>
        </div>
        <div className="h-5 w-[1px] bg-borderLight"></div>
        <div className="relative">
          <select
            className="rounded-3xl pl-4 pr-10 py-1 text-buttonBluePastelLight font-poppins font-normal text-sm h-[36px] bg-textBlueSecond appearance-none w-full"
            value={selectedItemsPerPage}
            onChange={(e) => handleItemPerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <IoIosArrowDown
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-buttonBluePastelLight"
            size={16}
          />
        </div>
        <span className="text-xs font-poppins text-textBlack dark:text-textWhite">
          Items per page
        </span>
      </div>
    </div>
  );
};

export default Pagination;
