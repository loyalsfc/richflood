import React from 'react'

function Consultancies({img, title, children}) {
    return (
        <div className='flex even:flex-row-reverse mb-4 consultancies items-center'>
            <div className='w-3/5 shrink-0 consultancies-img'>
                <img src={img} alt="" className='w-full'/>
            </div>
            <article className='flex flex-col justify-between text-justify text-[17px]'>
                <h4 className='text-[38px] leading-10 text-left font-medium mb-4 text-[#1E2D3B]'>{title}</h4>
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
