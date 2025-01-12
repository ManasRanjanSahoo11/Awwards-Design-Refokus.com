import React from 'react'

function Stripe({val}) {
  return (
    <div className='flex items-center justify-between w-[20%] text-white py-1 px-5 border-y border-r'>
      <img src={val.url} alt="" className='w-20  invert brightness-100' />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
