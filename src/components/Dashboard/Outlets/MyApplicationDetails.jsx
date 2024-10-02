import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import MyApplicationDetailsCard from "../Cards/MyApplicationDetailsCard";
import {
  Pagination,
  MyAppUsersAndPermissions,
  TransactionsTable,
  TransactionsFilter,
} from "..";
import { Link } from "react-router-dom";

function MyApplicationDetails() {
  const tabs = ["General", "Transactions", "Users & Permissions"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const cardProps = {
    appName: "Hughly USD Payments: Comprehensive",
    appId: 1901,
    appNumber: 890194,
    merchantCode: "08658",
    apiKey: "KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy",
    category: ["C2B", "B2B", "B2C", "Reversal"],
    status: "Live",
    description:
      "This application is for Hugly's USD. For C2B, B2B, B2C and Reversal",
  };

  // State for filtering
  const [filterDate, setFilterDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Manage items per page

  const handleDateChange = (date) => setFilterDate(date);
  const handleStatusChange = (status) => setSelectedStatus(status);
  const handleAmountChange = (amount) => setSelectedAmount(amount);
  const handleSearchTermChange = (term) => setSearchTerm(term);

  // Sample transaction data
  const transactions = [
    {
      id: 2089,
      ecocashReference: "2ff084f9-aa1a-b80b-6e1ad7327c2c",
      customMsisdn: "263772784869",
      amount: 1128.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "PENDING_VALIDATION",
    },
    {
      id: 2090,
      ecocashReference: "MP240617.1710.A58552",
      customMsisdn: "263772784869",
      amount: 32254.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "FAILED_REVERSAL",
    },

    {
      id: 2091,
      ecocashReference: "2ff084f9-aa1a-b80b-6e1ad7327c2c",
      customMsisdn: "263772784869",
      amount: 128.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "PENDING_VALIDATION",
    },
    {
      id: 2092,
      ecocashReference: "MP240617.1710.A58552",
      customMsisdn: "263772784869",
      amount: 34.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "DR",
      status: "SUCCESS",
    },
    {
      id: 2093,
      ecocashReference: "2ff084f9-aa1a-b80b-6e1ad7327c2c",
      customMsisdn: "263772784869",
      amount: 128.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "PENDING_VALIDATION",
    },
    {
      id: 2094,
      ecocashReference: "MP240617.1710.A58552",
      customMsisdn: "263772784869",
      amount: 34.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "REVERSED",
    },

    {
      id: 2095,
      ecocashReference: "2ff084f9-aa1a-b80b-6e1ad7327c2c",
      customMsisdn: "263772784869",
      amount: 128.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "DR",
      status: "PENDING_VALIDATION",
    },
    {
      id: 2096,
      ecocashReference: "MP240617.1710.A58552",
      customMsisdn: "263772784869",
      amount: 34.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "REVERSED",
    },
    {
      id: 2097,
      ecocashReference: "2ff084f9-aa1a-b80b-6e1ad7327c2c",
      customMsisdn: "263772784869",
      amount: 200.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "DR",
      status: "PENDING_VALIDATION",
    },
    {
      id: 2098,
      ecocashReference: "MP240617.1710.A58552",
      customMsisdn: "263772784869",
      amount: 457.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "DR",
      status: "SUCCESS",
    },
    {
      id: 2099,
      ecocashReference: "2ff084f9-aa1a-b80b-6e1ad7327c2c",
      customMsisdn: "263772784869",
      amount: 15.0,
      date: "26 JUN 2024",
      currency: "USD",
      crDr: "CR",
      status: "FAILED_REVERSAL",
    },
  ];

  // Calculate filtered transactions based on the filters applied
  const filteredTransactions = transactions.filter((transaction) => {
    const dateMatch =
      !filterDate ||
      new Date(transaction.date).toLocaleDateString() ===
        new Date(filterDate).toLocaleDateString();
    const statusMatch =
      !selectedStatus || transaction.status === selectedStatus;
    const amountMatch =
      !selectedAmount || transaction.amount === parseFloat(selectedAmount);
    const searchTermMatch =
      !searchTerm ||
      transaction.ecocashReference
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.customMsisdn.includes(searchTerm) ||
      transaction.amount.toString().includes(searchTerm);

    return dateMatch && statusMatch && amountMatch && searchTermMatch;
  });

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return <MyApplicationDetailsCard {...cardProps} />;
      case "Transactions":
        return (
          <>
            <TransactionsFilter
              filterDate={filterDate}
              handleDateChange={handleDateChange}
              selectedStatus={selectedStatus}
              handleStatusChange={handleStatusChange}
              selectedAmount={selectedAmount}
              handleAmountChange={handleAmountChange}
              searchTerm={searchTerm}
              handleSearchTermChange={handleSearchTermChange}
            />
            <TransactionsTable
              filterDate={filterDate}
              selectedStatus={selectedStatus}
              selectedAmount={selectedAmount}
              searchTerm={searchTerm}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              filteredTransactions={filteredTransactions}
              itemsPerPage={itemsPerPage} // Pass itemsPerPage
            />
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredTransactions.length}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={setItemsPerPage} // Handle items per page change
            />
          </>
        );
      case "Users & Permissions":
        return <MyAppUsersAndPermissions />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="dark:bg-backgroundDark bg-white text-white p-6 rounded-3xl">
        <div className="flex justify-between mb-4 flex-col gap-5">
          <div className="flex md:flex-row lg:flex-row flex-col gap-4 items-center justify-between">
            <div className="font-poppins text-left max-w-[640px] text-textBlack dark:text-textWhite flex flex-col gap-4 ml-3">
              <h2 className="text-[45px] font-semibold">
                {"Hughly USD Payment: Comprehensive"}
              </h2>
              <span className="text-sm  opacity-75">
                This application is for {"Hugly's USD."} For C2B, B2B, B2C and
                Reversal
              </span>
            </div>

            <div className="flex items-center font-poppins text-sm hover:scale-105">
              <Link
                to={"/dashboard/myapps/edit"}
                className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center font-poppins"
              >
                Edit Application
                <MdEdit size={15} className="ml-3" />
              </Link>
            </div>
          </div>

          <div className="dark:bg-componentsBackgroundDark bg-white text-white p-2 rounded-3xl">
            <div className="flex mb-4 p-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-textBlack dark:text-textWhite font-poppins text-sm ${
                    tab === activeTab ? "border-b-2 border-red-500" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApplicationDetails;
