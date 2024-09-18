import { BsListCheck,BsShieldLockFill } from "react-icons/bs";
import {FaYoutube, FaLinkedinIn} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdBuild, IoIosHelpCircle,IoLogoWhatsapp  } from "react-icons/io";
import { FaCirclePlay, FaFacebook } from "react-icons/fa6";
import { MdOutlineSupportAgent,MdSpaceDashboard } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";
import React from "react";
import {
  seamlessIntegration ,
  realTimePayment,
  enhancedPayment, 
  customizablePayment,
  useCase1,
  useCase2,
  useCase3,
  useCase4,
  weCut,
  hugly,
  google,

} from "../assets";



const archivedApplicationsData = [
  {
      id: '1892',
      title: 'Hugly USD Payments: Test 1',
      allTimeData: { received: '1', sent: '1', reversed: '1' },
      weeklyData: { received: '589.31', sent: '311.26', reversed: '42.53' },
      status: 'Archived',
      currency: 'USD',
      onRestore: () => console.log('Restore 1892'),
      onDelete: () => console.log('Delete 1892')
  },
  {
      id: '1890',
      title: 'Hugly USD Payments: Test 7',
      allTimeData: { received: '1', sent: '1', reversed: '1' },
      weeklyData: { received: '589.31', sent: '311.26', reversed: '42.53' },
      status: 'Archived',
      currency: 'Sandbox',
      onRestore: () => console.log('Restore 1890'),
      onDelete: () => console.log('Delete 1890')
  },
  {
      id: '1897',
      title: 'Hugly USD Payments: Test 5',
      allTimeData: { received: '1', sent: '1', reversed: '1' },
      weeklyData: { received: '589.31', sent: '311.26', reversed: '42.53' },
      status: 'Archived',
      currency: 'USD',
      onRestore: () => console.log('Restore 1897'),
      onDelete: () => console.log('Delete 1897')
  },
];
const GettingStartedData = [
  {
    title: 'Find your ideal solution',
    icon: BsListCheck,
    links: [
      { label: 'Business quick start guide', url: '#' },
      { label: 'Pricing guide', url: '#' },
      { label: 'Availability guide', url: '#' },
    ],
  },
  {
    title: 'Videos and learning materials',
    icon: FaCirclePlay,
    links: [
      { label: 'Tutorials', url: '#' },
      { label: 'Webinars', url: '#' },
    ],
  },
  {
    title: 'Build and launch resources',
    icon: IoMdBuild,
    links: [
      { label: 'Developer quick start guide', url: '#' },
      { label: 'API References', url: '#' },
      { label: 'Project launch guide', url: '#' },
    ],
  },
  {
    title: 'Help and support tools',
    icon: IoIosHelpCircle,
    links: [
      { label: 'Developer quick start guide', url: '#' },
      { label: 'API References', url: '#' },
      { label: 'Project launch guide', url: '#' },
    ],
  },
];

const socialMediaData = [
  {
    icon: IoLogoWhatsapp ,
    title: 'WhatsApp',
    description: 'Connect with the EcoCash Developers community on WhatsApp',
  },
  {
    icon: FaFacebook,
    title: 'Facebook',
    description: 'Follow @EcoCashDev on Facebook',
  },
  {
    icon: FaYoutube,
    title: 'YouTube',
    description: 'Subscribe to EcoCash Developers on YouTube',
  },
  {
    icon: BsTwitterX,
    title: 'X',
    description: 'Follow @EcoCashDev on X',
  },
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    description: 'Connect with the EcoCash Developers community on LinkedIn',
  },
];

const testimonyData = [
  {
    icon: hugly,
    title: 'Hugly Studio',
    description: 'Hugly Group partners with Hugly Pay to provide its internal applications customers with a fully branded end-to-end payment solution',
  },
  {
    icon: weCut,
    title: 'WeCut',
    description: 'WeCut shortens payment times for disbursements, reduces costs, and increases consumer satisfaction with Hugly Send',
  },
  {
    icon: google,
    title: 'Google Zimbabwe',
    description: 'Google increases card-on-file (CoF) approval rates 2.5% by updating Hugly Pay accounts in real-time via the Automatic Billing Updater (ABU) API',
  },
];


const BenefitsData = [
  {
    icon: MdOutlineSupportAgent,
    title: '7-day expert support',
    description: 'Get the help you need from our expert support team on the phone, via live chat, on whatsapp',
  },
  {
    icon: BsShieldLockFill,
    title: 'Fast, secure payments',
    description: 'Quisque fermentum blandit nunc ut dictum. Present vestibulum blandit risus quis sollicitudin.',
  },
  {
    icon: MdSpaceDashboard,
    title: 'Actionable insights to grow',
    description: 'Get relevant highlights and detailed dashboards about vour business dashboards about your business.',
  },
  {
    icon: PiChartLineUpBold,
    title: 'Seamless management',
    description: 'Manage your products, staff, business details, cash flow and more.',
  },
];


const UseCaseDropdownData = [
  {
    title: "Seamless Integration",
    content: "The API allows developers to integrate Hugly Merchant Payments seamlessly into their applications. This integration enables businesses to initiate payment requests, generate payment instructions, and handle payment notifications and confirmations.",
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
      "With the Hugly Merchant Payments API, businesses can expand their payment acceptance options beyond traditional methods. By integrating the API into their applications, merchants can accept payments directly from customers' EcoCash accounts, providing a convenient and secure payment experience.",
    image: enhancedPayment,
    isExpanded: false,
  },
  {
    title: "Customizable Payment Flow",
    content: "The Hugly Merchant Payments API offers flexibility in designing payment flows based on specific business requirements. Merchants can customize the payment process to align with their branding and user experience, ensuring a consistent and seamless checkout process for their customers.",
    image: customizablePayment,
    isExpanded: false,
  },
];




const useCaseData = {
  'Large Enterprise': [
    {
      image: useCase1,
      title: 'Use case i',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase2,
      title: 'Use case ii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase3,
      title: 'Use case iii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase4,
      title: 'Use case iv',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },

  ],
  'Small to Medium Business': [
    {
      image: useCase4,
      title: 'Use case i',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase3,
      title: 'Use case ii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase2,
      title: 'Use case iii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase1,
      title: 'Use case iv',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
  ],
  'Merchant': [
    {
      image: useCase2,
      title: 'Use case ii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase4,
      title: 'Use case ii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase1,
      title: 'Use case iii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase3,
      title: 'Use case iv',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    
  ],
  'Individual': [
    {
      image: useCase3,
      title: 'Use case i',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase1,
      title: 'Use case ii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase4,
      title: 'Use case iii',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
    {
      image: useCase2,
      title: 'Use case iv',
      content: 'Quisque fermentum blandit nunc ut dictum. Praesent vestibulum blandit risus quis sollicitudin.'
    },
   
  ],
};
export { archivedApplicationsData, GettingStartedData, socialMediaData, testimonyData, BenefitsData, UseCaseDropdownData ,useCaseData};