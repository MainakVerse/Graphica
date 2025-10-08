"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" })

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-200 to-white pt-16 py-20 md:py-32">
      {/* Background mesh grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                From Prompts to{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Perfect Graphs
                </span>{" "}
                — Instantly.
              </h1>
              <p className="text-lg text-muted-foreground text-pretty md:text-xl max-w-2xl">
                Our AI understands your data, crafts the right visualization, and tells your story — all without
                touching your raw data.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group animate-pulse-glow">
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Animated Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* AI Prompt Bubble */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-0 left-0 z-10 bg-card border-2 border-primary/20 rounded-2xl p-4 shadow-lg"
              >
                <p className="text-sm font-medium text-primary">"Show sales in {currentMonth}"</p>
              </motion.div>

              {/* Floating Chart Suggestions */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Chart 1 - Line Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.8 },
                      scale: { duration: 0.6, delay: 0.8 },
                      y: {
                        duration: 0.6,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute top-1/4 right-0 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 shadow-lg"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs font-medium mt-2 text-center">Line Chart</p>
                  </motion.div>

                  {/* Chart 2 - Bar Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 1 },
                      scale: { duration: 0.6, delay: 1 },
                      y: {
                        duration: 0.6,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                        delay: 0.7,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute bottom-1/4 left-0 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-4 shadow-lg"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-accent-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs font-medium mt-2 text-center">Bar Chart</p>
                  </motion.div>

                  {/* Chart 3 - Pie Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 1.2 },
                      scale: { duration: 0.6, delay: 1.2 },
                      y: {
                        duration: 0.6,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                        delay: 1.4,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl p-4 shadow-lg"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/60 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-secondary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs font-medium mt-2 text-center">Pie Chart</p>
                  </motion.div>
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
