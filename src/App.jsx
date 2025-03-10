import {BrowserRouter,Routes,Route,NavLink,Link} from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import NewAbout from './pages/NewAbout'
import Events from './pages/Events'
import Contacts from './pages/Contact'
import { useState } from 'react'


import BIRDS from 'vanta/src/vanta.birds'
import { useEffect } from 'react'

function App() {
  
  useEffect(()=>{
    BIRDS({
      el: "#vantajs",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0,
      color2: 0xff7200,
      quantity: 4.00
    })
  },[])
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  return (
    
     <section id="vantajs" className="width-full min-h-screen   relative text-white p-0 m-0">

    
      

      <BrowserRouter>
      <main className='flex  justify-center items-center '>
       
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<NewAbout />} ></Route>
          <Route path='events' element={<Events />}></Route>
          <Route path='contactus' element={<Contacts/>}></Route>
        
        </Routes>
       
        
       

      </main>
      <Nav  setMenuStatus={setIsMenuOpen}  isOpen={isMenuOpen}/>
      {/* nav here */}
      </BrowserRouter>
      <Header isOpen={isMenuOpen} setMenuStatus={setIsMenuOpen}/>
        
     </section>
    
  )
}

export default App
