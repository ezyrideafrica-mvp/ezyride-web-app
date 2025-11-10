"use client"

import { motion } from "framer-motion"
import { Car, MapPin, Zap, Clock, Shield, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Premium Rides",
      description: "Executive comfort meets affordability. Experience luxury travel.",
      features: ["24/7 Service", "Professional Drivers", "Live Tracking"],
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: MapPin,
      title: "Tours",
      description: "Explore Africa with confidence. Guided and self-driven tour options.",
      features: ["Experienced Guides", "Flexible Routes", "Group Tours"],
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Users,
      title: "Event Transport",
      description: "Coordinate transport for events and corporate gatherings.",
      features: ["Fleet Management", "Custom Routes", "Group Booking"],
      gradient: "from-accent/20 to-accent/5",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/2 to-background border-t-2 border-b-2 border-primary/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Services
          </motion.h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobility solutions designed for African excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.08)" }}
                className={`group relative p-8 rounded-2xl border-2 border-primary/30 bg-gradient-to-br ${service.gradient} backdrop-blur-sm cursor-pointer transition-all`}
              >
                {/* Hover background effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all"
                >
                  <Icon className="text-primary" size={36} />
                </motion.div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-secondary text-2xl">→</div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Zap, label: "Lightning Fast", value: "< 5 min" },
            { icon: Clock, label: "24/7 Available", value: "Always Ready" },
            { icon: Shield, label: "Safe & Secure", value: "100% Protected" },
            { icon: Users, label: "Trusted by", value: "50k+ Users" },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 bg-card rounded-xl border-2 border-secondary/30 text-center hover:border-primary/30 transition-all"
              >
                <Icon className="text-secondary mx-auto mb-2" size={24} />
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-bold text-foreground text-sm">{stat.value}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
