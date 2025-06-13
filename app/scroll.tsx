'use client'
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    const total = document.body.scrollHeight - window.innerHeight
    const scrolled = window.scrollY
    setScrollY((scrolled / total) * 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
      onClick={scrollTop}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#a855f7 ${scrollY}%, rgba(255,255,255,0.1) ${scrollY}%)`,
          maskImage: 'radial-gradient(circle 70% at center, transparent 50%, black 51%)',
          WebkitMaskImage: 'radial-gradient(circle 70% at center, transparent 50%, black 51%)',
        }}
      />
      <button className="relative z-10 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:border-purple-400 transition-colors duration-300">
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  )
}

export default ScrollToTop
