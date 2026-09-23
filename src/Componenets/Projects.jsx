import React from 'react'
import Header from './Header'

const Projects = () => {
  return (
    <>
    <Header/>
    <section id="Projects" className='pt-24 md:pt-16 text-white h-full overflow-hidden flex-col justify-center sm:pt-0'>
        <h1 className='flex items-center justify-center underline text-3xl font-semibold'>Projects</h1>
        <p className="md:text-lg text-base mt-2 text-center pt-5">  Some cool stuff I’ve built recently 👇</p>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-center mt-10'>
          <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-2'>Project 1</h2>
            <p className='text-gray-300'>Description of Project 1</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-2'>Project 2</h2>
            <p className='text-gray-300'>Description of Project 2</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-2'>Project 3</h2>
            <p className='text-gray-300'>Description of Project 3</p>
          </div>
        </div>
    </section>
    </>
  )
}

export default Projects