import React from 'react'

const Nav = (props) => {
    
  return (
     <main className='absolute top-0 h-screen w-48  bg-black opacity-80 hidden xl:block'>
        <nav className='text-white relative top-60 left-10'>
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