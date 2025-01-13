import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div className='w-full py-20'>
            <div className='max-w-screen-xl mx-auto flex items-start gap-2'>
                <Card width={"basis-1/3"} title={"Up Next:Culture"} heading={"Who we are."}  start={false} para={true} bg={"bg-gray-600"}/>
                <Card width={"basis-2/3"} title={"Get In Touch "} heading={"Lets get to it."} start={true} para={false} bg={"bg-violet-600"}/>
            </div>
        </div>
    )
}

export default Cards
