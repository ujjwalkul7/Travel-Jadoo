"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react" // for dropdown arrow

export default function Header() {
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="bg-[#fff7e6] flex justify-between items-center px-12 py-4 shadow-sm">
      {/* Logo */}
      <div className="text-3xl font-bold text-black">
        Jad<span className="text-yellow-500">oo</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-10 text-gray-800 font-medium">
        <a href="#" className="hover:text-yellow-500 transition">Destinations</a>
        <a href="#" className="hover:text-yellow-500 transition">Hotels</a>
        <a href="#" className="hover:text-yellow-500 transition">Flights</a>
        <a href="#" className="hover:text-yellow-500 transition">Bookings</a>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <button className="text-gray-800 hover:text-yellow-500 transition">Login</button>
        <button className="border border-gray-700 px-5 py-1.5 rounded-md hover:bg-gray-800 hover:text-white transition">
          Sign up
        </button>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-gray-800 hover:text-yellow-500 transition"
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
    </header>
  )
}
