import FadeInSection from "@/components/FadeInSection";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
  "/assets/home/instagram_gallery/ig_1.png",
  "/assets/home/instagram_gallery/ig_2.png",
  "/assets/home/instagram_gallery/ig_3.png",
  "/assets/home/instagram_gallery/ig_4.png",
  "/assets/home/instagram_gallery/ig_5.png"
];

const CommunitySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up the scroll progress over this container specifically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Section movement and appearance (Slowly appear from below with zoom)
  const y = useTransform(scrollYProgress, [0, 0.4], isMobile ? [0, 0] : [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [0.85, 1]);
  const scale = useSpring(scaleRaw, { stiffness: 60, damping: 25, mass: 0.5 });

  // Color logic: #676863 while scrolling, #3A3D38 when "stacked/sticky" (arrived)
  const mainTextColor = useTransform(scrollYProgress, [0.3, 0.5], ["#676863", "#3A3D38"]);

  // Gallery animation (Fade-in with slow movement)
  const galleryYRaw = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);
  const galleryY = useSpring(galleryYRaw, { stiffness: 60, damping: 25, mass: 0.5 });
  const galleryOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative z-30 bg-[#F8F5F0] md:bg-transparent mt-[100px] md:mt-[-30vh] pb-12 md:pb-10 overflow-hidden flex flex-col items-center">
      
      {/* Mobile-only Intro Headline - Shows at the top of section naturally */}
      <motion.div 
        style={{ opacity: galleryOpacity }}
        className="flex md:hidden flex-col items-center text-center px-4 mb-4 mt-0"
      >
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center gap-[2px] mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="14" height="13" viewBox="0 0 16 15" fill="none" className="text-[#3a3d38]">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="currentColor" />
              </svg>
            ))}
          </div>
          <p className="font-geist font-medium text-[12px] leading-tight tracking-tight text-[#676863] opacity-90">
            2500+ five-star reviews
          </p>
        </div>
        <h2 className="font-geist font-medium text-[28px] leading-[1.15] tracking-[-1px] text-center max-w-[300px]">
          <span className="text-[#676863]">Join the community that's redefining</span><br />
          <span className="text-[#3A3D38]">skincare, one ingredient at a time.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ y: galleryY, opacity: galleryOpacity }}
        className="w-full flex flex-col items-center px-4 md:px-4 lg:px-6 w-full max-w-[1200px] mx-auto will-change-transform"
      >
        {/* Portrait Gallery */}
        <div className="w-full">
          <div className="w-full grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-2">
            {images.map((src, i) => (
              <div
                key={i}
                className="w-full aspect-[4/5] bg-[#EBE5DC] rounded-[8px] md:rounded-[16px] overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Community member ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
