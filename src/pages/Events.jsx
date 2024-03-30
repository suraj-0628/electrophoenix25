import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import {specialEvents} from '../constants/index'
import LineFollower from '../events/LineFollower';
import RoboRace from '../events/RoboRace';
import CktDebug from '../events/CktDebug';
import KollywoodQuiz from '../events/KollywoodQuiz';
import ProjectExpo from '../events/ProjectExpo';
import PaperPresentation from '../events/PaperPresentation';
import Photography from '../events/Photography';
import TreassureHunt from '../events/TreasureHunt';
const Events = () => {
  
 
  return (
    <div className='w-[80%] xl:left-36 h-[380vh] xl:h-[200vh]'>
    <div className='relative top-32 xl:left-36'>
   <div className='text-white text-xl font-extralight '> /Events</div>
   <div className='text-3xl text-white  font-extrabold top-64 mt-5 xl:mt-12'>
     <h1>Special Events</h1>
     {/*  */}
     <div  className=' xl:w-[90%] mt-5 flex flex-wrap gap-10  xl:flex xl:flex-row
     xl:gap-10'>
      {/* slide hhere */}
     <LineFollower />
     <RoboRace />
   </div>
   </div>

   {/* tech event below */}
   
   <div className='text-3xl text-white  font-extrabold top-64 mt-16'>
     <h1>Technical Events</h1>
     {/*  */}
     <div  className=' xl:w-[90%] mt-5 flex flex-wrap gap-10 xl:flex xl:flex-row xl:gap-10 '>
    <CktDebug />
  
    <ProjectExpo />

    <PaperPresentation />
   </div>

   </div>

   <div className='text-3xl text-white  font-extrabold top-64 mt-16'>
     <h1>Non-Technical Events</h1>
     {/*  */}
     <div  className=' xl:w-[90%] mt-5  flex flex-wrap gap-10 xl:flex xl:flex-row xl:gap-10'>
    <KollywoodQuiz />
    <Photography />
    <TreassureHunt />
   </div>

   </div>
   </div>
  </div>

  )
}

export default Events