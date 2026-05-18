import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa"

function Footer() {

  return (

    <footer className="bg-black border-t border-white/10 pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO */}

        <div>

          <h1 className="text-4xl font-extrabold text-white">

            FLEX<span className="text-orange-500">PRINT</span>

          </h1>

          <p className="text-gray-400 mt-6 leading-8">

            Premium flex printing solutions for
            banners, standees, wedding backdrops,
            political flex and business branding.

          </p>

          {/* SOCIAL */}

          <div className="flex gap-4 mt-8">

            <div className="bg-[#0d1325] hover:bg-orange-500 p-4 rounded-full cursor-pointer duration-300">
              <FaFacebookF />
            </div>

            <div className="bg-[#0d1325] hover:bg-orange-500 p-4 rounded-full cursor-pointer duration-300">
              <FaInstagram />
            </div>

            <div className="bg-[#0d1325] hover:bg-orange-500 p-4 rounded-full cursor-pointer duration-300">
              <FaYoutube />
            </div>

            <div className="bg-[#0d1325] hover:bg-orange-500 p-4 rounded-full cursor-pointer duration-300">
              <FaLinkedinIn />
            </div>

          </div>

        </div>

        {/* LINKS */}

        <div>

          <h3 className="text-2xl font-bold">
            Quick Links
          </h3>

          <ul className="space-y-4 mt-8 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer duration-300">
              Home
            </li>

            <li className="hover:text-orange-500 cursor-pointer duration-300">
              Services
            </li>

            <li className="hover:text-orange-500 cursor-pointer duration-300">
              About
            </li>

            <li className="hover:text-orange-500 cursor-pointer duration-300">
              Gallery
            </li>

            <li className="hover:text-orange-500 cursor-pointer duration-300">
              Contact
            </li>

          </ul>

        </div>

        {/* SERVICES */}

        <div>

          <h3 className="text-2xl font-bold">
            Services
          </h3>

          <ul className="space-y-4 mt-8 text-gray-400">

            <li>Flex Banner Printing</li>

            <li>Wedding Backdrop</li>

            <li>Shop Sign Boards</li>

            <li>Event Flex Printing</li>

            <li>Political Banner Design</li>

          </ul>

        </div>

        {/* NEWSLETTER */}

        <div>

          <h3 className="text-2xl font-bold">
            Newsletter
          </h3>

          <p className="text-gray-400 mt-6 leading-8">

            Subscribe to get latest updates
            and offers.

          </p>

          <input
            type="email"
            placeholder="Enter Email"
            className="mt-6 w-full bg-[#0d1325] border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <button className="mt-5 bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-xl font-semibold duration-300 w-full">

            Subscribe

          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

        © 2026 FLEXPRINT. All Rights Reserved.

      </div>

    </footer>

  )
}

export default Footer