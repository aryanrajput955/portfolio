import React from 'react';

/**
 * StatsOverview component clones the statistics section of the MindMarket website.
 * Featuring:
 * - A title: "A few numbers behind the insights we deliver"
 * - A descriptor paragraph
 * - Three saturated color blocks (Sky Blue, Brand Green, Accent Coral)
 * 
 * Theme: light (consistent with #F5F3E7 background)
 * Typography: Inter (Sans-serif)
 */

const StatsOverview = () => {
  const stats = [
    {
      number: "55+",
      description: "Our network spans over 55 countries, giving you local insight with global consistency.",
      bgColor: "bg-[#3BA7FF]", // Brand Blue
    },
    {
      number: "300+",
      description: "We’ve successfully delivered more than 300 research projects around the world — and counting.",
      bgColor: "bg-[#739B51]", // Brand Green
    },
    {
      number: "40+",
      description: "From global brands to growing startups, more than 40 clients have partnered with us.",
      bgColor: "bg-[#F27059]", // Accent Coral
    },
  ];

  return (
    <section className="bg-[#F5F3E7] py-24 md:py-32">
      <div className="container max-w-[1440px] px-6 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 px-4">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-semibold leading-[1.1] text-[#1A1A1A] mb-6 tracking-[-0.02em]">
              A few numbers behind the insights we deliver
            </h2>
            <p className="text-lg md:text-xl text-[#1A1A1A] opacity-80 leading-relaxed font-normal max-w-xl">
              These numbers are more than just milestones. They represent the strength of our connections, the consistency of our work, and the real-world impact we help create for you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-[2rem] p-10 md:p-12 flex flex-col justify-between aspect-square md:aspect-auto min-h-[380px] transition-transform duration-300 hover:scale-[1.02] shadow-sm`}
            >
              <div className="flex justify-start">
                {/* Decorative circle typical of the design's playful style */}
                <div className="w-16 h-1 w-1 bg-white opacity-20 rounded-full mb-8"></div>
              </div>
              
              <div>
                <span className="block text-[5rem] md:text-[6rem] font-bold text-white leading-none mb-6 tracking-tighter">
                  {stat.number}
                </span>
                <p className="text-white text-lg md:text-xl font-medium leading-[1.4] opacity-90 max-w-[280px]">
                  {stat.description}
                </p>
              </div>

              {/* Lower corner decorative slot (placeholder for unique brand ring elements if needed) */}
              <div className="self-end mt-4 opacity-50">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                 </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;