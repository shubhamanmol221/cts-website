"use client"

import { useState } from "react"
import { AnimatedSection } from "./AnimatedSection"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PosterSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/cts-poster.jpg",
      alt: "Candela Technology Summit 2025",
      title: "CTS 2025 Official Poster",
      description: "Experience the beauty of Visakhapatnam while attending cutting-edge technology sessions",
      isPoster: true,
    },
    {
      src: "/images/event-1.jpg",
      alt: "Technology Summit 2023 - Team Photos and Displays",
      title: "Previous Summit Highlights",
      // description: "Group photos and conference displays from Technology Summit 2023",
      isPoster: false,
    },
    {
      src: "/images/event-2.jpg",
      alt: "Conference Networking Sessions",
      title: "Previous Summit Highlights",
      // description: "Attendees engaging in networking sessions and collaborative discussions",
      isPoster: false,
    },
    {
      src: "/images/event-3.jpg",
      alt: "All Conference Participants Group Photo",
      title: "Previous Summit Highlights",
      // description: "Complete gathering of all conference participants and speakers",
      isPoster: false,
    },
    {
      src: "/images/event-4.jpg",
      alt: "Opening Ceremony and Keynote",
      title: "Previous Summit Highlights",
      // description: "Traditional lamp lighting ceremony and conference inauguration",
      isPoster: false,
    },
    {
      src: "/images/event-5.jpg",
      alt: "Technical Presentation Session",
      title: "Previous Summit Highlights",
      // description: "Main conference hall during technical presentation sessions",
      isPoster: false,
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const currentImage = images[currentImageIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Event Gallery</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">{currentImage.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-5xl mx-auto">
            {/* Main Image Display */}
            <div className="relative group mb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-700 hover:bg-white/90 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-700 hover:bg-white/90 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>

              {/* Image Title */}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{currentImage.title}</h3>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? "border-green-500 shadow-lg scale-110"
                      : "border-gray-200 hover:border-green-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}