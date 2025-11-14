"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center bg-[white] px-6 md:px-12 py-4 shadow-sm relative">
      
      {/* Logo */}
      <div className="text-3xl font-bold text-black">
        Jad<span className="text-yellow-500">oo</span>
      </div>

      {/* ===== Desktop Menu ===== */}
      <div className="hidden md:flex items-center gap-30 text-gray-800 font-medium">
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

      {/* ===== Mobile Menu Button ===== */}
      <button 
        className="md:hidden"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* ===== Mobile Menu Overlay ===== */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col text-xl font-medium">
          
          {/* Close button */}
          <button 
            className="self-end mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <a href="#" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Destinations</a>
          <a href="#" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Hotels</a>
          <a href="#" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Flights</a>
          <a href="#" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Bookings</a>

          <button className="mt-4 py-2">Login</button>
          <button className="border border-gray-700 px-5 py-2 rounded-md mt-2">
            Sign up
          </button>

          {/* Mobile Language Dropdown */}
          <div className="mt-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1"
            >
              EN <ChevronDown size={20} />
            </button>

            {langOpen && (
              <div className="mt-2 bg-white shadow-md rounded-md text-sm">
                <a href="#" className="block px-3 py-2 hover:bg-gray-100">EN</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-100">FR</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-100">DE</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
