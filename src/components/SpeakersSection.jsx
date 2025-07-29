import { User } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"
import { Badge } from "./Badge"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Srikanth",
      topic: "802.11 PHY evolution, hits and misses",
      image: "/images/srikanth.png", // Changed to passport size dimensions
    },
    {
      name: "Susinder Gulasekaran",
      topic: "The problems with spatial reuse",
      image: "/images/Susinder.png", // Changed to passport size dimensions
    },
    {
      name: "Shivam Thakur",
      topic: "Nuts and Bolts of Wifi and OpenWrt",
      image: "/images/shivam.png", // Changed to passport size dimensions
    },
    {
      name: "Rasika",
      topic: "Exploring Wi-Fi 7's Security Enhancements",
      image: "/images/rasika.png", // Changed to passport size dimensions
    },
    {
      name: "Shashank",
      topic: "Adaptive Enhancing Channel Selection with Adaptive DFS",
      image: "images/sashank.png", // Changed to passport size dimensions
    },
     {
      name: "Gjermund Raaen",
      topic: "EHT Preamble",
      image: "images/Gjermund Raaen.png", // Changed to passport size dimensions
    },
  ]

const speakersPerRow = 3
  const totalSpeakers = speakers.length
  const lastRowCount = totalSpeakers % speakersPerRow
  const fullRows = Math.floor(totalSpeakers / speakersPerRow)

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Guest Speakers</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Learn from industry experts and thought leaders in wireless technology
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Full rows with 3 speakers each */}
          {fullRows > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {speakers.slice(0, fullRows * speakersPerRow).map((speaker, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 bg-white/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                    <CardContent className="p-6 pt-10 text-center flex flex-col h-full">
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative mb-6">
                          <div className="w-32 h-40 mx-auto mb-4 relative">
                            <img
                              src={speaker.image || "/placeholder.svg"}
                              alt={speaker.name}
                              className="w-full h-full object-cover rounded-lg border-2 border-green-200 group-hover:border-green-400 transition-colors shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                              <User className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg text-green-800 mb-2 group-hover:text-green-600 transition-colors min-h-[3.5rem] flex items-center justify-center">
                          {speaker.name}
                        </h3>
                        <p className="text-green-600 font-medium mb-4 min-h-[2.5rem] flex items-center justify-center">
                          {speaker.topic}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-green-100">
                        <Badge className="bg-green-50 text-green-700 border border-green-200">Expert Speaker</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Last row with remaining speakers (centered) */}
          {lastRowCount > 0 && (
            <div className="flex justify-center">
              <div
                className={`grid gap-8 ${
                  lastRowCount === 1
                    ? "grid-cols-1"
                    : lastRowCount === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {speakers.slice(fullRows * speakersPerRow).map((speaker, index) => (
                  <AnimatedSection
                    key={fullRows * speakersPerRow + index}
                    delay={(fullRows * speakersPerRow + index) * 150}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 bg-white/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                      <CardContent className="p-6 pt-10 text-center flex flex-col h-full">
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <div className="relative mb-6">
                            <div className="w-32 h-40 mx-auto mb-4 relative">
                              <img
                                src={speaker.image || "/placeholder.svg"}
                                alt={speaker.name}
                                className="w-full h-full object-cover rounded-lg border-2 border-green-200 group-hover:border-green-400 transition-colors shadow-lg"
                              />
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                                <User className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>
                          <h3 className="font-bold text-lg text-green-800 mb-2 group-hover:text-green-600 transition-colors min-h-[3.5rem] flex items-center justify-center">
                            {speaker.name}
                          </h3>
                          <p className="text-green-600 font-medium mb-4 min-h-[2.5rem] flex items-center justify-center">
                            {speaker.topic}
                          </p>
                        </div>
                        <div className="mt-auto pt-4 border-t border-green-100">
                          <Badge className="bg-green-50 text-green-700 border border-green-200">Expert Speaker</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
