"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Utensils } from "lucide-react"

export function Menu() {
  const cocktails = [
    { name: "Noir Bar Signature", price: "$18", description: "House special blend with premium spirits and exotic spices", popular: true },
    { name: "Heritage Classic", price: "$16", description: "Traditional recipe with a modern twist, aged to perfection", popular: false },
    { name: "Midnight Elixir", price: "$20", description: "Dark rum, coffee liqueur, and secret ingredients", popular: true },
    { name: "Classic Martini", price: "$17", description: "Classic preparation with premium vodka and artisan garnish", popular: false },
  ]

  const spirits = [
    { name: "Rare Whiskey Collection", price: "$45", description: "Curated selection of aged whiskeys", popular: true },
    { name: "Premium Cognac", price: "$65", description: "Exceptional French cognac", popular: false },
    { name: "Artisan Gin Selection", price: "$25", description: "Small-batch botanical gins", popular: true },
    { name: "Vintage Rum", price: "$85", description: "Aged Caribbean rum collection", popular: false },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  }

  

  return (
    <section id="menu" className="py-24 bg-black relative">
      {/* subtle inner glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.05),transparent_70%)]" />

      <div className="px-6 mx-auto max-w-7xl lg:px-8 relative z-10">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 mb-6 border rounded-full bg-red-600/10 border-red-600/20">
            <Utensils className="w-6 h-6 mr-3 text-red-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">Our Menu</span>
          </div>
          {/* <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Our <span className="text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">Collection</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Discover our carefully curated selection of signature cocktails and premium spirits
          </p> */}
        </motion.div>

        {/* Cocktails & Spirits */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Cocktails */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 text-2xl font-bold text-center text-white"
            >
              Signature Cocktails
            </motion.h3>
            <div className="space-y-6">
              {cocktails.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Card className="transition-all duration-500 transform border bg-black border-red-900/30 hover:border-red-700/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-900/30 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <Badge className="text-white bg-red-700 border-0 animate-pulse hover:bg-red-600">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <span className="text-xl font-bold text-red-600">{item.price}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spirits */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 text-2xl font-bold text-center text-white"
            >
              Premium Spirits
            </motion.h3>
            <div className="space-y-6">
              {spirits.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + cocktails.length}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Card className="transition-all duration-500 transform border bg-black border-red-900/30 hover:border-red-700/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-900/30 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <Badge className="text-white bg-red-700 border-0 animate-pulse hover:bg-red-600">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <span className="text-xl font-bold text-red-600">{item.price}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Happy Hour */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 transition-all duration-500 transform border bg-red-950/20 border-red-900/30 rounded-xl hover:bg-red-950/30 hover:scale-105">
            <p className="mb-4 text-lg text-gray-400">Happy Hour: Monday - Friday, 5-7 PM</p>
            <p className="text-xl font-bold text-red-600">25% off all cocktails during happy hour</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
