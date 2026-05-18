import { FaWhatsapp } from "react-icons/fa"

function Whatsapp() {

  const phoneNumber = "919618489493"

  const message = "Hi, I need flex printing quotation"

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (

    <a
      href={whatsappURL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl z-50 duration-300"
    >

      <FaWhatsapp />

    </a>

  )
}

export default Whatsapp