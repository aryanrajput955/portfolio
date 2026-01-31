import React from 'react';
import Image from 'next/image';

const articles = [
  {
    title: "Luxury Spirits Market Research in Asia: How Human Insights Shaped a Tequila Brand's APAC Strategy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1765801445-luxury-spirits-consumer-asia-pacific-co-3.webp",
    region: "Asia-Pacific",
    category: "Case Studies",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Wearables User Research: Understanding Hydration Habits Among Fitness Enthusiasts in London",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1764339981-fitness-enthusiasts-hydrating-gym-londo-4.webp",
    region: "Europe",
    category: "Case Studies",
    span: "md:col-span-8 md:row-span-1",
  },
  {
    title: "Pan-European Crypto UX Research: Unlocking Onboarding Insights Across Six Markets",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1764335175-pan-european-crypto-ux-research-case-st-5.webp",
    region: "Europe",
    category: "Case Studies",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Cross-Border UX Research: Unifying Online Grocery Shopping Across Latin America",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6275f792-c0b9-4044-b606-c47edc95f19e-mindmarket-com/assets/images/1763462522-cross-border-ux-research-unifying-onlin-6.webp",
    region: "Latin America",
    category: "Case Studies",
    span: "md:col-span-4 md:row-span-1",
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F3E7]">
      <div className="container px-6 mx-auto max-w-[1440px]">
        {/* Section Header (Optional/Hidden match structure) */}
        <h2 className="sr-only">Featured Articles</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-16 gap-x-6 gap-y-12">
          
          {/* Article 1 - Large Left */}
          <div className={`${articles[0].span} flex flex-col group`}>
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-auto md:flex-grow">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-white px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#1A1A1A]">
                  {articles[0].region}
                </span>
                <span className="bg-white px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#1A1A1A]">
                  {articles[0].category}
                </span>
              </div>
            </div>
            <h3 className="mt-8 text-[24px] md:text-[28px] leading-[1.2] font-medium text-[#1A1A1A] max-w-2xl">
              {articles[0].title}
            </h3>
          </div>

          {/* Right Column Group (Rest of articles) */}
          <div className="md:col-span-8 flex flex-col gap-12">
            
            {/* Article 2 - Top Right Small/Wide */}
            <div className="flex flex-col group">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9]">
                <Image
                  src={articles[1].image}
                  alt={articles[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#1A1A1A]">
                    {articles[1].region}
                  </span>
                  <span className="bg-white px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#1A1A1A]">
                    {articles[1].category}
                  </span>
                </div>
              </div>
              <h3 className="mt-6 text-[18px] md:text-[20px] leading-[1.3] font-medium text-[#1A1A1A]">
                {articles[1].title}
              </h3>
            </div>

            {/* Bottom Row - Two Small Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.slice(2).map((article, idx) => (
                <div key={idx} className="flex flex-col group">
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white px-3 py-1 rounded-full text-[11px] font-semibold text-[#1A1A1A]">
                        {article.region}
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-[11px] font-semibold text-[#1A1A1A]">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-[16px] md:text-[18px] leading-[1.4] font-medium text-[#1A1A1A]">
                    {article.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;