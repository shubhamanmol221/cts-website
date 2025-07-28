"use client"

import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./Card"
import { Badge } from "./Badge"

export function SessionsSection({ sessions, onSessionClick }) {
  return (
    <section id="sessions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Technical Sessions</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Explore cutting-edge topics in wireless technology, AI, and network optimization
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card
                className="group hover:shadow-lg transition-all duration-300 border-green-100 hover:border-green-200 cursor-pointer hover:scale-[1.02] h-full"
                onClick={() => onSessionClick(session)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="bg-green-100 text-green-700 mb-3">{session.category}</Badge>
                      <CardTitle className="text-green-800 group-hover:text-green-600 transition-colors leading-tight">
                        {session.title}
                      </CardTitle>
                      <CardDescription className="text-green-600 font-medium mt-2">
                        By {session.authors}
                      </CardDescription>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 leading-relaxed line-clamp-3">{session.abstract}</p>
                  <div className="mt-4 text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors">
                    Click to read more →
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
