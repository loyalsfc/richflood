import React from 'react'

function Project({title, industry, project, service, backgroundImage}) {
    return (
        <div className='w-full h-[540px] text-white flex flex-col relative justify-between bg-no-repeat bg-cover px-6 py-12 md:p-12 transition-all hover:scale-110 ease-in-out duration-500' style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className='absolute w-full h-full top-0 left-0 bg-black/30'/>
            <div />
            <h3 className='text-2xl md:text-[30px] font-bold text-center z-10'>{title}</h3>
            <ul className='z-10'>
                <li className='font-medium text-sm'><span className='text-yellow'>Industry</span> {industry}</li>
                <li className='my-2'><hr/></li>
                <li className='font-medium text-sm mb-4'><span className='text-yellow'>Project</span> {project}</li>
                <li className='font-medium text-sm'><span className='text-yellow'>Service</span> {service}</li>
            </ul>
        </div>
    )
}

export default Project
