import React, { useState } from 'react'

import { Sling as Hamburger } from 'hamburger-react'
const Header = (props) => {
  
 
  
  return (
    <div className='bg-black text-white flex justify-center items-center h-20 fixed top-0 w-[100vw] ' >
        <div className='absolute top-0 left-0 py-7 px-5 xl:px-20 xl:hidden md:hidden'>
         <div  className='absolute top-4 left-2'>
          <div onClick={() => {
            props.setMenuStatus(!props.isOpen);
            console.log('from onclick')
          }} >
            <Hamburger  size={28} />
          </div>
        
        
        </div>
        </div>
         <div className='flex justify-center items-center ml-6'>
          <img className='h-[30%] w-[20%] xl:h-[20%] xl:w-[10%]' src="/phoenix+rising.png" alt="logo" />
         <h1 className='xl:text-3xl text-xl xl:ml-1 font-extrabold'>Electrophoenix'24</h1></div>
         <div>
          
         </div>
    </div>
  )
}

export default Header