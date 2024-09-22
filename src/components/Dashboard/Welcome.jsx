import React from 'react'
import { FiPlus } from "react-icons/fi";
function Welcome({username}) {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col text-left p-2 ml-3'>
        <span className='text-[45px] font-poppins font-semibold text-textBlack dark:text-textWhite'>Welcome {username}!</span>
          <span className ='font-poppins max-w-[640px] text-sm text-textBlack dark:text-textWhite'>You can create new applications to access APIs and associated credentials, reference material, etc.</span>  
      </div>

    <button className='bg-textDimBlue hover:bg-textBlue text-white font-poppins  px-4 py-2 focus:outline-none      focus:shadow-outline h-[44px] rounded-3xl flex items-center text-sm mr-2'> 
            New Application
        <FiPlus className='ml-2' size={20}/>
      </button>
    </div>
    
    
  )
}

export default Welcome