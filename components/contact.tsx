"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background border-t-2 border-primary/30 relative overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team is ready to help you get started.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Phone, title: "Call Us", info: "+234 (701) 547-1676", color: "from-primary" },
            { icon: Mail, title: "Email Us", info: "info@ezyride.africa", color: "from-secondary" },
            { icon: MapPin, title: "Visit Us", info: "Lagos, Nigeria", color: "from-primary/80" },
          ].map((contact, i) => {
            const Icon = contact.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 bg-card rounded-xl border-2 border-primary/30 text-center hover:border-primary/50 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} to-transparent/5 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="font-bold text-lg text-foreground mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.info}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 md:p-10 bg-card rounded-2xl border-2 border-primary/30 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(27, 127, 140, 0.1)" }}
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(27, 127, 140, 0.1)" }}
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(27, 127, 140, 0.1)" }}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(27, 127, 140, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              Send Message <Send size={20} />
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-center font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle size={20} /> Thank you! We will get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
