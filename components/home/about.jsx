"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wine, Users, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.15,
    boxShadow: "0 12px 30px rgba(255, 0, 0, 0.5)",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
}

const iconVariants = {
  hover: {
    scale: [1, 1.3, 1],
    rotate: [0, 25, -25, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
}

export function About() {
  const features = [
    {
      icon: Wine,
      title: "Artisan Cocktails",
      description:
        "Handcrafted beverages that blend traditional techniques with modern innovation",
    },
    {
      icon: Users,
      title: "Master Craftsmen",
      description:
        "Our skilled artisans create memorable experiences with passion and precision",
    },
    {
      icon: Clock,
      title: "Evening Ambiance",
      description: "Open late for those who appreciate the finer moments of the night",
    },
  ]

  return (
    <section id="about" className="py-24 bg-black text-white font-sans">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Header */}
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
         <div className="inline-flex items-center px-6 py-3 mb-6 border rounded-full bg-red-600/10 border-red-600/20">
  <Award className="w-6 h-6 mr-3 text-red-600 animate-pulse" />
  <span className="text-base font-semibold tracking-wide text-red-600 uppercase">
    About Us
  </span>
</div>

          {/* <h2 className="mb-8 text-5xl font-bold md:text-6xl tracking-tight">
            About{" "}
            <motion.span
              className="text-red-600"
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Noir Bar
            </motion.span>
          </h2> */}
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-white">
            A modern interpretation of traditional hospitality, where every detail
            tells a story of craftsmanship and passion.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid gap-8 mb-20 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <Card
                className="border border-red-500 rounded-lg shadow-sm"
                style={{ backgroundColor: "transparent" }}
              >
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-lg text-white"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <feature.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                  <p className="leading-relaxed text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Heritage section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="p-12 border border-red-500 rounded-2xl bg-black hover:bg-black transition-colors duration-300"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-4xl font-bold">Our Heritage</h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-400">
                Noir Bar represents a fusion of cultural heritage and contemporary
                sophistication, where every element is carefully curated to create
                an unforgettable experience.
              </p>
              <p className="text-lg leading-relaxed text-gray-400">
                From our signature cocktails to our warm hospitality, we honor tradition
                while embracing innovation.
              </p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 6 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <div className="mb-4 text-6xl font-bold text-red-600 select-none">7+</div>
                <div className="text-lg font-semibold text-white">
                  Years of Excellence
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
