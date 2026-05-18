function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-orange-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold text-orange-500">
          FLEX PRINT
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
          <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-semibold">
          Call Now
        </button>

      </div>

    </nav>
  )
}

export default Navbar