import React from 'react'

function OurWork({img, title, children}) {
    return (
        <div>
            <img src={img} alt="Image" className='w-full' />
            <div className='px-4 py-6 bg-ash'>
                <h3 className='text-[#3D5975] text-[22px] leading-[22px] font-semibold mb-6'>{title}</h3>
                <article className='text-textColor text-[15px] text-justify leading-6'>{children}</article>
                <button className='bg-[#509C35] text-[15px] font-bold h-10 px-[50px] text-white block mt-4 mx-auto hover:bg-green-900'>More</button>
            </div>
        </div>
    )
}

export default OurWork
