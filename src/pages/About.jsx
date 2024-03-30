import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px ',
 borderRadius:"10px"
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const About = () => {
  return (
    <div className='w-[80%] xl:left-36 h-[260vh] xl:h-[200vh]'>
       <div className='relative top-32 xl:left-36'>
      <div className='text-white text-xl font-extralight '> /About Us</div>
      <div className='text-3xl text-white  font-extrabold top-64 mt-5 xl:mt-12'>
        <h1>About Electrophoenix</h1>
        {/*  */}
        <div  className=' xl:w-[90%] mt-5'>
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='flex justify-center items-center bg-cover h-[300px] xl:h-[400px] opacity-95 rounded-md'  style={{  'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className='text-lg font-semibold mt-3'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore minus harum doloremque laudantium beatae, tempora tempore? Unde distinctio adipisci perspiciatis alias fuga officia explicabo fugiat ullam animi eveniet eligendi, consequatur suscipit adipisci aliquam voluptatum provident? Magni ea autem soluta error voluptatibus animi totam nesciunt saepe ad iure. Placeat adipisci magni vitae omnis in.</p></div>
        {/* anycocntent goes above here  */}
      </div>
      {/* absout dept below */}
      
      <div className='text-3xl text-white  font-extrabold top-64 mt-16'>
        <h1>About Our Department</h1>
        {/*  */}
        <div  className=' xl:w-[90%] mt-5'>
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='flex justify-center items-center bg-cover h-[300px] xl:h-[400px] opacity-95 rounded-md'  style={{  'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className='text-lg font-semibold mt-3'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore minus harum doloremque laudantium beatae, tempora tempore? Unde distinctio adipisci perspiciatis alias fuga officia explicabo fugiat ullam animi eveniet eligendi, consequatur suscipit adipisci aliquam voluptatum provident? Magni ea autem soluta error voluptatibus animi totam nesciunt saepe ad iure. Placeat adipisci magni vitae omnis in.</p></div>
        {/* anycocntent goes above here  */}
      </div>
      </div>
     </div>
  )
}

export default About