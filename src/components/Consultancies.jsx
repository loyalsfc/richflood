import React from 'react'

function Consultancies({img, title, children}) {
    return (
        <div className='flex flex-col md:flex-row md:even:flex-row-reverse mb-16 md:mb-4 consultancies items-center'>
            <div className='md:w-3/5 shrink-0 mb-4 md:mb-0 consultancies-img'>
                <img src={img} alt="" className='w-full'/>
            </div>
            <article className='flex flex-col justify-between text-justify text-[17px]'>
                <h4 className='text-[38px] text-center md:text-left leading-10 font-medium mb-4 text-[#1E2D3B]'>{title}</h4>
                {children}
                <div className="flex justify-between mr-3">
                    <button className="btn px-6 ">Read More</button>
                    <button className="btn px-6">Contact Us</button>
                </div>
            </article>
        </div>
    )
}

export default Consultancies
