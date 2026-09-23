import React from 'react'
import { BiSolidSend } from "react-icons/bi";
import img1 from '/github.webp'
import img2 from '/linkdin.webp'
import img3 from '/insta.webp'
import Header from './Header'

const Contact = () => {

    const iconList = [
        {
          Image: img1,
          link: "https://github.com/sohil865"
        },
        {
          Image: img2,
          link: "https://www.linkedin.com/in/sohil-khan-ab25a8264"
        },
        {
          Image: img3,
          link: "https://www.instagram.com/invites/contact/?utm_content=l8n685f&stkn=1qtwbzn6mfu0e"
        }
      ];
      
  return (
    <>
    <Header/>
     <section  id="Contact" className=" md:pt-16 pt-24 text-white  h-full overflow-hidden  flex-col justify-center sm:pt-0">
        <h1   className='flex items-center justify-center text-3xl font-semibold underline'>Contact-Me</h1>
        <p className='text-center text-xl md:text-2xl mt-10 px-5'>Please Fill out the form below to discuss anywork opportunities.</p>
        <div className=''>
            <form
            // onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col items-center text-xl justify-center gap-4 mt-10  '>
                <input 
                // {...register("name", { required: true})}
                type="text"
                name='name'
                placeholder='Name' className='w-[80%] md:w-[38%] h-14 rounded-md border-2 border-gray-400 px-4'/>
                {/* <span className='text-sm flex'>This field is required</span> */}

                <input
                //   {...register("email", { required: true })} 
                type="email"
                name='email'
                placeholder='Email' className='w-[80%] md:w-[38%] h-14 rounded-md border-2 border-gray-400 px-4'/>
                 {/* <span className='text-sm flex'>This field is required</span> */}
                <textarea 
                // {...register("message", { required: true })} 
                name='message'
                placeholder='Message' className='w-[80%] md:w-[38%] h-48 rounded-md border-2 border-gray-400 px-4'/>
                {/* <span className='text-sm flex'>This field is required</span> */}

               <button 
                type="submit" className=' flex bg-green-700 hover:bg-green-800 border-gray-300 border transition duration-300 text-white px-8 justify-center items-center gap-2 py-2 text-base  rounded-md'><BiSolidSend/></button>
            </form>
        </div >

        <div className='m-10 flex items-center justify-center gap-7'>
        {iconList.map((icon, index) => (
            <div
            key={index} className='w-12 h-12 rounded-tl-xl rounded-br-xl relative bottom-5 md:bottom-0 bg-green-800 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer'>
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.Image} alt="icon" className='w-8 h-8 object-cover' />
                </a>
            </div>
        ))}
         </div>


       </section>
       </>
  )
}

export default Contact