import {
  FaUsers,
  FaPrint,
  FaAward,
  FaSmile
} from "react-icons/fa"

function Stats() {

  return (

    <section className="bg-black py-20 border-t border-white/10 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {/* ITEM */}

        <div>

          <div className="bg-orange-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

            <FaUsers className="text-orange-500 text-4xl" />

          </div>

          <h2 className="text-5xl font-extrabold mt-6">
            1000+
          </h2>

          <p className="text-gray-400 mt-3">
            Happy Clients
          </p>

        </div>

        {/* ITEM */}

        <div>

          <div className="bg-orange-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

            <FaPrint className="text-orange-500 text-4xl" />

          </div>

          <h2 className="text-5xl font-extrabold mt-6">
            5000+
          </h2>

          <p className="text-gray-400 mt-3">
            Printing Works
          </p>

        </div>

        {/* ITEM */}

        <div>

          <div className="bg-orange-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

            <FaAward className="text-orange-500 text-4xl" />

          </div>

          <h2 className="text-5xl font-extrabold mt-6">
            10+
          </h2>

          <p className="text-gray-400 mt-3">
            Years Experience
          </p>

        </div>

        {/* ITEM */}

        <div>

          <div className="bg-orange-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

            <FaSmile className="text-orange-500 text-4xl" />

          </div>

          <h2 className="text-5xl font-extrabold mt-6">
            99%
          </h2>

          <p className="text-gray-400 mt-3">
            Client Satisfaction
          </p>

        </div>

      </div>

    </section>

  )
}

export default Stats