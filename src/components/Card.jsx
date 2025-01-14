import { motion } from 'motion/react';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({ width, title, heading, start, para, bg = "false" }) {
    
    return (
        <motion.div whileHover={{backgroundColor:"#7F00FF", paddingLeft:"30px", paddingRight:"30px"}} className={`${width} h-[55vh] p-4 bg-gray-700 rounded-lg transition-all ease-out`}>
            <div className='w-full h-full flex flex-col justify-between'>
                <div>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-md font-light leading-none'>{title}</h2>
                        <IoIosArrowRoundForward size={25} />
                    </div>
                    <h3 className='text-4xl font-medium mt-8'>{heading}</h3>
                </div>
                <div>
                    {start && (
                        <>
                            <h2 className='font-medium text-7xl tracking-tight py-5'>Start a Project</h2>
                            <button className='rounded-full px-7 py-2.5 border-2 font-medium'>Contact Us</button>
                        </>
                    )}

                    {para && (<p className='text-md font-light text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>)}

                </div>
            </div>
        </motion.div>
    )
}

export default Card
