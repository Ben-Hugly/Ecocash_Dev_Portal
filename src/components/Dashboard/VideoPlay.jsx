import React from "react";
import { FaPlay } from "react-icons/fa";

function VideoPlay() {
  return (
    <div className="dark:bg-dimBlue bg-buttonBluePastelLight rounded-3xl h-[140px] w-[240px] flex justify-center items-center">
      <FaPlay color="#1E92FB" />
    </div>
  );
}

export default VideoPlay;
