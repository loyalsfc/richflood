import React from 'react'

function Project({title, industry, project, service, backgroundImage}) {
    return (
        <div className='w-full h-[540px] text-white flex flex-col justify-between bg-no-repeat bg-cover p-12 transition-all hover:scale-110 ease-in-out duration-500' style={{backgroundImage: `url(${backgroundImage})`}}>
            <div />
            <h3 className='text-[30px] font-bold text-center'>{title}</h3>
            <ul>
                <li className='font-medium text-sm'><span className='text-yellow'>Industry</span> {industry}</li>
                <li className='my-2'><hr/></li>
                <li className='font-medium text-sm mb-4'><span className='text-yellow'>Project</span> {project}</li>
                <li className='font-medium text-sm'><span className='text-yellow'>Service</span> {service}</li>
            </ul>
        </div>
    )
}

export default Project
