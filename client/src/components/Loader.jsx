function Loader() {

  return (

    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <div className="text-center">

        <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h1 className="text-4xl font-extrabold mt-8 text-white">

          FLEX<span className="text-orange-500">PRINT</span>

        </h1>

        <p className="text-gray-400 mt-3">
          Loading Premium Experience...
        </p>

      </div>

    </div>

  )
}

export default Loader