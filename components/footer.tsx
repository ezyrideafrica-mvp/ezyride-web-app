"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Heart } from "lucide-react"

export default function Footer() {
  const links = {
    Services: ["Ride", "Tours", "Events", "Corporate"],
    Company: ["About", "Blog", "Careers", "Press"],
    Support: ["Help Center", "Contact", "FAQ", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookies", "Security"],
  }

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="bg-foreground/2 border-t border-border pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20251017-082835-removebg-preview-wneBk9M6usDuW5Gsd4Z9alygb7WXaz.png"
                alt="Ezyride"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ezyride
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium mobility solutions for Africa. Moving people, delivering excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} className="flex-shrink-0" />
                <span>+234 (701) 547-1676</span>
              </div>
              <div className="flex gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@ezyride.africa</span>
              </div>
              <div className="flex gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-bold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-border origin-left mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>&copy; 2025 Ezyride. All rights reserved.</p>
          <motion.p
            className="flex items-center gap-1"
            animate={{ color: ["var(--muted-foreground)", "var(--primary)", "var(--muted-foreground)"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Made with <Heart size={14} className="text-secondary" /> for African excellence
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
