"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Server, 
  Settings, 
  Smartphone,
  Cpu,
  Terminal,
  Box,
  Braces
} from "lucide-react";

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      color: "bg-brand-blue",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "bg-primary",
      skills: ["Node.js", "Express", "Python", "Go", "Prisma", "PostgreSQL"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "bg-secondary",
      skills: ["MongoDB", "Redis", "MySQL", "Supabase", "Firebase"]
    },
    {
      title: "Tools",
      icon: <Settings className="w-6 h-6" />,
      color: "bg-accent",
      skills: ["Docker", "Git", "AWS", "Vercel", "Figma", "Linux"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Abilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            My Tech <span className="text-primary italic">Arsenal.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.1, ease: "easeOut" } }}
              className="bg-card rounded-[2.5rem] p-8 border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(26,26,26,0.1)] group transition-all"
            >
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-foreground mb-8 border-2 border-foreground shadow-sm group-hover:rotate-6 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-muted/30 rounded-full text-sm font-semibold border border-foreground/5 hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Icons */}
        <div className="absolute top-1/2 -right-20 opacity-5 pointer-events-none">
          <Terminal size={400} />
        </div>
        <div className="absolute bottom-0 -left-20 opacity-5 pointer-events-none">
          <Braces size={400} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
