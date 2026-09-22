import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const[menu, setMenu] = useState(false)

  return (
    <div className='w-screen h-20 flex justify-center '>
      <div className='lg:w-[80%] w-screen text-white h-full flex justify-between items-center md:mt-10'>
       <div className='flex items-center'>
         <img src="/logo.jpeg" className="w-16 h-16 mx-2 rounded-full" alt="Logo" />
        <h1 className="text-4xl font-sans  ml-2">Portfolio</h1>
       </div>
        <ul className=' hidden md:flex gap-10 lg:pr-10 pr-5 text-xl font-sans font-bold '>
          <li className='hover:text-green-500 transition-colors duration-300'><Link to="/">Home</Link></li>
          <li className='hover:text-green-500 transition-colors duration-300'><Link to="/about">About</Link></li>
          <li className='hover:text-green-500 transition-colors duration-300'><Link to="/projects">Projects</Link></li>
          <li className='hover:text-green-500 transition-colors duration-300'><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='md:hidden px-5'>
         <button
          onClick={() => setMenu(!menu)}
         className='text-2xl text-white font-bold'>☰</button>
       </div>
      </div>
      {menu && (
        <div className='md:hidden w-screen z-20 h-screen inset-10 bg-black text-white flex flex-col items-center gap-10 text-2xl font-sans font-bold'>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </div>
      )}
    </div>
  )
}

export default Header