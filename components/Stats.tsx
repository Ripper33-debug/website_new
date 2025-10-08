"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "95+", label: "Countries" },
    { value: "40+", label: "Years" },
    { value: "7", label: "Continents" },
  ];

  return (
    <section className="flex items-center justify-center bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Global Presence
        </motion.h2>
        <div className="grid grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "100px" }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                {stat.value}
              </div>
              <div className="text-xl text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
