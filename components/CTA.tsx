"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="flex items-center justify-center bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's discuss your next project
          </motion.p>
          <motion.button
            className="bg-white text-black px-10 py-5 rounded font-medium text-lg hover:bg-gray-100 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}
