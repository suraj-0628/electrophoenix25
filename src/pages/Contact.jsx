import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
const Contact = () => {


  const [flip, setFlip] = useState(false);
  return (
    <div className='w-[80%] relative top-32 xl:left-36'>
     
      <div className=' font-extralight '> /contact us</div>
      <div className='font-extrabold top-64 mt-5 xl:mt-12'>
      <div className=' w-fit '>
      <ReactCardFlip  isFlipped={flip}
            flipDirection="horizontal">
            <div  className='w-[250px] h-[250px] bg-white opacity-80 text-3xl  rounded-lg p-5' onClick={() => setFlip(!flip)} >
            <div className='flex flex-col justify-center h-full text-2xl text-black'>
               <h1 >Overall Event Coordinator</h1>
               
               </div>
            </div>
            <div className='w-[250px] h-[250px] bg-orange-400 text-3xl  rounded-lg p-5' onClick={() => setFlip(!flip)} style={{
                // width: '300px',
                // height: '250px',
                // background: '#fbd7f8',
                // fontSize: '40px',
                // color: 'blue',
                // margin: '20px',
                // borderRadius: '4px',
                // textAlign: 'center',
                // padding: '20px'
            }}>
               <div className='flex flex-col justify-center h-full text-2xl'>
               <h1 >Contact:</h1>
               <p>+91 9999999999</p>
               </div>
            </div>
        </ReactCardFlip>
      </div>
      </div>
     </div>
  )
}

export default Contact
