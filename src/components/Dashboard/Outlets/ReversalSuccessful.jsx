import React, { useEffect, useState } from "react";
import style from "../../../styles";
import Lottie from "react-lottie";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function ReversalSuccessful() {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    const loadAnimationData = async () => {
      const data = await import("../../../assets/success.json");
      setAnimationData(data.default);
    };

    loadAnimationData();
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="container mx-auto max-w-xl border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl shadow-md w-full lg:w-2/3 p-8 mt-8 flex flex-col">
      <div
        className={`${style.SignUpSuccessContainer} gap-8 flex flex-col items-center`}
      >
        <div className={`${style.SignUpSuccessLottie}`}>
          <Lottie options={defaultOptions} height={240} width={240} />
        </div>

        <div className={`${style.SignUpSuccessTextWrapper}`}>
          <span className={`${style.lgText} text-[28px] text-center`}>
            Reversal Successful
          </span>
        </div>

        <div className="border-t border-buttonBluePastelLight dark:border-borderBlue w-full px-2"></div>

        <Link
          to={"/dashboard/myapps/details"}
          className="bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 focus:outline-none focus:shadow-outline text-[14px] h-[56px] w-full hover:scale-105 flex justify-between items-center rounded-full mb-6 transition-all duration-300 ease-in-out hover:scale-10"
        >
          <span className="flex-grow text-center">
            Continue To My Transactions
          </span>
          <IoChevronForward size={24} className="mr-4" />
        </Link>
      </div>
    </div>
  );
}

export default ReversalSuccessful;
