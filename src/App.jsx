import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/richflood_logo.webp'
import OurWork from './components/OurWork'
import Inudstrial from './assets/Industrial_Smoke.webp'
import laboratory from './assets/Laboratory_Scientist.webp'
import crystal from './assets/Crystal_Rock.webp'

function App() {
  let activeStyle = { backgroundColor: "#000", color: '#fff' }

    return(
      <div>
        <div className='flex flex-col h-screen'>
          <header className='shadow-md sticky top-0'>
            <div className='max-w-5xl mx-auto pt-4 pb-8'>
              <img src={logo} alt="Rich flood logo" className='mb-2' height='64'/>
              <nav>
                <ul className='flex text-[17px] gap-px justify-center'>
                    <li>
                      <NavLink
                        to="/"
                        style={({isActive}) =>
                          isActive ? activeStyle : undefined
                        }
                        className='nav-links'
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/consultancy"
                        style={({isActive}) => 
                          isActive ? activeStyle : undefined
                        }
                        className="nav-links"
                      >
                        Consultancies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project"
                        style={({isActive}) => 
                          isActive ? activeStyle : undefined
                        }
                        className="nav-links"
                      >
                        Project
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/Contact Us'
                        style={({isActive}) => 
                          isActive ? activeStyle : undefined
                        }
                        className="nav-links"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                </ul>
              </nav>
            </div>
          </header>
          <article className='flex-1 text-[69px] grid place-content-center font-bold max-w-3xl text-center mx-auto'>
            <h1>Promoting Sustainable Investments in Africa</h1>
            <i className="fa-solid fa-angle-down"></i>
          </article>
        </div>
        <main className='py-10'>
          <div className="max-w-5xl mx-auto py-8">
            <h2 className='text-center text-[51px] mb-12 font-bold after:contents-[""] after:block after:h-2 after:w-20 after:mx-auto after:bg-green-700'>Our Work</h2>
            <div className='grid grid-cols-3 gap-6 align-stretch'>
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

        <section>
          <div className="max-w-5xl mx-auto">
            
          </div>
        </section>
      </div>
    )
}

export default App
