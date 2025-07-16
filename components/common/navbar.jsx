"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // smooth scroll handler για anchors
  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false) // κλείνει το mobile menu αν ανοικτό
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-red-900/30 shadow-2xl shadow-red-900/10"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 animate-slide-in-left">
            <h1 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 transform cursor-pointer hover:text-red-400 hover:scale-105">
              Baraki
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block animate-slide-in-right">
            <div className="flex items-center space-x-8">
              {["Home", "About", "Menu", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleSmoothScroll}
                  className="relative font-medium text-gray-300 transition-all duration-300 transform hover:text-white group hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}

              <a
                href="#reservation"
                onClick={handleSmoothScroll}
                className="px-6 py-2 font-semibold text-red-600 transition-colors duration-300 transform bg-black border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-red-700/40 animate-fade-in-up delay-400"
              >
                Reserve Table
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-slide-in-right">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-all duration-300 transform hover:text-red-400 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "max-h-64 opacity-100 translate-y-0 scale-100"
              : "max-h-0 opacity-0 -translate-y-4 scale-95"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-b bg-black/95 backdrop-blur-md rounded-b-2xl border-red-900/30">
            {["Home", "About", "Menu", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleSmoothScroll}
                className="block px-4 py-3 text-gray-300 transition-all duration-300 transform hover:text-white hover:bg-red-900/20 hover:translate-x-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={handleSmoothScroll}
              className="block w-full px-4 py-3 font-semibold text-red-600 transition-colors duration-300 transform bg-black border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-black hover:scale-105 animate-slide-in-up"
            >
              Reserve Table
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
