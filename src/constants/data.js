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

const agreementData = [
  {
    title: "01. Definitions",
    number: "01",
    intro:
      "In this Agreement, unless the context clearly indicates a contrary intention, the following words and expressions bear the meanings assigned to them and cognate expressions bear corresponding meanings:-",
    content: [
      {
        number: "1.1.1",
        term: "API",
        description:
          "Application Programming Interface; a set of routines, protocols, and tools for building software applications.",
      },
      {
        number: "1.1.2",
        term: "Intellectual Property",
        description:
          "All intangible rights protecting products of human intelligence and creation, including (but not limited to) copyright works, names, package designs, know-how copyright, graphic designs, branding, trademarks, trade secrets, goodwill, patents, and trade names.",
      },
      {
        number: "1.1.3",
        term: "Parties",
        description:
          "The signatories to this agreement, being EcoCash and the Customer, including successors in title, assigns, and administrators.",
      },
      {
        number: "1.1.4",
        term: "Trademark",
        description:
          "All existing registered or unregistered trademarks, logos, and brand identifications, including future trademarks used by EcoCash.",
      },
    ],
  },
  {
    title: "02. API Access Grant",
    number: "02",
    content: [
      {
        number: "2.1",
        description:
          "EcoCash grants a non-exclusive, non-transferable, limited right to access and use the API solely for integrating and developing applications that interact with EcoCash mobile money.",
      },
      {
        number: "2.2",
        description:
          "Use of the API must comply with its documentation and guidelines provided by EcoCash.",
      },
    ],
  },
  {
    title: "03. Registration and Account",
    number: "03",
    content: [
      {
        number: "3.1",
        description:
          "To access and use the API, you must sign up and create an account through the designated portal.",
      },
      {
        number: "3.2",
        description:
          "You are responsible for providing accurate and up-to-date information during registration.",
      },
      {
        number: "3.3",
        description:
          "You agree not to share credentials with unauthorized individuals or entities.",
      },
    ],
  },
  {
    title: "04. Compliance with Laws and Regulations",
    number: "04",
    content: [
      {
        number: "4.1",
        description: "The governing law is the law of Zimbabwe.",
      },
      {
        number: "4.2",
        description:
          "You shall adhere to all applicable laws, regulations, and industry standards in connection with API use.",
      },
      {
        number: "4.3",
        description:
          "You are responsible for ensuring your applications do not infringe upon third-party rights.",
      },
    ],
  },
  {
    title: "05. Governing Law and Jurisdiction",
    number: "05",
    content: [
      {
        number: "5.1",
        description:
          "These Terms are governed by the laws of Zimbabwe, without regard to conflict of laws principles.",
      },
      {
        number: "5.2",
        description:
          "Both parties must comply with applicable laws and governmental regulations.",
      },
      {
        number: "5.3",
        description:
          "Submit to the jurisdiction of the Magistrates Court for disputes.",
      },
    ],
  },
  {
    title: "06. Data Privacy and Security",
    number: "06",
    content: [
      {
        number: "6.1",
        description:
          "Keep all knowledge and information supplied by EcoCash confidential.",
      },
      {
        number: "6.2",
        description:
          "Handle user data in compliance with applicable data protection laws and regulations.",
      },
      {
        number: "6.3",
        description: "Implement measures to protect user data.",
      },
    ],
  },
  {
    title: "07. Intellectual Property",
    number: "07",
    content: [
      {
        number: "7.1",
        description:
          "EcoCash retains all rights to the API and associated intellectual property rights.",
      },
      {
        number: "7.2",
        description:
          "The proprietary rights of the API are owned exclusively by EcoCash.",
      },
      {
        number: "7.3",
        description:
          "You shall not apply for registration of the API or related trademarks.",
      },
      {
        number: "7.4",
        description:
          "No modification, adaptation, reverse engineering, or derivative works based on the API, except as permitted by law.",
      },
    ],
  },
  {
    title: "08. Termination",
    number: "08",
    content: [
      {
        number: "8.1",
        description:
          "EcoCash reserves the right to suspend or terminate API access for any reason.",
      },
      {
        number: "8.2",
        description:
          "Upon termination, you shall immediately cease all API use and delete any obtained data.",
      },
    ],
  },
  {
    title: "09. Limitation of Liability",
    number: "09",
    content: [
      {
        number: "9.1",
        description:
          "EcoCash shall not be liable for any damages arising from API use.",
      },
      {
        number: "9.2",
        description:
          "No guarantees of availability, accuracy, or reliability of the API.",
      },
    ],
  },
  {
    title: "10. Modifications",
    number: "10",
    content: [
      {
        number: "10.1",
        description:
          "EcoCash reserves the right to modify or update these Terms at any time.",
      },
    ],
  },
  {
    title: "11. Addresses For Notices",
    number: "11",
    content: [
      {
        number: "11.1",
        description:
          "The address provided on the application form is your chosen address for notices.",
      },
      {
        number: "11.2",
        description:
          "EcoCash's address for notices: 1906 Liberation Legacy Way, Harare.",
      },
      {
        number: "11.3",
        description:
          "Notice is deemed received within specified periods depending on delivery method.",
      },
      {
        number: "11.4",
        description: "EcoCash may send information via email or SMS.",
      },
    ],
  },
  {
    title: "12. Entire Agreement",
    number: "12",
    content: [
      {
        number: "12.1",
        description:
          "This agreement constitutes the entire agreement concerning the API and supersedes any prior agreements.",
      },
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
    link: "api/payments",
  },
  {
    image: refund,
    title: "Refunds",
    content: "Libraries to assist with integrations",
    link: "api/refunds",
  },
  {
    image: lookup,
    title: "Transactions Lookup",
    content: "Generate API Key",
    link: "api/lookup",
  },
];

const overviewDeveloperData = [
  {
    image: byi,
    title: "Building Your Integration",
    content: "Generate API Key",
    link: "dev/byi",
  },
  {
    image: c2b,
    title: "C2B",
    content: "Customer-To-Business transactions",
    link: "dev/c2b",
  },
  {
    image: b2c,
    title: "B2C",
    content: "Business-To-Customer Transactions",
    link: "dev/b2c",
  },
  {
    image: b2b,
    title: "B2B",
    content: "Business-To-Business Transactions",
    link: "dev/b2b",
  },
  {
    image: rev,
    title: "Reversals",
    content: "Initiate a reversal on a transaction",
    link: "dev/reversal",
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
  agreementData,
};
