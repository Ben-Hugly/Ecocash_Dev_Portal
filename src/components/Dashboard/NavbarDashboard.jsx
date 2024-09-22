import React,{useState} from 'react'
import {Box,Breadcrumbs,Link,Typography} from '@mui/material'
import {ThemeToggle} from '../Dashboard'
import { MdArchive } from "react-icons/md"
import { IoIosNotifications } from "react-icons/io";
import {profile} from "../../assets"

function NavbarDashboard() {
   const [crumbs, setCrumbs] = useState('Overview')
   const [hasNotifications, setHasNotifications] = useState(true) //For alternating between the has notification or not icons

  return (
    <div className='flex flex-row justify-between items-center'>
        <Box m={2} className='flex flex-row'>
            <Breadcrumbs arial-label ='breadcrumb'>
                <button className='font-medium font-poppins text-[14px] dark:text-textWhite text-textBlack hover:text-textBrightBlue'>{crumbs}</button>
            </Breadcrumbs>
        </Box>

        <div className='flex flex-row items-center'>
            <ThemeToggle/>
            <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3  hover:bg-textDimBlue">
               <MdArchive size={28} className="text-textBlue hover:scale-125"/>
            
            </div>

            <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3  hover:bg-textDimBlue">
                { hasNotifications?
                  <div className='relative flex flex-row'>
                    <IoIosNotifications size={28} className="text-textBlue hover:scale-125"/>
                    <div className='w-2 h-2 rounded-full bg-red-600 absolute right-1'></div>
                     
                  </div>:
                    <IoIosNotifications size={28} className="text-textBlue hover:scale-125"/>
                }
            </div>

            <div className='cursor-pointer rounded-full p-3 '>
            <img src={profile} width={44} height={44} />
            </div>  
            
        </div>

    </div>
    
  )
}

export default NavbarDashboard