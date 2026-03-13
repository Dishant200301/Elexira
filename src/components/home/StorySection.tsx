import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stories = [
  {
    num: "01",
    title: "Five ingredients.\nNothing more.",
    desc: "Our pharma-grade collagen formula uses only five clinically proven ingredients. Each one is selected for maximum efficacy and minimal irritation, delivering results without the filler.",
  },
  {
    num: "02",
    title: "Proven by people\nlike you.",
    desc: "In clinical trials with over 400 participants across six skin types, our minimal formulations outperformed leading complex products in 83% of objective skin health measurements.",
  },
  {
    num: "03",
    title: "Quality over\nquantity.",
    desc: "Higher concentrations of proven actives become possible when formulators aren't allocating percentage space to unnecessary additions. Less truly means more.",
  },
  {
    num: "04",
    title: "The last skincare\nyou'll ever need.",
    desc: "Simplify your routine to what actually works. Our pharma collagen cream replaces your multi-step regimen with a single, powerfully effective product.",
  },
];

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef}
      className="relative bg-transparent h-[400vh] overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="section-container w-full px-4 sm:px-8 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text Blocks (One by one) */}
            <div className="relative h-[500px] md:h-[300px] xl:h-[350px] flex items-start pt-[12vh] md:pt-0 md:items-center">
              {stories.map((story, i) => {
                const start = i / stories.length;
                const end = (i + 1) / stories.length;
                
                // Opacity: fade in and out
                const opacity = useTransform(
                  scrollYProgress,
                  [start, start + 0.1, end - 0.1, end],
                  [0, 1, 1, 0]
                );
                
                // Y transform: slide up then exit up
                const y = useTransform(
                  scrollYProgress,
                  [start, start + 0.1, end - 0.1, end],
                  [20, 0, 0, -20]
                );

                return (
                  <motion.div
                    key={i}
                    style={{ opacity, y }}
                    className="absolute inset-x-0 top-[5vh] md:top-auto md:inset-0 flex flex-col justify-start md:justify-center"
                  >
                    <span className="badge-green mb-4 md:mb-6 inline-block w-fit">{story.num}</span>
                    <h2 className="font-geist font-medium text-[30px] sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#3A3D38] leading-tight whitespace-pre-line mb-4 md:mb-6 md:max-w-none">
                      {story.title}
                    </h2>
                    <p className="text-[#545454] font-geist font-medium text-[15px] md:text-base leading-relaxed  md:max-w-md">
                      {story.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right - Dynamic side spacing for the shared product from Index.tsx */}
            <div className="hidden lg:block w-full h-[600px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
    