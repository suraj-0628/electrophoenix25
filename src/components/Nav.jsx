import React from 'react'

const Nav = (props) => {
   const stylez = props.isOpen ? "block" :'hidden'
   console.log(props.isOpen)
  return (
     <main className={`absolute top-[8%] h-[90%] w-48  bg-black opacity-80 ${stylez}  xl:block `}>
        
        <nav className='text-white  relative top-44 left-10'>
       
          <ul className='absolute text-xl font-bold '> 
            <li className='mb-9'><a href="/">Home</a></li>
            <li className='mb-9'><a href="about">AboutUs</a></li>
            <li className='mb-9'><a href="events">Events</a></li>
            <li className='mb-9'>TimeLine</li>
            <li className='mb-9'><a href="contactus">ContactUs</a></li>
          </ul>
        </nav>
     </main>
  )
}

export default Nav
