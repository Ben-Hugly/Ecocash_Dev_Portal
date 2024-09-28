// Hero.jsx
import React, { useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "../../styles";
import hero from "../../assets/video/hero.mp4"; // Update with your video file name

function Hero() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div className={`${style.heroWrapper}`}>
      <div className={`${style.heroGradient}`}></div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        onEnded={handleVideoEnded}
        className={`${style.heroImageBG}`}
        style={{ filter: "brightness(0.8)" }}
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`${style.heroContentWrapper}`}>
        <div className={`${style.heroTextWrapper}`}>
          <h2 className={`${style.heroHeadingText}`}>
            Connecting every corner of your business
          </h2>
          <p className={`${style.heroDescription}`}>
            {`Join thousands of business owners using EcoCash to get paid and grow. We've got industry-leading APIs for, online payments, business tools and expert 7-day support.`}
          </p>
        </div>

        <div className={`${style.heroButtonWrapper}`}>
          <Link
            to="/signin"
            variant="gradient"
            size="sm"
            className={`${style.heroLearnMoreButton}`}
          >
            <div className={`${style.heroLearnMoreButtonBorder}`}>
              <span className={`${style.heroLearnMoreButtonText}`}>
                Learn more
              </span>
              <AiOutlineRight size={16} />
            </div>
          </Link>

          <Link
            to="/signin"
            variant="gradient"
            size="sm"
            className={`${style.heroContactsButton}`}
          >
            <span className={`${style.heroContactsButtonText}`}>
              Contact Sales
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
