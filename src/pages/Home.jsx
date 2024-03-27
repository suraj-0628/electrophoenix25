import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {

  return (
    <div className='flex  justify-center items-center absolute top-20  xl:left-[22%] left-8 text-white'>
       <div className='flex flex-col justify-center items-center'><h1 className='text-4xl xl:text-6xl font-bold '>Welcome to Electrophoenix 24 </h1>
       <p  className='font-semibold text-2xl xl:text-4xl mt-5 xl:mt-10 '><TypeAnimation 
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'National Level Technical Symposium',
            500, // wait 1s before replacing 
            'By The Department of Electrical Sciences',
            500,
            'Symposium on 18 April 2024',
            500,
            'Register Now !',
            500
          ]}
          wrapper="span"
          speed={50}
          style={{  display: 'inline-block' }}
          repeat={Infinity}
       /></p>


       
       </div>

      

    </div>
  )
}

export default Home