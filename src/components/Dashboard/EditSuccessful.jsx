import React from "react";
import style from "../../styles";
import Lottie from "react-lottie";
const animationData = await import("../../assets/success.json");
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function EditSuccessful() {
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
            Successfully Edited Application
          </span>
        </div>

        <div className="flex flex-row items-center justify-between gap-2 border-t  border-buttonBluePastelLight dark:border-borderBlue mt-4 mb-5 ">
          <Link
            to={"/dashboard/myapps"}
            className={`${style.buttons} dark:bg-transparent bg-white border border-buttonBluePastelLight dark:border-borderBlue dark:text-textBlue text-textBlack h-[44px] rounded-full hover:bg-darkBgHover text-[12px] flex items-center justify-center px-4 mt-10`}
          >
            Close
          </Link>
          <Link
            to={"/dashboard/myapps"}
            className="bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 focus:outline-none focus:shadow-outline text-[12px] h-[48px] w-full hover:scale-105 flex justify-between items-center rounded-full mt-10  px-2"
          >
            <span className="flex-grow text-center ">
              Continue To My Application
            </span>
            <IoChevronForward size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditSuccessful;
