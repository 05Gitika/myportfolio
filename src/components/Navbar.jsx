import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
   <div
  className="
  navbar
  flex justify-center items-center gap-10 p-5
  fixed top-0 left-0 w-full z-50

  bg-white/10
  backdrop-blur-lg

  border-b border-white/20
  shadow-lg
  "
>

      <a
        href="#home"
        className="hover:text-[#6e06f2] hover:scale-105 transition-all duration-300 text-xl"
      >
        Home
      </a>

      <a
        href="#about"
        className="hover:text-[#6e06f2] hover:scale-105 transition-all duration-300 text-xl"
      >
        About
      </a>

      <a
        href="#projects"
        className="hover:text-[#6e06f2] hover:scale-105 transition-all duration-300 text-xl"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="hover:text-[#6e06f2] hover:scale-105 transition-all duration-300 text-xl"
      >
        Contact
      </a>

    </div>
  )
}