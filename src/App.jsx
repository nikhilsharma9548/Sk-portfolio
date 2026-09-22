import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Hero from './Componenets/Hero'
import About from './Componenets/About'
import Projects from './Componenets/Projects'
import Contact from './Componenets/Contact'


const App = () => {
  return (
    <BrowserRouter>
   
    <div className="min-h-screen w-screen  overflow-hidden bg-[#030a16]">
      <Routes> 
      <Route path="/" element={<Hero/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
      <footer>
        <div className=' w-screen items-end justify-center gap-5 text-white mt-5  '>
          <p className='text-center text-white'>© 2026 SK Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App