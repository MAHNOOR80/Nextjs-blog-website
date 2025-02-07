"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track whether the menu is open or closed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black">
      <div className="flex flex-row justify-between items-center p-6">
        <h1 className="text-white text-lg font-bold">Blog<span className="text-[#da7509]">MN</span></h1>

        {/* Navigation Links for large screens */}
        <nav className="hidden md:flex flex-row gap-7 text-gray-300">
          <Link href="/Blogs" className="relative text-[#da7509] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#da7509]">Blogs</Link>
          <Link href="/Services" className="hover:text-gray-100">Services</Link>
          <Link href="/About" className="hover:text-gray-100">About</Link>
          <Link href="/Contact" className="hover:text-gray-100">Contact</Link>
          <Link href="/Testamonial" className="hover:text-gray-100">Testamonials</Link>
        </nav>

        {/* Social icons and login button for large screens */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-3">
            <FaGithub className="text-white" />
            <MdEmail className="text-white" />
            <FaLinkedin className="text-white" />
          </div>
          <div>
            <Link href="/Login">
              <button className="bg-[#da7509] text-white font-semibold rounded-md hover:bg-[#da7509c7] py-2 px-4">
                Log in
              </button>
            </Link>
          </div>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden flex flex-col gap-2 cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>

      {/* Menu for small screens */}
      <div className={`md:hidden flex flex-col items-center bg-black text-gray-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/Blogs" className="py-2 hover:text-gray-100">Blogs</Link>
        <Link href="/Services" className="py-2 hover:text-gray-100">Services</Link>
        <Link href="/About" className="py-2 hover:text-gray-100">About</Link>
        <Link href="/Contact" className="py-2 hover:text-gray-100">Contact</Link>
        <Link href="/Testamonial" className="py-2 hover:text-gray-100">Testamonials</Link>

        {/* Login button for small screens */}
        <div className="mt-4">
          <Link href="/Login">
            <button className="bg-[#da7509] text-white font-semibold rounded-md hover:bg-[#da7509c7] py-2 px-4">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
