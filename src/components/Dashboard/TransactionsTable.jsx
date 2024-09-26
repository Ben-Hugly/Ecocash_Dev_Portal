import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowUUpLeft } from "react-icons/pi";
import { VscDebugStepInto } from "react-icons/vsc";

const TransactionsTable = ({
  filterDate,
  selectedStatus,
  selectedAmount,
  searchTerm,
  currentPage,
  setCurrentPage,
  filteredTransactions,
  itemsPerPage, // Receive itemsPerPage from parent
}) => {
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl">
      <div className="dark:bg-darkBgComponents bg-white text-white rounded-3xl font-poppins">
        <div className="flex flex-row justify-between items-center p-4">
          <span className="font-poppins font-medium text-[22px] dark:text-textWhite text-textBlack">
            Transactions
          </span>

          <div className="relative">
            <select
              className="border rounded-3xl pl-5 pr-10 py-2 text-textBlueSecond font-poppins font-medium text-sm h-[44px] bg-buttonBluePastelLight dark:bg-dimBlue dark:text-textBlue appearance-none"
              value=""
              onChange={() => {}}
            >
              <option value="" className="text-center">
                Export
              </option>
              <option value="PDF" className="text-center">
                PDF
              </option>
              <option value="CSV" className="text-center">
                CSV
              </option>
            </select>
            <IoIosArrowDown
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textBlack dark:text-textBlue"
              size={16}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-bgWhite dark:bg-backgroundDark text-left text-textBlack dark:text-textWhite font-poppins text-[13px] border-b border-buttonBluePastelLight dark:border-borderBlue h-[68px]">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Ecocash Reference</th>
                <th className="px-4 py-2">Custom MSISDN</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Currency</th>
                <th className="px-4 py-2">CR/DR</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t border-buttonBluePastelLight dark:border-borderBlue font-poppins font-thin text-xs h-[56px] text-textBlack dark:text-textWhite"
                >
                  <td className="px-4 py-2">{transaction.id}</td>
                  <td className="px-4 py-2">{transaction.ecocashReference}</td>
                  <td className="px-4 py-2">{transaction.customMsisdn}</td>
                  <td className="px-4 py-2">{transaction.amount}</td>
                  <td className="px-4 py-2">{transaction.date}</td>
                  <td className="px-4 py-2">{transaction.currency}</td>
                  <td className="px-4 py-2 flex flex-row gap-2">
                    {transaction.crDr}
                    <VscDebugStepInto
                      size={16}
                      color={transaction.crDr === "CR" ? "#5de987" : "#2a75ca"}
                    />
                  </td>
                  <td className="px-4 py-2">{transaction.status}</td>
                  <td className="px-4 py-2">
                    {transaction.status !== "REVERSED" ? (
                      <div className="flex flex-row items-center text-textBrightBlue hover:text-textDimBlue cursor-pointer hover:scale-105 gap-1">
                        <span>Reverse</span>
                        <PiArrowUUpLeft size={18} />
                      </div>
                    ) : (
                      <div className="flex flex-row items-center text-textBrightBlue hover:text-textDimBlue cursor-pointer hover:scale-105 gap-1">
                        <span>View Reversal</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
