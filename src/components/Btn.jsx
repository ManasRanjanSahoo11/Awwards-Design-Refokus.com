import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Btn() {
  return (
    <div className='min-w-40 px-3 py-2 bg-gray-300 rounded-full text-black flex items-center justify-between cursor-pointer'>
      <span className='font-medium text-sm'>Get Started</span>
      <IoIosReturnRight size={22}/>

    </div>
  )
}

export default Btn
