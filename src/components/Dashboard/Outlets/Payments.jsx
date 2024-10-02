import React, { useState } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { SampleSnippets, Reference, RightSideBar } from "..";

function Payments() {
  const tabs = ["Reference", "Code Samples"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
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
  const componentsReference = [
    { name: "Payments Request", id: "payments-request" },
    { name: "Authentication Request", id: "auth-request" },
    { name: "Response", id: "response" },
    { name: "HTTP Status Code Summary", id: "code-summary" },
  ];
  const componentsCode = [
    { name: "Java", id: "java" },
    { name: "Python", id: "python" },
    { name: "JavaScript", id: "javascript" },
  ];

  return (
    <div className="grid grid-cols-[3.5fr_1fr] grid-flow-col">
      <div className="flex flex-col gap-12 transition-all duration-1000">
        <div className=" text-textBlack dark:text-white text-left font-poppins gap-4 flex flex-col ml-4 mb-16">
          <h2 className="text-[36px] font-semibold font-poppins ">Payments</h2>
          <p className="text-sm font-thin opacity-90 max-w-[750px]">
            EcoCash Open API is organized around REST. Our API has
            resource-oriented URLs, accepts form-encoded request bodies, returns
            JSON responses, and uses standard HTTP response codes,
            authentication, and verbs. You can use the EcoCash Open API in test
            mode/sandbox, which doesn’t affect your live data or interact with
            the banking networks. The API key you use to authenticate the
            request determines whether the request is live mode or sandbox.
          </p>
          <div className="flex flex-row items-center gap-3 ">
            <span className="text-sm opacity-90 font-thin">
              Was this helpful?
            </span>
            <div className="flex gap-3">
              <button onClick={handleLikeClick}>
                {isLiked ? (
                  <AiFillLike size={24} />
                ) : (
                  <AiOutlineLike size={24} />
                )}
              </button>
              <button onClick={handleDislikeClick}>
                {isDisliked ? (
                  <AiFillDislike size={24} />
                ) : (
                  <AiOutlineDislike size={24} />
                )}
              </button>
            </div>
          </div>

          <div className="flex mb-4 mt-8 ml-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-textBlack dark:text-textWhite font-poppins text-sm ${
                  tab === activeTab ? "border-b-2 border-red-500" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Display the appropriate component based on the active tab */}
          {activeTab === "Reference" && <Reference />}
          {activeTab === "Code Samples" && <SampleSnippets />}
        </div>
      </div>
      <RightSideBar
        components={
          activeTab === "Reference" ? componentsReference : componentsCode
        }
      />
    </div>
  );
}

export default Payments;
