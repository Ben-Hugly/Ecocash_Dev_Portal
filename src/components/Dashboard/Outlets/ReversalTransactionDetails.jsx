import React from "react";
import TransactionDetailsCard from "../Cards/TransactionDetailsCard";

function ReversalTransactionDetails() {
  return (
    <div className="dark:bg-darkBgComponents bg-white p-4 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold font-poppins text-left text-textBlack dark:text-textWhite">
          {2094}
        </h2>
      </div>

      <div className="border border-spacing-2 border-borderLight dark:border-borderBlue rounded-3xl p-4">
        <TransactionDetailsCard
          appName={"Hugly USD Payments: Comprehensive"}
          appId={1901}
          transId={2094}
          amount={"34.00"}
          currency={"USD"}
          status={"Reversed"}
          description={"Customer entered wrong merchant code"}
        />
      </div>
    </div>
  );
}

export default ReversalTransactionDetails;
