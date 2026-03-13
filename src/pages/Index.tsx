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


  // Layer 3: Shared Product Animation
  // Position moves from center-screen to right-aligned
  // Total Scroll: 760vh (Hero 180 + Ingredients 180 + Story 400)
  // Hero: 0.00 to ~0.24
  // Ingredients: ~0.24 to ~0.47
  // Story: ~0.47 to 1.00
  const xOutput = isMobile 
    ? ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw"] 
    : ["0vw", "0vw", "0vw", "0vw", "28vw", "28vw"];
  const productXRaw = useTransform(scrollYProgress, [0, 0.20, 0.25, 0.40, 0.48, 1], xOutput);
  const productX = useSpring(productXRaw, springConfig);

  // Y movement:
  // Starts about hand-height in Hero, moves DOWN to follow hand, then settles at 45vh (half-submerged) for IngredientsHero
  // so that the text can comfortably appear above it.
  // Finally, moves UP to -15vh for StorySection perfectly aligned with the text block.
  const yOutput = isMobile
    ? ["12vh", "10vh", "20vh", "20vh", "20vh", "20vh"]
    : ["-2vh", "0vh", "45vh", "45vh", "5vh", "5vh"];
  const productYRaw = useTransform(scrollYProgress, [0, 0.18, 0.25, 0.40, 0.48, 1], yOutput);
  const productY = useSpring(productYRaw, springConfig);

  // Ensure constant product scale across sections
  const scaleOutput = isMobile ? [1.0, 1.0] : [1.15, 1.15];
  const productScaleRaw = useTransform(scrollYProgress, [0, 1], scaleOutput);
  const productScale = useSpring(productScaleRaw, springConfig);

  const productOpacity = useTransform(scrollYProgress, [0, 0.985, 1], [1, 1, 1]);

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
