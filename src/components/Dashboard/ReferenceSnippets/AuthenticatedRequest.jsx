import React from "react";
import { CodeSnippetSmall } from "../../Dashboard";
import { AiFillInfoCircle } from "react-icons/ai";

function AuthenticatedRequest() {
  const baseUrl = `curl --location 'https://developers.ecocash.co.zw/api/ecocash_pay/api/v2/payment/instant/c2b/sandbox
   --header 'X-API-KEY: 1wddI46HBW3pK7pH32wgr3st9wIM7E4w' 
   --header 'Content-Type: application/json'
   --data '{ 
    "customerMsisdn": "263774222475",
    "amount": 10.50,
    "reason": "Payment",
    "currency": "USD", 
    "sourceReference": "581af738-f459-4629-a72e-8388e0acdb5e" 
   }'
  `;

  const pinCodes = `pin codes:
  - "0000"
  - "1234"
  - "9999"`;

  return (
    <div
      id="auth-request"
      className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-black dark:text-white  rounded-3xl p-5 font-poppins"
    >
      <div className=" text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col">
        <h2 className="text-[28px] font-semibold font-poppins">
          Authenticated Request
        </h2>
        <CodeSnippetSmall codeString={baseUrl} language={"javascript"} />
        <div>
          <div className="flex flex-row gap-2 items-center p-3 text-sm font-poppins font-thin  text-left ">
            <AiFillInfoCircle size={20} color="#7FB7F2" />
            <span className="text-textBlack dark:text-textWhite text-md font-medium">
              NB
            </span>
          </div>
          <span className="xs:ml-2 sm:ml-3  md:ml-10 font-thin text-sm">
            Ensure sourceReference follows a valid UUID format
          </span>
        </div>

        <div className="mt-8 gap-1 flex flex-col">
          <div className="font-poppins text-sm ml-4 font-thin text-left ">
            When working in the sandbox, please use the following passwords to
            complete transactions. It`s important to note that no other
            passwords will be accepted for these transactions:
          </div>
          <CodeSnippetSmall codeString={pinCodes} language={"python"} />
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedRequest;
