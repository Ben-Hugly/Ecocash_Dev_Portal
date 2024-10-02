import React from "react";
import CodeSnippet from "../CodeSnippet";

function Java() {
  const javaCode = `
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
  return (
    <div id="java">
      <CodeSnippet codeString={javaCode} language={"java"} />
    </div>
  );
}

export default Java;
