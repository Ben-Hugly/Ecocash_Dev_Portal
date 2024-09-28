import React from "react";
import { Java, Python, Javascript } from "../Dashboard/CodeSamples";
import WasThisHelpful from "./WasThisHelpful";

function SampleSnippets() {
  return (
    <div className="flex flex-col gap-12 p-2 ">
      <Java />
      <Python />
      <Javascript />
      <WasThisHelpful />
    </div>
  );
}

export default SampleSnippets;
