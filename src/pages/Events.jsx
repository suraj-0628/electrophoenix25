import React from 'react'
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom'
import Tech from '../events/Tech'
import Nontech from '../events/Nontech'
import Special from '../events/Special'

const Events = () => {
  return (
    <div className='flex  justify-center items-center absolute top-40 xl:left-[22%] left-8 '>
    <div className='grid grid-flow-col gap-16 text-3xl font-semibold'>
      <h1 >Technical Events</h1>
      <h1>Non-Technical Events</h1>
      <h1>special Events</h1>
     
    </div>
    </div>

  )
}

export default Events