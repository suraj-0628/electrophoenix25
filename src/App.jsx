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

function App() {
  
 
  const [visible ,setVisile] =useState()

  return (
    
     <section className="bg-yellow-400 h-screen w-auto relative ">
      <Header />
      <Nav />
      <main className=''>
        <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} ></Route>
          <Route path='events' element={<Events />}></Route>
          <Route path='events' element={<Events />}>
          </Route>
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
