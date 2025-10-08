"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/011_weatherhaven-home-banner-covidversion.jpg"
          alt="Weatherhaven Shelter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex items-center justify-center h-full">
        <div className="space-y-12">
          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
          >
            Weatherhaven
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5
            }}
          >
            Rapid shelter deployment anywhere
          </motion.p>

          {/* CTA */}
          <motion.button
            className="bg-white text-black px-10 py-5 rounded font-medium text-lg hover:bg-gray-100 transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.8
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0]
          }}
          transition={{
            opacity: { duration: 1, delay: 1.2 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown size={40} className="text-white/30" />
        </motion.div>
      </div>
    </section>
  );
}

// Add these to globals.css
/*
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/
