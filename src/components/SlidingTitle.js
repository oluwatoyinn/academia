import React from 'react'

function SlidingTitle({name,title}) {
    return (
        <div className="">
            <div className=" caro_image text-center">
                <h1 className="text-uppercase font-weight-bold text">
                    {name} 
                </h1>
                <p><strong className=""> {title} </strong></p>
            </div>
        </div>
    )
}

export default SlidingTitle
