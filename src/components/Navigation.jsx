import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({activeStyle, style, hideMenu}) {
    return (
        <>
            <li onClick={()=>hideMenu('w-full', 'w-0')}>
                <NavLink
                    to="/"
                    style={({isActive}) =>
                      isActive ? activeStyle : undefined
                    }
                    className={style}
                >
                    Home
                </NavLink>
            </li>
            {/* <li onClick={()=>hideMenu('w-full', 'w-0')}>
                <NavLink 
                    to="/consultancy"
                    style={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    className={style}
                >
                    Consultancies
                </NavLink>
            </li> */}
            <li onClick={()=>hideMenu('w-full', 'w-0')}>
                <NavLink
                    to="/project"
                    style={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    className={style}
                >
                    Project
                </NavLink>
            </li>
            <li onClick={()=>hideMenu('w-full', 'w-0')}>
                <NavLink
                    to='/contact-us'
                    style={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    className={style}
                >
                    Contact Us
                </NavLink>
            </li>    
        </>
    )
}

export default Navigation
