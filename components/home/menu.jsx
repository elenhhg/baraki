import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Utensils } from "lucide-react"

export function Menu() {
  const cocktails = [
    {
      name: "Noir Bar Signature",
      price: "$18",
      description: "House special blend with premium spirits and exotic spices",
      popular: true,
    },
    {
      name: "Heritage Classic",
      price: "$16",
      description: "Traditional recipe with a modern twist, aged to perfection",
      popular: false,
    },
    {
      name: "Midnight Elixir",
      price: "$20",
      description: "Dark rum, coffee liqueur, and secret ingredients",
      popular: true,
    },
    {
      name: "Classic Martini",
      price: "$17",
      description: "Classic preparation with premium vodka and artisan garnish",
      popular: false,
    },
  ]

  const spirits = [
    { name: "Rare Whiskey Collection", price: "$45", description: "Curated selection of aged whiskeys", popular: true },
    { name: "Premium Cognac", price: "$65", description: "Exceptional French cognac", popular: false },
    { name: "Artisan Gin Selection", price: "$25", description: "Small-batch botanical gins", popular: true },
    { name: "Vintage Rum", price: "$85", description: "Aged Caribbean rum collection", popular: false },
  ]

  return (
    <section id="menu" className="py-24 bg-black">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-red-600/10 animate-slide-in-up border-red-600/20">
            <Utensils className="w-5 h-5 mr-2 text-red-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">Our Menu</span>
          </div>
          <h2 className="mb-8 text-5xl font-bold text-white md:text-6xl animate-slide-in-left">
            Our <span className="text-red-600 animate-glow">Collection</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 delay-300 animate-fade-in-up">
            Discover our carefully curated selection of signature cocktails and premium spirits
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Signature Cocktails */}
          <div className="animate-slide-in-left">
            <h3 className="mb-10 text-3xl font-bold text-center text-white">Signature Cocktails</h3>
            <div className="space-y-6">
              {cocktails.map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-500 transform border bg-gray-950 border-red-900/30 hover:border-red-700/50 hover:scale-102 hover:shadow-xl hover:shadow-red-900/20 animate-slide-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <Badge className="text-white transition-colors duration-300 bg-red-700 border-0 animate-pulse hover:bg-red-600">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <span className="text-xl font-bold text-red-600 animate-glow">{item.price}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium Spirits */}
          <div className="animate-slide-in-right">
            <h3 className="mb-10 text-3xl font-bold text-center text-white">Premium Spirits</h3>
            <div className="space-y-6">
              {spirits.map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-500 transform border bg-gray-950 border-red-900/30 hover:border-red-700/50 hover:scale-102 hover:shadow-xl hover:shadow-red-900/20 animate-slide-in-up group"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <Badge className="text-white transition-colors duration-300 bg-red-700 border-0 animate-pulse hover:bg-red-600">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <span className="text-xl font-bold text-red-600 animate-glow">{item.price}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center delay-1000 animate-fade-in-up">
          <div className="p-8 transition-all duration-500 transform border bg-red-950/20 border-red-900/30 rounded-xl hover:bg-red-950/30 hover:scale-105">
            <p className="mb-4 text-lg text-gray-400">Happy Hour: Monday - Friday, 5-7 PM</p>
            <p className="text-xl font-bold text-red-600 animate-glow">25% off all cocktails during happy hour</p>
          </div>
        </div>
      </div>
    </section>
  )
}
