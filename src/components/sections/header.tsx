import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const methodologies = [
    "Online Bulletin Boards",
    "Focus Groups, Dyads & Triads",
    "Taste Testing",
    "Central Location Testing",
    "Customer Intercept",
    "Online Diary",
    "Mystery Shopping",
    "Shop-Along",
    "UX Research",
    "In-depth Interviews",
    "Ethnographic Research",
  ];

  const sectors = [
    "Automotive",
    "Technology",
    "Sports",
    "Gaming",
    "FMCG",
    "Food & Beverage",
    "Financial Services",
    "Beauty & Cosmetics",
    "Crypto",
    "Hospitality",
    "Consulting",
    "Pharmaceutical",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            flex items-center justify-between
            w-full max-w-[1440px] h-[72px]
            bg-white rounded-[2rem] px-5 sm:px-8
            transition-all duration-300 ease-in-out
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            ${isScrolled ? "scale-95 opacity-95" : "scale-100 opacity-100"}
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1761505611-favicon-38.svg"
                alt="MindMarket Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[22px] font-semibold tracking-tight text-[#1A1A1A]">
              MindMarket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link
              href="/services"
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#739B51] transition-colors"
            >
              Services
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#1A1A1A] group-hover:text-[#739B51] transition-colors">
                Methodology
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown would go here - simplified for basic UI structure */}
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#1A1A1A] group-hover:text-[#739B51] transition-colors">
                Industry Sectors
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            <Link
              href="/network"
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#739B51] transition-colors"
            >
              Network
            </Link>

            {/* Subtle Menu Circle Toggle */}
            <button className="w-10 h-10 rounded-full bg-[#739B51] flex items-center justify-center text-white hover:scale-105 transition-transform">
              <Menu size={20} />
            </button>
          </div>

          {/* Right Side CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="group relative hidden sm:flex items-center gap-3 bg-[#1A1A1A] text-white pl-6 pr-1.5 py-1.5 rounded-full overflow-hidden hover:bg-black transition-colors"
            >
              <span className="text-[14px] font-bold">Get a quote</span>
              <div className="relative z-10 w-10 h-10 rounded-full bg-[#739B51] flex items-center justify-center transition-transform group-hover:scale-110">
                <canvas 
                  className="absolute inset-0 pointer-events-none" 
                  width="40" 
                  height="40"
                  style={{ width: '40px', height: '40px' }}
                />
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
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#F5F3E7] p-6 lg:hidden flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1761505611-favicon-38.svg"
                alt="MindMarket Logo"
                className="w-8 h-8"
              />
              <span className="text-[20px] font-bold">MindMarket</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 overflow-y-auto pb-12">
            <Link
              href="/services"
              className="text-[32px] font-semibold text-[#1A1A1A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            <div className="border-b border-[#E5E2D0] pb-4">
              <button
                onClick={() => toggleDropdown("methodology")}
                className="w-full flex justify-between items-center text-[32px] font-semibold text-[#1A1A1A]"
              >
                Methodology
                <ChevronDown
                  className={`w-8 h-8 transition-transform ${
                    activeDropdown === "methodology" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "methodology" && (
                <div className="mt-4 flex flex-col gap-3 pl-4">
                  {methodologies.slice(0, 5).map((m) => (
                    <Link
                      key={m}
                      href="#"
                      className="text-[18px] text-[#666666]"
                    >
                      {m}
                    </Link>
                  ))}
                  <Link
                    href="/methodology"
                    className="text-[18px] font-bold text-[#739B51]"
                  >
                    See All
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-[#E5E2D0] pb-4">
              <button
                onClick={() => toggleDropdown("sectors")}
                className="w-full flex justify-between items-center text-[32px] font-semibold text-[#1A1A1A]"
              >
                Industry Sectors
                <ChevronDown
                  className={`w-8 h-8 transition-transform ${
                    activeDropdown === "sectors" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "sectors" && (
                <div className="mt-4 flex flex-col gap-3 pl-4">
                  {sectors.slice(0, 5).map((s) => (
                    <Link
                      key={s}
                      href="#"
                      className="text-[18px] text-[#666666]"
                    >
                      {s}
                    </Link>
                  ))}
                  <Link
                    href="/sectors"
                    className="text-[18px] font-bold text-[#739B51]"
                  >
                    See All
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/network"
              className="text-[32px] font-semibold text-[#1A1A1A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Network
            </Link>
            
            <Link
              href="/contact-us"
              className="mt-8 flex items-center justify-between bg-[#E9E12E] p-6 rounded-[2rem] text-[#1A1A1A] font-bold text-[24px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
              <ArrowRight size={32} />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;