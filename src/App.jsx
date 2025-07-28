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
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedSession, setSelectedSession] = useState(null)

  const sessions = [
    {
      id: "phy-evolution",
      title: "802.11 PHY evolution; hits and misses",
      authors: "Dr. Srikanth",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "The WiFi success story has been built on evolving 802.11 standards adding higher speeds and other features. In the PHY evolution, crucial technologies like OFDM, MIMO, higher-order QAM, OFDMA, MU-MIMO etc. have been standardized to move the technology to achieve greater speeds amongst other benefits. In this talk we will talk about what has clicked with respect to practice and some which have not worked well in practice.",
      category: "PHY Layer",
      time: "9:00 AM - 10:00 AM",
      duration: "60 minutes",
      fullDescription:
        "This comprehensive session will take you through the journey of 802.11 PHY layer evolution, examining both the successes and challenges faced in implementing various technologies. We'll explore how OFDM revolutionized wireless communication, the impact of MIMO technology on throughput and reliability, and the practical implications of higher-order QAM modulation schemes. The presentation will also cover the transition to OFDMA and MU-MIMO in Wi-Fi 6, discussing real-world performance versus theoretical expectations.",
      objectives: [
        "Understand the historical evolution of 802.11 PHY layer technologies",
        "Analyze the practical implementation challenges of key technologies",
        "Evaluate the real-world performance of MIMO, OFDM, and QAM",
        "Explore the transition to Wi-Fi 6 technologies like OFDMA and MU-MIMO",
      ],
      targetAudience:
        "Network engineers, RF engineers, wireless technology researchers, and technical professionals working with Wi-Fi systems",
      prerequisites: "Basic understanding of wireless communication principles and 802.11 standards",
    },
    {
      id: "candela-assist",
      title: "Built for Engineers. Driven by AI. Introducing Candela Assist",
      authors: "Vardhan, Siva & Sahithi",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "Candela Assist is an advanced, AI-powered platform designed to streamline wireless testing workflows. It integrates natural language understanding, automation, and visualization tools to empower engineers to design and validate Wi-Fi networks more efficiently.",
      category: "AI & Automation",
      time: "10:30 AM - 11:30 AM",
      duration: "60 minutes",
      fullDescription:
        "Discover how artificial intelligence is transforming wireless network testing with Candela Assist. This session will demonstrate how natural language processing can simplify complex testing procedures, allowing engineers to describe test scenarios in plain English and have them automatically translated into executable test configurations. We'll showcase real-world examples of how AI-driven automation reduces testing time, improves accuracy, and enables more comprehensive network validation.",
      objectives: [
        "Learn how AI can streamline wireless testing workflows",
        "Understand natural language processing in network testing",
        "Explore automated test generation and execution",
        "See practical demonstrations of Candela Assist capabilities",
      ],
      targetAudience:
        "Test engineers, network administrators, QA professionals, and anyone involved in wireless network validation",
      prerequisites: "Familiarity with wireless network testing concepts and basic understanding of AI/ML principles",
    },
    {
      id: "adaptive-dfs",
      title: "Enhancing Channel Selection with Adaptive DFS",
      authors: "Shashank",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "The objective of this presentation is to provide insight into how adaptive Dynamic Frequency Selection (DFS) can optimize channel selection by minimizing radar interference while maintaining performance in Wi-Fi networks.",
      category: "Network Optimization",
      time: "11:45 AM - 12:45 PM",
      duration: "60 minutes",
      fullDescription:
        "Dynamic Frequency Selection (DFS) is crucial for operating Wi-Fi networks in the 5 GHz band, but traditional implementations can be rigid and inefficient. This session explores adaptive DFS techniques that intelligently respond to radar detection events while minimizing network disruption. We'll discuss advanced algorithms that consider historical radar patterns, network load, and channel quality metrics to make smarter channel selection decisions.",
      objectives: [
        "Understand the fundamentals of DFS and radar detection",
        "Learn about adaptive algorithms for intelligent channel selection",
        "Explore techniques to minimize network disruption during DFS events",
        "Analyze real-world case studies of adaptive DFS implementation",
      ],
      targetAudience:
        "RF engineers, network planners, wireless system architects, and regulatory compliance professionals",
      prerequisites: "Understanding of 5 GHz spectrum regulations and basic knowledge of radar systems",
    },
    {
      id: "seamless-switchover",
      title: "Seamless Switchover Between Wi-Fi and Cellular using Policy Engines",
      authors: "Manoj, Sirisha",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "To evaluate the performance, reliability, and logic behind seamless transitions between Wi-Fi and 5G networks using programmable policy engines. This includes a demonstration of real-world testing scenarios and KPIs.",
      category: "Network Integration",
      time: "2:00 PM - 3:00 PM",
      duration: "60 minutes",
      fullDescription:
        "As mobile devices increasingly rely on both Wi-Fi and cellular connectivity, seamless handoffs between these technologies become critical for user experience. This session explores programmable policy engines that can intelligently manage network transitions based on signal quality, network load, application requirements, and user preferences. We'll demonstrate real-world testing scenarios and analyze key performance indicators that determine handoff success.",
      objectives: [
        "Understand the challenges of Wi-Fi to cellular handoffs",
        "Learn about programmable policy engines for network selection",
        "Explore KPIs and metrics for evaluating handoff performance",
        "See live demonstrations of seamless network transitions",
      ],
      targetAudience:
        "Mobile network engineers, system integrators, telecom professionals, and mobility solution developers",
      prerequisites: "Knowledge of both Wi-Fi and cellular network technologies",
    },
    {
      id: "client-behavior",
      title: "Looking closer at the client: A deep dive into STA behavior",
      authors: "Sainath, Deepika",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "Access point performance is often the primary focus during Wi-Fi testing, but understanding the client (STA) behavior is critical. This talk explores techniques to simulate and analyze various client-side conditions and reactions.",
      category: "Client Analysis",
      time: "3:15 PM - 4:15 PM",
      duration: "60 minutes",
      fullDescription:
        "While much attention is given to access point optimization, client device behavior significantly impacts overall network performance. This session provides deep insights into how different client devices behave under various network conditions, including power save modes, roaming decisions, and association patterns. We'll explore advanced simulation techniques and analysis tools that help engineers understand and predict client behavior in complex network environments.",
      objectives: [
        "Analyze client device behavior patterns in Wi-Fi networks",
        "Understand power save mechanisms and their impact on performance",
        "Explore client roaming decision algorithms and triggers",
        "Learn simulation techniques for testing client scenarios",
      ],
      targetAudience:
        "Network engineers, Wi-Fi system designers, device manufacturers, and performance optimization specialists",
      prerequisites: "Solid understanding of 802.11 protocol and client-server interactions",
    },
    {
      id: "traffic-analysis",
      title: "Packet to Panel: Real-Time Network Traffic Analysis Dashboard",
      authors: "Renusree, Nikitha",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "Traditional analysis of WiFi performance issues is often manual and post-event. This project introduces a real-time dashboard that visualizes network traffic, latency spikes, and device-specific statistics, enabling live debugging.",
      category: "Analytics",
      time: "4:30 PM - 5:30 PM",
      duration: "60 minutes",
      fullDescription:
        "Transform your network troubleshooting approach with real-time visualization and analytics. This session introduces an innovative dashboard that processes network packets in real-time, providing instant insights into traffic patterns, performance bottlenecks, and device-specific issues. Learn how to move from reactive to proactive network management with live monitoring and automated alerting systems.",
      objectives: [
        "Implement real-time packet analysis and visualization",
        "Create interactive dashboards for network monitoring",
        "Develop automated alerting systems for performance issues",
        "Learn best practices for live network debugging",
      ],
      targetAudience:
        "Network administrators, system engineers, DevOps professionals, and network monitoring specialists",
      prerequisites: "Basic networking knowledge and familiarity with packet analysis tools",
    },
    {
      id: "real-time-testing",
      title: "Real Time WiFi Testing",
      authors: "Shashank Tadakamadla",
      image: "/placeholder.svg?height=200&width=300",
      abstract:
        "Real-Time Wi-Fi Testing refers to the continuous and dynamic evaluation of wireless network performance under live, real-world conditions. Unlike traditional lab-based or static test methods, real-time testing simulates active user scenarios, mobility, and real-world interference — providing immediate insights into network behavior and stability.",
      category: "Testing & Validation",
      time: "5:45 PM - 6:30 PM",
      duration: "45 minutes",
      fullDescription:
        "This session explores the evolution from traditional static Wi-Fi testing to dynamic real-time evaluation methodologies. We'll examine how real-time testing frameworks can capture network performance under actual usage conditions, including user mobility, varying traffic loads, and environmental interference. The presentation will cover advanced testing tools and techniques that provide continuous monitoring and instant feedback on network quality, enabling proactive optimization and troubleshooting.",
      objectives: [
        "Understand the limitations of traditional Wi-Fi testing methods",
        "Learn real-time testing frameworks and methodologies",
        "Explore tools for continuous network performance monitoring",
        "Analyze real-world interference patterns and their impact",
        "Implement proactive network optimization strategies",
      ],
      targetAudience: "Network test engineers, QA professionals, Wi-Fi system validators, and network operations teams",
      prerequisites: "Experience with Wi-Fi testing tools and basic understanding of network performance metrics",
    },
  ]

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
      <SessionsSection sessions={sessions} onSessionClick={handleSessionClick} />
      <VenueSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
