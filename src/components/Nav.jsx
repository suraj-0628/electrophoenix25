import React from 'react'

const Nav = (props) => {
    
  return (
     <main className='relative top-[10%] h-[90%] w-48  bg-black opacity-80  xl:block'>
        
        <nav className='text-white relative top-44 left-10'>
       
          <ul className='absolute text-xl font-bold '> 
            <li className='mb-9'>Home</li>
            <li className='mb-9'>AboutUs</li>
            <li className='mb-9'>Events</li>
            <li className='mb-9'>TimeLine</li>
            <li className='mb-9'>ContactUs</li>
          </ul>
        </nav>
     </main>
  )
}

export default Nav