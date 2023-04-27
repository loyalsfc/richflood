import { useRef } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import logo from './assets/logo.png'
import facebook from './assets/social/facebook.webp'
import instagram from './assets/social/instagram.webp'
import linkedin from './assets/social/linkedin.webp'
import twitter from './assets/social/twitter.webp'
import Navigation from './components/Navigation'

function App() {
  let activeStyle = { backgroundColor: "#000", color: '#fff' }
  let mobileActiveStyle = {textDecoration: "underline", textDecorationColor: "rgb(21 128 61)", textDecorationThickness: '4px'}
  const mobileMenu = useRef()

  const openMenu = (rmClass, addClass) => {
    mobileMenu.current.classList.replace(rmClass, addClass)
  }

    return(
      <div className='bg-hero bg-fixed'>
          <div ref={mobileMenu} className="h-screen w-0 overflow-hidden bg-white z-[51] fixed transition-all top-0 left-0 md:hidden grid place-content-center">
            <i className="fa-solid fa-xmark absolute top-4 right-4 text-2xl" onClick={()=>openMenu('w-full', 'w-0')}></i>
            <ul className='flex flex-col items-center justify-center font-bold gap-5 text-xl'>
              <Navigation activeStyle={mobileActiveStyle} hideMenu={openMenu}/>
            </ul>
          </div>
          <header className='shadow-md sticky top-0 bg-white z-50 px-4 md:px-0'>
            <div className='container mx-auto pt-4 pb-8'>
              <div className="flex items-center justify-between">
                <Link to="/"><img src={logo} alt="Rich flood logo" className='mb-2 h-10 sm:h-16' /></Link>
                <nav className='hidden md:block'>
                <ul className='flex text-[17px] gap-px justify-center'>
                  <Navigation activeStyle={activeStyle} style="nav-links" hideMenu={openMenu}/>
                </ul>
              </nav>
                <i className="fa-solid fa-bars text-2xl md:hidden" onClick={()=>openMenu('w-0', 'w-full')}></i>
              </div>
            </div>
          </header>
        <Outlet />
        <footer className='py-8 px-4 md:px-0 bg-white'>
          <div className="max-w-5xl mx-auto flex flex-col-reverse text-center md:text-left md:flex-row gap-5 items-center justify-between">
            <span className='text-[13px] font-medium'>Copyright © 2023 Greenalluvia Ltd., All rights reserved Privacy Policy</span>
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
