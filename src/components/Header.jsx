import React, { useState } from 'react'

import { Sling as Hamburger } from 'hamburger-react'
const Header = (props) => {
  
 
  
  return (
    <div className='bg-black text-white flex justify-center items-center h-20 absolute  w-[100vw] overflow-hidden' >
        <div className='absolute top-0 left-0 py-7 px-5 xl:px-20 xl:hidden md:hidden'>
         <div  className='absolute top-5 left-2'>
          <div onClick={() => {
            props.setMenuStatus(!props.isOpen);
            console.log('from onclick')
          }} >
            <Hamburger   size={29} />
          </div>
        
        
        </div>
        </div>
         <img src="/electrophoenix_logo.jpg" alt="logo" height={50} width={50}/>
         <h1 className='xl:text-3xl text-xl font-extrabold'>Electrophoenix'24</h1>
         <div>
          
         </div>
    </div>
  )
}

export default Header