import { useEffect, useState } from "react"

import {
  FaArrowUp
} from "react-icons/fa"

function BackToTop() {

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {

        setShowButton(true)

      } else {

        setShowButton(false)

      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  return (

    <>
    
      {showButton && (

        <button
          onClick={scrollTop}
          className="fixed bottom-28 right-6 bg-orange-500 hover:bg-orange-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl z-50 shadow-2xl duration-300"
        >

          <FaArrowUp />

        </button>

      )}

    </>

  )
}

export default BackToTop