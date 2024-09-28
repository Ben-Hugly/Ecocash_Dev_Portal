import React from "react";
import { PiChartLineUpBold } from "react-icons/pi";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "../../styles";

function ReadyToGrow() {
  return (
    <div className={`${style.ReadyToGrow}`}>
      <div className={`${style.ReadyToGrowContainer}`}>
        <div
          className={`${style.ReadyToGrowImageGradient}`}
          style={{
            backgroundImage: `url('src/assets/chess.jpg')`,
            filter: "brightness(0.6)",
          }}
        ></div>

        <div className={`${style.ReadyToGrowComponentsContainer}`}>
          <PiChartLineUpBold size={40} color="#02437D" />

          <h2 className={`${style.ReadyToGrowHeaderText}`}>Ready to grow?</h2>
          <p className={`${style.ReadyToGrowDescription}`}>
            {" "}
            It takes just 5 minutes to create a Hugly Developer profile.
          </p>

          <Link
            to="/signin"
            variant="gradient"
            size="sm"
            className={`${style.ReadyToGrowButton}`}
          >
            <div className={`${style.ReadyToGrowButtonTextWrapper}`}>
              <span className={`${style.ReadyToGrowButtonText}`}>
                Get started
              </span>
              <AiOutlineRight size={23} />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between my-8 gap-10 md:flex-row p-4 overflow-hidden">
        <div className="flex flex-col text-left gap-8 items-start w-full md:w-[550px] overflow-hidden">
          <h1 className="text-[22px] font-bold dark:text-textWhite text-textBlack">
            Have a question?
          </h1>
          <p className="text-[14px] dark:text-textWhite text-textBlack font-poppins font-thin">
            We're here to help you work with EcoCash
          </p>
          <button className="text-white bg-textBlue border border-textBlue rounded-3xl py-2 px-7 hover:bg-buttonBluePastelLight hover:text-black font-poppins h-[44px] flex items-center gap-1 text-[14px]">
            Contact Sales
            <AiOutlineRight size={16} />
          </button>
        </div>

        <div className="flex flex-row gap-8 mt-8 md:mt-0 items-center">
          <div className="flex flex-col text-left w-full md:w-[250px] gap-8 items-start overflow-hidden">
            <h3 className="text-[16px] font-semibold dark:text-textWhite text-textBlack">
              Contact support
            </h3>
            <p className="dark:text-textWhite text-textBlack text-[14px] font-poppins font-thin">
              If you need to get immediate help, please contact our support
              directly
            </p>
            <button className="text-textBlack dark:text-textWhite border border-textBlue rounded-3xl py-2 px-7 hover:bg-buttonBluePastelLight hover:text-black font-poppins h-[44px] flex items-center gap-1 text-[14px]">
              Get help
              <AiOutlineRight size={16} />
            </button>
          </div>

          <div className="flex flex-col text-left w-full md:w-[250px] gap-8 items-start overflow-hidden">
            <h3 className="text-[16px] font-semibold dark:text-textWhite text-textBlack">
              Developer forum
            </h3>
            <p className="dark:text-textWhite text-textBlack text-[14px] font-poppins font-thin">
              Ask questions and find answers from the community
            </p>
            <button className="text-textBlack dark:text-textWhite border border-textBlue rounded-3xl py-2 px-7 hover:bg-buttonBluePastelLight hover:text-black font-poppins h-[44px] flex items-center gap-1 text-[14px]">
              Visit forum
              <AiOutlineRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToGrow;
