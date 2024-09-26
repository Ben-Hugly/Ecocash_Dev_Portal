import React from "react";
import { CodeSnippetSmall } from "../../Dashboard";

function PaymentRequest() {
  const baseUrl = `BASE_URL: https://developers.ecocash.co.zw/api/ecocash_pay/`;
  const sandbox = `POST: /api/v2/payment/instant/c2b/sandbox`;
  const live = `POST: /api/v2/payment/instant/c2b/live`;

  return (
    <div className="bg-componentsBackgroundDark rounded-3xl p-5 font-poppins">
      <div className=" text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col">
        <h2 className="text-[28px] font-semibold font-poppins">
          Payment Request:
        </h2>
        <CodeSnippetSmall codeString={baseUrl} language={"javascript"} />
        <div>
          <span className="font-poppins text-sm ml-3 font-thin ">Sandbox</span>
          <CodeSnippetSmall codeString={sandbox} language={"javascript"} />
        </div>

        <div>
          <span className="font-poppins text-sm ml-3 font-thin ">Live</span>
          <CodeSnippetSmall codeString={live} language={"javascript"} />
        </div>
      </div>
    </div>
  );
}

export default PaymentRequest;
