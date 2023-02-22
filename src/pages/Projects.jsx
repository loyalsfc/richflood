import React from 'react'
import Project from '../components/Project'
import oil_and_gas from '../assets/project/oil_and_gas.webp'
import coal_mine from "../assets/project/coal_mine.webp"
import cashew from "../assets/project/cashew_nut.webp"
import cement from "../assets/project/cement.webp"
import battery from "../assets/project/battery.webp"
import mining from "../assets/project/mining.webp"

function Projects() {
    return (
        <main>
            <div className="container mx-auto">
                <article className='text-center text-textColor pt-12  pb-5 bg-project bg-cover bg-norepeat'>
                    <h2 className='text-[66px] font-bold'>Projects</h2>
                    <p className='text-xl max-w-[642px] mx-auto'>Find out how Richflood is assisting investors, lenders and borrowers across the African continent and across multiple sectors. Contact any of our offices to discuss your project.</p>
                </article>
                <section className='grid grid-cols-3 gap-8'>
                    <Project
                        title ="Floating LNG Nigeria ESIA" 
                        industry="Oil and Gas"
                        project="Liquified Natural Gas (LNG) Production"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={oil_and_gas}
                    />
                    <Project
                        title ="Dangote coal mines Environmental Monitoring" 
                        industry="Mining and Metals"
                        project="Coal Mining"
                        service="Permitting and Licensing" 
                        backgroundImage={coal_mine}
                    />
                    <Project
                        title ="Cashew Nut Processing Plant Boke, Guinea ESIA" 
                        industry="Agriculture"
                        project="Processing of Cashew Nuts into Cashew Kennel"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={cashew}
                    />
                    <Project
                        title ="4TH Line Cement Production Epansion and 70MW Gas Fired POWER PLANT" 
                        industry="Transport"
                        project="Shipping, Ports and Cargo Handling"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={cement}
                    />
                    <Project
                        title ="Neway Power Technologies Battery Manufacturing" 
                        industry="Manufacturing"
                        project="Lead-Acid Batteries Production"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={battery}
                    />
                    <Project
                        title ="Cassiterite, Gold Talc & Silver Mining Project By North South Extractive Company Limited" 
                        industry="Mining and Metals"
                        project="Mining and Processing of Mineral Deposits"
                        service="Capital Project Sustainability PSs" 
                        backgroundImage={mining}
                    />
                </section>
                <article className='text-textColor '>   
                    <p className='text-xl max-w-[642px] mx-auto mt-12 text-center font-medium'>Find out how Richflood is assisting investors, lenders and borrowers across the African continent and across multiple sectors. Contact any of our offices to discuss your project.</p>
                    <a href="mailto:info@richfood.com?subject=mailus" className='text-2xl text-center block mt-10 font-semibold underline'>Click here to send us a mail</a>
                </article>
            </div>
        </main>
    )
}

export default Projects
