import React from 'react'

function Marquee({ val }) {
    return (
        <div className='flex items-center w-full whitespace-nowrap gap-10 overflow-hidden py-2'>
            { val.map((items, index) => (<img key={index} src={items} className='w-28 invert brightness-100 flex-shrink-0' />)) }
            { val.map((items, index) => (<img key={index} src={items} className='w-28 invert brightness-100 flex-shrink-0' />)) }
        </div> 
    )
}

export default Marquee
