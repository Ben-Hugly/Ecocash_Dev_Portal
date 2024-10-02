import React from "react";
import CodeSnippet from "../CodeSnippet";

function Javascript() {
  const javascriptCode = `var settings = { 
     "url": "https://developers.ecocash.co.zw/api/ecocash_pay/api/v2/payment/instant/c2b/sandbox",
     "method": "POST",
     "timeout": 0,  
     "headers": {    
        "X-API-KEY": "1wddI46HBW3pK7pH32wgr3st9wIM7E4w",    
        "Content-Type": "application/json"  
     },  
     "data": JSON.stringify({
         "customerMsisdn": "263774222475",   
          "amount": 10.5,    
          "reason": "Payment",    
          "currency": "USD",    
          "sourceReference": "581af738-f459-4629-a72e-8388e0acdb5e"  
      }),
    };

    $.ajax(settings).done(function (response) { 
       console.log(response);
    });`;
  return (
    <div id="python">
      <CodeSnippet codeString={javascriptCode} language={"javascript"} />
    </div>
  );
}

export default Javascript;
