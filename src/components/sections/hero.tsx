import React from 'react';

/**
 * Hero component for the MindMarket homepage.
 * Replicates the "Real human insights" headline with the sticky/transitioning green background.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 
        The hero section in the design is composed of two main layers:
        1. A fixed/sticky background layer that starts solid green.
        2. A content layer that scrolls over it.
        Actually, the HTML structure shows a c-hero-home container with sticky behavior. 
      */}
      <div className="c-hero-home relative bg-brand-green">
        {/* Sticky inner container */}
        <div className="c-hero-home_inner -sticky sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container relative z-10 mx-auto px-6">
            <div className="c-hero-home_content max-w-4xl">
              {/* Animations handled by CSS classes provided in the project base */}
              <div className="anim-first-hit -delay-2 mb-2 md:mb-4 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards" style={{ animationDelay: '200ms' }}>
                <h1 
                  className="text-white font-display font-semibold text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-[-0.02em]"
                >
                  Real human insights
                </h1>
              </div>
              <div className="anim-first-hit -delay-1 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards" style={{ animationDelay: '400ms' }}>
                <h2 
                  className="text-white/80 font-display font-semibold text-[2rem] md:text-[3rem] leading-[1.2] tracking-[-0.02em]"
                >
                  One global partner
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* 
          Duplicate layer for the scroll transition effect. 
          The original site uses this technique to create the "reveal" effect as you scroll.
        */}
        <div className="c-hero-home_inner h-screen absolute top-0 left-0 w-full pointer-events-none flex items-center overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="c-hero-home_content max-w-4xl">
              <div className="sm:anim-first-hit -delay-2 mb-2 md:mb-4">
                <div className="text-white font-display font-semibold text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-[-0.02em] opacity-0 select-none">
                  Real human insights
                </div>
              </div>
              <div className="sm:anim-first-hit -delay-1">
                <div className="text-white/80 font-display font-semibold text-[2rem] md:text-[3rem] leading-[1.2] tracking-[-0.02em] opacity-0 select-none">
                  One global partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        This spacer provides the scroll depth needed to see the transition.
        In the real site, the next section (the timeline) begins directly after this.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        .c-hero-home {
          height: 100vh;
          background-color: #739B51; /* Brand Green */
        }
        .c-hero-home_inner.-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          background-color: #739B51;
        }
        @media (max-width: 768px) {
          .c-hero-home_title {
            font-size: 3.5rem;
          }
          .c-hero-home_tagline {
            font-size: 2rem;
          }
        }
      `}} />
    </section>
  );
}