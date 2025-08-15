"use client"

import { useState, useEffect } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ]

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-red-900/30 shadow-2xl shadow-red-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="animate-fade-in-left">
            <h1
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-3xl font-bold bg-gradient-to-r from-red-500 via-red-500 to-red-500 bg-clip-text text-transparent cursor-pointer select-none transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Noir Bar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleSmoothScroll}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg group hover:-translate-y-0.5"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`,
                }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-red-500 to-red-500 rounded-full transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2" />
              </a>
            ))}

            <a
              href="#reservation"
              onClick={handleSmoothScroll}
              className="ml-6 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg shadow-red-600/25 hover:shadow-red-600/40 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                animation: "fadeInScale 0.4s ease-out 0.6s both",
              }}
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md"
            >
              <span
                className={`absolute h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-white rounded-full transition-all duration-200 ease-in-out ${
                  isOpen ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden bg-black/95 backdrop-blur-xl rounded-2xl border border-red-900/30 mt-4 shadow-2xl shadow-red-900/20 transition-all duration-400 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"
          }`}
        >
          <nav className="px-6 py-6 space-y-2">
            {links.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleSmoothScroll}
                className="block px-4 py-3 text-gray-300 font-medium hover:text-white hover:bg-red-900/20 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 active:scale-98"
                style={{
                  animation: isOpen ? `slideInLeft 0.3s ease-out ${i * 0.1}s both` : "none",
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={handleSmoothScroll}
              className="block mt-4 px-4 py-3 text-center font-semibold text-white bg-gradient-to-r from-red-900 to-red-700 rounded-xl shadow-lg shadow-red-600/25 focus:outline-none focus:ring-2 focus:ring-red-700 active:scale-98"
              style={{
                animation: isOpen ? "slideInUp 0.3s ease-out 0.4s both" : "none",
              }}
            >
              Reserve Table
            </a>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out;
        }
      `}</style>
    </nav>
  )
}
