import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
   let stylez = props.isOpen ? "block" :'hidden'
   
  return (
     <main className={`fixed top-[8%] h-[92vh] w-48  bg-black  opacity-90 ${stylez}  xl:block `}>
       {/* <div className='relative'>
        <div className='absolute top-16 '>
        <img src="/phoenix+rising.png" alt="logo" height={500} width={500}/>
        </div>
       </div> */}
        <nav className='text-white  relative top-40 left-10'>
        
          <ul className='absolute text-xl font-bold '> 
            <li  className='mb-9'><NavLink className='hover:text-orange-400' to='/' >Home</NavLink></li>
            <li   className='mb-9'><NavLink className='hover:text-orange-400'  to='about' >About Us</NavLink></li>
            <li  className='mb-9'><NavLink className='hover:text-orange-400'  to='events' >Events</NavLink></li>
            <li  className='mb-9'><NavLink className='hover:text-orange-400' to='contactus' >Contact Us</NavLink></li>
          </ul>
        </nav>
     </main>
  )
}

export default Nav
