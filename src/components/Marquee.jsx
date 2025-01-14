import { motion } from 'motion/react'
import React from 'react'

function Marquee({ val, direction }) {

    return (
        <div className='flex gap-20 w-full overflow-hidden'>
            <motion.div
                initial={{ x: direction == 'left' ? "0" : "-100%" }}
                animate={{ x: direction == 'left' ? "-100%" : "0" }} 
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                className='flex flex-shrink-0 gap-20 py-5'>
                {val.map((items, index) => (
                    <img key={index} src={items} className='w-28 invert brightness-100 flex-shrink-0' />
                )
                )}
            </motion.div>
            <motion.div
                initial={{ x: direction == 'left' ? "0" : "-100%" }}
                animate={{ x: direction == 'left' ? "-100%" : "0" }} 
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                className='flex flex-shrink-0 gap-20 py-5'>
                {val.map((items, index) => (
                    <img key={index} src={items} className='w-28 invert brightness-100 flex-shrink-0' />
                )
                )}
            </motion.div>
            
        </div>
    )
}

export default Marquee
