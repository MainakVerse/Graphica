"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "It feels like having a personal data designer who understands my intent.",
    author: "Priya Mehta",
    role: "Product Manager",
    avatar: "/professional-woman-diverse.png",
    initials: "PM",
  },
  {
    quote: "The AI suggestions are spot-on, and the warning system saves me from messy charts.",
    author: "Alex Carter",
    role: "Data Analyst",
    avatar: "/professional-man.jpg",
    initials: "AC",
  },
  {
    quote: "Finally, a visualization tool that respects my data's privacy.",
    author: "Neha Sharma",
    role: "BI Lead",
    avatar: "/professional-woman-glasses.png",
    initials: "NS",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-r from-green-300 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Data Professionals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            See what our users have to say about transforming their data visualization workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-sm leading-relaxed mb-6 flex-1">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
