"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header({ onBackToHome }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Updated to accept the event object and prevent default behavior
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault() // Prevents the default anchor jump
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={onBackToHome}>
              <img src="/images/cts_logo.png" alt="CTS 2025 Logo" className="h-10 w-auto" />
              <div className="text-green-700 text-sm font-medium">Powered by Candela Technologies</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#speakers" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Speakers
              </a>
              <a href="#sessions" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Sessions
              </a>
              {/* <a href="#venue" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Venue
              </a> */}
              <a href="#contact" className="text-green-700 hover:text-green-800 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-green-700 hover:text-green-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-green-700 hover:text-green-800 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links - CORRECTED */}
              <nav className="flex flex-col gap-6">
                <a
                  href="#speakers"
                  onClick={(e) => handleLinkClick(e, "speakers")}
                  className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                >
                  Speakers
                </a>
                <a
                  href="#sessions"
                  onClick={(e) => handleLinkClick(e, "sessions")}
                  className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                >
                  Sessions
                </a>
                <a
                  href="#venue"
                  onClick={(e) => handleLinkClick(e, "venue")}
                  className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                >
                  Venue
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}