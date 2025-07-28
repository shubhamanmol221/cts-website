"use client"

// Removed Wifi import as it's no longer needed for the logo
// import { Wifi } from 'lucide-react'

export function Header({ onBackToHome }) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onBackToHome}>
            {/* Replaced the Wifi icon and text with the new logo image */}
            <img src="/images/cts-logo.png" alt="CTS 2025 Logo" className="h-12 w-auto" />
            <div className="hidden md:block text-green-700 text-sm font-medium">Powered by Candela Technologies</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#speakers" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Guest Speakers
            </a>
            <a href="#sessions" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Sessions
            </a>
            <a href="#venue" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Venue
            </a>
            <a href="#contact" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
