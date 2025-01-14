import React from 'react'
import Btn from './Btn'

function Product({ val, mover, count }) {
    
    return (
        <div onMouseEnter={()=>{mover(count)}} className='w-full h-[20rem] transition-all duration-150 hover:bg-violet-500'>
            <div className='max-w-screen-xl mx-auto py-8  flex items-center justify-between'>
                <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
                <div className='w-1/2'>
                    <p className='text-lg leading-6 my-8'>{val.description}</p>
                    <div className='flex items-center gap-10'>
                        {val.live && <Btn title='Live Link' />}
                        {val.case && <Btn title='Case Study' />}    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
