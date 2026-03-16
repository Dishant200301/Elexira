import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

  // Use smooth spring for the story transitions
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section 
      ref={containerRef}
      className="relative bg-transparent h-[350vh] overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="section-container w-full px-4 sm:px-8 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text Blocks (Sequential Slide Reveal) */}
            <div className="relative h-[500px] md:h-[400px] xl:h-[450px] flex items-start pt-[12vh] md:pt-0 md:items-center">
              {stories.map((story, i) => {
                const start = i / stories.length;
                const end = (i + 1) / stories.length;
                
                // Entry phase: start to start + 0.12
                // Hold phase: start + 0.12 to end - 0.12
                // Exit phase: end - 0.12 to end
                
                 // Opacity: fade in then fade out (very fast reveal for sharp #3A3D38 color)
                const opacity = useTransform(
                  smoothProgress,
                  [start, start + 0.02, end - 0.02, end],
                  [0, 1, 1, 0]
                );
                
                // Y transform: slide in from bottom (150px) to center (0), then exit upward (-150px)
                const y = useTransform(
                  smoothProgress,
                  [start, start + 0.08, end - 0.08, end],
                  [150, 0, 0, -150]
                );

                return (
                  <motion.div
                    key={i}
                    style={{ opacity, y }}
                    className="absolute inset-x-0 top-[5vh] md:top-auto md:inset-0 flex flex-col justify-start md:justify-center"
                  >
                    <span className="badge-green mb-4 md:mb-6 inline-block w-fit">{story.num}</span>
                    <h2 className="font-geist font-medium text-[36px] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#3A3D38] leading-tight whitespace-pre-line mb-6 md:mb-8 md:max-w-none">
                      {story.title}
                    </h2>
                    <p className="text-[#3A3D38] font-geist font-medium text-[16px] md:text-lg leading-relaxed md:max-w-md">
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
    