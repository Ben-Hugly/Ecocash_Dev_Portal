import React, { useEffect, useState } from "react";
import { Footer } from "../components";
import style from "../styles";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { InputScreensLogo } from "../components";

function PasswordRecoverySuccess() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimationData = async () => {
      const data = await import("../assets/success.json");
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
    <>
      <div className="flex flex-col  items-center h-[1000px]">
        <InputScreensLogo />
        <div
          className={`${style.form} flex flex-col items-center justify-center`}
        >
          <form className={`${style.SignUpSuccessContainer}`}>
            <div className={`${style.SignUpSuccessLottie}`}>
              <Lottie options={defaultOptions} height={240} width={240} />
            </div>

            <div className={`${style.SignUpSuccessTextWrapper}`}>
              <span className={`${style.lgText}`}>Success</span>
              <span className={`${style.smallText} mt-3`}>
                You have successfully activated your account.
              </span>
            </div>
            <Link
              to="/login"
              variant="gradient"
              size="sm"
              type="submit"
              className={` ${style.linkButtons} mt-8 `}
            >
              Continue to My Account
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PasswordRecoverySuccess;
