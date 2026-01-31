"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Code2, Database, Terminal, Globe, Sparkles } from 'lucide-react';

const TimelineScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation for cards sliding in from the right
  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 }
      } 
    }
  };

  // Animation for cards sliding in from the left
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 }
      } 
    }
  };

  return (
    <section ref={containerRef} className="relative w-full bg-muted/20 pt-10 pb-40 overflow-hidden">
      <div className="relative w-full">
        {/* Animated Scrolling Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 6000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMin slice"
          >
            <motion.path
              d="M720 0C720 400 1200 600 1200 1200C1200 1800 240 2000 240 2800C240 3600 1200 3800 1200 4600C1200 5400 720 5600 720 6000"
              stroke="#76D362"
              strokeWidth="600"
              strokeLinecap="round"
              strokeOpacity="0.4"
              style={{ pathLength }}
            />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-8 max-w-[1440px]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
              >
                <Sparkles className="w-4 h-4" />
                My Expertise
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[3.5rem] md:text-[5rem] font-bold leading-none"
              >
                What I <span className="text-primary italic">Build.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-sm"
            >
              Full-stack solutions that combine engineering excellence with creative innovation.
            </motion.p>
          </div>

          {/* Section 1: Frontend - Right Side */}
          <div className="relative grid grid-cols-1 lg:grid-cols-16 gap-8 min-h-[800px] items-center">
            <motion.div 
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-start-9 lg:col-span-7 z-20 group bg-card p-10 md:p-14 rounded-[3rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] transition-all duration-300 max-w-[620px]"
            >
              <div className="w-20 h-20 bg-brand-blue rounded-3xl flex items-center justify-center text-foreground mb-10 border-2 border-foreground shadow-sm group-hover:rotate-12 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Frontend Excellence</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                I craft immersive interfaces using React, Next.js, and Framer Motion. 
                My focus is on micro-interactions, accessibility, and high-performance 
                rendering that delights users.
              </p>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all group/btn"
              >
                View Projects
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Section 2: Backend - Left Side */}
          <div className="relative grid grid-cols-1 lg:grid-cols-16 gap-8 min-h-[900px] items-center">
            <motion.div 
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-start-2 lg:col-span-7 z-20 group bg-card p-10 md:p-14 rounded-[3rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] transition-all duration-300 max-w-[620px]"
            >
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-foreground mb-10 border-2 border-foreground shadow-sm group-hover:rotate-12 transition-transform">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Robust Systems</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Building scalable backends with Node.js, Go, and PostgreSQL. 
                I design secure APIs and data architectures that handle 
                complex logic with ease.
              </p>
              <motion.a
                href="#tech"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all group/btn"
              >
                My Tech Stack
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Section 3: Architecture - Right Side */}
          <div className="relative grid grid-cols-1 lg:grid-cols-16 gap-8 min-h-[900px] items-center">
            <motion.div 
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-start-9 lg:col-span-7 z-20 group bg-card p-10 md:p-14 rounded-[3rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] transition-all duration-300 max-w-[620px]"
            >
              <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-foreground mb-10 border-2 border-foreground shadow-sm group-hover:rotate-12 transition-transform">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Clean Architecture</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Software engineering isn&apos;t just about code; it&apos;s about design patterns, 
                testability, and maintainability. I apply CS principles to solve 
                real-world problems.
              </p>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all group/btn"
              >
                Read More
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Section 4: Scale - Left Side */}
          <div className="relative grid grid-cols-1 lg:grid-cols-16 gap-8 min-h-[900px] items-center pb-20">
            <motion.div 
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="lg:col-start-2 lg:col-span-7 z-20 group bg-card p-10 md:p-14 rounded-[3rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] transition-all duration-300 max-w-[620px]"
            >
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-foreground mb-10 border-2 border-foreground shadow-sm group-hover:rotate-12 transition-transform">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Global Scale</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                From AWS to Vercel, I deploy applications that scale to 
                millions. My infrastructure as code (IaC) approach ensures 
                reliability and speed.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all group/btn"
              >
                Start a Project
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Final CTA Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative mt-40"
          >
            <div className="bg-primary/10 rounded-[3rem] py-20 px-10 text-center overflow-hidden relative border-4 border-foreground shadow-[16px_16px_0px_0px_rgba(26,26,26,0.1)]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-foreground rounded-full" />
                <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-foreground rounded-3xl rotate-12" />
                <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-foreground rounded-2xl -rotate-12" />
              </div>

              <h2 className="text-[3rem] md:text-[5rem] font-bold mb-8 tracking-tight relative z-10">
                Let&apos;s Build Something <span className="text-primary italic">Amazing.</span>
              </h2>
              <div className="max-w-2xl mx-auto mb-12 relative z-10">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I&apos;m currently available for freelance projects and full-time 
                  roles. Let&apos;s create digital experiences that stand out.
                </p>
              </div>
              <div className="flex justify-center relative z-10">
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  href="#contact"
                  className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold shadow-xl transition-all"
                >
                  Get In Touch
                  <motion.span 
                    className="flex items-center justify-center w-8 h-8 bg-primary rounded-full"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} className="text-foreground" />
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineScroll;
