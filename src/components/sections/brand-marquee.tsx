import React from 'react';
import Image from 'next/image';

/**
 * BrandMarquee Component
 * 
 * An infinite scrolling marquee of partner logos contained within rounded pill-shaped containers.
 * The section features a light beige background (#F5F3E7) and three rows of scrolling logos.
 * 
 * Design Details:
 * - Background: #F5F3E7
 * - Container: Rounded pill-shaped (border-radius: 9999px)
 * - Row animation: Continuous infinite scroll
 * - Typography: Inter, 600 weight for the "Brands that choose" heading
 */

const brandsRow1 = [
  { name: 'Discord', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' },
  { name: 'Paypal', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758543241-logo-paypal-7.png' },
  { name: 'Walmart', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758633618-logo-walmart-8.png' },
  { name: 'Moët & Chandon', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758633714-logo-moet-chandon-9.png' },
  { name: 'Coinbase', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758633775-logo-coinbase-10.png' },
  { name: 'Airbnb', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758633823-logo-airbnb-11.png' },
];

const brandsRow2 = [
  { name: 'Google', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758542873-logo-google-12.png' },
  { name: 'Youtube', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758542873-logo-google-12.png' }, // Fallback to Google if Youtube missing
  { name: 'Uber', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' }, // Placeholder icon
  { name: 'Meta', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' },
  { name: 'Citizens Bank', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' },
  { name: 'American Express', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758542873-logo-google-12.png' },
];

const brandsRow3 = [
  { name: 'Starbucks', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1763478625-starbucks-edited-21.png' },
  { name: 'Amazon', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1758633775-logo-coinbase-10.png' }, // Placeholder
  { name: 'WhatsApp', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' },
  { name: 'NielsenIQ', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' },
  { name: 'HP', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/svgs/1755458576-discord-icon-1-35.svg' },
  { name: 'AnswerLab', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1763478625-starbucks-edited-21.png' },
];

const BrandPill = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full min-w-max shadow-[0_4px_20px_rgba(0,0,0,0.032)] border border-[#E5E2D0]/30 mr-8">
    <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-w-full max-h-full object-contain filter grayscale opacity-90"
      />
    </div>
    <span className="text-[#1A1A1A] font-semibold text-[17px] tracking-tight whitespace-nowrap">
      {name}
    </span>
  </div>
);

const MarqueeRow = ({ brands, reverse = false }: { brands: any[]; reverse?: boolean }) => {
  // Triple the items to ensure seamless loop
  const displayBrands = [...brands, ...brands, ...brands];
  
  return (
    <div className="flex overflow-hidden relative w-full mb-8 select-none">
      <div 
        className={`flex py-2 animate-marquee ${reverse ? 'flex-row-reverse' : ''}`}
        style={{
          animationDuration: '40s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      >
        {displayBrands.map((brand, idx) => (
          <BrandPill key={`${brand.name}-${idx}`} {...brand} />
        ))}
      </div>
      {/* Visual fade masks for smooth transition at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F3E7] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F3E7] to-transparent z-10" />
    </div>
  );
};

export default function BrandMarquee() {
  return (
    <section className="bg-[#F5F3E7] pt-24 pb-32 overflow-hidden">
      <div className="container px-6 mx-auto mb-20 text-center">
        <h2 className="text-[44px] leading-[1.1] font-semibold text-[#1A1A1A] max-w-2xl mx-auto tracking-tight">
          Brands that choose <br /> MindMarket
        </h2>
      </div>

      <div className="relative flex flex-col gap-2">
        <MarqueeRow brands={brandsRow1} />
        <MarqueeRow brands={brandsRow2} reverse={true} />
        <MarqueeRow brands={brandsRow3} />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}