import { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    username: "",

    password: ""

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

        "https://flex-printing-website.onrender.com/api/auth/login",

        formData

      )

      localStorage.setItem(

        "token",

        res.data.token

      )

      alert("Login Successful")

      navigate("/admin")

    } catch (error) {

      alert("Invalid Credentials")

    }

  }

  return (

    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-[#0d1325] border border-white/10 p-10 rounded-3xl w-full max-w-md"
      >

        <h1 className="text-4xl font-extrabold text-orange-500 text-center">

          Admin Login

        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mt-8 bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-6 bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
          required
        />

        <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold text-lg duration-300">

          Login

        </button>

      </form>

    </section>

  )
}

export default Login