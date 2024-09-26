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
    <div className="flex items-center justify-between mb-4 rounded-2xl  dark:bg-backgroundDark  bg-bgWhite p-2">
      <div className="flex items-center gap-2 w-full">
        <span className="font-poppins text-textBlack dark:text-textWhite font-medium text-sm">
          Filter
        </span>
        <div className="h-5 w-[1px] bg-borderLight  dark:bg-borderBlue"></div>

        <div className="relative flex-1">
          <DatePicker
            id="filterDate"
            name="filterDate"
            selected={filterDate}
            onChange={handleDateChange}
            placeholderText="Issue date: All time"
            className="shadow-md rounded-lg w-[200px] py-4 pl-10 pr-3 text-textBlack dark:text-white hover:border-borderBlueSecond font-poppins text-[14px] font-thin h-[44px] dark:bg-darkBgComponents"
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

        <div className="h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

        <div className="relative flex-1">
          <select
            className="rounded-3xl px-6 py-2 text-textBlueSecond font-poppins font-normal text-sm h-[44px] bg-buttonBluePastelLight appearance-none w-full dark:bg-dimBlue dark:text-textBlue"
            value={selectedStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            <option value="" className="text-center">
              Status
            </option>
            <option value="Completed" className="text-center">
              Completed
            </option>
            <option value="Pending" className="text-center">
              Pending
            </option>
            <option value="Failed" className="text-center">
              Failed
            </option>
          </select>
          <IoIosArrowDown
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textBlack dark:text-textBlue"
            size={16}
          />
        </div>

        <div className="h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

        <div className="relative flex-1">
          <select
            className="rounded-3xl pl-4 pr-10 py-2 text-textBlueSecond font-poppins font-normal text-sm h-[44px] bg-buttonBluePastelLight appearance-none w-full  dark:bg-dimBlue dark:text-textBlue"
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

        <div className="h-5 w-[1px] bg-borderLight  dark:bg-borderBlue"></div>

        <div className="relative flex-1">
          <input
            type="text"
            className="shadow-md rounded-lg  py-4 pl-10 pr-3 text-textBlack dark:text-white hover:border-borderBlueSecond font-poppins text-[14px] font-thin h-[44px] w-[250px] dark:bg-darkBgComponents"
            placeholder="Transaction ID, EcoCash Reference, Customer MSISDN"
            value={searchTerm}
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
          <IoMdSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textBlueSecond"
            size={22}
          />
        </div>

        <button
          className="bg-[#035AA9] text-white px-3 py-2 rounded-full hover:bg-[#024D8F] flex items-center font-poppins text-sm"
          onClick={() => {
            // Apply filters
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default TransactionsFilter;
