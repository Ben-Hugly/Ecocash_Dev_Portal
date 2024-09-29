import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { step_into, step_out, undo } from "../../../assets/DashboardIcons";
import { FaChevronRight } from "react-icons/fa";

function MyApplicationsCard({
  id = "Default ID",
  title = "Default Title",
  allTimeData = { received: 0, sent: 0, reversed: 0 },
  weeklyData = { received: 0, sent: 0, reversed: 0 },
  status = "Unknown",
  currency = "USD",
  graphData = [],
}) {
  const LabelWithCircle = ({ text, color }) => (
    <div
      className={`border border-buttonBluePastelLight dark:border-borderBlue flex items-center space-x-1 rounded`}
    >
      <div className={`h-2 w-2 rounded-full ${color} ml-2`}></div>
      <span
        className={` text-textBlack dark:text-textWhite bg-${color} px-2 text-xs`}
      >
        {text}
      </span>
    </div>
  );

  return (
    <div className="bg-opacity-50 backdrop-blur-lg border border-buttonBluePastelLight dark:border-borderBlue rounded-3xl p-4 flex flex-col shadow-lg">
      <div className="flex justify-between items-center mb-2 gap-8">
        <h4 className="text-xl font-semibold">{id}</h4>
        <div className="flex items-center space-x-2">
          <LabelWithCircle
            text={status}
            color={status === "Live" ? "bg-green-500" : "bg-red-500"}
          />
          <div
            className={`border border-buttonBluePastelLight dark:border-borderBlue flex items-center space-x-1 rounded`}
          >
            <span
              className={` text-textBlack dark:text-textWhite px-2 text-xs`}
            >
              {currency}
            </span>
          </div>
          <FaChevronRight className="text-red-500" />
        </div>
      </div>

      <hr className="my-2 border-buttonBluePastelLight dark:border-borderBlue" />
      <h5 className="text-md mb-4 text-left mt-3 font-poppins font-semibold">
        {title}
      </h5>

      <h6 className="font-normal text-left mt-4 text-sm">
        All time transactions
      </h6>
      <div className="grid grid-cols-3 gap-2 mb-4 items-center">
        <div className="text-left mt-3">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-sm">Received</p>
            <img src={step_into} color="#F2F8FF" />
          </div>
          <p className="text-successDark mt-2 text-sm ">
            <sup className="text-xs mr-2">
              {currency === "USD" ? "$" : "ZiG"}
            </sup>
            {allTimeData.received}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Sent</p>
            <img src={step_out} color="#F2F8FF" />
          </div>
          <p className="text-blue-500 mt-2 text-sm text-textBrightBlue">
            <sup className="text-xs mr-2">
              {currency === "USD" ? "$" : "ZiG"}
            </sup>
            {allTimeData.sent}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Reversed:</p>
            <img src={undo} color="#F2F8FF" height={20} />
          </div>
          <p className="text-red-500 mt-2 text-sm">
            <sup className="text-xs mr-2">
              {currency === "USD" ? "$" : "ZiG"}
            </sup>
            {allTimeData.reversed}
          </p>
        </div>
      </div>

      <h6 className="font-normal text-left mt-4 text-sm">
        This week's transactions
      </h6>
      <div className="grid grid-cols-3 gap-2 mt-3 items-center">
        <div className="text-left">
          <div className="flex flex-row items-center mt-2 ">
            <p className="mr-2 text-xs">Received</p>
            <img src={step_into} color="#F2F8FF" />
          </div>
          <p className="text-textGreen mt-2 text-sm text-successDark">
            <sup className="text-xs mr-2">
              {currency === "USD" ? "$" : "ZiG"}
            </sup>
            {weeklyData.received}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2 ">
            <p className="mr-2 text-xs ">Sent</p>
            <img src={step_out} color="#F2F8FF" />
          </div>
          <p className="text-blue-500 mt-2 text-sm text-textBrightBlue">
            <sup className="text-xs mr-2">
              {currency === "USD" ? "$" : "ZiG"}
            </sup>
            {weeklyData.sent}
          </p>
        </div>
        <div className="text-left">
          <div className="flex flex-row items-center mt-2">
            <p className="mr-2 text-xs">Reversed:</p>
            <img src={undo} color="#F2F8FF" height={20} />
          </div>
          <p className="text-red-500 mt-2 text-sm">
            <sup className="text-xs mr-2">
              {currency === "USD" ? "$" : "ZiG"}
            </sup>
            {weeklyData.reversed}
          </p>
        </div>
      </div>

      {/* Graph Component */}
      <div className="mt-6 h-60 -ml-9">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <XAxis
              dataKey="day"
              tickLine={{ stroke: "#1E92FB" }}
              axisLine={{ stroke: "#1E92FB" }}
              tick={{ fontSize: 12, fontFamily: "poppins", fill: "#1E92FB" }}
            />
            <YAxis
              domain={[0, 5000]}
              ticks={[
                0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
              ]}
              tickLine={{ stroke: "#1E92FB" }}
              axisLine={{ stroke: "#1E92FB" }}
              tick={{ fontSize: 12, fontFamily: "poppins", fill: "#1E92FB" }}
            />
            <Tooltip />
            {/* Add horizontal grid lines */}
            <defs>
              <linearGradient id="horizontalGrid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E92FB" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1E92FB" stopOpacity="0" />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="received"
              stroke="#1E92FB"
              strokeDasharray="3 2"
              dot={false}
            />
            <Line type="monotone" dataKey="sent" stroke="#1E92FB" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-row items-center gap-3 ml-3 mt-3">
        <div className="flex flex-row font-poppins text-xs items-center gap-3">
          <span>This week</span>
          <div className="border-t-2 border-textBrightBlue w-16"></div>
        </div>

        <div className="flex flex-row font-poppins text-xs items-center gap-3">
          <span>Last week</span>
          <div className="border-t-2 border-dotted border-textBrightBlue w-16"></div>
        </div>
      </div>
    </div>
  );
}

export default MyApplicationsCard;
