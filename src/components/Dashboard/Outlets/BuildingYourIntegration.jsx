import React, { useState } from "react";
import { buildingYourIntegration } from "../../../constants/data";
import { VideoPlay, CodeSnippetSmall, WasThisHelpful } from "..";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { CreateApiKey, RightSideBar } from "..";

const BuildingYourIntegration = () => {
  const codeString = `curl --location 'https://developers.ecocash.co.zw/api/ecocash_pay/api/v2/payment/instant/c2b/sandbox `;

  const components = [
    { name: "Building Your Integration", id: "build-api" },
    { name: "Creating an API key", id: "create-api" },
  ];
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    if (!isDisliked) {
      setIsLiked(!isLiked);
    }
  };

  const handleDislikeClick = () => {
    if (!isLiked) {
      setIsDisliked(!isDisliked);
    }
  };
  return (
    <div className="grid grid-cols-[4fr_1fr] grid-flow-col">
      <div className="flex flex-col gap-8 px-3 ">
        <div className="text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
            Building Your Integration
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-80">Was this helpful?</span>
            <div className="flex gap-3">
              <button onClick={handleLikeClick}>
                {isLiked ? (
                  <AiFillLike size={20} />
                ) : (
                  <AiOutlineLike size={20} />
                )}
              </button>
              <button onClick={handleDislikeClick}>
                {isDisliked ? (
                  <AiFillDislike size={20} />
                ) : (
                  <AiOutlineDislike size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          id="build-api"
          className="bg-componentsBackgroundLight  dark:bg-componentsBackgroundDark rounded-3xl p-10"
        >
          <div className="text-textBlack dark:text-white text-left font-poppins gap-3 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Building Your Integration
            </h2>
            <span className="text-sm opacity-80">
              Building an integration to the EcoCash Payments API involves the
              following steps:
            </span>
          </div>
          <div className="mt-6 space-y-5">
            {buildingYourIntegration.map((item, key) => (
              <div key={key} className="flex flex-col font-poppins">
                <div className="flex p-2 gap-3">
                  <span className="text-pearlBlue">{item.id}</span>
                  <h3 className="text-textBlack dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs  text-textBlack dark:text-white pl-8 opacity-85 text-left">
                  {item.description}
                </p>
                {item.id === "03" && (
                  <div className="ml-8 mt-5">
                    <VideoPlay />
                  </div>
                )}
                {item.id === "02" && (
                  <div className="ml-8 mt-5">
                    <CodeSnippetSmall
                      codeString={codeString}
                      language={"curl"}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="dark:bg-backgroundDark bg-backgroundLight border rounded-2xl mb-4 border-buttonBluePastelLight dark:border-borderBlue mt-10 text-textBlack dark:text-textWhite flex flex-col p-4 md:p-4">
            <div className="flex flex-row gap-2 items-center p-3 text-sm font-poppins font-thin text-left">
              <AiFillInfoCircle size={16} color="#7FB7F2" />
              <span className="text-textBlack dark:text-textWhite">
                For more information
              </span>
            </div>
            <div className="text-xs opacity-80 font-thin font-poppins text-left ml-0 md:ml-8 leading mb-4">
              Refer to the{" "}
              <span className="text-pearlBlue">
                EcoCash Payments API documentation
              </span>{" "}
              for detailed information and reach out to our{" "}
              <span className="text-pearlBlue">developer support team</span> or{" "}
              <span className="text-pearlBlue">developer community</span> for
              assistance whenever required. By following these steps, you can
              build a robust integration with the EcoCash Payments API for a
              smooth and secure payment experience within your application.
            </div>
          </div>
        </div>
        <CreateApiKey id="create-api" />
        <WasThisHelpful />
      </div>

      <RightSideBar components={components} />
    </div>
  );
};

export default BuildingYourIntegration;
