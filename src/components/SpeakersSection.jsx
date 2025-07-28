import { User } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"
import { Badge } from "./Badge"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Srikanth",
      topic: "802.11 PHY Evolution",
      image: "/placeholder.svg?height=120&width=120", // Changed placeholder query
    },
    {
      name: "Susinder Gulasekaran",
      topic: "Candela Assist",
      image: "/placeholder.svg?height=120&width=120", // Changed placeholder query
    },
    {
      name: "Shivam Thakur",
      topic: "Candela Assist",
      image: "/placeholder.svg?height=120&width=120", // Changed placeholder query
    },
    {
      name: "Rasika",
      topic: "Candela Assist",
      image: "/placeholder.svg?height=120&width=120", // Changed placeholder query
    },
    {
      name: "Shashank",
      topic: "Adaptive DFS",
      image: "/placeholder.svg?height=120&width=120", // Changed placeholder query
    },
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {speakers.map((speaker, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 bg-white/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                <CardContent className="p-6 pt-10 text-center flex flex-col h-full">
                  {" "}
                  {/* Added pt-10 here */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative mb-6">
                      <div className="w-28 h-28 mx-auto mb-4 relative">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-full h-full rounded-full object-cover border-4 border-green-200 group-hover:border-green-400 transition-colors shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                          <User className="w-5 h-5 text-white" />
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
    </section>
  )
}
