import { AnimatedSection } from "./AnimatedSection"

export function StatsSection() {
  const stats = [
    { number: "14", label: "Technical Sessions" },
    { number: "25+", label: "Expert Speakers" },
    { number: "10", label: "Hours of Content" },
    { number: "1", label: "Day Event" },
  ]

  return (
    <AnimatedSection>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-green-700">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
