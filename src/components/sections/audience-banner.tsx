import React from 'react';
import Image from 'next/image';

/**
 * AudienceBanner component that clones the full-width image banner with the signature
 * yellow circular text overlay "connecting you to your audience".
 */
const AudienceBanner: React.FC = () => {
  // Using the specific assets provided for this section
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1761409711-mm-audience-bg-2.jpg";
  const yellowRingOverlay = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1761409698-mm-audience-front-1.png";

  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ 
        height: 'calc(100vh - 80px)', 
        minHeight: '600px',
        maxHeight: '1080px',
        marginTop: '2rem'
      }}
    >
      {/* Main Container with rounded corners as per design system */}
      <div className="container h-full px-0 sm:px-6">
        <div className="relative w-full h-full overflow-hidden rounded-[2rem] sm:rounded-[3rem]">
          
          {/* Background Image: Father and Daughter */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="A father and daughter looking at a book together"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Yellow Ring Overlay Element */}
          {/* This image contains the yellow ring and the text "connecting you to your audience" 
              It is positioned to wrap around the subjects precisely. */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <Image
              src={yellowRingOverlay}
              alt="Connecting you to your audience graphic"
              fill
              className="object-contain sm:object-cover scale-110 sm:scale-100"
              sizes="100vw"
              priority
            />
          </div>

          {/* Optional: Subtle gradient to ensure the transition to the next section is smooth 
              Matches the Primary Background color #F5F3E7 */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Decorative spacing element matching the global layout grid */}
      <div className="h-16 w-full bg-[#E5E2D0]/10" />
    </section>
  );
};

export default AudienceBanner;