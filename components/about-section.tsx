"use client"

import { motion } from "framer-motion"
import { Zap, Lock, Brain, Palette } from "lucide-react"

const features = [
  {
    icon: Zap,
    label: "Speed",
    color: "text-primary",
  },
  {
    icon: Lock,
    label: "Security",
    color: "text-accent",
  },
  {
    icon: Brain,
    label: "AI Understanding",
    color: "text-secondary",
  },
  {
    icon: Palette,
    label: "Aesthetic Intelligence",
    color: "text-primary",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-r from-orange-200 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            The Future of Data Visualization is{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Conversational
            </span>
          </h2>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed md:text-xl">
            Imagine describing a chart — and watching it appear, intelligently crafted to fit your story. Our AI graph
            engine analyzes your data structure, identifies the most suitable chart types, and offers you tailored
            suggestions — always keeping performance, security, and design harmony in mind.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br from-muted to-muted/50 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
