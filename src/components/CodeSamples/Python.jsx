import React from "react";
import CodeSnippet from "../Dashboard/CodeSnippet";

function Python() {
  const pythonCode = `import http.client
 import json
 
 conn = http.client.HTTPSConnection("localhost", 8298)
 payload = json.dumps({  
    "customerMsisdn": "263774222475",  
    "amount": 10.5,  
    "reason": "Payment",  
    "currency": "USD",  
    "sourceReference": "581af738-f459-4629-a72e-8388e0acdb5e"
})
headers = {  '
   X-API-KEY': '1wddI46HBW3pK7pH32wgr3st9wIM7E4w',  
   'Content-Type': 'application/json'
}
conn.request("POST", "/ecocash_pay/api/v2/payment/instant/c2b/sandbox", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`;

  return (
    <div>
      <CodeSnippet codeString={pythonCode} language={"python"} />
    </div>
  );
}

export default Python;
