import React, { useState } from "react";
import { PiCopyBold } from "react-icons/pi"; // Import the clipboard icon from react-icons

const ApiKeyDisplay = ({ apiKey }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between h-14 bg-componentsBackgroundLight border border-gray-300 rounded-md p-2">
      <span className="truncate">{apiKey}</span>
      <button
        type="button" // Prevent default button behavior
        onClick={copyToClipboard}
        aria-label="Copy API Key"
        className="flex items-center" // Align items in a row
      >
        <PiCopyBold className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800 mr-2" />
        {copied && (
          <span className="text-green-300 font-semibold">Copied!</span>
        )}
      </button>
    </div>
  );
};

export default ApiKeyDisplay;
