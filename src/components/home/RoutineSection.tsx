import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const stepApply = "/assets/home/routine/step-apply.jpg";
const creamTexture = "/assets/home/routine/cream-texture.jpg";
const heroPortrait = "/assets/home/routine/hero-portrait.jpg";

const steps = [
  {
    num: "Step 01",
    title: "Apply",
    desc: "Apply a small pearl-sized amount to fingertips and gently dot onto clean face",
    image: stepApply,
    zIndex: 40,
    offset: { x: 0, y: 0, scale: 1.03 },
  },
  {
    num: "Step 02",
    title: "Distribute",
    desc: "Gently spread the formula evenly across your face using light upward strokes.",
    image: creamTexture,
    zIndex: 20,
    offset: { x: 30, y: -20, scale: 0.98 },
  },
  {
    num: "Step 03",
    title: "Press",
    desc: "Press palms gently against skin to aid absorption and boost circulation.",
    image: heroPortrait,
    zIndex: 10,
    offset: { x: 60, y: -40, scale: 0.92 },
  },
];

const RoutineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoothing the scroll progress for more premium movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Desktop transforms (Peel off) - Card 1 & 2 move away to reveal cards below
  const y1Desktop = useTransform(smoothProgress, [0, 0.4], ["0%", "-150%"]);
  const y2Desktop = useTransform(smoothProgress, [0.5, 0.9], ["0%", "-150%"]);
  const y3Desktop = "0%";

  // Mobile transforms (Stack on top) - Cards slide up to cover previous cards
  // Card 1 stays pinned, Card 2 covers Card 1, Card 3 covers Card 2
  const y1Mobile = "0%";
  const y2Mobile = useTransform(smoothProgress, [0.1, 0.45], ["110%", "0%"]);
  const y3Mobile = useTransform(smoothProgress, [0.55, 0.9], ["110%", "0%"]);

  // Adjust offsets and z-index for different screen sizes
  const responsiveSteps = steps.map((step, i) => {
    if (isDesktop) return step;

    if (isMobile) {
      // Mobile: Perfectly centered for clean stacking, z-index increases to stack on top
      const mobileZIndexes = [10, 20, 30];
      return {
        ...step,
        offset: { x: 0, y: 0, scale: 1.0 },
        zIndex: mobileZIndexes[i]
      };
    }

    // Tablet: Keep minimal stagger from previous version, use desktop-style peel-off transforms
    const tabletOffsets = [
      { x: 0, y: 0, scale: 1.02 },
      { x: 12, y: -8, scale: 0.99 },
      { x: 24, y: -16, scale: 0.96 },
    ];
    return {
      ...step,
      offset: tabletOffsets[i]
    };
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="lg:max-w-[800px] xl:max-w-[1300px] mx-auto px-6 md:px-8 lg:px-0 xl:px-[48px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            {/* Left/Top - Headline */}
            <div className="text-left md:text-center lg:text-left pt-8 lg:pt-0">
              <h2 className="font-geist font-medium text-[28px] md:text-[40px] lg:text-[44px] xl:text-[64px] leading-[1.1] tracking-[-0.04em] xl:tracking-[-2.56px] text-[#3A3D38] max-w-[700px] mx-auto lg:mx-0">
                Your new skincare<br />
                <span className="whitespace-nowrap">routine is <span className="font-bold">beautifully</span></span><br />
                <span className="font-bold">simple.</span>
              </h2>
            </div>

            {/* Right/Bottom - Sequential Stacking Cards */}
            <div className="relative aspect-[1/1.4] md:aspect-[1/1] lg:aspect-[4/5] xl:aspect-[4/5] max-w-[340px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] mx-auto lg:ml-auto w-full">
              {responsiveSteps.map((step, i) => (
                <motion.div
                  key={i}
                  style={{
                    y: isMobile
                      ? (i === 0 ? y1Mobile : i === 1 ? y2Mobile : y3Mobile)
                      : (i === 0 ? y1Desktop : i === 1 ? y2Desktop : y3Desktop),
                    x: step.offset.x,
                    scale: step.offset.scale,
                    top: step.offset.y,
                    zIndex: step.zIndex,
                  }}
                  className="absolute inset-0 w-full h-full rounded-[6px] overflow-hidden shadow-xl origin-bottom-right bg-white"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-10 lg:p-10 flex flex-col justify-end">
                    <div className="mb-2">
                      <span className="bg-[#D4D9D2] text-[#3A3D38] px-3 py-1 rounded-full font-geist font-medium text-[10px] md:text-[12px] leading-tight">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-geist font-bold text-white text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.03em] mb-1 md:mb-2">
                      {step.title}
                    </h3>

                    <p className="font-geist font-normal text-white/95 text-[14px] md:text-[16px] leading-[1.3] max-w-[280px] md:max-w-[320px]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;
