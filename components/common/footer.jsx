import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 animate-fade-in-up">
            <h3 className="mb-6 text-3xl font-bold text-red-600 transition-transform duration-300 cursor-pointer hover:scale-105">
              Noir Bar
            </h3>
            <p className="max-w-md mb-8 leading-relaxed text-gray-400 delay-200 animate-fade-in-up">
              Where tradition meets innovation. Experience the perfect blend of cultural heritage and modern
              sophistication in every moment.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 transform rounded-lg bg-red-900/20 hover:text-red-600 hover:bg-red-900/30 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-400">
            <h4 className="mb-6 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Contact"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 animate-slide-in-up"
                    style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-600">
            <h4 className="mb-6 text-lg font-bold text-white">Contact</h4>
            <div className="space-y-3 text-gray-400">
              {["456 Cultural District", "Metropolitan City, MC 54321", "(555) 987-6543", "hello@noirbar.com"].map(
                (item, index) => (
                  <p key={index} className="animate-slide-in-up" style={{ animationDelay: `${(index + 7) * 100}ms` }}>
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 delay-1000 border-t border-red-900/30 animate-fade-in-up">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">© 2024 NoirBar. All rights reserved.</p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              {["Privacy Policy", "Terms of Service"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 transition-all duration-300 hover:text-white hover:translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 11) * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
