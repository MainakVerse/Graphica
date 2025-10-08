"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const dashboards = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "Track key metrics and visualize data trends in real-time",
    image: "/modern-analytics-dashboard-with-charts-graphs-and-.jpg",
  },
  {
    id: 2,
    title: "Sales Dashboard",
    description: "Monitor sales performance and revenue growth",
    image: "/sales-dashboard-with-revenue-charts-pipeline-metri.jpg",
  },
  {
    id: 3,
    title: "Marketing Dashboard",
    description: "Analyze campaign performance and audience engagement",
    image: "/marketing-dashboard-with-campaign-metrics-social-m.jpg",
  },
  {
    id: 4,
    title: "Project Management Dashboard",
    description: "Oversee project timelines, tasks, and team productivity",
    image: "/project-management-dashboard-with-kanban-board-tim.jpg",
  },
  {
    id: 5,
    title: "Financial Dashboard",
    description: "Manage budgets, expenses, and financial forecasts",
    image: "/financial-dashboard-with-budget-tracking-expense-r.jpg",
  },
]

export function DashboardShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dashboards.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + dashboards.length) % dashboards.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % dashboards.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-r from-orange-300 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Dashboard Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the variety of intelligent dashboards you can create with Graph
          </p>
        </motion.div>

        <div className="relative">
          {/* Card Stack Container */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {dashboards.map((dashboard, index) => {
                const offset = index - activeIndex
                const isActive = index === activeIndex

                return (
                  <motion.div
                    key={dashboard.id}
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      rotateY: -20,
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.3,
                      x: offset * 60,
                      z: isActive ? 0 : -100,
                      rotateY: offset * 10,
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                    }}
                    exit={{
                      scale: 0.8,
                      opacity: 0,
                      rotateY: 20,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="absolute w-full max-w-4xl"
                    style={{
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
                      {/* Dashboard Image */}
                      <div className="relative aspect-video bg-gray-100">
                        <img
                          src={dashboard.image || "/placeholder.svg"}
                          alt={dashboard.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Dashboard Info */}
                      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500">
                        <h3 className="text-2xl font-bold text-white mb-2">{dashboard.title}</h3>
                        <p className="text-white/90 text-lg">{dashboard.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {dashboards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-blue-500" : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to dashboard ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
