import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-red-600/10 blur-xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-1000 rounded-full bottom-20 right-10 bg-red-700/10 blur-2xl animate-pulse"></div>
        <div className="absolute delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-red-500/5 blur-3xl animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-red-600 rounded-full top-20 left-10 animate-float"></div>
        <div className="absolute w-1 h-1 delay-1000 bg-white rounded-full top-40 right-20 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-float delay-500"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/3 right-1/3 animate-float delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center lg:px-8">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6 animate-slide-in-up">
            <Sparkles className="w-8 h-8 mr-3 text-red-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-red-600 uppercase animate-glow">
              Premium Experience
            </span>
            <Sparkles className="w-8 h-8 ml-3 text-red-600 animate-pulse" />
          </div>

          <h1 className="mb-8 text-6xl font-bold leading-tight text-white md:text-8xl animate-slide-in-left">
            Welcome to
            <span className="block mt-4 text-red-600 delay-300 animate-slide-in-right">Baraki</span>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-400 delay-500 md:text-2xl animate-fade-in-up">
          Where tradition meets innovation. Experience authentic flavors and modern sophistication.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 delay-700 sm:flex-row animate-fade-in-up">
          <Button
            size="lg"
            className="px-10 py-4 text-lg text-white transition-all duration-300 transform bg-red-700 hover:bg-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-700/25 group"
          >
            Explore Menu
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-4 text-lg text-white transition-all duration-300 transform bg-transparent border-white hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
          >
            Book Your Table
          </Button>
        </div>
      </div>

      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50 backdrop-blur-sm">
          <div className="w-1 h-3 mt-2 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  )
}
