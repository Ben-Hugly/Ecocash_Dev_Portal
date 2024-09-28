import React from "react";
import style from "../../styles";
import Lottie from "react-lottie";
const animationData = await import("../../assets/success.json");
import { IoChevronForward } from "react-icons/io5";
import { ApiKeyDisplay } from "../Dashboard";
import { Link } from "react-router-dom";

function NewAppSuccess() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };

  return (
    <div className="container mx-auto max-w-xl p-2 border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl shadow-md w-full md:w-3/4 lg:w-2/3 justify-center items-center mt-8 flex flex-col">
      <div className={`${style.SignUpSuccessContainer} gap-8`}>
        <div className={`${style.SignUpSuccessLottie}`}>
          <Lottie options={defaultOptions} height={240} width={240} />
        </div>

        <div className={`${style.SignUpSuccessTextWrapper}`}>
          <span className={`${style.lgText} text-[28px]`}>
            Successfully added Application
          </span>
          <span className={`${style.smallText} mt-2`}>
            Please copy and keep safe the API key provided below
          </span>
        </div>
        <ApiKeyDisplay apiKey="KEBbQbrLZ0cGkQXKikZnOn4NTxcTwdDy" />

        <div className="border-t border-buttonBluePastelLight dark:border-borderBlue w-full px-2"></div>

        <Link
          to={"/dashboard/myapps"}
          className="bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 focus:outline-none focus:shadow-outline text-[14px] h-[56px] w-full hover:scale-105 flex justify-between items-center rounded-full  mb-6"
        >
          <span className="flex-grow text-center">
            Continue To My Application
          </span>
          <IoChevronForward size={24} className="mr-4" />
        </Link>
      </div>
    </div>
  );
}

export default NewAppSuccess;
