import React from "react";
import { CodeSnippetSmall } from "../../Dashboard";

function HttpStatusCodeSummary() {
  const statusCodes = `200   Ok                   Everything worked as expected.
400   Bad Request          The request was unacceptable, often due to missing a required parameter.
401   Unauthorized         No valid API key provided.
402   Request Failed       The parameters were valid but the request failed.
403   Forbidden            The API key doesn’t have permissions to perform the request.
404   Not Found            The requested resource doesn’t exist.
409   Conflict             The request conflicts with another request (perhaps due to using the same idempotent key).
429   Too Many Requests    Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500   Server Errors        Something went wrong on Ecocash’s end. (These are rare.)
`;

  return (
    <div
      id="code-summary"
      className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-black dark:text-white  rounded-3xl p-5 font-poppins"
    >
      <div className=" text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col">
        <h2 className="text-[28px] font-semibold font-poppins">
          HTTP Status Code Summary
        </h2>
        <CodeSnippetSmall codeString={statusCodes} language={"css"} />
      </div>
    </div>
  );
}

export default HttpStatusCodeSummary;
