import React from "react";
import { VideoPlay } from "../Dashboard";

function CreateApiKey() {
  return (
    <div className="bg-componentsBackgroundLight  dark:bg-componentsBackgroundDarkrounded-3xl p-6 md:p-8 font-poppins rounded-3xl">
      <div className="text-textBlack dark:text-white text-left gap-3 flex flex-col max-w-[750px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tex-left">
          Creating an API Key
        </h2>
        <span className="text-sm opacity-80 font-thin text-left">
          Every call to the Ecocash API must include an API secret key. We
          generate an API key for you for both the Sandbox and Live environment.
          Follow the instructions below to create your API key.
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-5 text-left">
        <div className="flex flex-row gap-3">
          <span className="text-pearlBlue">{"01"}</span>
          <h3 className="text-textBlack dark:text-white">
            {"Create An Account"}
          </h3>
        </div>
        <p className="text-sm font-thin text-textBlack dark:text-white text-left pl-4 sm:pl-8 opacity-75 max-w-[600px]text-left">
          First, create an account or sign in. Create a new project and enter
          all required details. Once you create an account, a one-time API key
          is generated. Keep this API key safe; it is generated only once.
        </p>
        <div className="mt-5 ">
          <VideoPlay />
        </div>
      </div>
    </div>
  );
}

export default CreateApiKey;
