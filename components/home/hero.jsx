"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-black text-gray-900 font-sans"
    >
      {/* Content container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center flex flex-col items-center space-y-10"
      >
        {/* Τίτλος */}
        <div
          className="relative p-15 rounded-lg overflow-hidden"
          style={{
            backgroundColor: "black",
            boxShadow:
              "0 0 5px #dc2640, 0 0 15px #dc2640, 0 0 30px rgba(220,38,64,0.6)",
            display: "inline-block",
          }}
        >
          <h1
            className="text-3xl font-extrabold tracking-wide text-center relative z-10"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <motion.span
              animate={{
                scale: [1, 1.05, 1],
                color: ["#dc2640", "#ffffff", "#dc2626"],
                textShadow: ["0 0 5px #dc2626, 0 0 10px #dc2626, 0 0 20px #dc2626"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ display: "inline-block" }}
            >
              Noir Bar
            </motion.span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-16 text-lg font-normal text-white max-w-lg mx-auto leading-relaxed">
          Tradition meets innovation. Experience authentic flavors with a
          modern touch.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex justify-center w-7 h-11 border-2 rounded-full border-gray-300 shadow-sm">
          <div className="w-1.5 h-4 mt-2 bg-red-600 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
