"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Graphica
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              FAQ
            </button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                FAQ
              </button>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
