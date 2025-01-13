import React from 'react'
import Product from './Product'

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
    
  return (
    <div className='min-h-screen w-full text-white mt-32'>
      {productData.map((product, index) => (
        <Product key={index} val={product}/>
      ))}
    </div>
  )
}

export default Products
