import React from "react";
import style from "../../styles";
import Lottie from "react-lottie";
const animationData = await import("../../assets/failed.json");
import { MdRestartAlt } from "react-icons/md";

function ReversalFailed() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };

  return (
    <div className="container mx-auto max-w-xl p-2 border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl shadow-md w-full  lg:w-2/3  px-8 mt-8 flex flex-col">
      <div className={`${style.SignUpSuccessContainer} gap-8`}>
        <div className={`${style.SignUpSuccessLottie} mt-5`}>
          <Lottie options={defaultOptions} height={240} width={240} />
        </div>

        <div className={`${style.SignUpSuccessTextWrapper}`}>
          <span className={`${style.lgText} text-[28px]`}>Reversal Failed</span>
          <span className={`${style.smallText} mt-2 text-[16px]`}>
            Insufficient funds fro the reversal
          </span>
        </div>

        <div className="flex flex-row items-center justify-between gap-6 border-t  border-buttonBluePastelLight dark:border-borderBlue mt-4 mb-5 ">
          <button
            className={` font-poppins  px-4 focus:outline-none focus:shadow-outline text-[14px] h-[48px] w-full  hover:scale-105 dark:bg-transparent bg-white border border-buttonBluePastelLight dark:border-borderBlue dark:text-textBlue text-textBlue  rounded-full hover:bg-darkBgHover mt-10`}
          >
            Close
          </button>

          <button className="bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 focus:outline-none focus:shadow-outline text-[14px] h-[48px] w-full hover:scale-105 flex justify-between items-center rounded-full mt-10 px-2">
            <span className="flex-grow text-center ">Retry</span>
            <MdRestartAlt size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReversalFailed;
