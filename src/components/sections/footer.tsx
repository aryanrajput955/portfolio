import React from 'react';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';

/**
 * Footer component for the MindMarket website.
 * Features a large "Let's Connect" typographic heading with a wavy underline,
 * office details, and navigation tree on a bright yellow background.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#E9E12E] px-6 py-16 md:px-12 md:pt-24 md:pb-12 text-[#1A1A1A] rounded-t-[2.5rem] mt-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[#1A1A1A]/10 pb-20">
          
          {/* Left Side: Call to Action and Let's Connect */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="max-w-md mb-16">
              <p className="text-[1.125rem] leading-[1.6] font-medium mb-8">
                Have a project in mind?? We&apos;d love to hear what you&apos;re working on and show you how we can help. Whether you&apos;re exploring a new market or launching your next product, we&apos;re ready when you are.
              </p>
              <Link 
                href="/contact-us" 
                className="group inline-flex items-center gap-2 bg-white rounded-full pl-6 pr-2 py-2 text-[0.875rem] font-semibold transition-all hover:pr-4"
              >
                <span>Get a quote</span>
                <div className="w-8 h-8 rounded-full bg-[#E9E12E] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            <div className="relative inline-block w-fit">
              <h2 className="text-[5rem] md:text-[7.5rem] leading-[0.9] font-semibold tracking-tight">
                Let&apos;s<br />Connect
              </h2>
              {/* Wavy Underline SVG Replacement */}
              <div className="mt-4 -translate-y-2">
                <svg
                  width="100%"
                  height="24"
                  viewBox="0 0 440 24"
                  fill="none"
                  preserveAspectRatio="none"
                  className="text-[#739B51]"
                >
                  <path
                    d="M1 12C1 12 15.6667 23 30.3333 23C45 23 59.6667 1 74.3333 1C89 1 103.667 23 118.333 23C133 23 147.667 1 162.333 1C177 1 191.667 23 206.333 23C221 23 235.667 1 250.333 1C265 1 279.667 23 294.333 23C309 23 323.667 1 338.333 1C353 1 367.667 23 382.333 23C397 23 411.667 1 426.333 1C441 1 441 12 441 12"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Links and Offices */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <nav className="flex flex-col gap-3">
                <Link href="/services" className="text-[1rem] hover:underline font-medium">Services</Link>
                <Link href="/methodology" className="text-[1rem] hover:underline font-medium">Methodology</Link>
                <Link href="/sectors" className="text-[1rem] hover:underline font-medium">Industry Sectors</Link>
                <Link href="/network" className="text-[1rem] hover:underline font-medium">Network</Link>
                <Link href="/about-us" className="text-[1rem] hover:underline font-medium">About Us</Link>
              </nav>
            </div>
            <div>
              <nav className="flex flex-col gap-3">
                <Link href="/articles" className="text-[1rem] hover:underline font-medium">Insights</Link>
                <Link href="/contact-us" className="text-[1rem] hover:underline font-medium">Contact</Link>
                <Link href="/privacy-policy" className="text-[1rem] hover:underline font-medium">Privacy Policy</Link>
                <button className="text-left text-[1rem] hover:underline font-medium">Cookie Preferences</button>
              </nav>
            </div>

            {/* Office Locations */}
            <div className="col-span-2 mt-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[1rem] mb-2 uppercase tracking-wide">Dubai</h4>
                  <p className="text-[0.875rem] leading-snug text-[#1A1A1A]/80">
                    Dubai Silicon Oasis, DDP, <br />
                    Building A2, 341041 Dubai, UAE<br />
                    <span className="inline-block mt-2 font-medium">Mon-Fri 10:00 am - 7:00 pm (GST)</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[1rem] mb-2 uppercase tracking-wide">London</h4>
                  <p className="text-[0.875rem] leading-snug text-[#1A1A1A]/80">
                    3rd Floor, 86-90 Paul Street, <br />
                    London EC2A 4NE, UK<br />
                    <span className="inline-block mt-2 font-medium">Mon-Fri 9:00 am - 6:00 pm (GMT)</span>
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a href="mailto:curious@mindmarket.com" className="text-[1.125rem] font-semibold border-b border-[#1A1A1A] pb-1 hover:border-transparent transition-colors">
                  curious@mindmarket.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-[0.875rem] font-medium text-[#1A1A1A]/60">
            Copyright © {currentYear} MindMarket International
          </div>
          
          <div className="flex items-center gap-12">
            {/* Esomar Logo Placeholder based on screenshots */}
            <div className="flex items-center gap-2">
              <div className="bg-[#1A1A1A] text-white text-[0.625rem] font-bold px-3 py-1 skew-x-[-15deg]">
                <span className="inline-block skew-x-[15deg]">esomar</span>
              </div>
              <span className="text-[0.625rem] font-bold uppercase tracking-tighter opacity-70">Corporate 2024</span>
            </div>
            
            <div className="flex items-center gap-6 text-[0.875rem] font-semibold">
              <Link href="https://www.linkedin.com/in/aryan-rajput-0595b0214" className="hover:opacity-70 flex items-center gap-1">
                LinkedIn
              </Link>
              <Link href="/credits" className="hover:opacity-70">
                Credits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;