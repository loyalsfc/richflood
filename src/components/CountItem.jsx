import React from 'react'

function CountItem({number, title}) {
    return (
        <div className='px-10 font-bold mx-10 md:mx-0 relative after:contents-[""] after:absolute after:h-1/2 border-b-2 sm:after:border-r-2 after:border-white after:right-0 after:top-1/2 after:-translate-y-1/2 last:after:border-0'>
            <h4 className='text-white text-6xl text-center mt-10 mb-8'>{number}</h4>
            <p className='text-[22px] font-semibold text-blueText text-center mb-14'>{title}</p>
        </div>
    )
}

export default CountItem
