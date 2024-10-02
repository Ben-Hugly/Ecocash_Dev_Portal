import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowUUpLeft } from "react-icons/pi";
import { VscDebugStepInto } from "react-icons/vsc";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TransactionsTable = ({
  filteredTransactions,
  currentPage,
  itemsPerPage,
}) => {
  const [exportFormat, setExportFormat] = useState("");

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = (format) => {
    switch (format) {
      case "PDF":
        exportToPDF();
        break;
      case "CSV":
        exportToCSV();
        break;
      case "Excel":
        exportToExcel();
        break;
      default:
        break;
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        [
          "ID",
          "Ecocash Reference",
          "Custom MSISDN",
          "Amount",
          "Date",
          "Currency",
          "CR/DR",
          "Status",
        ],
      ],
      body: paginatedTransactions.map((transaction) => [
        transaction.id,
        transaction.ecocashReference,
        transaction.customMsisdn,
        transaction.amount,
        transaction.date,
        transaction.currency,
        transaction.crDr,
        transaction.status,
      ]),
    });
    doc.save("transactions.pdf");
  };

  const exportToCSV = () => {
    const csvContent = [
      [
        "ID",
        "Ecocash Reference",
        "Custom MSISDN",
        "Amount",
        "Date",
        "Currency",
        "CR/DR",
        "Status",
      ],
      ...paginatedTransactions.map((transaction) => [
        transaction.id,
        transaction.ecocashReference,
        transaction.customMsisdn,
        transaction.amount,
        transaction.date,
        transaction.currency,
        transaction.crDr,
        transaction.status,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToExcel = () => {
    const csvContent = [
      [
        "ID",
        "Ecocash Reference",
        "Custom MSISDN",
        "Amount",
        "Date",
        "Currency",
        "CR/DR",
        "Status",
      ],
      ...paginatedTransactions.map((transaction) => [
        transaction.id,
        transaction.ecocashReference,
        transaction.customMsisdn,
        transaction.amount,
        transaction.date,
        transaction.currency,
        transaction.crDr,
        transaction.status,
      ]),
    ]
      .map((e) => e.join("\t")) // Use tabs for Excel
      .join("\n");

    const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "transactions.xls");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              value={exportFormat}
              onChange={(e) => {
                setExportFormat(e.target.value);
                handleExport(e.target.value);
              }}
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
              <option value="Excel" className="text-center">
                Excel
              </option>
            </select>
            <IoIosArrowDown
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textBlack dark:text-textBlue"
              size={16}
            />
          </div>
        </div>

        <div className="container mx-auto overflow-x-auto">
          <table className="table-auto w-full min-w-[800px] border-collapse">
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
                  className="border-t border-buttonBluePastelLight dark:border-borderBlue font-poppins  text-sm h-[56px] text-textBlack dark:text-textWhite opacity-80"
                >
                  <td className="px-2 py-2">{transaction.id}</td>
                  <td className="px-4 py-2">{transaction.ecocashReference}</td>
                  <td className="px-4 py-2">{transaction.customMsisdn}</td>
                  <td className="px-4 py-2">{transaction.amount}</td>
                  <td className="px-4 py-2">{transaction.date}</td>
                  <td className="px-4 py-2">{transaction.currency}</td>
                  <td className="px-4 py-2 flex flex-row gap-2">
                    {transaction.crDr}
                    <VscDebugStepInto
                      size={16}
                      color={transaction.crDr === "CR" ? "#5de987" : "#1e92fb"}
                    />
                  </td>
                  <td className="px-2 py-2 text-left">{transaction.status}</td>
                  <td className="px-2 py-2 text-left">
                    {transaction.status !== "REVERSED" ? (
                      <Link
                        to={"/dashboard/myapps/transaction/reverse"}
                        className="flex flex-row items-center text-textBrightBlue hover:text-textDimBlue cursor-pointer hover:scale-105 gap-1"
                      >
                        <span className="font-poppins text-sm opacity-95">
                          Reverse
                        </span>
                        <PiArrowUUpLeft size={18} />
                      </Link>
                    ) : (
                      <Link
                        to={"/dashboard/myapps/transaction/reversedetails"}
                        className="flex flex-row items-center text-textBrightBlue hover:text-textDimBlue cursor-pointer hover:scale-105 gap-1"
                      >
                        <span className="font-poppins text-sm opacity-95">
                          View Reversal
                        </span>
                      </Link>
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
