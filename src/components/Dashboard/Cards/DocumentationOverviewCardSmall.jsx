import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

const routeMap = {
  "Building Your Integration": "/dashboard/documentation/dev/byi",
  C2B: "/dashboard/documentation/dev/c2b",
  B2C: "/dashboard/documentation/dev/b2c",
  B2B: "/dashboard/documentation/dev/b2b",
  Reversals: "/dashboard/documentation/dev/reversal",
  "API - Payments": "/dashboard/documentation/api/payments",
  "API - Refunds": "/dashboard/documentation/api/refunds",
  "API - Transactions Lookup": "/dashboard/documentation/api/lookup",
};

function DocumentationOverviewCardSmall({ title, description }) {
  const linkTo = routeMap[title];

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <Link
      to={linkTo}
      onClick={handleClick}
      className="rounded-2xl border dark:border-borderBlue border-borderLight p-4 space-y-3 hover:bg-lightBgHover dark:hover:bg-darkBgHover pb-8 w-full max-w-xs mx-auto"
    >
      <div className="border-b border-buttonBluePastelLight dark:border-borderBlue flex items-center justify-between pb-3">
        <h2 className="text-xs sm:text-sm font-semibold dark:text-textWhite text-textBlack">
          {title}
        </h2>
        <IoChevronForwardOutline size={18} color="#ef4444" />
      </div>

      <p className="text-xs sm:text-sm dark:text-textWhite text-gray-500 font-poppins font-extralight text-left">
        {description}
      </p>
    </Link>
  );
}

export default DocumentationOverviewCardSmall;
