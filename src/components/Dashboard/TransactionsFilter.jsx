import React from "react";
import DatePicker from "react-datepicker";
import { RiCalendar2Fill } from "react-icons/ri";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

const TransactionsFilter = ({
  filterDate,
  handleDateChange,
  selectedStatus,
  handleStatusChange,
  selectedAmount,
  handleAmountChange,
  searchTerm,
  handleSearchTermChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 rounded-2xl dark:bg-backgroundDark bg-bgWhite p-2 gap-3 flex-wrap">
      {/* Filter Label */}
      <span className="font-poppins text-textBlack dark:text-textWhite font-medium text-sm">
        Filter
      </span>

      {/* Vertical Divider (shown on medium screens and up) */}
      <div className="hidden md:block h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

      {/* Date Picker */}
      <div className="relative flex-1 min-w-[200px] max-w-[300px]">
        <DatePicker
          id="filterDate"
          name="filterDate"
          selected={filterDate}
          onChange={handleDateChange}
          placeholderText="Issue date: All time"
          className="shadow-md rounded-lg w-full py-2 pl-10 pr-3 text-textBlack dark:text-white hover:border-borderBlueSecond font-poppins text-[14px] h-[44px] dark:bg-darkBgComponents"
          dateFormat="MM/dd/yy"
          wrapperClassName="w-full"
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
        />
        <RiCalendar2Fill
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textBlueSecond"
          size={20}
        />
      </div>

      {/* Vertical Divider (shown on medium screens and up) */}
      <div className="hidden md:block h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

      {/* Status Select */}
      <div className="relative flex-1 min-w-[150px] max-w-[200px]">
        <select
          className="rounded-3xl px-6 py-2 text-textBlueSecond font-poppins font-normal text-sm h-[44px] bg-buttonBluePastelLight appearance-none w-full dark:bg-dimBlue dark:text-textBlue"
          value={selectedStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
        <IoIosArrowDown
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textBlack dark:text-textBlue"
          size={16}
        />
      </div>

      {/* Vertical Divider (shown on medium screens and up) */}
      <div className="hidden md:block h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

      {/* Amount Select */}
      <div className="relative flex-1 min-w-[150px] max-w-[200px]">
        <select
          className="rounded-3xl pl-4 pr-10 py-2 text-textBlueSecond font-poppins font-normal text-sm h-[44px] bg-buttonBluePastelLight appearance-none w-full dark:bg-dimBlue dark:text-textBlue"
          value={selectedAmount}
          onChange={(e) => handleAmountChange(e.target.value)}
        >
          <option value="">Amount</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select>
        <IoIosArrowDown
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textBlack dark:text-textBlue"
          size={16}
        />
      </div>

      {/* Vertical Divider (shown on medium screens and up) */}
      <div className="hidden md:block h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

      {/* Search Input */}
      <div className="relative flex-1 min-w-[200px] max-w-[300px]">
        <input
          type="text"
          className="shadow-md rounded-lg py-2 pl-10 pr-3 text-textBlack dark:text-white hover:border-borderBlueSecond font-poppins text-[14px] h-[44px] w-full dark:bg-darkBgComponents"
          placeholder="Transaction ID, EcoCash Reference, Customer MSISDN"
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
        />
        <IoMdSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textBlueSecond"
          size={22}
        />
      </div>

      {/* Apply Filters Button */}
      <button
        className="bg-[#035AA9] text-white px-3 py-2 rounded-full hover:bg-[#024D8F] flex items-center font-poppins text-sm"
        onClick={() => {
          // Apply filters
        }}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default TransactionsFilter;
