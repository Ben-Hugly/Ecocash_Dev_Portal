import React, { useState } from "react";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";
import { profile } from "../../../assets";
import { MdEdit } from "react-icons/md";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { AddMember } from "..";

const users = [
  {
    id: 1,
    name: "Alvy Tawana",
    email: "at@hugly.studio",
    role: "Editor",
    lastActive: "3 minutes ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Finn Nashe",
    email: "fin@hugly.studio",
    role: "Viewer",
    lastActive: "34 minutes ago",
    status: "Invited",
  },
  {
    id: 3,
    name: "Inno Reza",
    email: "inno@hugly.studio",
    role: "Owner",
    lastActive: "10 minutes ago",
    status: "Active",
  },
  {
    id: 4,
    name: "Max R",
    email: "m@hugly.studio",
    role: "Viewer",
    lastActive: "-",
    status: "Active",
  },
  {
    id: 5,
    name: "Marcia M",
    email: "marcia@hugly.studio",
    role: "Admin",
    lastActive: "10 minutes ago",
    status: "Invited",
  },
  {
    id: 6,
    name: "P Samanyai",
    email: "ps@hugly.studio",
    role: "Viewer",
    lastActive: "10 minutes ago",
    status: "Suspended",
  },
  {
    id: 7,
    name: "Sam R",
    email: "s@hugly.studio",
    role: "Viewer",
    lastActive: "-",
    status: "Active",
  },
  {
    id: 8,
    name: "Ben",
    email: "ben@hugly.studio",
    role: "Viewer",
    lastActive: "15 minutes ago",
    status: "Active",
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

  const [selectedRole, setSelectedRole] = useState();
  const [isOpen, setIsOpen] = useState({});
  const [isRoleSelected, setIsRoleSelected] = useState(false);

  const roles = ["Admin", "Viewer", "Editor"];

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setIsRoleSelected(true);
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 rounded-2xl dark:bg-backgroundDark bg-bgWhite p-4">
        {/* Search and Filter section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <div className="relative flex-1">
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

          <div className="relative ">
            <select
              className=" w-full rounded-3xl px-3 py-2 text-textBlueSecond font-poppins font-normal text-sm h-[44px] bg-buttonBluePastelLight appearance-none  dark:bg-dimBlue dark:text-textBlue"
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

          <div className="hidden sm:block h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

          <button
            className="bg-[#035AA9] text-white px-4 py-3 rounded-full hover:bg-[#024D8F] flex items-center font-poppins text-sm hover:scale-105"
            onClick={handleAddMemberClick}
          >
            Add Member
            <FaPlus size={15} className="ml-3" />
          </button>
        </div>
      </div>

      <div className="container mx-auto overflow-x-auto rounded-3xl">
        <table className="table-auto w-full min-w-[600px] border-b border-r border-l border-buttonBluePastelLight dark:border-borderBlue">
          <thead>
            <tr className="bg-bgWhite dark:bg-backgroundDark text-left text-textBlack dark:text-textWhite font-poppins text-[13px]  h-[68px] ">
              <th className="px-4 py-2">
                <div className="flex flex-row items-center gap-3 font-poppins text-sm ">
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
                className="border-t border-buttonBluePastelLight dark:border-borderBlue font-poppins  text-sm h-[56px] text-textBlack dark:text-textWhite"
              >
                <td className="px-2 py-2 text-left ">
                  <div className="flex flex-row items-center gap-4">
                    <img src={profile} width={44} height={44} alt="Profile" />
                    <div className="flex flex-col">
                      <span className="text-sm dark:text-textWhite text-textBlack">
                        {user.name}
                      </span>
                      <span className="text-xs dark:text-textWhite text-textBlack opacity-65">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-left">
                  <div className="flex flex-row items-center gap-3">
                    {!isRoleSelected ? (
                      <span>{user.role}</span>
                    ) : (
                      <span>{selectedRole}</span>
                    )}
                    {user.role !== "Owner" && (
                      <div className="relative">
                        <IoIosArrowDown
                          size={16}
                          color="#F62447"
                          onClick={() =>
                            setIsOpen((prev) => ({
                              ...prev,
                              [user.id]: !prev[user.id],
                            }))
                          }
                        />
                        {isOpen[user.id] && (
                          <ul className="absolute left-0 mt-1 bg-white border border-gray-300 rounded shadow-md">
                            {roles.map((role) => (
                              <li
                                key={role}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => handleRoleChange(role)}
                              >
                                {role}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-2 text-left text-textBrightBlue text-xs">
                  {user.lastActive}
                </td>
                <td
                  className={`px-4 py-2 text-left font-light opacity-80 ${
                    user.status === "Active"
                      ? "dark:text-white text-textBlack"
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
                    <div className="flex flex-row items-center gap-5 text-buttonBlue">
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
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between mb-4 rounded-2xl dark:bg-backgroundDark bg-bgWhite p-4 text-textBlack">
          <div className="flex items-center gap-4 w-full">
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

            <div className="hidden sm:block h-5 w-[1px] bg-borderLight dark:bg-borderBlue"></div>

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

            <span className="text-xs font-poppins text-textBlack dark:text-textWhite hidden sm:inline">
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
