"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TimelineScroll from "@/components/scrollpath";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <Hero />
            <About />
            <TimelineScroll />
            <TechStack />
            {/* <WhatIDo /> */}
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
