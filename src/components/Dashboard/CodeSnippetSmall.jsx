import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

function CodeSnippetSmall({ codeString, language }) {
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
    borderRadius: "16px",
    padding: "18px",
    background: "#08081B",
    color: "#f8f8f2",
    fontFamily: "Consolas, monospace",
  };

  return (
    <>
      <div className="relative rounded-3xl items-center">
        <div
          onClick={handleCopy}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="cursor-pointer absolute flex flex-row  top-5 right-0 p-3 items-center"
          aria-label="Copy code"
        >
          <FiCopy size={20} color={hover ? "#11b7a49d" : "#808080"} />
          {copied && <span className="ml-2 text-green-300">Copied!</span>}
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={customStyle}
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        wrapLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}

export default CodeSnippetSmall;
