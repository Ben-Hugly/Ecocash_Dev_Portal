import React from "react";
import {
  AuthenticatedRequest,
  HttpStatusCodeSummary,
  PaymentRequest,
  Response,
} from "../Dashboard/ReferenceSnippets";
import WasThisHelpful from "./WasThisHelpful";

function Reference() {
  return (
    <div className=" flex flex-col gap-12 p-2">
      <PaymentRequest />
      <AuthenticatedRequest />
      <Response />
      <HttpStatusCodeSummary />
      <WasThisHelpful />
    </div>
  );
}

export default Reference;
