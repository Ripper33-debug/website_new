"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap size={48} />,
      title: "Rapid",
      description: "Operational in 20 minutes",
    },
    {
      icon: <Shield size={48} />,
      title: "Durable",
      description: "-50°C to +50°C performance",
    },
    {
      icon: <Globe size={48} />,
      title: "Global",
      description: "Deployed on all continents",
    },
  ];

  return (
    <section className="flex items-center justify-center bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Why Weatherhaven
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
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
              whileHover={{
                y: -8,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              <div className="text-white mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-xl text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
