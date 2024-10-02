import React, { useState } from "react";
import style from "../../../styles";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

function ReverseTransaction() {
  const [appName, setAppName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [reverseDescription, setReverseDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencyClicked, setCurrencyClicked] = useState(false);

  const handleGenderChange = (event) => {
    setCurrency(event.target.value);
    setCurrencyClicked(!currencyClicked);
  };

  // Toggle password visibility
  const toggleCurrencyIcon = () => {
    setCurrencyClicked(!currencyClicked);
  };
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
  };

  return (
    <div className={`${style.form} gap-4 `}>
      <h2 className={`${style.headings} dark:text-textWhite`}>
        Reverse Transaction
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
              id="transactionId"
              name="transactionId"
              placeholder="Enter the  transaction ID"
              className={`${style.inputs}`}
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />

            <label htmlFor="transactionId" className={`${style.inputLabels}`}>
              Transaction ID
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="relative">
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter the  amount"
              className={`${style.inputs}`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <label htmlFor="amount" className={`${style.inputLabels}`}>
              Amount
            </label>
          </div>
        </div>

        <div className="form-group relative">
          <select
            id="currency"
            name="currency"
            onChange={handleGenderChange}
            onClick={toggleCurrencyIcon}
            required
            className={`${style.SignUpGenderSelector}  dark:bg-componentsBackgroundDark`}
          >
            <option className="bg-transparent" value="USD">
              USD
            </option>
            <option value="ZiG">ZiG</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="currency" className={`${style.inputLabels}`}>
            Currency
          </label>
          <label className="text-textBlack dark:text-white font-poppins text-[11px] block absolute top-4 text-right right-2 bg-transparent dark:bg-componentsBackgroundDark z-10 px-1 items-center">
            {currencyClicked ? (
              <MdArrowDropDown className="w-5 h-5 dark:text-textWhite text-textBlack" />
            ) : (
              <MdArrowDropUp className="w-5 h-5 dark:text-textWhite text-textBlack" />
            )}
          </label>
        </div>

        <div className="form-group relative">
          <textarea
            id="reverseDescription"
            name="reverseDescription"
            placeholder="Enter the reason for the reversal"
            className={`border dark:border-borderBlue  border-buttonBluePastelLight rounded-lg w-full py-4 px-3 text-textBlack dark:text-white focus:outline-none focus:shadow-outline dark:bg-primary hover:border-borderBlueSecond font-poppins text-[14px] bg-transparent`}
            rows={4}
            value={reverseDescription}
            onChange={(e) => setReverseDescription(e.target.value)}
          />
          <label
            htmlFor="reverseDescription"
            className={`${style.inputLabels}`}
          >
            Reason For Reversal
          </label>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 border-t  border-buttonBluePastelLight dark:border-borderBlue p-3 mt-2 ">
          <Link
            to={"/dashboard/myapps"}
            type="submit"
            className={`  hover:bg-textBlue  font-poppins py-2 px-4 focus:outline-none focus:shadow-outline text-[14px]  w-full   transition-all duration-300 ease-in-out hover:scale-10 dark:bg-transparent bg-transparent border border-buttonBluePastelLight dark:border-borderBlue dark:text-textBlue text-textBlack mt-5 h-[56px] rounded-full flex items-center justify-center`}
          >
            Discard
          </Link>
          <Link
            to={"/dashboard/myapps/transaction/reversesuccess"}
            className={`${style.buttons} mt-5 h-16 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-10`}
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ReverseTransaction;
