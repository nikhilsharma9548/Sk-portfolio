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
         className={`text-2xl text-white font-bold ${menu ? 'hidden' : ''}`}>☰</button>
       </div>
      </div>
      {menu && (
        <div className='md:hidden w-screen z-20 h-screen pt-5 inset-10 bg-black/40 text-white flex flex-col gap-10 text-xl font-sans font-bold '>
          <button
          onClick={() => setMenu(!menu)}
          className='text-2xl text-white font-mono flex justify-end pr-10'>✕</button>
         <ul className='font-mono flex  flex-col gap-5 text-center items-center justify-center'>
          <li className=''><Link to="/">Home</Link></li>
          <li className=''><Link to="/about">About</Link></li>
          <li className=''><Link to="/projects">Projects</Link></li>
          <li className=''><Link to="/contact">Contact</Link></li>
         </ul>
        </div>
      )}
    </div>
  )
}

export default Header