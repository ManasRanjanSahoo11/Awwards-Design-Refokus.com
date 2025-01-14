import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    const data = [
        {
            url: "https://www.cssdesignawards.com/imgs/logo.svg",
            number: 48
        },
        {
            url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
            number: 9
        },
        {
            url: "https://cdn-icons-png.flaticon.com/512/28/28279.png",
            number: 11
        },
        {
            url: "https://www.cssdesignawards.com/imgs/content/2025/kinsta-for-agencies-logo.svg",
            number: 48
        },
        {
            url: "https://www.cssdesignawards.com/imgs/content/2025/bowen.svg",
            number: 2
        },
    ]

    return (
        <div className='flex'>
            {
                data.map((elem, index) => (
                    <Stripe key={index} val={elem} />
                ))
            }
        </div>
    )
}

export default Stripes
