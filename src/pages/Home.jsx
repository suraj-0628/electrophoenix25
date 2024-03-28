import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {

  return (
    <div className='flex  justify-center items-center  text-white'>
       <div className='flex flex-col justify-center items-center relative top-48 w-[80vw]'><div className='relative '>
       <h1 className='text-4xl xl:text-6xl font-bold '>Welcome to Electrophoenix 24 </h1>
       <p  className='font-semibold absolute top-24 xl:left-40   text-2xl xl:text-4xl mt-5 xl:mt-10 '><TypeAnimation 
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'National Level Technical Symposium',
            500, // wait 1s before replacing 
            'By The Department of Electrical Sciences',
            500,
            'Symposium on 18 April 2024',
            500,
          
          ]}
          wrapper="span"
          speed={50}
          style={{  display: 'inline-block' }}
          repeat={Infinity}
       /></p>
       </div>
       <div className='mt-36 xl:mt-40 text-xl'>
        <a href="https://docs.google.com/forms/d/1fuAJGM22ECClnqzNPcm13szKxCV1_X6rWiC0STOygzY/viewform?pli=1&pli=1&edit_requested=true"><button className='border-solid bg-orange-600 px-9 py-3 rounded-xl hover:bg-orange-400 hover:text-2xl'>Register Now !</button></a>
       </div>

       
       </div>

      

    </div>
  )
}

export default Home