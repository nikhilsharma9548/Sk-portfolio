import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { CiLinkedin } from "react-icons/ci";
import { CgYoutube } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";
import { SiInstagram } from "react-icons/si";
import Header from './Header';
import Resume from '/Resume.pdf'


const Hero = () => {
  return (
    <>
     <Header/>
    <div className='w-screen h-screen max-md:flex-col-reverse flex justify-evenly items-center text-center px-3'>
      <div>
        <h1 className='md:text-6xl text-4xl font-bold bg-linear-to-r from-green-500 to-white bg-clip-text text-transparent '>SK Developer</h1>
    <div className='text-white mt-5 flex justify-center  items-center gap-2'>
      <h1 className="md:text-5xl text-2xl font-mono">
         I'm
      </h1>

      <h2 className="md:text-4xl text-2xl font-semibold text-green-400">
        <Typewriter
          words={[
            "Frontend Developer",
            "React Developer",
            "MERN Stack Developer",
            "UI/UX Enthusiast",
          ]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </div>
    <p className=" text-white font-serif md:text-2xl mt-5 px-5 lg:w-xl text-justify ">
      Hi, I’m Sohil Khan, the creator of Coding Tiger — a platform where I share practical coding tutorials, real-world projects, and developer tips to help you master web development.
    </p>
    <div className='flex text-white  gap-5 mt-10 px-5 items-center'>
      <a 
      href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-green-600 px-5 py-3 sm:text-base text-sm rounded-full text-white'>Download</a>
          <ul className='flex gap-5'>
            <li className='md:text-3xl text-3xl hover:text-green-400 cursor-pointer duration-300'><CiLinkedin/></li>
            <li className='md:text-3xl text-3xl hover:text-green-400 cursor-pointer duration-300'><CgYoutube/></li>
            <li className='md:text-3xl text-3xl hover:text-green-400 cursor-pointer duration-300'><VscGithub/></li>
            <li className='md:text-3xl text-3xl hover:text-green-400 cursor-pointer duration-300'><SiInstagram/></li>
          </ul>
    </div>
      </div>
      
      <div className="relative w-96 h-96 flex items-center justify-center">

  {/* Rotating Ring */}
  <div className="absolute inset-10  rounded-full border-t-4 border-b-4 border-green-400 animate-spin-slow"></div>
  {/* Image */}
  <div className="w-72 rounded-full overflow-hidden z-10">
    <img
      src="/profile.jpeg"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

</div>
    </div>
    
    </>
  )
}

export default Hero