import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";

function AddMember({ handleModalClose }) {
  const [linkRole, setLinkRole] = useState("");
  const [emailRole, setEmailRole] = useState("");
  const [link, setLink] = useState("");

  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleEmailChange = (value) => {
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === ",") {
      e.preventDefault();
      const trimmedEmail = inputValue.trim();

      if (trimmedEmail && !emails.includes(trimmedEmail)) {
        setEmails([...emails, trimmedEmail]);
        setInputValue("");
      }
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  const handleEmailLingChange = (role) => setEmailRole(role);
  const handleLinkRoleChange = (role) => setLinkRole(role);
  const handelLinkChange = (link) => setLink(link);

  return (
    <div className="fixed inset-0 items-center justify-center z-50 bg-black bg-opacity-50 font-poppins flex flex-col text-left">
      <div className="p-6 max-w-[704px] w-full shadow-lg dark:bg-componentsBackgroundDark bg-backgroundLight border rounded-3xl border-buttonBluePastelLight dark:border-borderBlue text-textBlack dark:text-textWhite relative">
        <button
          onClick={handleModalClose}
          className="bg-red-600 text-white px-3 py-3 rounded-full hover:bg-red-700 mb-4 absolute top-4 right-4"
        >
          <TfiClose size={16} />
        </button>

        <div className="flex flex-col gap-1">
          <span className="text-[28px] font-medium">
            Share this application
          </span>
          <span className="text-[14px] font-thin opacity-75">
            This application is for {"Hugly's USD"}. For{" "}
            {"C2B,B2B,B2 and Reversal"}
          </span>
        </div>

        <div className="mt-10">
          <span className="text-[14px] font-medium ml-4">Invite Link</span>

          <div className="flex flex-col sm:flex-row items-center w-full gap-2 mt-2">
            <div className="flex flex-row items-center w-full ">
              <input
                className="rounded-xl py-4 px-4 text-textBlack dark:text-white focus:outline-none focus:shadow-outline dark:componentsBackgroundDark bg-componentsBackgroundLight   hover:border-borderBlueSecond font-poppins text-[14px] h-[44px] w-full"
                placeholder="https://developer.ecocash.co.zw/share/ap..............."
                value={link}
                onChange={(e) => handelLinkChange(e.target.value)}
              />

              <div className="flex relative items-center justify-end ml-auto">
                <select
                  className="pl-2 pr-6 py-2 text-black font-poppins font-normal text-sm rounded-xl h-[36px] bg-backgroundLight appearance-none dark:bg-dimBlue  mr-1 absolute right-0"
                  value={linkRole}
                  onChange={(e) => handleLinkRoleChange(e.target.value)}
                >
                  <option value="">Can View</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                  <option value="Owner">Owner</option>
                </select>
                <MdOutlineKeyboardArrowDown
                  color="#EC2125"
                  size={20}
                  className="absolute right-2"
                />
              </div>
            </div>
            <button className="bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 px-4 focus:outline-none focus:shadow-outline text-[14px] rounded-3xl hover:scale-105 h-[44px] w-full sm:w-1/6">
              <span>Copy link</span>
            </button>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-[14px] font-medium ml-4">Invite by email</span>

          <div className="flex flex-col items-center w-full">
            <div className="flex flex-wrap mt-4 ">
              {emails.map((email, index) => (
                <span
                  key={index}
                  className="bg-componentsBackgroundLight rounded-lg py-1 px-2 mr-2 mb-2 flex items-center"
                >
                  {email}
                  <button
                    className="ml-2 text-red-500"
                    onClick={() => removeEmail(email)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full gap-2 mt-2">
              <div className="flex flex-row items-center w-full ">
                <input
                  className="rounded-xl py-4 px-4 text-textBlack dark:text-white focus:outline-none focus:shadow-outline dark:componentsBackgroundDark bg-componentsBackgroundLight   hover:border-borderBlueSecond font-poppins text-[14px] h-[44px] w-full"
                  placeholder="Invite others by email"
                  value={inputValue}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="flex relative items-center justify-end ml-auto">
                  <select
                    className="pl-2 pr-6 py-2 text-black font-poppins font-normal text-sm rounded-xl h-[36px] bg-backgroundLight appearance-none dark:bg-dimBlue  mr-1 absolute right-0"
                    value={emailRole}
                    onChange={(e) => handleEmailLingChange(e.target.value)}
                  >
                    <option value="">Can View</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Owner">Owner</option>
                  </select>
                  <MdOutlineKeyboardArrowDown
                    color="#EC2125"
                    size={20}
                    className="absolute right-2"
                  />
                </div>
              </div>
              <button className="bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 px-4 focus:outline-none focus:shadow-outline text-[14px] rounded-3xl hover:scale-105 h-[44px] w-full sm:w-1/6 mt-2 sm:mt-0 ">
                <span className="">Invite</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border border-buttonBluePastelLight dark:border-borderBlue mt-8 rounded-3xl flex flex-col p-1">
          <div className="flex flex-row gap-2 items-center p-3 text-sm font-poppins font-thin text-left">
            <IoWarning size={24} color="#FEAF58" />
            <span className="text-textBlack dark:text-textWhite font-semibold">
              Warning
            </span>
          </div>
          <span className="text-textBlack dark:text-textWhite ml-8 font-thin text-sm mb-4 mx-5">
            This is sensitive information regarding your finances. Be careful
            who you give access to this application.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
