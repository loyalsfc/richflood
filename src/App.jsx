import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from './assets/richflood_logo.webp'
import facebook from './assets/social/facebook.webp'
import instagram from './assets/social/instagram.webp'
import linkedin from './assets/social/linkedin.webp'
import twitter from './assets/social/twitter.webp'

function App() {
  let activeStyle = { backgroundColor: "#000", color: '#fff' }

    return(
      <div>
        {/* <div className='flex flex-col h-screen'> */}
          <header className='shadow-md sticky top-0 bg-white z-50'>
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
                        to='/contact-us'
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

        {/* </div> */}
        <Outlet />
        <footer className='my-8'>
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <span className='text-[13px] font-medium'>Copyright © 2023 Richflood Ltd., All rights reserved Privacy Policy</span>
            <ul className='flex gap-2'>
              <li><img src={linkedin} alt="Social" width='39' /></li>
              <li><img src={facebook} alt="Social" width='39' /></li>
              <li><img src={twitter} alt="Social" width='39' /></li>
              <li><img src={instagram} alt="Social" width='39' /></li>
            </ul>
          </div>
        </footer>
      </div>
    )
}

export default App
