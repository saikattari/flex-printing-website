import {
  motion
} from "framer-motion"

import {
  FaAward,
  FaTruck,
  FaTags
} from "react-icons/fa"

import heroImage from "../assets/hero.jpg"

function Hero() {

  return (

    <section
      id="home"
      className="bg-[#050816] text-white min-h-screen flex items-center pt-28"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-orange-500 uppercase tracking-[6px] font-semibold">

            Premium Flex Printing

          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mt-6">

            Print Your
            <span className="text-orange-500">
              {" "}Brand
            </span>

            <br />

            With Quality

          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">

            High quality flex printing services for banners,
            standees, wedding backdrops, political campaigns,
            branding and events in Vijayawada.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-orange-500/30">

              Get Quote

            </button>

            <button className="border border-white/20 hover:border-orange-500 px-8 py-4 rounded-2xl font-semibold duration-300">

              Explore Services

            </button>

          </div>

          {/* FEATURES */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

            <div className="bg-[#0d1325] p-6 rounded-2xl border border-white/10">

              <FaAward className="text-orange-500 text-4xl mb-4" />

              <h3 className="text-xl font-bold">

                Premium Quality

              </h3>

            </div>

            <div className="bg-[#0d1325] p-6 rounded-2xl border border-white/10">

              <FaTruck className="text-orange-500 text-4xl mb-4" />

              <h3 className="text-xl font-bold">

                Fast Delivery

              </h3>

            </div>

            <div className="bg-[#0d1325] p-6 rounded-2xl border border-white/10">

              <FaTags className="text-orange-500 text-4xl mb-4" />

              <h3 className="text-xl font-bold">

                Best Pricing

              </h3>

            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={heroImage}
              alt=""
              className="w-full h-[550px] object-cover hover:scale-105 duration-700"
            />

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Hero