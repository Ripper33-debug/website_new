"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Wrench } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Rapid Deployment",
      description:
        "Fully operational in 20 minutes. Swift setup and takedown for military, medical or commercial needs.",
    },
    {
      icon: <Shield size={32} />,
      title: "Built for Extremes",
      description:
        "Proven performance from -50°C to +50°C across all seven continents in the harshest conditions.",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description:
        "45 years of logistical expertise. Delivery and installation anywhere on Earth.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Redeployable",
      description:
        "Designed for repeated deployment. Take your camp wherever you go with minimal environmental impact.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Weatherhaven</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by militaries, NGOs, and commercial operators worldwide for
            critical shelter solutions
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
