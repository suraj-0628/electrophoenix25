import {BrowserRouter,Routes,Route,NavLink,Link} from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contacts from './pages/Contact'
import { useState } from 'react'
import Tech from './events/Tech'
import Nontech from './events/Nontech'
import Special from './events/Special'

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
      quantity: 5.00
    })
  },[])
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  return (
    
     <section id="vantajs" className=" h-screen w-auto relative text-white">
      
      <Header isOpen={isMenuOpen} setMenuStatus={setIsMenuOpen}/>
      <Nav isOpen={isMenuOpen}/>
      <main className=''>
        <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} ></Route>
          <Route path='events' element={<Events />}></Route>
          <Route path='contact' element={<Contacts/>}></Route>
          <Route path='/tech-events' element={<Tech/>}></Route>
      <Route path='/non-tech-events' element={<Nontech />}></Route>
      <Route path='/special-events' element={<Special />}></Route>
        </Routes>
        </BrowserRouter>
      
      </main>
      {/* Home 
      Aboutus 
      Events 
      Timeline 
      Contacts  */}
     </section>
    
  )
}

export default App
