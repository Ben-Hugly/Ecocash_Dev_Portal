import { BsListCheck, BsShieldLockFill } from "react-icons/bs";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdBuild, IoIosHelpCircle, IoLogoWhatsapp } from "react-icons/io";
import { FaCirclePlay, FaFacebook } from "react-icons/fa6";
import { MdOutlineSupportAgent, MdSpaceDashboard } from "react-icons/md";
import { useCase1, useCase2, useCase3, useCase4 } from "../assets/UseCases";
import { PiChartLineUpBold } from "react-icons/pi";
import React from "react";
import {
  seamlessIntegration,
  realTimePayment,
  enhancedPayment,
  customizablePayment,
  weCut,
  hugly,
  google,
} from "../assets";

import {
  byi,
  c2b,
  b2c,
  b2b,
  rev,
  payment,
  refund,
  lookup,
} from "../assets/DashboardDocumentationOverview";

const archivedApplicationsData = [
  {
    id: "1892",
    title: "Hugly USD Payments: Test 1",
    allTimeData: { received: "1", sent: "1", reversed: "1" },
    weeklyData: { received: "589.31", sent: "311.26", reversed: "42.53" },
    status: "Archived",
    currency: "USD",
    onRestore: () => console.log("Restore 1892"),
    onDelete: () => console.log("Delete 1892"),
  },
  {
    id: "1890",
    title: "Hugly USD Payments: Test 7",
    allTimeData: { received: "1", sent: "1", reversed: "1" },
    weeklyData: { received: "589.31", sent: "311.26", reversed: "42.53" },
    status: "Archived",
    currency: "USD",
    onRestore: () => console.log("Restore 1890"),
    onDelete: () => console.log("Delete 1890"),
  },
  {
    id: "1897",
    title: "Hugly USD Payments: Test 5",
    allTimeData: { received: "1", sent: "1", reversed: "1" },
    weeklyData: { received: "589.31", sent: "311.26", reversed: "42.53" },
    status: "Archived",
    currency: "USD",
    onRestore: () => console.log("Restore 1897"),
    onDelete: () => console.log("Delete 1897"),
  },
];
const GettingStartedData = [
  {
    title: "Find your ideal solution",
    icon: BsListCheck,
    links: [
      { label: "Business quick start guide", url: "#" },
      { label: "Pricing guide", url: "#" },
      { label: "Availability guide", url: "#" },
    ],
  },
  {
    title: "Videos and learning materials",
    icon: FaCirclePlay,
    links: [
      { label: "Tutorials", url: "#" },
      { label: "Webinars", url: "#" },
    ],
  },
  {
    title: "Build and launch resources",
    icon: IoMdBuild,
    links: [
      { label: "Developer quick start guide", url: "#" },
      { label: "API References", url: "#" },
      { label: "Project launch guide", url: "#" },
    ],
  },
  {
    title: "Help and support tools",
    icon: IoIosHelpCircle,
    links: [
      { label: "Developer quick start guide", url: "#" },
      { label: "API References", url: "#" },
      { label: "Project launch guide", url: "#" },
    ],
  },
];

const socialMediaData = [
  {
    icon: IoLogoWhatsapp,
    title: "WhatsApp",
    description: "Connect with the EcoCash Developers community on WhatsApp",
  },
  {
    icon: FaFacebook,
    title: "Facebook",
    description: "Follow @EcoCashDev on Facebook",
  },
  {
    icon: FaYoutube,
    title: "YouTube",
    description: "Subscribe to EcoCash Developers on YouTube",
  },
  {
    icon: BsTwitterX,
    title: "X",
    description: "Follow @EcoCashDev on X",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn",
    description: "Connect with the EcoCash Developers community on LinkedIn",
  },
];

const testimonyData = [
  {
    icon: hugly,
    title: "Hugly Studio",
    description:
      "Hugly Group partners with Hugly Pay to provide its internal applications customers with a fully branded end-to-end payment solution",
  },
  {
    icon: weCut,
    title: "WeCut",
    description:
      "WeCut shortens payment times for disbursements, reduces costs, and increases consumer satisfaction with Hugly Send",
  },
  {
    icon: google,
    title: "Google Zimbabwe",
    description:
      "Google increases card-on-file (CoF) approval rates 2.5% by updating Hugly Pay accounts in real-time via the Automatic Billing Updater (ABU) API",
  },
];

const BenefitsData = [
  {
    icon: MdOutlineSupportAgent,
    title: "7-day expert support",
    description:
      "Get the help you need from our expert support team on the phone, via live chat, on whatsapp",
  },
  {
    icon: BsShieldLockFill,
    title: "Fast, secure payments",
    description:
      "Quisque fermentum blandit nunc ut dictum. Present vestibulum blandit risus quis sollicitudin.",
  },
  {
    icon: MdSpaceDashboard,
    title: "Actionable insights to grow",
    description:
      "Get relevant highlights and detailed dashboards about vour business dashboards about your business.",
  },
  {
    icon: PiChartLineUpBold,
    title: "Seamless management",
    description:
      "Manage your products, staff, business details, cash flow and more.",
  },
];

const UseCaseDropdownData = [
  {
    title: "Seamless Integration",
    content:
      "The API allows developers to integrate EcoCash Merchant Payments seamlessly into their applications. This integration enables businesses to initiate payment requests, generate payment instructions, and handle payment notifications and confirmations.",
    image: seamlessIntegration,
    isExpanded: false,
  },
  {
    title: "Real-Time Payment Notifications",
    content:
      "The API provides real-time payment notifications, allowing merchants to receive immediate updates on successful payments. This feature enables prompt order processing, instant service activation, or immediate delivery of digital goods, enhancing the overall customer experience.",
    image: realTimePayment,
    isExpanded: false,
  },
  {
    title: "Enhanced Payment Acceptance",
    content:
      "With the EcoCash Merchant Payments API, businesses can expand their payment acceptance options beyond traditional methods. By integrating the API into their applications, merchants can accept payments directly from customers' EcoCash accounts, providing a convenient and secure payment experience.",
    image: enhancedPayment,
    isExpanded: false,
  },
  {
    title: "Customizable Payment Flow",
    content:
      "The EcoCash Merchant Payments API offers flexibility in designing payment flows based on specific business requirements. Merchants can customize the payment process to align with their branding and user experience, ensuring a consistent and seamless checkout process for their customers.",
    image: customizablePayment,
    isExpanded: false,
  },
];

const overviewApiOverviewData = [
  {
    image: payment,
    title: "Payments",
    content: "Libraries to assist with integrations",
  },
  {
    image: refund,
    title: "Refunds",
    content: "Libraries to assist with integrations",
  },
  {
    image: lookup,
    title: "Transactions Lookup",
    content: "Generate API Key",
  },
];

const overviewDeveloperData = [
  {
    image: byi,
    title: "Building Your Integration",
    content: "Generate API Key",
  },
  {
    image: c2b,
    title: "C2B",
    content: "Customer-To-Business transactions",
  },
  {
    image: b2c,
    title: "B2C",
    content: "Business-To-Customer Transactions",
  },
  {
    image: b2b,
    title: "B2B",
    content: "Business-To-Business Transactions",
  },
  {
    image: rev,
    title: "Reversals",
    content: "Initiate a reversal on a transaction",
  },
];
const buildingYourIntegration = [
  {
    id: "01",
    title: "Understand the API Documentation",
    description:
      "Thoroughly review our API documentation to familiarize yourself with the available endpoints, request or response formats, authentication methods, and any specific requirements or limitations.",
  },
  {
    id: "02",
    title: "Choose an Integration Method",
    description:
      "Select the integration method that best suits your application, such as RESTful APIs or SDKs provided by EcoCash. Ensure compatibility with your preferred programming language and consider the level of support we offer for the chosen integration method.",
  },
  {
    id: "03",
    title: "Implement Authentication",
    description:
      "Take note of the authentication mechanism required, such as API keys or OAuth. Implement the necessary logic in your application to securely authenticate and authorize requests to the API.",
  },
  {
    id: "04",
    title: "Handle Payment Requests",
    description:
      "Develop the logic to create payment requests within your application. This includes providing essential details like the payment amount, currency, customer MSISDN, and any additional data required by our for successful payment processing.",
  },
  {
    id: "05",
    title: "Handle Responses and Notifications",
    description:
      "Implement the logic to handle responses and notifications received through the API. This involves capturing and processing payment success or failure responses, as well as handling asynchronous notifications like callbacks or webhooks for real-time updates on payment status.",
  },
  {
    id: "06",
    title: "Implement Error Handling",
    description:
      "Create error handling mechanisms to handle potential errors or exceptions that may occur during the integration process. Handle scenarios such as network failures, invalid requests, or payment processing errors gracefully and provide appropriate feedback to users.",
  },
  {
    id: "07",
    title: "Test and Debug",
    description:
      "Thoroughly test your integration using different test scenarios, including successful payments and failed payment attempts. Utilize debugging tools and techniques to identify and resolve any issues or inconsistencies in the integration.",
  },
  {
    id: "08",
    title: "Ensure Security and Compliance",
    description:
      "Prioritize security measures to safeguard sensitive data. Implement data encryption, use secure transmission protocols like HTTPS, and adhere to relevant compliance standards, such as PCI-DSS, to maintain the security and integrity of payment transactions.",
  },
  {
    id: "09",
    title: "Consider User Experience",
    description:
      "Design a seamless and user-friendly payment flow within your application. Provide clear instructions, informative error messages, and feedback to users throughout the payment process to enhance their experience.",
  },
  {
    id: 10,
    title: "Monitor and Maintain",
    description:
      "Continuously monitor the integration's performance, uptime, and error logs. Stay updated with any API version changes or updates provided to ensure ongoing compatibility and reliability of your integration.",
  },
];

const useCaseData = {
  "Large Enterprise": [
    {
      image: useCase1,
      title: "Use case i",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase2,
      title: "Use case ii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase3,
      title: "Use case iii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase4,
      title: "Use case iv",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
  ],
  "Small to Medium Business": [
    {
      image: useCase4,
      title: "Use case i",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase3,
      title: "Use case ii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase2,
      title: "Use case iii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase1,
      title: "Use case iv",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
  ],
  Merchant: [
    {
      image: useCase2,
      title: "Use case ii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase4,
      title: "Use case ii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase1,
      title: "Use case iii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase3,
      title: "Use case iv",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
  ],
  Individual: [
    {
      image: useCase3,
      title: "Use case i",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase1,
      title: "Use case ii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase4,
      title: "Use case iii",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
    {
      image: useCase2,
      title: "Use case iv",
      content:
        "Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.",
    },
  ],
};
export {
  archivedApplicationsData,
  GettingStartedData,
  socialMediaData,
  testimonyData,
  BenefitsData,
  UseCaseDropdownData,
  useCaseData,
  overviewDeveloperData,
  overviewApiOverviewData,
  buildingYourIntegration,
};
