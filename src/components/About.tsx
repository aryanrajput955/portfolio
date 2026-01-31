"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Heart, Zap, Coffee, Code2, Music, Sun } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 rotate-12">
          <Code2 size={200} />
        </div>
        <div className="absolute bottom-20 right-10 -rotate-12">
          <Terminal size={150} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Creative Code Window */}
            <div className="relative z-10 bg-foreground text-background p-8 rounded-[3rem] shadow-2xl border-4 border-foreground transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8 border-b border-background/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-brand-blue" />
                </div>
                <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  aryan_brain_dump.tsx
                </div>
              </div>
              
              <div className="font-mono text-sm md:text-base space-y-4">
                <p className="text-secondary"><span className="text-brand-blue">import</span> {"{ Life, Code }"} <span className="text-brand-blue">from</span> <span className="text-primary">'passion'</span>;</p>
                
                <div className="space-y-2 py-4">
                  <p className="text-primary">const <span className="text-background">Aryan</span> = () =&gt; {"{"}</p>
                  <div className="pl-6 space-y-2 border-l border-background/10">
                    <p>status: <span className="text-accent">'Chilling & Building'</span>,</p>
                    <p>stack: [<span className="text-secondary">'Next.js'</span>, <span className="text-secondary">'Three.js'</span>],</p>
                    <p>vibe: <span className="text-primary">'Cool animations & Lofi'</span>,</p>
                    <p className="text-background/40">// Building digital playgrounds...</p>
                    <p>mood: <span className="text-secondary">Math.random() &gt; 0.5 ? '🚀' : '☕'</span></p>
                  </div>
                  <p className="text-primary">{"}"};</p>
                </div>

                <div className="pt-4 flex items-center gap-4 border-t border-background/10">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                    <Music size={16} className="text-secondary animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] opacity-40 uppercase">Now Playing</span>
                    <span className="text-xs font-bold text-primary">Lofi Hip Hop Radio - Beats to relax/study to</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative layers */}
            <div className="absolute top-4 left-4 w-full h-full bg-primary rounded-[3rem] -z-10 rotate-3" />
            <div className="absolute -top-4 -left-4 w-full h-full bg-secondary rounded-[3rem] -z-20 -rotate-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-bold uppercase tracking-widest text-xs mb-8">
              <Sun className="w-4 h-4" />
              Developer by day, Creator by night
            </div>
            
            <h2 className="text-[3.5rem] md:text-[5rem] font-bold leading-[1] mb-8">
              Turning <span className="text-primary italic">imagination</span> into <br />
              <span className="relative">
                interactive reality.
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-4 bg-secondary/30 -z-10"
                />
              </span>
            </h2>

            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I&apos;m a Computer Science Engineer with a deep love for <span className="text-foreground font-bold underline decoration-primary decoration-4">frontend magic</span>. 
                I don&apos;t just build websites; I craft digital experiences that feel alive.
              </p>
              <p>
                Based in India, I specialize in fullstack development with a heavy focus on 
                animations, micro-interactions, and high-performance code. 
                I believe the best software is built at the intersection of <span className="italic font-serif text-foreground">technical excellence</span> and <span className="italic font-serif text-foreground">creative play</span>.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="group flex items-center gap-4 bg-card p-6 rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-background">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Lightning Fast</h4>
                  <p className="text-sm opacity-60">Optimized performance.</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 bg-card p-6 rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-foreground">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Human Centric</h4>
                  <p className="text-sm opacity-60">Focused on the user.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
