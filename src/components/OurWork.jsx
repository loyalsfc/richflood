import React from 'react'

function OurWork({img, title, children}) {
    return (
        <div>
            <img src={img} alt="Image" className='w-full' />
            <div className='px-4 py-6 bg-ash'>
                <h3 className='text-blueText text-[22px] leading-[22px] font-semibold mb-6'>{title}</h3>
                <article className='text-textColor text-[15px] text-justify leading-6'>{children}</article>
                <button className='btn'>More</button>
            </div>
        </div>
    )
}

export default OurWork
