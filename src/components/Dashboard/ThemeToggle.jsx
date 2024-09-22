import React,{useEffect, useState} from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill} from 'react-icons/bs'
import { MdDarkMode,MdOutlineLightMode } from "react-icons/md";
function ThemeToggle() {
    const[darkMode,setDarkMode] = useState(true);

    useEffect(() => {

    const theme = localStorage.getItem('theme')
    if(theme === "dark"){ setDarkMode(true) }

    },[])

    useEffect(() => {

        if(darkMode){ 
             document.documentElement.classList.add('dark')
             localStorage.setItem("theme","dark")
        }else{ 
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","light")
       }
    
        },[darkMode])

     
  return (
    <div className="relative w-12 h-12 flex items-center cursor-pointer rounded-full p-3  hover:bg-textDimBlue"
      onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdOutlineLightMode size={28} className="text-yellow-400 hover:scale-125" /> : <MdDarkMode size={28} className="text-textBlue hover:scale-125" />}
    
    </div>
  )
}

export default ThemeToggle