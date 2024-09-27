import React, { useState } from "react";
import style from "../../styles";
import { MdDone } from "react-icons/md";

function AddNewApplication(handleDiscard) {
  const [appName, setAppName] = useState("");
  const [appURL, setAppURL] = useState("");
  const [appDesc, setAppDesc] = useState("");
  const [status, setStatus] = useState("");
  const [currency, setCurrency] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ["C2B", "B2B", "B2C", "Reversal"]; // category button text

  const handleButtonClick = (category) => {
    if (selectedCategories.includes(category)) {
      // Deselect the category if it's already selected
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      // Add the category to the selected list
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
  };

  return (
    <div className={`${style.form} gap-4 `}>
      <h2 className={`${style.headings} dark:text-textWhite`}>
        Add New Application
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="form-group">
          <div className="relative">
            <input
              type="text"
              id="appName"
              name="appName"
              placeholder="Enter the application name"
              className={`${style.inputs}`}
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            />

            <label htmlFor="appName" className={`${style.inputLabels}`}>
              Application Name
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="relative">
            <input
              type="text"
              id="appURL"
              name="appURL"
              placeholder="Enter the application name"
              className={`${style.inputs}`}
              value={appURL}
              onChange={(e) => setAppURL(e.target.value)}
            />

            <label htmlFor="appURL" className={`${style.inputLabels}`}>
              URL
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="relative">
            <textarea
              id="appDesc"
              name="appDesc"
              placeholder="Enter the application's description"
              className={`${style.inputs}dark:bg-transparent`}
              rows={4}
              value={appDesc}
              onChange={(e) => setAppDesc(e.target.value)}
            />
            <label htmlFor="appDesc" className={`${style.inputLabels}`}>
              Description
            </label>
          </div>
        </div>
        <div className="form-group ">
          <div className="max-w-md  dark:text-textWhite text-textBlack text-left">
            <label className="block text-[16px] font-semibold font-poppins mb-4 ml-4">
              Category
            </label>
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleButtonClick(category)}
                  className={`flex items-center justify-center border rounded-xl px-4 py-2 transition duration-300 border-buttonBluePastelLight dark:border-borderBlue ${
                    selectedCategories.includes(category)
                      ? "bg-textBrightBlue border-blue-600 dark:text-textWhite text-textBlack font-poppins font-thin"
                      : "bg-transparent border-blue-600 text-blue-600"
                  }`}
                >
                  {selectedCategories.includes(category) && (
                    <MdDone className="mr-2" />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group ">
          <div className="max-w-md  p-3 dark:text-textWhite text-textBlack">
            <div className="mb-4">
              <label className="block text-[16px] font-semibold mb-2 text-left text">
                Status
              </label>
              <div className="flex space-x-4 text-[14px] font-normal mt-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="sandbox"
                    checked={status === "sandbox"}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`form-radio border-2 border-buttonBluePastelLight rounded-full w-4 h-4 bg-none mr-2 appearance-none 
                        ${status === "live" ? "bg-textDimBlue p-1" : ""}`}
                  />
                  Sandbox
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="live"
                    checked={status === "live"}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`form-radio border-2 border-buttonBluePastelLight rounded-full w-4 h-4 bg-none mr-2 appearance-none 
                        ${status === "live" ? "bg-textDimBlue p-1" : ""}`}
                  />
                  Live
                </label>
              </div>
            </div>
            <div>
              <label className="block text-[16px] font-semibold mb-2 text-left ">
                Currency
              </label>
              <div className="flex space-x-4 text-[14px] font-normal mt-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="USD"
                    checked={currency === "USD"}
                    onChange={(e) => setCurrency(e.target.value)}
                    className={`form-radio border-2 border-buttonBluePastelLight rounded-full w-4 h-4 bg-none mr-2 appearance-none 
                        ${currency === "USD" ? "bg-textDimBlue p-1" : ""}`}
                  />
                  USD
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="ZIG"
                    checked={currency === "ZIG"}
                    onChange={(e) => setCurrency(e.target.value)}
                    className={`form-radio border-2 border-buttonBluePastelLight rounded-full w-4 h-4 bg-none mr-2 appearance-none 
                        ${currency === "ZIG" ? "bg-textDimBlue p-1" : ""}`}
                  />
                  ZIG
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 border-t  border-buttonBluePastelLight dark:border-borderBlue p-3 ">
          <button
            className={`${style.buttons} dark:bg-transparent bg-white border border-buttonBluePastelLight dark:border-borderBlue dark:text-textBlue text-textBlack mt-5 h-16 rounded-full hover:bg-darkBgHover`}
            onClick={() => handleDiscard}
          >
            Discard
          </button>
          <button
            type="submit"
            className={`${style.buttons} mt-5 h-16 rounded-full`}
          >
            {" "}
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewApplication;
