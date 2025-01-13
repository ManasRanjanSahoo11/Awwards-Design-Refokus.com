import React from 'react'

function Footer() {
  return (
    <div className='w-full py-10'>
      <div className='max-w-screen-xl mx-auto flex items-end justify-between'>
        <div>
            <h1 className='text-9xl font-semibold leading-none tracking-tight'>Refokus.</h1>
        </div>
        <div className='w-[50%] flex items-start justify-between'>
            <div className='basis-1/3'>
                <h5 className='capitalize mb-7'>socials</h5>
                {
                    ["instagram", "twitter (X)", "LinkedIn"].map((item, index)=>(
                        <a href="" key={index} className='block my-2 text-gray-400 capitalize'>{item}</a>
                    ))
                }
            </div>
            <div className='basis-1/3'>
                <h5 className='capitalize mb-7'>sitemap</h5>
                {
                    ["home", "work", "careers", "contact"].map((item, index)=>(
                        <a href="" key={index} className='block my-2 text-gray-400 capitalize'>{item}</a>
                    ))
                }
            </div>
            <div className='basis-2/3 flex flex-col items-end'>
                <p className='font-medium text-right text-sm pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit modi deleniti amet nesciunt inventore quam? Neque pariatur minus voluptate?</p>
                <button className='bg-violet-600 px-5 py-1.5 '>Enterprise Partner</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
