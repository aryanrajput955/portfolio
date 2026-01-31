"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Wave transition from section above */}
      <div className="absolute top-0 left-0 right-0 h-16 text-secondary overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-[4rem] md:text-[7rem] font-bold leading-none mb-10">
              Let&apos;s talk <br /> 
              <span className="text-secondary italic">Digital.</span>
            </h2>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:aryanrajput69696@gmail.com"
                className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-primary transition-all"
              >
                aryanrajput69696@gmail.com
                <Mail className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end lg:items-end">
            <div className="flex gap-8 mb-12">
              {[
                { icon: <Github />, label: "GitHub", href: "https://github.com/aryanrajput955" },
                { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-rajput-0595b0214" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, color: "var(--color-primary)" }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-background/20 flex items-center justify-center group-hover:border-primary transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="group w-24 h-24 rounded-full bg-primary flex flex-col items-center justify-center text-foreground font-bold border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <ArrowUp size={32} />
              <span className="text-[10px] uppercase">Top</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-background/10">
          <p className="text-sm font-bold uppercase tracking-widest opacity-40">
            © {new Date().getFullYear()} Aryan Rajput • Built with passion
          </p>
          <div className="flex items-center gap-2 text-sm opacity-40">
            <span>Made with</span>
            <Heart size={14} className="text-accent fill-accent" />
            <span>& Caffeine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
