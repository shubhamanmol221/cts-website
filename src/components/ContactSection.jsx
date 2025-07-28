import { User, Mail, Phone, ArrowRight } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"
import { Button } from "./Button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-green-600">Have questions? We're here to help</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-2xl mx-auto">
            <Card className="border-green-100">
              <CardContent className="p-8 pt-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mt-2">
                      <User className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Event Coordinator</h3>
                      <p className="text-green-600">Contact Name</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mt-2">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Email</h3>
                      <p className="text-green-600">email@candelatech.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mt-2">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Phone</h3>
                      <p className="text-green-600">Mobile Number</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-green-100">
                  <Button className="w-full py-3 rounded-xl">
                    Register for CTS 2025
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
