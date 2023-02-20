import React from 'react'

function Industries({img, title, text}) {
    return (
        <div className='relative industry-wrapper'>
            <div className='h-full w-full absolute transition-all top-0 left-0 bg-white/50 opacity-0 z-10'>
                <p className='absolute top-1/3 font-medium left-1/2 transition-all opacity-0 -translate-x-1/2'>{text}</p>
            </div>
            <div className='overflow-hidden'>
                <img src={img} alt="" className='w-full transition-all duration-500 hover:scale-125'/>
            </div>
            <p className='text-4xl p-4 bg-[#EEEEF5] text-[#1E2D3B] font-semibold absolute right-0 top-1/2 -translate-y-1/2'>{title}</p>
        </div>
    )
}

export default Industries
