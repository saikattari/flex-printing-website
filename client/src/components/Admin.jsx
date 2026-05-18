import { useEffect, useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

function Admin() {

  const navigate = useNavigate()

  const [contacts, setContacts] = useState([])

  useEffect(() => {

    fetchContacts()

  }, [])

  const fetchContacts = async () => {

    try {

      const res = await axios.get(
        "https://flex-printing-website.onrender.com/api/contacts"
      )

      setContacts(res.data.contacts)

    } catch (error) {

      console.log(error)

    }

  }

  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/login")

  }

  return (

    <div className="min-h-screen bg-[#050816] text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-extrabold text-orange-500">

              Admin Dashboard

            </h1>

            <p className="text-gray-400 mt-3">

              Contact messages from website users

            </p>

          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold duration-300"
          >

            Logout

          </button>

        </div>

        {/* TABLE */}

        <div className="bg-[#0d1325] rounded-3xl overflow-hidden border border-white/10 shadow-2xl overflow-x-auto">

          <table className="w-full">

            <thead className="bg-orange-500 text-black">

              <tr>

                <th className="px-6 py-5 text-left text-lg">
                  Name
                </th>

                <th className="px-6 py-5 text-left text-lg">
                  Email
                </th>

                <th className="px-6 py-5 text-left text-lg">
                  Phone
                </th>

                <th className="px-6 py-5 text-left text-lg">
                  Message
                </th>

              </tr>

            </thead>

            <tbody>

              {contacts.map((item) => (

                <tr
                  key={item._id}
                  className="border-t border-white/10 hover:bg-white/5 duration-300"
                >

                  <td className="px-6 py-5">
                    {item.name}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {item.email}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {item.phone}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {item.message}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default Admin