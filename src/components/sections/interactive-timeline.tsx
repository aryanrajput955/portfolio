import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const InteractiveTimeline = () => {
  return (
    <section className="c-homepage-timeline relative bg-[#F5F3E7] overflow-hidden">
      {/* Intro Description Block */}
      <div className="container relative z-10 pt-32 pb-16">
        <div className="grid grid-cols-6 gap-6 md:grid-cols-16">
          <div className="col-span-full md:col-start-2 md:col-span-14">
            <div className="grid md:grid-cols-14">
              <div className="flex flex-col gap-9 md:col-start-1 md:col-end-8 max-w-[700px]">
                <p className="text-[#1A1A1A] text-[1.5rem] md:text-[2rem] font-medium leading-[1.3] tracking-tight">
                  MindMarket delivers global qualitative market research through real people who understand local cultures. We connect you with the voices that matter— wherever they are — to help you make smarter, faster business decisions with confidence.
                </p>
                <div>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-[#FFFFFF] rounded-full font-semibold text-sm transition-all hover:bg-neutral-100 group border border-transparent shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#739B51] flex items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-[#1A1A1A]">Get a quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Winding Timeline Area */}
      <div className="relative min-h-[4000px] w-full mt-20">
        {/* Background Image - The Green Winding Path */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/hero-background-illustration-1.svg"
            alt="Winding path background"
            fill
            className="object-top object-contain"
            priority
          />
        </div>

        {/* Narrative Cards and Floating Illustrations */}
        <div className="container relative z-10 mx-auto px-6">
          {/* Section 1: No more chaos */}
          <div className="relative pt-[200px] flex justify-end">
            <div className="narrative-card max-w-[480px] bg-white rounded-[32px] p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="text-[2.5rem] font-semibold text-[#1A1A1A] mb-6 leading-[1.1]">No more chaos.</h3>
              <p className="text-[#1A1A1A] text-lg leading-[1.6] mb-10">
                Managing multiple vendors, juggling time zones, translating insights across cultures — it adds up fast. At MindMarket, we bring it all under one roof. No misalignment, no friction, just seamless collaboration from start to finish.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F27059] text-white rounded-full font-semibold text-sm group transition-all hover:bg-[#e05e47]"
              >
                Services
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>
            </div>
          </div>

          {/* Section 2: One brief */}
          <div className="relative pt-[600px] flex justify-start">
            <div className="narrative-card max-w-[480px] bg-white rounded-[32px] p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="text-[2.5rem] font-semibold text-[#1A1A1A] mb-6 leading-[1.1]">One brief. One team.</h3>
              <p className="text-[#1A1A1A] text-lg leading-[1.6] mb-10">
                You brief us once and we take it from there. From methodology design and recruitment to local moderation and reporting, everything is managed by a single point of contact who leads your study from start to finish. You get clear updates, fast turnarounds, and high-quality insights—without compromise.
              </p>
              <a
                href="/methodology"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E9E12E] text-[#1A1A1A] rounded-full font-semibold text-sm group transition-all hover:bg-[#d8d020]"
              >
                Methodology
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Section 3: Speak their language */}
          <div className="relative pt-[700px] flex justify-center">
            <div className="narrative-card max-w-[480px] bg-white rounded-[32px] p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] ml-auto md:mr-[10%]">
              <h3 className="text-[2.5rem] font-semibold text-[#1A1A1A] mb-6 leading-[1.1]">Speak their language.</h3>
              <p className="text-[#1A1A1A] text-lg leading-[1.6] mb-10">
                From gaming to fintech, hospitality to consumer goods, each industry speaks its own language. Our in-market experts don’t just understand people, they understand the context. We bring cultural insight shaped by the sector you’re in, so your message hits home in every market.
              </p>
              <a
                href="/sectors"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3BA7FF] text-white rounded-full font-semibold text-sm group transition-all hover:bg-[#2b96e6]"
              >
                Industry Sectors
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>
            </div>
          </div>

          {/* Section 4: Global, for real */}
          <div className="relative pt-[600px] flex justify-end">
            <div className="narrative-card max-w-[480px] bg-white rounded-[32px] p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] mr-10">
              <h3 className="text-[2.5rem] font-semibold text-[#1A1A1A] mb-6 leading-[1.1]">Global, for real.</h3>
              <p className="text-[#1A1A1A] text-lg leading-[1.6] mb-10">
                Whether you’re researching one market or launching in ten, we scale with you. One partner. Global reach. Consistent quality. Our global network spans regions and industries, giving you on-demand access to the right participants in the right places, without starting from scratch.
              </p>
              <a
                href="/network"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5C3FF] text-[#1A1A1A] rounded-full font-semibold text-sm group transition-all hover:bg-[#d4b2ee]"
              >
                Our Network
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Area of the Timeline - Transitions to next section */}
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-[#739B51] rounded-t-[80px] flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-[4rem] md:text-[5.5rem] font-semibold text-[#1A1A1A] leading-none mb-8">
            Ready when<br />you are!
          </h2>
          <p className="text-[#1A1A1A] text-lg max-w-[500px] mx-auto mb-10">
            Whether you&apos;re launching in one market or ten, we&apos;re here to make your research simple, smart, and human from day one. Let&apos;s talk about your next project.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-semibold text-sm transition-transform hover:scale-105 group"
          >
            Get a quote
            <span className="w-6 h-6 rounded-full bg-[#739B51] flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </a>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-[#1A1A1A] font-medium opacity-80 max-w-[1000px] w-full">
            <span className="text-sm">Fast, high-quality insights</span>
            <span className="text-sm">One seamless project lead</span>
            <span className="text-sm">Built for multi-market studies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;