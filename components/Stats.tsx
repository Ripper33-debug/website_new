"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "1981", label: "Founded" },
    { value: "95+", label: "Countries Served" },
    { value: "20+", label: "Military Partners" },
    { value: "All 7", label: "Continents" },
  ];

  return (
    <section className="py-16 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
