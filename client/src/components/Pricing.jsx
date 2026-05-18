const plans = [

  {
    title: "Basic",
    price: "₹199",
    size: "3x4 Feet",
    quality: "Standard Quality"
  },

  {
    title: "Standard",
    price: "₹349",
    size: "6x4 Feet",
    quality: "Premium Quality"
  },

  {
    title: "Premium",
    price: "₹599",
    size: "8x6 Feet",
    quality: "Ultra HD Quality"
  }

]

function Pricing() {

  return (

    <section  id="pricing"   className="bg-[#070b1a] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <p className="text-orange-500 uppercase tracking-widest font-semibold">
          Our Pricing
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Affordable Pricing Plans
        </h2>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          {plans.map((plan, index) => (

            <div
              key={index}
              className="bg-[#0d1325] rounded-3xl p-10 border border-white/10 hover:border-orange-500 duration-300 text-center"
            >

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <p className="text-orange-500 text-5xl font-extrabold mt-6">
                {plan.price}
              </p>

              <div className="mt-8 space-y-4 text-gray-400">

                <p>{plan.size}</p>

                <p>{plan.quality}</p>

                <p>Fast Delivery</p>

                <p>High Quality Print</p>

              </div>

              <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold duration-300">

                Order Now

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Pricing