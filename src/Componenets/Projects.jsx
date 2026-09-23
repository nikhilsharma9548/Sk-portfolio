import React from 'react'
import Header from './Header'
import project1 from '/project-1.png'
import project2 from '/project-2.png'

const Projects = () => {
  return (
    <>
    <Header/>
    <section id="Projects" className='pt-24 md:pt-16 p-10 text-white h-full overflow-hidden flex-col justify-center sm:pt-0'>
        <h1 className='flex items-center justify-center underline text-3xl font-semibold'>Projects</h1>
        <p className="md:text-lg text-base mt-2 text-center pt-5">  Some cool stuff I’ve built recently 👇</p>

        <div className='flex  flex-col gap-5 md:flex-row  items-center justify-center mt-10'>
          <div className='bg-gray-800 max-w-xl p-3 rounded-lg shadow-lg'>
            <img src={project1} alt="Project 1" className='w-full h-auto mb-2 rounded' />
            <p className='text-gray-300'>Description of Project 1</p>
          </div>
          <div className='bg-gray-800 max-w-xl p-3 rounded-lg shadow-lg'>
            <img src={project2} alt="Project 2" className='w-full h-auto mb-2 rounded' />
            <p className='text-gray-300'>Description of Project 2</p>
          </div>
        </div>

    </section>
    </>
  )
}

export default Projects   