"use client"

import { useState, useRef } from "react"
import { Calendar, Clock, MapPin, Zap, ArrowRight, ChevronDown, Play, Pause } from "lucide-react"
import { Button } from "./Button"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/wifi-fest.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-green-50/45 to-green-100/35"></div>
      </div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-green-700 hover:bg-white/90 transition-all duration-300 shadow-lg"
      >
        {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg animate-fade-in-up">
            <Zap className="w-4 h-4" />
            Technology Summit 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 leading-tight drop-shadow-lg animate-fade-in-up animation-delay-200">
            Candela Technology
            <span className="block text-green-600">Summit 2025</span>
          </h1>
          <p className="text-xl text-green-700 mb-8 leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-400">
            Join us for an immersive day of cutting-edge wireless technology insights, AI-driven innovations, and the
            future of Wi-Fi standards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 text-green-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">August 22, 2025 (Friday)</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <Clock className="w-5 h-5" />
              <span className="font-medium">8:30 AM – 6:30 PM</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Visakhapatnam</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <Button size="lg" className="px-8 py-3 rounded-xl shadow-lg">
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg">
              View Schedule
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
