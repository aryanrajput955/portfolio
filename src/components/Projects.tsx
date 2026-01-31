"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Quantum Dashboard",
    category: "Fullstack • AI Integration",
    description: "A futuristic data visualization platform with real-time AI insights and smooth 3D transitions.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "bg-primary"
  },
  {
    title: "EcoPulse SaaS",
    category: "Web App • Sustainability",
    description: "Cloud-based environmental tracking system with complex data processing and interactive charts.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "#",
    color: "bg-accent"
  },
  {
    title: "Nebula Wallet",
    category: "Web3 • Fintech",
    description: "Next-gen crypto wallet focusing on security and high-fidelity micro-interactions.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop",
    link: "#",
    color: "bg-secondary"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[3.5rem] md:text-[5rem] font-bold leading-[1]"
            >
              Building <span className="text-primary italic">Digital Dreams.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://github.com/aryanrajput955" 
              target="_blank"
              className="group flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-all"
            >
              More on GitHub
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col ${index % 2 !== 0 ? 'lg:translate-y-20' : ''}`}
            >
              <div className="relative overflow-hidden rounded-[3.5rem] aspect-[16/10] mb-8 border-4 border-foreground shadow-[20px_20px_0px_0px_rgba(26,26,26,0.1)] group-hover:shadow-none transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className="w-20 h-20 bg-background rounded-full flex items-center justify-center text-foreground border-2 border-foreground shadow-xl"
                  >
                    <ArrowUpRight size={40} />
                  </motion.div>
                </div>
              </div>
              
              <div className="flex justify-between items-start px-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">{project.category}</span>
                    <div className="w-8 h-[1px] bg-foreground/10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
