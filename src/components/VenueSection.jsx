import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"
import { Button } from "./Button"

export function VenueSection() {
  return (
    <section id="venue" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Event Details</h2>
            <p className="text-xl text-green-600">Join us at this premier venue in Visakhapatnam</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <AnimatedSection delay={200}>
              <Card className="border-green-200 bg-gradient-to-br from-white to-green-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 pt-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mt-2">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-green-800 mb-2">Venue</h3>
                      <p className="text-green-600 font-semibold text-lg mb-2">SB Square Hotel & Banquet</p>
                      <p className="text-green-700 text-base mb-6">Visakhapatnam, Andhra Pradesh</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold"
                  >
                    View on Maps
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="border-green-200 bg-gradient-to-br from-white to-green-50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 pt-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mt-2">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-green-800 mb-2">Date & Time</h3>
                      <p className="text-green-600 font-semibold text-lg mb-2">August 22, 2025 (Friday)</p>
                      <p className="text-green-700 text-base mb-6">8:30 AM – 6:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg border border-green-200">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Full Day Event</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={600}>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                <img
                  src="https://via.placeholder.com/600x400?text=SB+Square+Hotel"
                  alt="SB Square Hotel & Banquet Visakhapatnam"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
