import React from 'react'

function Work() {

    const images = [
        {
            url: "https://images.unsplash.com/photo-1610415392843-30d95191b7e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            top: "50%",
            left: "50%",
            isActive: true
        },
        {
            url: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            top: "60%",
            left: "60%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1602524811062-2949cbe1a9fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            top: "45%",
            left: "55%",
            isActive: false
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1675201001955-47d882590e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
            top: "62%",
            left: "47%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1602524821041-4ca34980d066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            top: "52%",
            left: "48%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1602526432604-029a709e131c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
            top: "65%",
            left: "55%",
            isActive: false
        },
        {
            url: "https://images.unsplash.com/photo-1602524818604-fb5277190621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
            top: "63%",
            left: "47%",
            isActive: false
        },
    ]

    return (
        <div className='w-full my-5'>
            <div className='relative max-w-screen-xl mx-auto text-center'>
                <h1 className='text-[30vw] select-none leading-none tracking-tight'>Work</h1>
                <div className='absolute w-full h-full top-0'>
                    {
                        images.map((img, index) =>
                            img.isActive && (<img key={index} src={img.url}
                                style={{ top: img.top, left: img.left }}
                                className='absolute -translate-x-[50%] -translate-y-[50%] w-80 h-72 object-cover rounded-lg'
                                alt=""
                            />)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Work
