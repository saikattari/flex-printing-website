import {
  FaCheckCircle
} from "react-icons/fa"

import aboutImg from "../assets/about.jpg"

function About() {

  return (

    <section
      id="about"
      className="bg-[#0b1120] py-24 text-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={aboutImg}
              alt=""
              className="w-full h-[550px] object-cover hover:scale-105 duration-700"
            />

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest">

              About Us

            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">

              Best Flex Printing Services In Vijayawada

            </h2>

            <p className="text-gray-400 mt-8 leading-8 text-lg">

              We provide premium flex printing, banners,
              standees, wedding backdrops and branding
              solutions with high quality printing.

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-orange-500 text-2xl" />

                <p>Premium Quality Printing</p>

              </div>

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-orange-500 text-2xl" />

                <p>Fast Delivery</p>

              </div>

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-orange-500 text-2xl" />

                <p>Affordable Pricing</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About