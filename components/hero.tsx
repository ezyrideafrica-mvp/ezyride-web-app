"use client";

import type React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Zap, Car } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [rideType, setRideType] = useState<"ride" | "tours" | "event">("ride");
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative overflow-hidden">
      {/* === Background Image with Black Fade Overlay === */}
      <div className="absolute inset-0 z-0">
  <Image
    src="/images/hero-bg.jpg"
    alt="Ezyride premium background"
    fill
    className="object-cover opacity-60"
    priority
  />
  {/* Black fade gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-transparent" />
</div>
      {/* === Animated Glow Elements (optional) === */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Heading & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-12 max-w-3xl mx-auto text-white"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4 text-accent font-semibold"
          >
            <Zap size={18} />
            <span>Premium Mobility in Africa</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Move Like <span className="text-[#f5c542]">Royalty</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Your trusted partner for airport pickups, executive rides, and memorable tours across Africa.
            Book instantly, travel in comfort.
          </p>
        </motion.div>

        {/* Ride / Tours / Event Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {[
            { id: "ride", label: "Ride", icon: Car },
            { id: "tours", label: "Tours", icon: MapPin },
            { id: "event", label: "Events", icon: Calendar },
          ].map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setRideType(type.id as "ride" | "tours" | "event")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                rideType === type.id
                  ? "bg-[#f5c542] text-[#014d40] shadow-lg"
                  : "bg-white/20 border border-white/30 text-white hover:bg-white/30"
              }`}
            >
              <type.icon size={18} />
              {type.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pickup */}
            <motion.div whileHover={{ y: -2 }} className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-gray-200">
                <MapPin size={16} className="text-[#f5c542]" />
                Pickup
              </label>
              <input
                type="text"
                name="pickup"
                placeholder="Enter pickup location"
                value={formData.pickup}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              />
            </motion.div>

            {/* Destination */}
            <motion.div whileHover={{ y: -2 }} className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-gray-200">
                <MapPin size={16} className="text-[#f5c542]" />
                Destination
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Where to?"
                value={formData.destination}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              />
            </motion.div>

            {/* Date */}
            <motion.div whileHover={{ y: -2 }} className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-gray-200">
                <Calendar size={16} className="text-[#f5c542]" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              />
            </motion.div>

            {/* Search Button */}
            <motion.div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-[#f5c542] text-[#014d40] rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Search <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Explore Ezyride</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Minimal", image: "/images/car1.jpg", description: "Economy rides for your budget" },
              { name: "Classic", image: "/images/car2.jpg", description: "Comfort and reliability" },
              { name: "Premium", image: "/images/car3.jpg", description: "Luxury and elegance" },
              { name: "Luxury", image: "/images/car4.jpg", description: "Ultimate premium experience" },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/20 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-200">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
