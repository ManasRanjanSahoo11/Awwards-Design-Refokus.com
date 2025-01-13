import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Btn({title = "Get Started"}) {
  return (
    <div className='w-40 px-3 py-2 bg-gray-300 rounded-full text-black flex items-center justify-between cursor-pointer'>
      <span className='inline-block font-medium text-sm'>{title}</span>
      <IoIosReturnRight size={23}/>
    </div>
  )
}

export default Btn
