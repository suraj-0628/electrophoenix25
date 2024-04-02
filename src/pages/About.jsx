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
    url: 'IMG_4910.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_4937.JPG',
    caption: 'Slide 3'
  },
  
  {
    url: 'IMG_4942.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_4963.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_4966.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_5071.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_5075.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_5171.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_5226.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_5232.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_5237.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_52572.JPG',
    caption: 'Slide 3'
  },
];

const slideImages2 = [
  {
    url: '/IMG_4670.JPG',
    caption: 'Slide 1'
  },
 
  {
    url: 'IMG_4894.JPG',
    caption: 'Slide 3'
  },
  {
    url: 'IMG_4937.JPG',
    caption: 'Slide 3'
  },
];

const About = () => {
  return (
    <div className='w-[80%] xl:left-36 h-[600vh]  xl:h-[300vh]'>
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
              
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className='text-xl font-semibold mt-3'> <p>Electrophoenix is an electrifying national-level technical symposium held annually at our esteemed college. With a legacy of innovation and excellence, Electrophoenix serves as a platform for budding engineers and technocrats from across the country to showcase their talent, exchange ideas, and engage in collaborative learning.
<br />
<br />
At Electrophoenix, participants immerse themselves in a plethora of technical events, workshops, and competitions spanning various disciplines within electrical and electronics engineering. From cutting-edge research presentations to hands-on workshops on emerging technologies, the symposium offers something for every enthusiast keen on exploring the frontiers of electrical sciences.
<br />
<br />
With renowned experts delivering keynote addresses and conducting insightful sessions, Electrophoenix provides invaluable opportunities for networking and mentorship. Participants gain insights into industry trends, research advancements, and real-world applications, empowering them to envision and shape the future of electrical engineering.
<br />
<br />
Driven by a passionate team of organizers and volunteers, Electrophoenix embodies the spirit of innovation, collaboration, and excellence. It fosters a culture of curiosity and creativity, inspiring participants to push boundaries, challenge conventions, and embark on transformative journeys in the realm of electrical sciences.
</p></div>
        {/* anycocntent goes above here  */}
      </div>
      {/* absout dept below */}
      
      <div className='text-3xl text-white  font-extrabold top-64 mt-16'>
        <h1>About Our Department</h1>
        {/*  */}
        <div  className=' xl:w-[90%] mt-5'>
        <Slide >
         {slideImages2.map((slideImage2, index)=> (
            <div key={index}>
              <div className='flex justify-center items-center bg-cover h-[300px] xl:h-[400px] opacity-95 rounded-md'  style={{  'backgroundImage': `url(${slideImage2.url})` }}>
               
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className='text-xl font-semibold mt-3'> <p>The Department of Electrical Sciences at our institution is a dynamic hub of innovation and learning, encompassing both Electrical and Computer Engineering (ECE) and Electrical and Electronics Engineering (EEE). Our department is committed to fostering a deep understanding of foundational principles while also encouraging cutting-edge research and practical application.
      <br />
      <br />
      In ECE, students delve into the intricacies of electrical systems, digital electronics, communication networks, and signal processing. They explore the design and implementation of hardware and software solutions for a wide range of modern technologies, from microprocessors to advanced telecommunications systems.
      <br />
      <br />
In EEE, students focus on the generation, transmission, and utilization of electrical energy. They study power systems, renewable energy sources, electric machines, and control systems, preparing to tackle global challenges such as sustainable energy production and efficient power distribution.
     <br />
     <br />
Through a combination of rigorous coursework, hands-on projects, and experiential learning opportunities, our department equips students with the skills and knowledge needed to excel in diverse career paths, whether in industry, research, or academia. With state-of-the-art laboratories, world-class faculty, and a vibrant academic community, we are dedicated to shaping the next generation of electrical engineers who will drive innovation and transform the world.
</p></div>
        {/* anycocntent goes above here  */}
      </div>
      </div>
     </div>
  )
}

export default About