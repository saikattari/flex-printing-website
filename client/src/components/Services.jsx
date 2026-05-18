import {
  FaArrowRight
} from "react-icons/fa"

import bannerImg from "../assets/banner.jpg"
import weddingImg from "../assets/wedding.jpg"
import standeeImg from "../assets/standee.jpg"
import signboardImg from "../assets/signboard.jpg"
import eventImg from "../assets/event.jpg"
import politicalImg from "../assets/political.jpg"

const services = [

  {
    image: bannerImg,
    title: "Flex Banner Printing",
    desc: "High-quality flex banners for business and advertising."
  },

  {
    image: weddingImg,
    title: "Wedding Backdrop",
    desc: "Beautiful wedding flex backdrop designs."
  },

  {
    image: standeeImg,
    title: "Roll Up Standee",
    desc: "Premium quality standees for promotions."
  },

  {
    image: signboardImg,
    title: "Shop Sign Boards",
    desc: "Custom shop branding and sign boards."
  },

  {
    image: eventImg,
    title: "Event Flex Printing",
    desc: "Professional flex printing for events."
  },

  {
    image: politicalImg,
    title: "Political Banner",
    desc: "Political flex banners and campaign printing."
  }

]

function Services() {

  return (

    <section id="services" className="bg-[#050816] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <p className="text-orange-500 font-semibold uppercase tracking-widest">

          What We Do

        </p>

        <h2 className="text-5xl font-bold mt-3 text-white">

          Our Printing Services

        </h2>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[#0d1325] rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500 duration-500 hover:-translate-y-3 hover:shadow-orange-500/20 hover:shadow-2xl"
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover hover:scale-125 duration-700 ease-in-out"
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">

                  {service.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  {service.desc}

                </p>

                <button className="mt-6 flex items-center gap-3 text-orange-500 font-semibold hover:gap-5 duration-300">

                  Learn More

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Services