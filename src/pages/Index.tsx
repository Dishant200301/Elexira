import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import RoutineSection from "@/components/home/RoutineSection";
import IngredientsSection from "@/components/home/IngredientsSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import ResultsSection from "@/components/home/ResultsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CommunitySection from "@/components/home/CommunitySection";
import ProductPreviewSection from "@/components/home/ProductPreviewSection";
import TrustStrip from "@/components/home/TrustStrip";
import FAQSection from "@/components/home/FAQSection";
import InstagramGallery from "@/components/home/InstagramGallery";
import JournalSection from "@/components/home/JournalSection";
import IngredientsHero from "@/components/home/IngredientsHero";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Index = () => {
  const brandSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: brandSectionRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Spring configuration for silky smooth movement
  const springConfig = { stiffness: 60, damping: 20, mass: 0.5, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Layer 3: Shared Product Animation
  // Position moves from center-screen to right-aligned
  // Total Scroll: 760vh (Hero 180 + Ingredients 180 + Story 400)
  // Hero: 0.00 to ~0.24 (0.237)
  // Ingredients: ~0.24 to ~0.47 (0.474)
  // Story: ~0.47 to 1.00
  const xOutput = isMobile
    ? ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw"]
    : ["0vw", "0vw", "0vw", "0vw", "28vw", "28vw"];
  // New breakpoints based on 120vh Hero + 120vh Ingredients + 400vh Story = 640vh Total
  // 80/640 = 0.125
  // 120/640 = 0.187
  // 240/640 = 0.375
  // 300/640 = 0.468
  const productX = useTransform(smoothProgress, [0, 0.125, 0.187, 0.375, 0.468, 1], xOutput);

  // Y movement:
  // - Starts slightly above center (-2vh) in Hero.
  // - Moves DOWN to follow hand (45vh) exactly during the pinned phase (0 to 80vh scroll).
  // - Stays at 45vh during Ingredients section (up to 360vh total scroll).
  // - Finally, moves UP to 5vh for StorySection (starts at 360vh scroll, pins at ~410vh).
  // Keyframes (Scroll / 760):
  // 0: Start (0)
  // 80/760 = 0.105: End of Hero Pin (Together with hand)
  // 180/760 = 0.237: Transition to Ingredients
  // 360/760 = 0.474: End of Ingredients
  // 418/760 = 0.55: Pinned in Story
  const productY = useTransform(
    smoothProgress,
    [0, 0.125, 0.187, 0.375, 0.468, 1],
    isMobile
      ? ["12vh", "12vh", "20vh", "20vh", "10vh", "10vh"]
      : ["-2vh", "45vh", "45vh", "45vh", "5vh", "5vh"]
  );

  // Ensure constant product scale across sections
  const scaleOutput = isMobile ? [1.0, 1.0] : [1.15, 1.15];
  const productScale = useTransform(smoothProgress, [0, 1], scaleOutput);

  const productOpacity = useTransform(smoothProgress, [0, 0.985, 1], [1, 1, 1]);

  return (
    <>
      <Helmet>
        <title>Elexira™ — Pharma Collagen Skincare</title>
        <meta name="description" content="Your healthiest skin revealed. Premium pharma collagen skincare with only 5 essential ingredients for maximum results." />
      </Helmet>
      {/* Unified Brand Sections Group */}
      <div ref={brandSectionRef} className="relative overflow-visible">

        {/* Layer 1: Background Branding Text (Continuous across sections) */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none select-none z-0">
          <div className="sticky top-0 h-screen w-full flex items-end justify-center overflow-hidden">
            <span
              className="text-[32vw] font-geist font-bold text-[#3A3D38]/[0.08] tracking-[-0.05em] leading-none block whitespace-nowrap transform-gpu"
            >
              Elexira
            </span>
          </div>
        </div>

        {/* Layer 3: Global Animated Product */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <motion.div
              style={{
                x: productX,
                y: productY,
                scale: productScale,
                opacity: productOpacity,
              }}
              className="w-full max-w-[150px] md:max-w-[150px] lg:max-w-[200px] flex justify-center"
            >
              <img
                src="/assets/home/hero/product.jpg"
                alt="Elexira Product"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Layer 2: Section Content */}
        <div className="relative z-10">
          <HeroSection />
          <IngredientsHero />
          <StorySection />
        </div>
      </div>
      <RoutineSection />
      <IngredientsSection />
      <ProblemSolutionSection />
      <ResultsSection />
      <TestimonialSection />
      <CommunitySection />
      <ProductPreviewSection />
      <TrustStrip />
      <FAQSection />
      <InstagramGallery />
      <JournalSection />
    </>
  );
};

export default Index;
