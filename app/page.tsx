"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Solutions />
      <CTA />
      <Footer />
    </main>
  );
}
