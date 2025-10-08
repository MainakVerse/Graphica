"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Database, Plug, Brain, Edit, Zap } from "lucide-react"

const faqs = [
  {
    icon: Database,
    question: "Does the AI store my data?",
    answer:
      "No. We only store your graph definitions and metadata — never your raw data. Your data privacy and security are our top priorities.",
  },
  {
    icon: Plug,
    question: "Can I use my own datasets?",
    answer:
      "Yes! Connect your Google Sheets or data clouds — no upload required. We support various data sources and APIs for seamless integration.",
  },
  {
    icon: Brain,
    question: "How does the AI know which graph fits best?",
    answer:
      "It analyzes your data's shape and recommends visuals based on patterns, metrics, and storytelling logic. Our AI understands context and data relationships.",
  },
  {
    icon: Edit,
    question: "Can I edit graphs manually?",
    answer:
      "Absolutely. You can modify any metric, axis, or color — AI will adapt the spec intelligently while maintaining visual consistency.",
  },
  {
    icon: Zap,
    question: "What makes it different from Power BI or Tableau?",
    answer:
      "No heavy data ingestion. No complex setup. Just ask, and get your story visualized instantly with AI-powered recommendations.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-r from-orange-200 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Everything you need to know about Graph.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                      <faq.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
