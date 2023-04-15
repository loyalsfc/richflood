import React from 'react'
import Project from '../components/Project'
import oil_and_gas from '../assets/project/oil_and_gas.jpg'
import coal_mine from "../assets/project/mining_consult.jpg"
import cashew from "../assets/project/cashew_nut.webp"
import cement from "../assets/project/cement.webp"
import battery from "../assets/project/battery.webp"
import mining from "../assets/project/mining.webp"

function Projects() {
    return (
        <main>
            <div className="container mx-auto">
                <article className='text-center text-textColor pt-12  pb-5 bg-project bg-cover px-4 sm:px-0 bg-norepeat'>
                    <h2 className='text-4xl leading-[130%] md:text-[66px] font-bold'>Projects</h2>
                    <p className='text-lg md:text-xl max-w-[642px] mx-auto'>Find out how Greenalluvia is assisting investors, lenders and borrowers across the African continent and across multiple sectors. Contact any of our offices to discuss your project.</p>
                </article>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-10 bg-white'>
                    <Project
                        title ="Lorem ipsum Dolore Ameno" 
                        industry="Oil and Gas"
                        project="Liquified Natural Gas (LNG) Production"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={oil_and_gas}
                    />
                    <Project
                        title ="Quo fugiat iste repudiandae atque" 
                        industry="Mining and Metals"
                        project="Coal Mining"
                        service="Permitting and Licensing" 
                        backgroundImage={coal_mine}
                    />
                    <Project
                        title ="Rerum id aliquam et nobis deleniti" 
                        industry="Agriculture"
                        project="Processing of Cashew Nuts into Cashew Kennel"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={cashew}
                    />
                    <Project
                        title ="Fuga blanditiis! Quasi Ex delectus culpa, Quo fugiat iste repudiandae" 
                        industry="Transport"
                        project="Shipping, Ports and Cargo Handling"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={cement}
                    />
                    <Project
                        title ="Tempora modi perspiciatis error" 
                        industry="Manufacturing"
                        project="Lead-Acid Batteries Production"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={battery}
                    />
                    <Project
                        title ="Alias Quas Modi Tenetur Explicabo Dignissimos Corporis" 
                        industry="Mining and Metals"
                        project="Mining and Processing of Mineral Deposits"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={mining}
                    />
                </section>
                <article className='text-white pb-10'>   
                    <p className='md:text-xl max-w-[642px] mx-auto mt-12 text-center font-medium'>Find out how Greenalluvia is assisting investors, lenders and borrowers across the African continent and across multiple sectors. Contact any of our offices to discuss your project.</p>
                    <a href="mailto:info@Greenalluvia.com?subject=mailus" className='text-lg md:text-2xl text-center block mt-10 font-semibold underline'>Click here to send us a mail</a>
                </article>
            </div>
        </main>
    )
}

export default Projects
