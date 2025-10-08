"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "Military Solutions",
      description:
        "Tactical shelters and camp systems for defense operations worldwide. Proven on all 7 continents.",
      image: "/images/003_weatherhaven-home-military.jpg",
      gradient: "from-primary/80 to-primary-dark/80",
    },
    {
      title: "Medical Solutions",
      description:
        "Field hospitals and mobile clinics meeting WHO standards. Rapid response for critical care.",
      image: "/images/005_weatherhaven-home-medical.jpg",
      gradient: "from-accent/80 to-accent-dark/80",
    },
    {
      title: "Commercial Solutions",
      description:
        "Workforce housing and turnkey camps for mining, construction, and remote operations.",
      image: "/images/007_weatherhaven-home-commercial.jpg",
      gradient: "from-primary-dark/80 to-accent/80",
    },
  ];

  return (
    <section id="solutions" className="flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Solutions
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded aspect-[3/4] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              {/* Background image with dark overlay */}
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center p-8 z-10">
                <h3 className="text-4xl font-bold text-white">{solution.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
