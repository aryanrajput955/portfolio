"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navLinks = [
      { name: "About", href: "#about" },
      { name: "Tech", href: "#tech" },
      { name: "What I Do", href: "#what-i-do" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`
            pointer-events-auto
            flex items-center justify-between
            w-full max-w-[1440px] h-[72px]
            bg-white/80 backdrop-blur-md rounded-[2rem] px-5 sm:px-8
            transition-all duration-300 ease-in-out
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            ${isScrolled ? "scale-95" : "scale-100"}
          `}
        >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                AR
              </div>
              <span className="text-[22px] font-semibold tracking-tight text-[#1A1A1A]">
                Aryan Rajput
              </span>
            </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-[#1A1A1A] hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1A1A1A] text-[14px] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
            >
              Resume
            </Link>

            <Link
              href="#contact"
              className="group relative hidden sm:flex items-center gap-3 bg-[#1A1A1A] text-white pl-6 pr-1.5 py-1.5 rounded-full overflow-hidden hover:bg-black transition-colors"
            >
              <span className="text-[14px] font-bold">Let's talk</span>
              <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-background p-6 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[20px] font-bold">Portfolio</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[32px] font-semibold text-[#1A1A1A]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-8 flex items-center justify-between bg-secondary p-6 rounded-[2rem] text-[#1A1A1A] font-bold text-[24px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
                <ArrowRight size={32} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between border-2 border-[#1A1A1A] p-6 rounded-[2rem] text-[#1A1A1A] font-bold text-[24px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
                <ArrowRight size={32} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
