import { Card, CardContent } from "@/components/ui/card"
import { Wine, Users, Clock, Award } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Wine,
      title: "Artisan Cocktails",
      description: "Handcrafted beverages that blend traditional techniques with modern innovation",
      delay: "0ms",
    },
    {
      icon: Users,
      title: "Master Craftsmen",
      description: "Our skilled artisans create memorable experiences with passion and precision",
      delay: "200ms",
    },
    {
      icon: Clock,
      title: "Evening Ambiance",
      description: "Open late for those who appreciate the finer moments of the night",
      delay: "400ms",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-red-600/10 animate-slide-in-up border-red-600/20">
            <Award className="w-5 h-5 mr-2 text-red-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">About Us</span>
          </div>
          <h2 className="mb-8 text-5xl font-bold text-white md:text-6xl animate-slide-in-left">
            About <span className="text-red-600 animate-glow">Noir Bar</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400 delay-300 animate-fade-in-up">
            A modern interpretation of traditional hospitality, where every detail tells a story of craftsmanship and
            passion.
          </p>
        </div>

        <div className="grid gap-8 mb-20 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-all duration-500 transform bg-black border border-red-900/30 hover:border-red-700/50 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20 animate-slide-in-up group"
              style={{ animationDelay: feature.delay }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 transition-colors duration-300 rounded-lg bg-red-900/20 animate-float group-hover:bg-red-800/30">
                  <feature.icon className="w-8 h-8 text-red-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-12 transition-colors duration-500 border bg-red-950/20 border-red-900/30 rounded-2xl animate-fade-in-up delay-600 hover:bg-red-950/30">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-4xl font-bold text-white animate-slide-in-left">Our Heritage</h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-400 delay-700 animate-fade-in">
                Noir Bar represents a fusion of cultural heritage and contemporary sophistication, where every element is
                carefully curated to create an unforgettable experience.
              </p>
              <p className="text-lg leading-relaxed text-gray-400 animate-fade-in delay-900">
                From our signature cocktails to our warm hospitality, we honor tradition while embracing innovation.
              </p>
            </div>
            <div className="text-center animate-slide-in-right delay-800">
              <div className="transition-transform duration-500 transform hover:scale-110 hover:rotate-3">
                <div className="mb-4 text-6xl font-bold text-red-600 animate-counter">7+</div>
                <div className="text-lg text-white">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
