import {
  FaStar
} from "react-icons/fa"

const reviews = [

  {
    name: "Ravi Kumar",
    role: "Business Owner",
    review:
      "Excellent flex printing quality and fast delivery service. Highly recommended!"
  },

  {
    name: "Sneha Reddy",
    role: "Event Planner",
    review:
      "Professional designs and premium print quality for our wedding events."
  },

  {
    name: "Arjun Patel",
    role: "Shop Owner",
    review:
      "Affordable pricing and high-quality shop sign boards. Great support team."
  }

]

function Testimonials() {

  return (

    <section  className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <p className="text-orange-500 uppercase tracking-widest font-semibold">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold mt-4">
          What Our Clients Say
        </h2>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-[#0d1325] p-8 rounded-3xl border border-white/10 hover:border-orange-500 duration-300"
            >

              {/* STARS */}

              <div className="flex gap-1 text-orange-500">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* REVIEW */}

              <p className="text-gray-400 leading-8 mt-6">
                {item.review}
              </p>

              {/* USER */}

              <div className="mt-8">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Testimonials