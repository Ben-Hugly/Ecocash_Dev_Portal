import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

const CodeSnippet = ({ codeString, language }) => {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "12px",
    borderRadius: "18px",
    padding: "16px",
    background: "#08081B",
    color: "#f8f8f2",
    fontFamily: "Consolas, monospace",
  };

  return (
    <div className="bg-componentsBackgroundLight  dark:bg-componentsBackgroundDark text-black dark:text-white  rounded-3xl p-4 font-poppins transition-all duration-1000">
      <div className="  text-left font-poppins gap-3 flex flex-col">
        <h2 className="text-[28px] font-semibold font-poppins capitalize">
          {language}
        </h2>

        <div className="relative rounded-3xl items-center">
          <div
            onClick={handleCopy}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cursor-pointer absolute flex flex-row  top-6 right-1 p-2"
            aria-label="Copy code"
          >
            <FiCopy
              size={22}
              color={hover ? "#11b7a49d" : "#808080"}
              className="dark:text-pearlBlue text-dimBlue"
            />
            {copied && (
              <span className="ml-2 text-green-300 text-sm font-poppins">
                Copied!
              </span>
            )}
          </div>
        </div>

        <SyntaxHighlighter
          language={language}
          style={coldarkDark}
          customStyle={customStyle}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          showLineNumbers
          wrapLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
