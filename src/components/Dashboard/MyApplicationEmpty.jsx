import React from 'react'
import Lottie from 'react-lottie';
import style from '../../styles';
const animationData = await import('../../assets/empty.json');
import { FiPlus } from "react-icons/fi";

function MyApplicationEmpty() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
      };
  
      
  return (
    <div className="dark:bg-darkBgComponents bg-white text-white p-6 rounded-3xl">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-[28px] font-semibold font-poppins text-left">My Applications</h2>
        </div>

        <div className="px-2 border-dotted border-2 border-spacing-2 border-borderLight dark:border-borderBlue justify-between items-center rounded-3xl">

          <div className= 'flex flex-col items-center justify-center space-y-9 py-5'>
            
             <Lottie options={defaultOptions} height={180} width={180} />
             <h2 className=" text-textBlack dark:text-textWhite font-poppins font-semibold">You have no project yet</h2>
             <button className='bg-textDimBlue hover:bg-textBlue text-white font-poppins  px-4 py-2 focus:outline-none focus:shadow-outline h-[44px] rounded-3xl flex items-center text-sm'> 
                New Application
                <FiPlus className='ml-2' size={20}/>
             </button>
         </div>

        </div>
    </div>
  )
}

export default MyApplicationEmpty