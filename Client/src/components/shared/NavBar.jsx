'use client'
import React, { useState } from 'react'
import { Phone, Mail, Twitter, Facebook, Instagram, Github, Menu, X } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full">
      {/* Top bar - visible on all screens */}
      <div className="bg-gray-800 text-white py-2 px-4 flex flex-col sm:flex-row justify-between items-center ">
				<div className='container mx-auto flex flex-col sm:flex-row justify-between items-center '>
					<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0 ">
						<span className="flex items-center"><Phone size={16} className="mr-2" /> (414) 857 - 0107</span>
						<span className="flex items-center"><Mail size={16} className="mr-2" /> yummy@bistrobliss</span>
					</div>
					<div className="flex items-center space-x-4 ">
						<button className='text-white rounded-full bg-slate-700 p-2'> <FaFacebookF size={14} className="cursor-pointer hover:text-gray-300" /></button>
						<button className='text-white rounded-full bg-slate-700 p-2'> <FaTwitter size={14} className="cursor-pointer hover:text-gray-300" /></button>
						<button className='text-white rounded-full bg-slate-700 p-2'> <FaInstagram size={14} className="cursor-pointer hover:text-gray-300" /></button>
						<button className='text-white rounded-full bg-slate-700 p-2'> <FaGithub size={14} className="cursor-pointer hover:text-gray-300" /></button>
					</div>
				</div>
        
      </div>

      {/* Main navbar */}
			<div className='bg-white shadow-md'>
				<div className=" py-4 px-6 flex justify-between items-center container mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/Logo.svg" alt="Bistro Bliss Logo" className="h-14 w-52 mr-2" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
          <Link href="/pages" className="text-gray-600 hover:text-gray-800">Pages</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300">
            Book A Table
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
			</div>
      

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
            <Link href="/pages" className="text-gray-600 hover:text-gray-800">Pages</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 w-full">
              Book A Table
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar