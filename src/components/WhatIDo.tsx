"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Palette, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Frontend Magic",
    description: "I bring designs to life with smooth animations and pixel-perfect responsiveness. I love playing with Framer Motion and Three.js.",
    color: "bg-brand-blue"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Core",
    description: "Building the backbone of applications with robust APIs and scalable database architectures that handle complex logic with ease.",
    color: "bg-primary"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Vision",
    description: "Crafting user journeys that are not just functional but delightful. I focus on micro-interactions that make every click feel satisfying.",
    color: "bg-secondary"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Optimization",
    description: "Speed is a feature. I ensure your digital products are blazing fast, SEO-friendly, and optimized for the best possible user experience.",
    color: "bg-accent"
  }
];

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-24 md:py-32 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[3.5rem] md:text-[5rem] font-bold leading-[1]"
            >
              What I <span className="text-primary italic">Do.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-sm"
          >
            I combine technical engineering with creative flair to build digital solutions that stand out.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group bg-card p-10 rounded-[3rem] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] transition-all duration-300"
            >
              <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center text-foreground mb-10 border-2 border-foreground shadow-sm group-hover:rotate-12 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
