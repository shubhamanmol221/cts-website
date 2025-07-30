"use client"

import { useState, useRef } from "react"
import { Calendar, Clock, MapPin, Play, Pause } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="\wifi-fest_new.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-green-700 hover:bg-white/90 transition-all duration-300 shadow-lg"
        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
      >
        {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Centered Content Container */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl px-4">
        
        {/* Larger Logo, shifted upward */}
        <div className="-mb-10 animate-fade-in-up z-10">
          <img src="/images/cts_logo.png" alt="Summit Logo" className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-xl" />
        </div>

        {/* Main Content Card (Title and Description) */}
        <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 md:p-12 shadow-2xl hover:bg-white/15 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] w-full mb-8">
          {/* Add top padding to account for the overlapping logo */}
          <div className="pt-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up animation-delay-200">
              Candela Technology
              <span className="block text-green-300">Summit 2025</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-400">
              Join us for a deep dive into cutting-edge wireless technology, evolving Wi-Fi standards, and advanced testing strategies driving real-world user experience.
            </p>
          </div>
        </div>

        {/* Event Details (Date, Time, Location) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">August 22, 2025 (Friday)</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20">
            <Clock className="w-5 h-5" />
            <span className="font-medium">8:30 AM – 6:30 PM</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Visakhapatnam</span>
          </div>
        </div>
      </div>
    </section>
  )
}