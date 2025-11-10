"use client"

import { motion } from "framer-motion"
import { Globe, Users, Award, TrendingUp } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Globe,
      title: "Pan-African Reach",
      description: "Operating across major African cities with consistent excellence",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction drives every decision we make",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Excellence in every ride, delivery, and interaction",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t-2 border-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full"
              >
                <span className="text-secondary font-semibold text-sm">About Ezyride</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Why Choose <span className="text-primary">Ezyride</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just a mobility platform. We're a movement toward premium, reliable, and accessible
                transportation across Africa. Every ride tells our story of excellence.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-lg flex items-center justify-center"
                    >
                      <Icon className="text-primary" size={28} />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Featured Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative rounded-2xl overflow-hidden border-4 border-primary/30 shadow-xl"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ezy-8FLxAHWHc7uXsD2Ri7nMZnqVB6hL0A.jpg"
                alt="Ezyride Premium Experience"
                className="w-full h-64 object-cover"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"
              />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "2M+", label: "Successful Trips", icon: TrendingUp },
                { number: "50k+", label: "Active Users", icon: Users },
                { number: "5k+", label: "Professional Drivers", icon: Globe },
                { number: "4.9★", label: "Average Rating", icon: Award },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border-2 border-primary/30 text-center hover:border-primary/50 transition-all"
                  >
                    <Icon className="text-secondary mx-auto mb-2" size={24} />
                    <motion.div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.number}</motion.div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
