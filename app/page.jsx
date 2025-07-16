import { Navbar } from "@/components/common/navbar"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { Menu } from "@/components/home/menu"
import { Contact } from "@/components/contact/page"
import { Footer } from "@/components/common/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}
