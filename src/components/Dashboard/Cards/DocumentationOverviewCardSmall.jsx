import React from "react";
import { Link } from "react-router-dom";
import {IoChevronForwardOutline}from "react-icons/io5";

function DocumentationOverviewCardSmall({ title, description }) {
  return (
    <button className="rounded-2xl border dark:border-borderBlue border-borderLight p-4 space-y-3 hover:bg-lightBgHover dark:hover:bg-darkBgHover pb-8">
     
            <div className='border-b border-borderLight flex items-center justify-between p-1'>
                <h2 className="text-[14px] font-semibold dark:text-textWhite text-textBlack">{title}</h2>
                <IoChevronForwardOutline size={18} color="#ef4444" />
            </div>
            
            <p className="text-[13px] dark:text-textWhite text-gray-500 font-poppins font-extralight text-left">{description}</p>
        
    </button>
  )
}

export default DocumentationOverviewCardSmall