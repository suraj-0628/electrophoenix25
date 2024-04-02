import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import CktDebug from '../events/CktDebug';
import ContactF1 from '../contactCards/ContactF1';
import ContactF2 from '../contactCards/ContactF2';
import ContactF3 from '../contactCards/ContactF3';
import ContactF4 from '../contactCards/ContactF4';
import ContactS1 from '../contactCards/ContactS1';
import ContactS2 from '../contactCards/ContactS2';
const Contact = () => {


  const [flip, setFlip] = useState(false);
  return (
    <div className='w-[80%] relative h-[300vh]  xl:left-36 xl:h-[150vh]'>
     <div className='relative top-32 '>
      <div className=' font-extralight '> /contact us</div>
      <div className='font-extrabold top-64 mt-5 xl:mt-12'>
      <div>
        <h1 className='text-3xl mb-5'>Faculty Coordinators</h1>
      <div className='flex flex-row gap-10 flex-wrap'>
      <ContactF1 />
        <ContactF2 />
        <ContactF3 />
        <ContactF4 />
      </div>
      </div>
       {/* students below  */}
       <div className='mt-10'>
        <h1 className='text-3xl mb-5'>Student Coordinators</h1>
      <div className='flex flex-row gap-10 flex-wrap'>
      <ContactS1 />
      <ContactS2 />  
      </div>
      </div>
      </div>
      </div>
     </div>
  )
}

export default Contact
