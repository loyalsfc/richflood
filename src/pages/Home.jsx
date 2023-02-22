import OurWork from '../components/OurWork'
import Inudstrial from '../assets/Industrial_Smoke.webp'
import laboratory from '../assets/Laboratory_Scientist.webp'
import crystal from '../assets/Crystal_Rock.webp'
import CountItem from '../components/CountItem'
import Industries from '../components/Industries'
import mining from '../assets/mining_and_metals.webp'
import power from '../assets/power.webp'
import oil from '../assets/oil_and_gas.webp'
import transport from '../assets/transport.webp'

function Home() {
    return (
        <>
            <article className='flex-1 text-[69px] h-[calc(100vh-145px)] grid place-content-center font-bold max-w-3xl text-center mx-auto'>
                <h1>Promoting Sustainable Investments in Africa</h1>
                <i className="fa-solid fa-angle-down"></i>
            </article>

            <main className='py-10'>
                <div className="max-w-5xl mx-auto py-8">
                    <h2 className='title'>Our Work</h2>
                    <div className='grid grid-cols-3 gap-6 items-stretch'>
                        <OurWork 
                            img={Inudstrial}
                            title='Environmental and Social Standards'
                        >
                            <p className='mb-8'>Richflood Provides consultancy services during project planning stages including Environmental and Social Impact Assessments (ESIA), Risk Assessment, Resettlement Action Planning and Execution.</p>
                            <p className='mb-8'>Richflood is committed to enabling organisations realise maximum value from investments by better understanding and meeting environmental, health, safety and social obligations in a continually changing regulatory landscape.</p>
                            <p className='mb-8'>Richflood works closely with the public and private sectors in Africa and providing services related to Environmental and Social Governance (ESG)</p>
                        </OurWork>
                        <OurWork 
                            img={laboratory}
                            title='Laboratories'
                        >
                            <p>Laboratories With our advanced environmental testing lab, we can simulate a wide variety of environmental conditions that your operations may be exposed to irrespective of the sector. Industries benefiting from Richflood state-of-the-art laboratory services include petroleum, chemical, materials, energy, manufacturing, mining, agriculture, electronic, power, pharmaceutical, and more. Richflood Testing follows ASTM, ISO, and local industry standards.</p>
                            <h3 className='underline font-semibold text-center w-2/3 mx-auto my-6'>Richflood Geo-analytical Laboratory Services</h3>
                            <p>Our commitment is to provide customers with the best ore characterisation during early, advanced and feasibility phases.</p>
                        </OurWork>
                        <OurWork 
                            img={crystal} 
                            title='Mining and Minerals'
                        >
                            <p className='mb-8'>Richflood help clients keep major mining and metals capital projects on schedule, on budget and on scope by providing consultancy services on metals licensing procedures, licenses maintenance, mineral buying arrangements, facilitation of exploration and exploitation investment processes and providing necessary regulatory documentation required for   optimal operation in the sector. </p>
                            <p className='mb-8'>Organisations working in Africa face complex and volatile business challenges in every stage of their business and project life cycle. We use our local knowledge to resolve these complexities.</p>
                        </OurWork>
                    </div>
                </div>
            </main>

            <section className='bg-insight relative bg-fixed after:contents-[""] after:h-full after:w-1/2 after:absolute after:top-0 after:left-0  after:bg-grey-bg'>
                <div className="max-w-5xl mx-auto grid grid-cols-2 pb-2">
                    <div className='z-10 pr-8 text-textColor'>
                            <h2 className='title mb-8'>Insight</h2>
                            <h3 className='text-blueText text-[22px] font-semibold'>Mauritania - Project for Improving Climate Resilience of Water Sector Investments</h3>
                            <p className='text-[17px] leading-8 text-justify'>The government of the Islamic Republic of Mauritania has benefited, from the Global Environment Facility through the African Development Bank (AfDB), from technical and financial support for the implementation of a project called: "Improvement Climate Resilience of Water Sector Investments through Appropriate Climate Adaptation Activities for Pastoral and Forestry Resources in Southern Mauritania (REVIWU). This project aims to restore the natural environment and strengthen the resilience of beneficiary rural households in the Wilayas of Hodh El Chargui, Hodh El Gharbi, Assaba, Gorgol, Brakna, Trarza, Tagant and Guidimakha.</p>
                            <button className="btn px-[50px]">More</button>
                    </div>
                </div>
            </section>

            <section className='bg-[#8FBD7F]'>
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-around">
                        <CountItem number='2009' title='Year Established' />
                        <CountItem number='520' title='Projects Completed' />
                        <CountItem number='149' title='Contractors Appointed' />
                        <CountItem number='65' title='Awards Won' />
                    </div>
                </div>
            </section>

            <section className='py-8'>
                <div className="max-w-5xl mx-auto">
                    <h2 className="title mb-8">Industries</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <Industries img={mining} title='Mining and Metals' text='Minerals and Stones' />
                        <Industries img={transport} title="Transport" text="Rapid transit railway" />
                        <Industries img={power} title="Power" text="Power Plant" />
                        <Industries img={oil} title="Oil and Gas" text="Oil derrick" />
                    </div>
                </div>
            </section>

            <section className='bg-landscape bg-no-repeat bg-cover pb-12'>
                <div className="max-w-5xl mx-auto">
                    <p className='w-5/6 max-w-2xl text-center text-[22px] font-semibold bg-ash pt-8 px-8 pb-10 text-blueText'>Investors want business leaders to focus on ESG, or environmental, social and governance metrics. That means progress on ESG isn't just a nice-to-have anymore. It's something shareholders will demand, because they believe it's going to drive everything else they care about.</p>
                </div>
            </section>
        </>
    )
}

export default Home
