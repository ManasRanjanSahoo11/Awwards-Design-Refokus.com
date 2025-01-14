import { motion } from 'motion/react';
import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Btn({ title = "Get Started" }) {

  return (
    <motion.div whileHover={{scale: 1.1}} transition={{ease:'easeInOut' ,duration:.2}} className='relative w-40 h-10 flex items-center justify-between px-3 py-2 bg-gray-300 rounded-full text-black cursor-pointer overflow-hidden'>
        <span className='inline-block font-medium text-sm'>{title}</span>
        <IoIosReturnRight size={23} />
    </motion.div>
  )

}

export default Btn
