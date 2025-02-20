import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    const imgurls = 
        [
            [
                "https://www.cssdesignawards.com/imgs/logo.svg",
                "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
                "https://cdn-icons-png.flaticon.com/512/28/28279.png",
                "https://www.cssdesignawards.com/imgs/content/2025/kinsta-for-agencies-logo.svg",
                "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
                "https://cdn-icons-png.flaticon.com/512/28/28279.png",
                "https://www.cssdesignawards.com/imgs/content/2025/kinsta-for-agencies-logo.svg",
                "https://www.cssdesignawards.com/imgs/content/2025/bowen.svg",
            ],
            [
                "https://www.cssdesignawards.com/imgs/logo.svg",
                "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
                "https://cdn-icons-png.flaticon.com/512/28/28279.png",
                "https://www.cssdesignawards.com/imgs/content/2025/kinsta-for-agencies-logo.svg",
                "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
                "https://cdn-icons-png.flaticon.com/512/28/28279.png",
                "https://www.cssdesignawards.com/imgs/content/2025/kinsta-for-agencies-logo.svg",
                "https://www.cssdesignawards.com/imgs/content/2025/bowen.svg",
            ],
        ]

    return (
        <div className='py-12 mt-28 w-full relative overflow-hidden'>
            {imgurls.map((urls, index) => (
                <Marquee key={index} val={urls} direction={index == 0 ? "left" : "right"} />
            ))}
        </div>
    )
}

export default Marquees
