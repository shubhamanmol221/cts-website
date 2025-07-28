"use client"

import { useState } from "react"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { PosterSection } from "./components/PosterSection"
import { StatsSection } from "./components/StatsSection"
import { SpeakersSection } from "./components/SpeakersSection"
import { SessionsSection } from "./components/SessionsSection"
import { VenueSection } from "./components/VenueSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"
import { SessionPage } from "./components/SessionPage"
import { sessionsData } from "./components/SessionsData"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedSession, setSelectedSession] = useState(null)

  const handleSessionClick = (session) => {
    setSelectedSession(session)
    setCurrentPage("session")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
    setSelectedSession(null)
  }

  if (currentPage === "session" && selectedSession) {
    return <SessionPage session={selectedSession} onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Header onBackToHome={handleBackToHome} />
      <HeroSection />
      <PosterSection />
      <StatsSection />
      <SpeakersSection />
      <SessionsSection sessions={sessionsData} onSessionClick={handleSessionClick} />
      <VenueSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
