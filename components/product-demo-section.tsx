"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Database, Wand2, Share2, FileText, Code, Settings, BarChart3, Smartphone, Tablet, Laptop } from "lucide-react"

const steps = [
  {
    id: "connect",
    icon: Database,
    title: "Connect Your Data",
    description: "Upload or link your data sources seamlessly.",
    color: "from-primary to-primary/60",
  },
  {
    id: "prompt",
    icon: Wand2,
    title: "Prompt Your Magic",
    description: "Type your question, get instant graph suggestions.",
    color: "from-accent to-accent/60",
  },
  {
    id: "share",
    icon: Share2,
    title: "Share Your Masterpiece",
    description: "Export and share your visualizations with the world.",
    color: "from-secondary to-secondary/60",
  },
]

export function ProductDemoSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="demo" className="py-20 md:py-32 bg-gradient-to-r from-green-200 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            See It in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Three simple steps to transform your data into stunning visualizations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Panel - Step Buttons (4 columns) */}
          <div className="lg:col-span-4 space-y-3">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left transition-all ${
                  activeStep === index ? "scale-[1.02]" : "hover:scale-[1.01]"
                }`}
              >
                <Card
                  className={`p-4 ${
                    activeStep === index ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white flex-shrink-0`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.button>
            ))}

            {/* Progress indicator */}
            <div className="flex gap-2 justify-center pt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    activeStep === index ? "w-8 bg-primary" : "w-1.5 bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Panel - Laptop Screen (8 columns) */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Laptop body */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
                {/* Screen bezel */}
                <div className="bg-black rounded-lg p-2">
                  {/* Actual screen */}
                  <div className="bg-white rounded-sm aspect-video overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full flex items-center justify-center p-8"
                      >
                        {activeStep === 0 && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center opacity-5"
                              initial={{ rotate: 0 }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Settings className="w-32 h-32 text-gray-900" />
                            </motion.div>

                            <motion.div
                              className="absolute left-[15%] top-1/2 -translate-y-1/2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                                <Database className="w-8 h-8 text-white" />
                              </div>
                            </motion.div>

                            <motion.div
                              className="absolute left-[15%] top-[20%]"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg flex items-center justify-center">
                                <FileText className="w-7 h-7 text-white" />
                              </div>
                            </motion.div>

                            <motion.div
                              className="absolute left-[15%] bottom-[20%]"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg flex items-center justify-center">
                                <Code className="w-7 h-7 text-white" />
                              </div>
                            </motion.div>

                            <motion.svg
                              className="absolute inset-0 w-full h-full"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 0.5 }}
                            >
                              <motion.line
                                x1="23%"
                                y1="50%"
                                x2="60%"
                                y2="50%"
                                stroke="#3b82f6"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                              />
                              <motion.line
                                x1="21%"
                                y1="28%"
                                x2="58%"
                                y2="48%"
                                stroke="#10b981"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                              />
                              <motion.line
                                x1="21%"
                                y1="72%"
                                x2="58%"
                                y2="52%"
                                stroke="#f97316"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                              />
                            </motion.svg>

                            <motion.div
                              className="absolute right-[15%] top-1/2 -translate-y-1/2"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-2xl flex items-center justify-center">
                                <div className="w-16 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded" />
                              </div>
                            </motion.div>
                          </div>
                        )}

                        {activeStep === 1 && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                              className="absolute left-8 top-8"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-white" />
                              </div>
                            </motion.div>

                            <motion.div
                              className="w-3/4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-xl border-2 border-purple-200"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="flex items-center gap-3 mb-4">
                                <Wand2 className="w-6 h-6 text-purple-600" />
                                <div className="flex-1 h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <div className="h-2 bg-purple-200 rounded-full w-full" />
                                <div className="h-2 bg-purple-200 rounded-full w-5/6" />
                                <div className="h-2 bg-purple-200 rounded-full w-4/6" />
                              </div>
                            </motion.div>

                            {/* Sparkles animation */}
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                                style={{
                                  left: `${30 + Math.random() * 40}%`,
                                  top: `${20 + Math.random() * 60}%`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0, 1.5, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatDelay: 1,
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {activeStep === 2 && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* Center share button */}
                            <motion.div
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                                <Share2 className="w-12 h-12 text-white" />
                              </div>
                            </motion.div>

                            {[
                              {
                                icon: Smartphone,
                                color: "from-blue-400 to-blue-600",
                                angle: 0, // top
                              },
                              {
                                icon: Tablet,
                                color: "from-purple-400 to-purple-600",
                                angle: 60, // top-right
                              },
                              {
                                icon: Laptop,
                                color: "from-orange-400 to-orange-600",
                                angle: 120, // bottom-right
                              },
                              {
                                icon: Smartphone,
                                color: "from-green-400 to-green-600",
                                angle: 180, // bottom
                              },
                              {
                                icon: Tablet,
                                color: "from-pink-400 to-pink-600",
                                angle: 240, // bottom-left
                              },
                              {
                                icon: Laptop,
                                color: "from-cyan-400 to-cyan-600",
                                angle: 300, // top-left
                              },
                            ].map((device, i) => {
                              const radius = 140 // pixels from center
                              const angleRad = (device.angle - 90) * (Math.PI / 180) // -90 to start from top
                              const x = 50 + (radius / 3) * Math.cos(angleRad) // percentage
                              const y = 50 + (radius / 3) * Math.sin(angleRad) // percentage

                              return (
                                <motion.div
                                  key={i}
                                  className={`absolute w-14 h-14 bg-gradient-to-br ${device.color} rounded-lg shadow-lg flex items-center justify-center`}
                                  style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                  <device.icon className="w-7 h-7 text-white" />
                                </motion.div>
                              )
                            })}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Camera notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
              </div>

              {/* Laptop base */}
              <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl shadow-lg" />
              <div className="h-1 bg-gray-900 mx-auto w-2/3 rounded-b-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
