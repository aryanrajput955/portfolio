"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function MovingLine() {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="fixed left-4 md:left-12 top-0 bottom-0 w-[2px] z-50 pointer-events-none hidden sm:block">
      {/* Background track */}
      <div className="absolute inset-0 bg-primary/10" />
      
      {/* Progress fill from top */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-primary/20 origin-top"
        style={{ scaleY: smoothProgress }}
      />

      {/* Moving progress segment */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-primary"
        style={{ 
          height: "20vh",
          y: y,
        }}
      />

      {/* Leading dot/head */}
      <motion.div 
        className="absolute w-5 h-5 rounded-full bg-primary -left-[9px] border-4 border-background shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        style={{ 
          y: y,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </motion.div>
    </div>
  );
}
