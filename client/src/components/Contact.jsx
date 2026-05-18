import { useState } from "react"

import axios from "axios"

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa"

function Contact() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    message: ""

  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post(

        "http://localhost:5000/api/contact",

        formData

      )

      alert(res.data.message)

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })

    } catch (error) {

      alert("Something went wrong")

    }

  }

  return (

    <section
      id="contact"
      className="bg-[#070b1a] py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-orange-500 uppercase tracking-widest font-semibold">
          Contact Us
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">

          {/* LEFT */}

          <div>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="bg-orange-500/20 p-5 rounded-full">

                  <FaPhoneAlt className="text-orange-500 text-2xl" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Phone
                  </h3>

                  <p className="text-gray-400 mt-2">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-orange-500/20 p-5 rounded-full">

                  <FaEnvelope className="text-orange-500 text-2xl" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Email
                  </h3>

                  <p className="text-gray-400 mt-2">
                    info@flexprint.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-orange-500/20 p-5 rounded-full">

                  <FaMapMarkerAlt className="text-orange-500 text-2xl" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Location
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Vijayawada, Andhra Pradesh
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="bg-[#0d1325] p-10 rounded-3xl border border-white/10"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
                required
              />

            </div>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none mt-6 w-full"
              required
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none mt-6 w-full"
              required
            ></textarea>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold text-lg duration-300">

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Contact