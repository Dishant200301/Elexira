import { motion } from "framer-motion";

const images = Array.from({ length: 12 }, (_, i) => `/assets/home/instagram_gallery/ig_${i + 1}.png`);
const handles = [
  "@jess.bareskin", "@priya.luminous", "@tara.essentials", "@mei.radiant", 
  "@leila.barefaced", "@zoe.skinjourney", "@cara.freckles", "@sarah.glows", 
  "@emma.skincare", "@mia.radiance", "@lily.natural", "@ava.beauty"
];

const InstagramGallery = () => {
  return (
    <section className="bg-[#F8F5F0] pt-[80px] lg:pt-[40px] pb-[100px] lg:pb-[160px] relative">
      {/* Header Container */}
      <div className="section-container max-w-[1500px] mx-auto px-5 md:px-8 lg:px-[36px] xl:pr-[30px] mb-[48px] lg:mb-[72px] flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="shrink-0 mb-6 lg:mb-8 md:mb-0">
          <h2 className="font-geist font-medium text-[30px] md:text-[44px] lg:text-[55px] xl:text-[64px] leading-[1.1] lg:leading-[55px] xl:leading-[70px] text-[#3a3d38] tracking-[-1.5px] md:tracking-[-2.56px]">
            Our journey<br />continues on social.
          </h2>
        </div>
        
        {/* Handle and Button Container */}
        <div className="flex flex-col items-start md:items-center gap-[16px] md:gap-[24px] w-full md:w-[206px]">
          <span className="font-geist font-medium text-[18px] md:text-[24px] leading-[24px] md:leading-[31px] text-[#545454] tracking-[-0.72px]">
            @essentia.skincare
          </span>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:w-max px-8 md:px-0 md:w-full h-[48px] rounded-[8px] bg-[#D4DCCF] hover:bg-[#C9CEC2] transition-colors"
            style={{ backdropFilter: 'blur(2.5px)' }}
          >
            <span className="font-geist font-medium text-[16px] leading-[24px] text-[#3a3d38] tracking-[-0.32px]">
              Follow along
            </span>
          </a>
        </div>
      </div>

      {/* Ticker Container */}
      <div className="flex overflow-hidden relative group">
        <div className="ticker-track !gap-[8px] hover:[animation-play-state:paused] !animate-[ticker_40s_linear_infinite]">
          {[...images, ...images].map((src, i) => (
            <a 
              key={i} 
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-[8px] overflow-hidden transition-all duration-500 group/card block"
            >
              <img 
                 src={src} 
                alt={`Instagram post ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-700 group-hover/card:blur-[10px]"
              />
              
              {/* White Overlay on Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover/card:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
              
              {/* Handle Text */}
              <span className="absolute bottom-[12px] left-[12px] font-geist font-medium text-white text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] tracking-[-0.28px] mix-blend-exclusion z-10">
                {handles[i % handles.length]}
              </span>

              {/* Top Right Arrow */}
              <svg 
                className="absolute top-[16px] right-[16px] md:top-[24px] md:right-[24px] w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.66667" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
