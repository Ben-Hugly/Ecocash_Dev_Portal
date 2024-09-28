import React, { useState } from "react";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";
import { profile } from "../../assets";
import { MdEdit } from "react-icons/md";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { AddMember } from "../Dashboard";

const users = [
  {
    id: 1,
    name: "Bernard Towindo",
    email: "ben@hugly.studio",
    role: "Editor",
    lastActive: "3 minutes ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    lastActive: "5 minutes ago",
    status: "Invited",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    role: "Viewer",
    lastActive: "10 minutes ago",
    status: "Suspended",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john@example.com",
    role: "Owner",
    lastActive: "10 minutes ago",
    status: "Suspended",
  },
];

function MyAppUsersAndPermissions() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = (status) => setSelectedStatus(status);
  const handleSearchTermChange = (term) => setSearchTerm(term);

  // Filter users based on search term and selected status
  const filteredUsers = users.filter((user) => {
    const matchesSearchTerm =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus
      ? user.status === selectedStatus
      : true;

    return matchesSearchTerm && matchesStatus;
  });

  // Pagination logic
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(parseInt(newItemsPerPage, 10));
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  const handleAddMemberClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 rounded-2xl dark:bg-backgroundDark bg-bgWhite p-2">
        {/* Search and Filter section */}
        <div className="flex items-center gap-2 w-full">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              className="shadow-md rounded-lg py-4 pl-10 pr-3 text-textBlack dark:text-white hover:border-borderBlueSecond font-poppins text-[14px] font-thin h-[44px] w-full dark:bg-darkBgComponents"
              placeholder="Search Members"
              value={searchTerm}
              onChange={(e) => handleSearchTermChange(e.target.value)}
            />
            <IoMdSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textBlueSecond"
              size={22}
            />
          </div>
          <div className="relative flex-1">
            <select
              className="rounded-3xl px-3 py-2 text-textBlueSecond font-poppins font-normal text-sm h-[44px] bg-buttonBluePastelLight appearance-none w-full dark:bg-dimBlue dark:text-textBlue"
              value={selectedStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Invited">Invited</option>
              <option value="Suspended">Suspended</option>
            </select>
            <IoIosArrowDown
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textBlack dark:text-textBlue"
              size={16}
            />
          </div>

          <div className="h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>
          <button
            className="bg-[#035AA9] text-white px-4 py-3 rounded-full hover:bg-[#024D8F] flex items-center font-poppins text-sm hover:scale-105"
            onClick={handleAddMemberClick}
          >
            Add Member
            <FaPlus size={15} className="ml-3" />
          </button>
        </div>
      </div>

      <div className="container mx-auto overflow-x-auto">
        <table className="table-auto w-full min-w-[600px]">
          <thead>
            <tr className="bg-bgWhite dark:bg-backgroundDark text-left text-textBlack dark:text-textWhite font-poppins text-[13px] border-b border-buttonBluePastelLight dark:border-borderBlue h-[68px]">
              <th className="px-4 py-2">
                <div className="flex flex-row items-center gap-3 font-poppins text-sm">
                  <span>Member</span>
                  <IoMdArrowUp size={18} />
                </div>
              </th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Last Active</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t border-buttonBluePastelLight dark:border-borderBlue font-poppins font-thin text-sm h-[56px] text-textBlack dark:text-textWhite"
              >
                <td className="px-2 py-2 text-left">
                  <div className="flex flex-row items-center gap-4">
                    <img src={profile} width={44} height={44} alt="Profile" />
                    <div className="flex flex-col">
                      <span>{user.name}</span>
                      <span className="text-xs text-textWhite opacity-35">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-left">
                  <div className="flex flex-row items-center gap-3">
                    <span>{user.role}</span>
                    {user.role !== "Owner" && (
                      <IoIosArrowDown size={16} color="#F62447" />
                    )}
                  </div>
                </td>
                <td className="px-4 py-2 text-left text-textBrightBlue text-xs">
                  {user.lastActive}
                </td>
                <td
                  className={`px-4 py-2 text-left text-sm ${
                    user.status === "Active"
                      ? "text-white"
                      : user.status === "Invited"
                      ? "text-textBrightBlue"
                      : user.status === "Suspended"
                      ? "text-red-600"
                      : ""
                  }`}
                >
                  {user.status}
                </td>
                <td className="px-4 py-2 text-left">
                  {user.role === "Admin" && (
                    <div className="flex flex-row items-center gap-5 text-textBrightBlue">
                      <MdEdit size={20} />
                      <FaTrashCan size={18} />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Section */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between mb-4 rounded-2xl dark:bg-backgroundDark bg-bgWhite p-2 text-textBlack">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                className="mr-2 px-2 py-1 rounded-3xl bg-borderLight dark:bg-dimBlue dark:text-textBlue"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaAngleLeft size={24} className="p-1" color="#1E92FB" />
              </button>
              <span className="font-poppins text-xs text-textBlack dark:text-textWhite">
                {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, totalUsers)} of{" "}
                {totalUsers}
              </span>
              <button
                className="px-2 py-1 rounded-3xl bg-borderLight dark:bg-dimBlue"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= totalUsers}
              >
                <FaAngleRight size={24} className="p-1" color="#1E92FB" />
              </button>
            </div>
            <div className="h-5 w-[1px] bg-borderLight"></div>
            <div className="relative">
              <select
                className="rounded-3xl pl-4 pr-10 py-1 text-buttonBluePastelLight font-poppins font-normal text-sm h-[36px] bg-textBlueSecond appearance-none w-full"
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(e.target.value)}
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
      </div>

      {/* Modal for Adding Members */}
      {isModalOpen && <AddMember handleModalClose={handleModalClose} />}
    </div>
  );
}

export default MyAppUsersAndPermissions;
