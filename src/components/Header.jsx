import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-center items-center h-20 fixed  w-[100vw] ' >
        <div className='absolute top-0 left-0 py-7 px-5 xl:px-20 xl:hidden md:hidden'>
        <img className='' src="/hamburger-icon.jpg" alt="hamburger-icon" height={25} width={25} />
        </div>
         <img src="/electrophoenix_logo.jpg" alt="logo" height={50} width={50}/>
         <h1 className='xl:text-3xl font-extrabold'>Electrophoenix'24</h1>
         <div>
          
         </div>
    </div>
  )
}

export default Header