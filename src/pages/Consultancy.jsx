import React from 'react'
import { Link } from 'react-router-dom'
import laser from '../assets/Laser_Cutting_Steel.webp'
import Consultancies from '../components/Consultancies'
import coalmine from '../assets/new_images/mining_consult.jpg'
import oiltank from '../assets/new_images/oil_consult.jpg'
import trees from '../assets/new_images/agriculture_consult.jpg'
import power from '../assets/new_images/power_consult.jpg'
import transportation from '../assets/new_images/road_consult.jpg'
import waterpipe from '../assets/consultancies/Water_pipe.webp'
import investsmart from '../assets/consultancies/invest_smart.webp'
import agriculture from '../assets/consultancies/Net_Covering_Crops.webp'
import climate from '../assets/new_images/ehs_consult.jpg'
import manufacturing from '../assets/new_images/manufacturing_consult.jpg'
import generalConsult from '../assets/new_images/general.jpg'
import arrow from '../assets/arrow.webp'
import ContactCard from '../components/ContactCard'

function Consultancy() {
    return (
        <main className='bg-[#e5e5e5]'>
            <div className="max-w-5xl mx-auto bg-white">
                <div className='relative bg-laser'>
                    {/* <p className='absolute top-0 right-0 w-[343px] bg-[#EEEEF5] text-xl underline text-center py-3 px-6 font-medium'>DISCOVER OUR SUSTAINABILITY REPORTING SOLUTIONS</p> */}
                    {/* <img src={laser} alt="" className='ml-auto'/> */}
                    <article className='text-[17px] text-justify px-4 pb-10 md:pb-4 py-10 text-white'>
                        <h4 className='text-[2.5rem] font-semibold text-center'>Industries and Services</h4>
                        <p className="mb-5">Sustainable, responsible and impact investing (SRI) is an investment discipline that considers environmental, social and corporate governance (ESG) criteria for the major industries we serve</p>
                        <p className='mb-12'>In consonance with our philosophy to provide excellent and qualitative service for the industries we serve, to maintain effective co-ordination, and meet deadlines, each project is assigned a highly skilled, multi-disciplinary and tested team of professionals equipped with vast knowledge of the African and global business trends.</p>
                        <Link><span className='text-center block underline text-[17px] text-[#509C35] font-bold'>Contact us to discuss your investment</span></Link>
                    </article>
                </div>
                <section className='mx-3 py-6'>
                    <Consultancies title='Mining and Metals' img={coalmine}>
                        <p>We offer an integrated approach that combines industry expertise and assistance in maximising projects’ social benefits while minimising their environmental impacts through systematic stakeholders engagement standard practices, impact analysis and mitigation, monitoring and follow up to ensure project sustainability throughout the project lifecycle.</p>
                        <p>Our approach working in African countries is unique and pays attention to local regulations while upscaling the standard where necessary</p>
                    </Consultancies>
                    <Consultancies title='Oil and Gas' img={oiltank}>
                        <p>To help ensure that projects are environmentally and socially sound and sustainable, we assist our clients in the Oil and Gas sector to embrace their responsibilities and be responsible for ensuring that the projects are prepared and implemented in such ways that it meets all applicable requirements of local and internationally acceptable Environmental and Social Standards through out all the stages of planning until decommissioning. Our solutions spans through Liquefied Natural Gas (LNG) Facilities, Offshore Oil and Gas Development, Onshore Oil and Gas Development. </p>
                    </Consultancies>
                    <Consultancies title='Agribusines' img={trees}>
                        <p className='mb-3'>Agriculture is inherently risky. we help investors mitigate risks so their investments grow and succeed.</p>
                        <p className='mb-3'>We provide services to help the sector address the ever increasing demand in the Agricultural sector in an environmentally sustainable and socially inclusive way.</p>
                        <p className='mb-3'>As the agribusiness sector recognises the need to make sustainable use of land, other natural resources and to raise labor standards, we help companies set benchmarks for sustainable production in line with industry best practices. In areas such as sequestering carbon, managing watersheds, preserving biodiversity, and producing renewable energy resources, Greenalluvia works with its clients to achieve success in their projects through improved environmental services.</p>
                    </Consultancies>
                    <Consultancies title='Power' img={power}>
                        <p className='mb-5'>Greater reliance on water, wind, solar, biomass and geothermal sources, as well as more efficient energy use, can help create more jobs and foster sustainable economic growth.</p>
                        <p className='mb-5'>Greenalluvia recognises sustainability challenges from generation, transmission, and distribution upgrades in African countries and provides solutions  suitable for different scenarios. We assist borrowers and project proponents better manage environmental and social risks of projects and to improve development outcomes</p>
                    </Consultancies>
                    <Consultancies title='Transportation' img={transportation}>
                        <p className='mb-4 md:text-sm'>Modern roads are essential to move goods and people efficiently and open up new areas for development. According to the World Health Organisation, about 1.24 million people die each year on the world’s roads and millions are injured. Facing increased needs for better transport infrastructure (<span className='font-medium'>modernising ports, airports, roads, railroads and urban transport systems essential to development</span>), more governments are recognising that modern, well-maintained roads are key to sustained social and economic development without sacrificing environmental and social considerations.</p>
                        <p className='mb-4 md:text-sm'>In developing countries, the lack of proper transport infrastructure can mean the difference between sustainable progress and persistent under-development.</p>
                        <p className='mb-4 md:text-sm'>Our analysis of project sustainability from planning through construction, and operational phases are an added advantage through well thought out Environmental and Social Frameworks in line with the World Bank's Standards.</p>
                    </Consultancies>
                    <Consultancies title='Water Infrastructure' img={waterpipe}>
                        <p className='mb-5'>Water is at the centre of economic and social development; it is vital to maintain health, grow food, generate energy, manage the environment, and create jobs.</p>
                        <p className='mb-5'>Community or Urban water supply planning, Waste water management infrastructure, expanding or improving water infrastructure, improving management practices and ensuring community engagement are areas we add value for sustainability</p>
                    </Consultancies>
                    <Consultancies title='Investment Liabilities Due Diligence' img={investsmart}>
                        <p className='mb-5 text-[15px]'>In principle, the financial impacts resulting from some risk exposures can be hedged through strategic asset allocation and portfolio  construction. These are effectively systemic and will require policy action to address  environmental change and enable investors to meet their financial goals.</p>
                        <p className='mb-5 text-[15px]'>Investors are beginning to ask how global environmental trends such as increased pressure on land for food production, soil degradation, localised water stress and extremes of weather will affect the macroeconomic performance of countries, and how this will play out at the industry and firm level.</p>
                        <p className='mb-5 text-[15px]'>Greenalluvia analytically supports investments and provide professional advise as to how environmental and social risks associated with investments can be minimised.</p>
                    </Consultancies>
                    <Consultancies title='Climate Smart Agriculture' img={agriculture}>
                        <p className='mb-4'>More and more countries in Africa are seeing climate-smart agriculture (CSA) as a solution to diverse challenges. CSA is an integrated approach to managing landscapes that boosts productivity, enhances resilience and reduces greenhouse gas emissions. </p>
                        <p className='mb-4'>Our CSA Investment Plans (developed for private and public sectors investors) identify concrete actions that can be taken to boost climate-smart agriculture, both in the form of investment opportunities and policy design and implementation.</p>
                    </Consultancies>
                    <Consultancies title='EHS Standards' img={climate}>
                        <p>We are conscious of the continuous standardisation of the Environmental Health and Safety requirements for investment projects in line with Good International Industry Practice (GIIP). We thoroughly examine each project's peculiarity to develop and implement Community Health and Safety Guidelines, Constructions and decommissioning Guidelines, Occupational Health and Safety Guidelines and relevant plans necessary for investment sustainability. Greenalluvia project screening for EHS could consider Water Quality and Availability, Structural Safety of Project Infrastructure, Life and Fire Safety (L&FS), Traffic Safety, Transport of Hazardous Materials, Disease Prevention, Emergency Preparedness and Response,  Biological Hazards, Radiological Hazards and determination of Special Hazard Environments. </p>
                    </Consultancies>
                    <Consultancies title='Manufacturing' img={manufacturing}>
                        <p>Local and International clients operating in Africa are faced with diverse challenges in the manufacturing sector. Greenalluvia continuously develop smart solutions to meet the needs heads on providing sustainability frameworks, environmental and social risk assessment, impact mitigation measures and follow up with operational processes from planning to decommission phases.  Our solutions cover Cement and Lime Manufacturing, Metal, Plastic, Rubber Products Manufacturing, Printing, Semiconductors and Electronics Manufacturing, Tanning and Leather Finishing, Textiles Manufacturing Base Metal Smelting and Refining, Ceramic Tile and Sanitary Ware Manufacturing, Construction Materials Extraction, Foundries, Glass Manufacturing, Integrated Steel Mills and general manufacturing investments</p>
                    </Consultancies>
                    <div className='flex flex-col md:flex-row-reverse mb-4 consultancies'>
                        <div className='md:w-3/5 shrink-0'>
                            <img src={generalConsult} alt="" className='w-full'/>
                            <div className="justify-between mr-3 mt-10 hidden md:flex">
                                <button className="btn px-6 ">Read More</button>
                                <button className="btn px-6">Contact Us</button>
                            </div>
                        </div>
                        <article className='flex flex-col justify-between text-justify text-[17px] px-4'>
                            <h4 className='text-[38px] leading-10 font-medium mb-4 text-[#1E2D3B] text-center'>General Infrastructure</h4>
                            <p className='mb-5'>For general infrastructure investment projects, Greenalluvia provides Environmental and Social Governance services by screening performance levels and providing measures that are generally considered to be achievable in new facilities using existing technology at reasonable costs.</p>
                            <p className='mb-5'>We assist investors to set site-specific targets, with an appropriate timetable for achieving them using appropriate Environmental Health and Safety (EHS) standards.</p>
                            <p className='mb-5'>Our services targets Infrastructure investments including but not limited to Ports, Harbours and Terminals, Railways, Airlines, Gas Distribution Systems, Health Care Facilities, Retail Petroleum Networks, Shipping, Telecommunications, Toll Roads, Tourism and Hospitality Developments, Waste Management Facilities, Water and Sanitation, Airports, Crude Oil and Petroleum Product Terminals</p> 
                            <div className="flex justify-between mr-3  md:hidden">
                                <button className="btn px-6 ">Read More</button>
                                <button className="btn px-6">Contact Us</button>
                            </div>
                        </article>
                    </div>
                </section>
                <p className='text-3xl md:text-[51px] px-4 font-bold underline flex items-center mx-auto w-fit'>Technical Capabilities <img src={arrow} alt="" className='h-16 md:h-[77px]'/></p>
            </div>
            <div className="bg-white pt-10">
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <section className='text-base grid grid-cols-1 md:grid-cols-2 gap-24'>
                        <div>
                            <h3 className='text-2xl font-bold'>Inquiries</h3>
                            <p>For any inquiries, questions or commendations, please call: +234 905 222 2206 or fill out the following form</p>
                            <form action="">
                                <input type="text" placeholder='Name' className='bg-ash w-full px-2 py-1 focus:outline-0 mb-2'/>
                                <input type="email" placeholder='Email' className='bg-ash w-full px-2 py-1 focus:outline-0 mb-2'/>
                                <input type="text" placeholder='Subject' className='bg-ash w-full px-2 py-1 focus:outline-0 mb-2'/>
                                <textarea className='bg-ash w-full px-2 py-1 focus:outline-0 mb-2 h-28' placeholder='Message'/>
                                <button type='button' className='font-bold transition-all text-yellow bg-[#3B3A3A] ml-auto block px-10 py-2 hover:bg-yellow hover:text-[#3B3A3A]'>Submit</button>
                            </form>
                            <ContactCard
                                city='United States'
                                address='416192 Coastal Hwy, Lewes, DE, USA'
                                tel='Tel: +1 202 446 0249'
                            />

                            <p className='text-2xl font-semibold'>Get in touch; info@Greenalluvia.com</p>
                        </div>
                        <div>
                            <ContactCard
                                city='Head Office'
                                address='4 Justice Chukwudifo Oputa Street, Asokoro, Abuja, Nigeria, Africa'
                                tel='Tel: +234 905 222 2206'
                            />
                            <ContactCard
                                city='West Africa'
                                address='H140 Forest Avenue, Accra, Ghana.'
                            />
                            <ContactCard
                                city='East Africa'
                                address='Plot No. 6418, Avenue Du Commerce, Kigali, Rwanda.'
                            />
                            <ContactCard
                                city='South  Africa'
                                address='22 Wellingthon Road, Parktown, 2193 South Africa.'
                            />
                            <ContactCard
                                city='Central Africa'
                                address='Dr Congo.'
                            />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Consultancy
