import React from "react";
import { TfiClose } from "react-icons/tfi";
import { AiFillInfoCircle } from "react-icons/ai";
import { agreementData } from "../../../constants/data";
import TermsAndConditionsTextContainer from "../../../components/TermsAndConditionsTextContainer";

function TermsAndConditions({ handleModalClose }) {
  return (
    <div className="fixed inset-0 items-center z-50 bg-black bg-opacity-50 font-poppins flex flex-col text-left">
      <button
        onClick={handleModalClose}
        className="bg-red-600 text-white px-3 py-3 rounded-full hover:bg-red-700 mb-4 absolute top-4 right-4"
      >
        <TfiClose size={16} />
      </button>
      <div className="p-6 max-w-[1408px] max-h-[80vh] w-full shadow-lg dark:bg-componentsBackgroundDark bg-backgroundLight border rounded-3xl border-buttonBluePastelLight dark:border-borderBlue text-textBlack dark:text-textWhite relative my-20 overflow-hidden">
        <div className="flex flex-col gap-1 overflow-y-auto max-h-[calc(80vh-100px)]">
          <span className="text-[28px] font-medium">Terms & Conditions</span>
          <span className="text-[14px] font-thin opacity-75">
            These Terms and Conditions ("Terms") govern your use of the EcoCash
            Payments Open API ("API") provided by EcoCash, a leading mobile
            money service provider. By accessing and using the API, you agree to
            comply with these Terms.
          </span>

          <div className="dark:bg-backgroundDark bg-componentsBackgroundLight rounded-2xl mb-4 mt-10 text-textBlack dark:text-textWhite flex flex-col">
            <div className="flex flex-row gap-2 items-center p-3 text-sm font-poppins font-thin text-left max-w-[1344px]">
              <AiFillInfoCircle size={16} color="#1e92fb" />
              <span className="text-textBlack dark:text-textWhite">NB</span>
            </div>
            <div className="text-xs opacity-80 font-thin font-poppins text-left ml-9 pb-4">
              Please read and fully understand each clause set out in these
              Terms. If you do not agree with any part of these Terms, you may
              not use the API.
            </div>
          </div>

          <div className="font-poppins text-sm text-textBlack dark:text-textWhite ml-4 max-w-[1344px] flex flex-col gap-3">
            <TermsAndConditionsTextContainer agreementData={agreementData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
