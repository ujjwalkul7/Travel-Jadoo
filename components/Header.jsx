"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center bg-white px-6 md:px-12 py-4 shadow-sm relative">
      
      {/* Logo */}
      <div className="text-3xl font-bold text-black">
        Jad<span className="text-yellow-500">oo</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-12 text-gray-800 font-medium">
        <a href="#" className="hover:text-yellow-500 transition">Destinations</a>
        <a href="#" className="hover:text-yellow-500 transition">Hotels</a>
        <a href="#" className="hover:text-yellow-500 transition">Flights</a>
        <a href="#" className="hover:text-yellow-500 transition">Bookings</a>

        <button className="hover:text-yellow-500 transition">Login</button>

        <button className="border border-gray-700 px-5 py-1.5 rounded-md hover:bg-gray-800 hover:text-white transition">
          Sign up
        </button>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 hover:text-yellow-500 transition"
          >
            EN <ChevronDown size={16} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md text-sm">
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">EN</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">FR</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">DE</a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <button 
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col p-6 gap-4 text-gray-800 font-medium md:hidden">

          <a href="#" className="hover:text-yellow-500 transition">Destinations</a>
          <a href="#" className="hover:text-yellow-500 transition">Hotels</a>
          <a href="#" className="hover:text-yellow-500 transition">Flights</a>
          <a href="#" className="hover:text-yellow-500 transition">Bookings</a>

          <button className="hover:text-yellow-500 transition text-left">Login</button>
          <button className="border border-gray-700 px-5 py-2 rounded-md hover:bg-gray-800 hover:text-white transition w-fit">
            Sign up
          </button>

          {/* Mobile Language Select */}
          <div>
            <p className="font-semibold mb-1">Language</p>
            <div className="flex flex-col">
              <button className="px-2 py-1 hover:bg-gray-100 text-left">EN</button>
              <button className="px-2 py-1 hover:bg-gray-100 text-left">FR</button>
              <button className="px-2 py-1 hover:bg-gray-100 text-left">DE</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
