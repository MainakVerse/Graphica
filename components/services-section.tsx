"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, Settings, Shield, Camera, Bot, Users } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI-Driven Visualization",
    description:
      "Transform complex data into stunning visual stories using natural language prompts. Our AI understands context and automatically selects the best chart types for your data, making visualization effortless and intuitive.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Settings,
    title: "BYOD Integration",
    description:
      "Seamlessly connect to your existing data sources including Google Sheets, cloud databases, REST APIs, and more. No data migration needed—work directly with your data wherever it lives.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Shield,
    title: "Zero Data Storage",
    description:
      "Your privacy is paramount. We never store your raw data on our servers. All processing happens in real-time, ensuring your sensitive information remains completely under your control.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Camera,
    title: "Snapshot Versioning",
    description:
      "Capture and save different versions of your graphs as you iterate. Easily compare changes, rollback to previous states, and maintain a complete history of your visualization journey.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Bot,
    title: "Narrative Intelligence",
    description:
      "Let AI do the heavy lifting with automatic report generation, insight summaries, and trend analysis. Get actionable intelligence from your data without manual interpretation.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time commenting, editing permissions, and approval workflows. Keep everyone aligned with full transparency and audit trails for all changes.",
    color: "from-secondary to-secondary/60",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-r from-blue-300 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Powerful{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Everything you need to create, manage, and share intelligent data visualizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div
                  className={`p-6 bg-gradient-to-br ${service.color} text-white group-hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="w-6 h-6" />
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
