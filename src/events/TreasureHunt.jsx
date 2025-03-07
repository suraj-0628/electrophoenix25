import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
const TreassureHunt= () => {
    const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip  isFlipped={flip}
    flipDirection="horizontal">
    <div  className='w-[250px] h-[250px] bg-orange-500 opacity-80 text-3xl  rounded-lg p-5' onMouseEnter={() => setFlip(!flip)} >
    <div className='flex flex-col justify-center h-full text-2xl text-white'>
       <h1 >Clue Quest</h1>
       
       </div>
    </div>
    <div className='w-[250px] h-[250px] bg-orange-500 text-3xl  rounded-lg p-5' onMouseLeave={() => setFlip(!flip)} >
       <div className='flex flex-col justify-center h-full text-2xl'>
       
       <h1 className='mt-2 font-bold'>Contact:</h1>
       <p className='font-normal'>PRIYA DHARSHINI :9361109967</p>
       <p className='font-normal'>SARUMATHI :8838974793</p>
       </div>
    </div>
</ReactCardFlip>
  )
}

export default TreassureHunt