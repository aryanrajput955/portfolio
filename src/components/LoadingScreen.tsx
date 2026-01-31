"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 2500; // Faster, more professional duration
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 400);
          setTimeout(() => {
            document.body.style.overflow = "unset";
            onLoadingComplete();
          }, 1400); // Shorter exit for professionalism
          return 100;
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, [onLoadingComplete]);

  const firstName = "ARYAN".split("");
  const lastName = "RAJPUT".split("");

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground overflow-hidden"
        >
          {/* Animated Background Panels */}
          <div className="absolute inset-0 flex">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.1,
                }}
                className="flex-1 bg-foreground origin-top border-x border-white/5"
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Name Animation - More Professional Typography */}
            <div className="flex flex-col items-center mb-8 overflow-hidden">
              <div className="flex gap-2 md:gap-4 overflow-hidden py-2">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.33, 1, 0.68, 1],
                      delay: i * 0.05,
                    }}
                    className="text-5xl md:text-8xl font-black text-background tracking-tighter"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-2 md:gap-4 overflow-hidden py-2">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.33, 1, 0.68, 1],
                      delay: 0.4 + i * 0.05,
                    }}
                    className="text-5xl md:text-8xl font-black text-primary italic tracking-tighter"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Precision Progress Bar */}
            <div className="w-64 md:w-96 relative">
              <div className="h-[2px] w-full bg-background/10 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                  className="h-full bg-primary"
                />
              </div>
              
              <div className="flex justify-between items-center mt-4 text-[10px] uppercase tracking-[0.3em] font-bold text-background/40">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Initializing Core
                </motion.span>
                <div className="flex items-center gap-2">
                  <span className="text-primary">{Math.round(progress)}%</span>
                  <span>/ 100</span>
                </div>
              </div>
            </div>

            {/* Technical Detail Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-40 flex flex-col items-center gap-2 pointer-events-none"
            >
              <div className="w-[1px] h-20 bg-gradient-to-t from-primary/50 to-transparent" />
              <span className="text-[10px] text-primary/30 font-mono">PORTFOLIO.SYS_v2.0</span>
            </motion.div>
          </div>

          {/* Grain Overlay for Cinematic Feel */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
