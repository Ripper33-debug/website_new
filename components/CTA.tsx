"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="flex items-center justify-center bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
          <motion.button
            className="bg-white text-black px-10 py-5 rounded font-medium text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
