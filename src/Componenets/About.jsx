import React from 'react'
import Header from './Header'
import img1 from '/HTML.webp'
import img2 from '/CSS.webp'
import img3 from '/JS.webp'
import img4 from '/React.webp'
import img5 from '/Tailwind.webp'
import img6 from '/nodeJS.webp'
import img7 from '/expressJs.png'
import img8 from '/MongoDB.png'
import img9 from '/github.webp'

const About = () => {
   const SkillsList = [
        {
            name: "HTML",
            image: img1,
        },
        {
            name: "CSS",
            image: img2,
        },
        {
            name: "JavaScript",
            image: img3,
        },
        {
            name: "React",
            image: img4,
        },
        {
            name: "Tailwind CSS",
            image: img5,
        },
        {
            name: "node-JS",
            image: img6
        },
         {
            name: "Express-JS",
            image: img7
        },
        {
            name: "MongoDB",
            image: img8
        },
        {
            name: "Github",
            image: img9
        },
    ]
  return (
    <>
    <Header/>
    <div className='w-screen flex justify-center items-center text-white text-xl pt-32  font-sans px-5 gap-10 max-md:flex-col-reverse'>
      <div className=' w-full relative md:left-20 lg:left-32 top-3 justify-center items-center'>
        <h1 className='text-center text-4xl font-semibold underline'>About Me</h1>
        <p className='text-center pt-10 text-balance text-lg md:text-xl lg:text-2xl font-sans'>
         I’m a passionate Full Stack Developer who loves turning ideas into interactive digital experiences.
I enjoy building clean, responsive, and user-friendly web applications using modern technologies.
With a strong interest in the MERN stack, I’m constantly learning and improving my development skills.
I love solving problems, exploring new technologies, and bringing creative ideas to life through code.
My goal is to build meaningful products that are both visually impressive and technically powerful.     
        </p>
      </div>
      <div className=' w-full flex justify-center items-center'>
        <img src="./profile.jpeg" alt="Profile" className='w-72 h-80 rounded-2xl object-fit' />
      </div>
    </div>
    <div className="pt-20">
      <div className=''>
     {/*---------------------Skills Section ------------------------*/}
         <section
  id="Skills"
  className="w-full px-4 overflow-hidden pb-5 text-white  flex flex-col justify-center items-center text-center">

  <h1 className="md:text-4xl text-3xl font-semibold mb-6 underline">Skills</h1>

  <p className="text-lg max-w-2xl mb-12 ">
    I have a lot of experience in web development <br />and I have worked with these technologies:
  </p>

  <div className="flex flex-wrap w-[70%] justify-center gap-6">
    {SkillsList.map((skill, index) => (
      <div key={index}
        className="bg-green-800 w-72 h-14 border-2 border-gray-400 p-2 shadow-black rounded-full shadow-md hover:shadow-2xl transition-all hover:scale-105 pl-7 duration-700 flex items-center gap-4 cursor-pointer">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-8 h-8 object-cover rounded-md"
        />
        <h3 className="text-sm font-semibold">{skill.name}</h3>
      </div>

    ))}
  </div>

</section>
      </div>
    </div>
  </> 
  )
}

export default About