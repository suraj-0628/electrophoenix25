import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
   const stylez = props.isOpen ? "block" :'hidden'
   
  return (
     <main className={`fixed top-[8%] h-[92vh] w-48  bg-black  opacity-90 ${stylez}  xl:block `}>
        
        <nav className='text-white  relative top-44 left-10'>
       
          <ul className='absolute text-xl font-bold '> 
            <li  className='mb-9'><NavLink to='/' >Home</NavLink></li>
            <li   className='mb-9'><NavLink to='about' >About Us</NavLink></li>
            <li  className='mb-9'><NavLink to='events' >Events</NavLink></li>
            <li  className='mb-9'><NavLink to='contactus' >Contact Us</NavLink></li>
          </ul>
        </nav>
     </main>
  )
}

export default Nav
