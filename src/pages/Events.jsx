import React from 'react'
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom'
import { techEvents } from '../constants'
import { images } from '../constants'
const Events = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-start  absolute top-40 xl:left-[22%] left-8 '>
    <div className='grid grid-flow-col gap-16 text-3xl font-semibold'>
      <h1 >Technical Events</h1>
      <h1>Non-Technical Events</h1>
      <h1>special Events</h1>
     
    </div>
    <div className='flex gap-10 mt-16'>
      
      
              <div className='flex gap-32 '>
               {images.map((i)=>(
                
                 <img className='rounded-xl h-[200px] w-[200px]' src={i.src} alt={i.alt}  height={300} width={300} />
               ))}
               
               </div>
              
        
    </div>
    </div>

  )
}

export default Events