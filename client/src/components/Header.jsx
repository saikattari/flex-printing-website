import { useState } from "react"

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaBars,
  FaTimes
} from "react-icons/fa"

import {
  MdEmail,
  MdAccessTime
} from "react-icons/md"

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <>

      {/* TOPBAR */}

      <div className="bg-black border-b border-gray-800 text-sm text-gray-300 hidden md:block">

        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex gap-6">

            <p className="flex items-center gap-2">
              <MdEmail className="text-orange-500" />
              info@flexprint.com
            </p>

            <p className="flex items-center gap-2">
              <MdAccessTime className="text-orange-500" />
              Mon - Sat : 9AM - 8PM
            </p>

          </div>

          <div className="flex gap-4 text-white">

            <FaFacebookF className="hover:text-orange-500 cursor-pointer duration-300" />

            <FaInstagram className="hover:text-orange-500 cursor-pointer duration-300" />

            <FaYoutube className="hover:text-orange-500 cursor-pointer duration-300" />

            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer duration-300" />

          </div>

        </div>

      </div>

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-[#070b1a]/95 backdrop-blur-md border-b border-orange-500/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* LOGO */}

          <div>

            <h1 className="text-3xl font-extrabold text-white">

              FLEX<span className="text-orange-500">PRINT</span>

            </h1>

            <p className="text-xs text-gray-400">
              We Print Your Imagination
            </p>

          </div>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex gap-10 text-white font-medium">

            <li>
              <a href="#home" className="hover:text-orange-500 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-orange-500 duration-300">
                Services
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-orange-500 duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-orange-500 duration-300">
                Gallery
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-orange-500 duration-300">
                Pricing
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-orange-500 duration-300">
                Contact
              </a>
            </li>

          </ul>

          {/* BUTTON */}

          <button className="hidden md:flex bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold items-center gap-2 duration-300">

            <FaPhoneAlt />

            Call Now

          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-white"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="md:hidden bg-[#0d1325] border-t border-white/10 px-6 py-6">

            <ul className="flex flex-col gap-6 text-white font-medium">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#pricing">Pricing</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>

        )}

      </nav>

    </>

  )
}

export default Header