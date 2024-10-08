import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiCopyBold } from "react-icons/pi";
const SecretText = ({ text }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-800 dark:text-textWhite">
        {isRevealed ? text : "######"}
      </span>
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        aria-label="Toggle visibility"
      >
        {isRevealed ? (
          <FaEyeSlash size={20} className="text-headerTextLight mx-1" />
        ) : (
          <FaEye size={20} className="text-headerTextLight mx-1" />
        )}
      </button>
      <button
        onClick={handleCopy}
        aria-label="Copy text"
        className="flex flex-row"
      >
        <PiCopyBold size={20} className="text-headerTextLight" />
        {copied && <span className="text-green-400 mr-1 text-xs">Copied!</span>}
      </button>
    </div>
  );
};

export default SecretText;
