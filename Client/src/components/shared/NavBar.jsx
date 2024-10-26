'use client'

import React, { useState } from 'react'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Top bar - not sticky */}
      <div className="bg-[#474747] text-white py-2 px-4">
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center"><Phone size={16} className="mr-2" /> (414) 857 - 0107</span>
            <span className="flex items-center"><Mail size={16} className="mr-2" /> yummy@bistrobliss</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className='text-white rounded-full bg-[#383838] p-2'> <FaFacebookF size={14} className="cursor-pointer hover:text-gray-300" /></button>
            <button className='text-white rounded-full bg-[#383838] p-2'> <FaTwitter size={14} className="cursor-pointer hover:text-gray-300" /></button>
            <button className='text-white rounded-full bg-[#383838] p-2'> <FaInstagram size={14} className="cursor-pointer hover:text-gray-300" /></button>
            <button className='text-white rounded-full bg-[#383838] p-2'> <FaGithub size={14} className="cursor-pointer hover:text-gray-300" /></button>
          </div>
        </div>
      </div>

      {/* Main navbar - sticky */}
      <div className='bg-white shadow-md sticky -top-1 z-50'>
        <div className="py-4 px-6 flex justify-between items-center container mx-auto">
          <Link href="/" className="flex items-center">
            <img src="/Logo.svg" alt="Bistro Bliss Logo" className="h-14 w-52 mr-2" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About us</Link>
            <Link href="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact us</Link>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300">
              Book A Table
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Login / Register <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  Login / Register <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About us</Link>
            <Link href="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact us</Link>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 w-full">
              Book A Table
            </button>
          </div>
        </div>

      </div>

    </>
  )
}