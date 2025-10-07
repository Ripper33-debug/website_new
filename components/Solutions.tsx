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
    <section id="solutions" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Solutions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive shelter systems tailored for military, medical, and
            commercial applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background image with dark overlay */}
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <h3 className="text-3xl font-bold mb-3 text-white">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <motion.button
                  className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight size={20} />
                </motion.button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
