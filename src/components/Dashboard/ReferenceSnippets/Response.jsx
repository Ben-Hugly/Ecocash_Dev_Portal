import React from "react";
import { CodeSnippetSmall } from "../../Dashboard";

function Response() {
  const status = `STATUS: 200 OK`;
  return (
    <div className="bg-componentsBackgroundLight dark:bg-componentsBackgroundDark text-black dark:text-white rounded-3xl p-5 font-poppins">
      <div className=" text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col">
        <h2 className="text-[28px] font-semibold font-poppins">Response</h2>
        <CodeSnippetSmall codeString={status} language={"groovy"} />
      </div>
    </div>
  );
}

export default Response;
