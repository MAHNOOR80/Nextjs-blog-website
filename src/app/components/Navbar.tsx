import React from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-black '>
         <div className='   flex flex-row justify-between  gap-36 center p-6 ' >
        <h1 className='text-white text-lg font-bold'>Blog<span className='text-[#da7509]'>MN</span></h1>
        <nav className='text-gray-300 flex flex-row gap-7'>
        <Link href="/Blogs" className="relative text-[#da7509] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#da7509]">Blogs</Link>
        <Link href="/Services" className='hover:text-gray-100' >Services</Link>
        <Link href="/About" className='hover:text-gray-100'>About</Link>
        <Link href="/Contact" className='hover:text-gray-100' >Contact</Link>
        <Link href={"/Testamonial"} className='hover:text-gray-100'>Testamonials</Link>

        </nav>
        
        <div className='flex flex-row gap-4'>
     <div className='flex flex-row mt-3 gap-3'>
        <FaGithub className="text-white" />
        <MdEmail  className="text-white"/>
       <FaLinkedin className="text-white" />
     </div>
            <div><Link href="/Login"><button className='bg-[#da7509] text-white font-semibold  rounded-md hover:bg-[#da7509c7] py-2 px-4'>Log in</button></Link></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
