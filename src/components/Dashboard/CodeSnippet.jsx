import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy } from 'react-icons/fi';

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const codeString = `
    OkHttpClient client = new OkHttpClient().newBuilder()
      .build();
    MediaType mediaType = MediaType.parse("application/json");
    RequestBody body = RequestBody.create(mediaType, "{\\n  \\"customerMsisdn\\": \\"263774222475\\",\\n  \\"amount\\": 10.50,\\n  \\"reason\\": \\"Payment\\",\\n  \\"sourceReference\\": \\"0123456789\\"}\\n");
    Request request = new Request.Builder()
      .url("https://developers.ecocash.co.zw/api/ecocash_pay/api/v2/payment/instant/c2b/sandbox")
      .method("POST", body)
      .addHeader("X-API-KEY", "1wdI46HBW3pK7pH32wgr3st9wIM7E4w")
      .addHeader("Content-Type", "application/json")
      .build();
    Response response = client.newCall(request).execute();
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const customStyle = {
    lineHeight: '1.5',
    fontSize: '10px',
    borderRadius: '8px',
    padding: '16px',
    background: '#08081B',
    color: '#f8f8f2',
    fontFamily: 'Consolas, monospace',
  };

  return (

  <div className='bg-[#1f303f] p-4 rounded-3xl shadow-md max-w-full my-12'>

   <h2 className="text-white text-lg  font-semibold mb-2 text-left ml-2">Java</h2>
    
    <div className="relative rounded-3xl">
        <div
            onClick={handleCopy}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cursor-pointer absolute flex flex-row  top-0 right-0 p-2"
            aria-label="Copy code">
            <FiCopy size={20} color={hover ? '#11b7a49d' : '#808080'} />
            {copied && <span className="ml-2 text-green-300">Copied!</span>}
          
          </div>
    </div>
      

        <SyntaxHighlighter
          language="java"
          style={coldarkDark}
          customStyle={customStyle}
          lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
          showLineNumbers
          wrapLines={true}>
          {codeString}
        </SyntaxHighlighter>
      </div>


  );
};

export default CodeSnippet;