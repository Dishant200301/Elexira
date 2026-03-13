import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import productImage from "/assets/home/product.jpg";

const ScrollingProductJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We use the same scroll target logic as HeroSection if possible, 
  // but this component spans multiple sections. 
  // For the Hero phase (0 to some progress), we match the specific Hero requirements.
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  // Phase mapping (estimated based on sections)
  // 0 - 0.2: Hero Section
  // 0.2 - 0.7: Story Section
  // 0.7 - 1.0: Routine Section

  // Y position: Start centered above hand, move down slowly
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    ["45vh", "80vh", "50vh", "-20vh"] // 45vh is roughly centered above hand in hero
  );

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.7],
    ["0vw", "0vw", "25vw", "30vw"] // Center in Hero, move to right in Story
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [1.2, 1, 0.8, 0.5]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.9, 1],
    [1, 0]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0, 0, 5, -10]
  );

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-x-0 top-0 pointer-events-none h-[300vh] z-30"
      />

      <motion.div
        className="fixed left-1/2 top-0 -translate-x-1/2 pointer-events-none z-40 hidden lg:block"
        style={{
          y: translateY,
          x: translateX,
          scale,
          opacity,
          rotate,
          transformOrigin: "center center",
        }}
      >
        <img
          src={productImage}
          alt="Elexira Pharma Collagen Cream"
          className="w-80 xl:w-[28rem]"
        />
      </motion.div>
    </>
  );
};

export default ScrollingProductJourney;

