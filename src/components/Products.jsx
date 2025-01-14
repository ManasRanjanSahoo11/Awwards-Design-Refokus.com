import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react';

function Products() {

  const productData = [
    {
      title: "Arqitel",
      description: "Arqitel represents a fusion of modern architectural design and innovative digital solutions, crafted to showcase elegance and functionality.",
      live: true,
      case: false
    },
    {
      title: "TTR",
      description: "TTR is a dynamic branding project designed to reflect energy and vibrancy, tailored for tech startups with a futuristic vision.",
      live: true,
      case: false
    },
    {
      title: "Silvr",
      description: "Silvr embodies sleek minimalism and cutting-edge design, created for a financial services platform aiming to inspire trust and sophistication.",
      live: true,
      case: true
    },
    {
      title: "YIR 2022",
      description: "YIR 2022 celebrates the year's achievements through a compelling visual narrative, highlighting milestones in an engaging and creative format.",
      live: true,
      case: true
    },
    {
      title: "Yahoo!",
      description: "A bold redesign for Yahoo!, focusing on vibrant visuals and user-friendly layouts to reimagine their digital presence in the modern era.",
      live: true,
      case: true
    },
  ];

  const [pos, setPos] = useState(0)

  const mover = (val) => {
    setPos(val * 20)
  }

  return (
    <div className='min-h-screen w-full text-white mt-44 relative'>
      {productData.map((product, index) => (
        <Product key={index} val={product} mover={mover} count={index}/>
      ))}

      <div className='absolute top-0 w-full h-full pointer-events-none'>
        <motion.div
          initial={{ y: pos, x: "50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ease: [0.64, 0, 0.78, 0], duration:.3}}
          className='absolute h-[20rem] w-[23rem] left-[10%]  overflow-hidden rounded-lg'>
          <motion.div animate={{y:-pos+`rem`}} className='h-full w-full '>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"></video>
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} className='h-full w-full '>
          <video autoPlay loop muted className='w-full h-full object-cover' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"></video>
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} className='h-full w-full '>
          <video autoPlay loop muted className='w-full h-full object-cover' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"></video>
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} className='h-full w-full '>
          <video autoPlay loop muted className='w-full h-full object-cover' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"></video>
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} className='h-full w-full '>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://files.refokus.com/storage/v1/object/public/Website%20Assets/people-short.webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
