import React, { useState } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import moment from "moment";

function WasThisHelpful() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    if (!isDisliked) {
      setIsLiked(!isLiked);
    }
  };

  const handleDislikeClick = () => {
    if (!isLiked) {
      setIsDisliked(!isDisliked);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center  text-textBlack dark:text-white text-left font-poppins justify-center">
      <span className="text-sm opacity-80 font-thin">Was this helpful?</span>
      <div className="flex gap-3">
        <button onClick={handleLikeClick}>
          {isLiked ? <AiFillLike size={24} /> : <AiOutlineLike size={24} />}
        </button>
        <button onClick={handleDislikeClick}>
          {isDisliked ? (
            <AiFillDislike size={24} />
          ) : (
            <AiOutlineDislike size={24} />
          )}
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-500">
          Last updated {moment("2024-07-02").format("YYYY-MM-DD")}
        </span>
        <span className="text-sm font-medium text-gray-500 ml-2">
          {moment("15:25", "HH:mm").format("HH:mm")} CAT
        </span>
      </div>
    </div>
  );
}

export default WasThisHelpful;
