import gallery1 from "../assets/gallery1.jpg"
import gallery2 from "../assets/gallery2.jpg"
import gallery3 from "../assets/gallery3.jpg"
import gallery4 from "../assets/gallery4.jpg"
import gallery5 from "../assets/gallery5.jpg"
import gallery6 from "../assets/gallery6.jpg"

const images = [

  gallery1,

  gallery2,

  gallery3,

  gallery4,

  gallery5,

  gallery6

]

function Gallery() {

  return (

    <section
      id="gallery"
      className="bg-[#070b1a] py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <p className="text-orange-500 font-semibold uppercase tracking-widest">

          Our Work

        </p>

        <h2 className="text-5xl font-bold text-white mt-3">

          Printing Gallery

        </h2>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {images.map((img, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl group border border-white/10"
            >

              <img
                src={img}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 duration-700"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Gallery