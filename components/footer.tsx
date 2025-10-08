import { Mail, Globe, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:hello@graphica.com" className="hover:text-white transition-colors">
                  hello@graphica.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white" />
                <a href="https://www.graphica.com" className="hover:text-white transition-colors">
                  www.graphica.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">© 2025 Graphica — Turning Data into Stories.</p>

          <div className="flex gap-4">
            {["LinkedIn", "GitHub", "X", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
