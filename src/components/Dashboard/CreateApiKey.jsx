import React from "react";
import { VideoPlay } from "../Dashboard";

function CreateApiKey() {
  return (
    <div className="bg-componentsBackgroundDark rounded-3xl p-6 font-poppins">
      <div className=" text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col max-w-[750px]">
        <h2 className="text-[28px] font-semibold font-poppins">
          Creating an API Key
        </h2>
        <span className="text-sm opacity-80 font-thin">
          Every call to the Ecocash API must include an API secret key. We
          generate an API key for you for both the Sandbox and Live environment.
          Follow the instructions below to create your API key.
        </span>
      </div>

      <div className="flex font-poppins flex-col  gap-3">
        <div className="flex flex-row gap-3 mt-5">
          <span className="text-pearlBlue">{"01"}</span>
          <h3 className="text-textBlack dark:text-white ">
            {"Create An Account"}
          </h3>
        </div>
        <p className="text-sm font-thin  text-textBlack dark:text-white text-left w-[850px] opacity-75 pl-8 max-w-[600px]">
          {
            "First, create an account or sign in.Create a new project and enter all required details.Once you create an account, a one-time API key is generated. Keep this API key safe; it is generated only once."
          }
        </p>
        <div className="ml-8 mt-5">
          <VideoPlay />
        </div>
      </div>
    </div>
  );
}

export default CreateApiKey;
