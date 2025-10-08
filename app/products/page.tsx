"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white">
              Products
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
              Shelter solutions for every mission
            </p>
          </motion.div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Coming Soon
          </motion.h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
