import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const testimonials = [
  {
    name: "Kai Tanaka",
    role: "frequent traveler",
    quote: "I'm on planes constantly and my skin was so dehydrated and angry. The travel size is perfect for my carry-on and actually WORKS, unlike all the other travel-sized stuff I've tried.",
    avatar: "/assets/about/Dr.elena.png",
    pos: { col: 0, top: 200 }
  },
  {
    name: "Sarah Mitchell",
    role: "combination skin",
    quote: "Honestly? I was just tired of the guesswork. This works, it's simple, and I've saved a ton of money. My bathroom counter isn't cluttered with half-used bottles anymore. Thank god.",
    avatar: "/assets/about/Dr.monica.png",
    pos: { col: 2, top: 100 }
  },
  {
    name: "Jennifer Thompson",
    role: "formerly used 9-step routine",
    quote: "Not gonna lie, I was super skeptical about a one-product routine. But my skin was freaking out from all the stuff I was using. Two months with Essentia and my coworkers keep asking what I'm doing differently!",
    avatar: "/assets/about/Dr.elena.png",
    pos: { col: 1, top: 615 }
  },
  {
    name: "Michelle Kaplan",
    role: "sensitive skin",
    quote: "My skin hated EVERYTHING. Literally everything broke me out. I tried this as a last resort and... yeah. Should've started here. No more redness around my nose and cheeks!",
    avatar: "/assets/about/Dr.monica.png",
    pos: { col: 2, top: 1136 }
  },
  {
    name: "Diane Lawson",
    role: "recovering from over-exfoliation",
    quote: "Got sucked into the 12-step routines and destroyed my skin barrier. This fixed what fancy serums couldn't. Wish I hadn't wasted so much money before finding this!",
    avatar: "/assets/about/Dr.elena.png",
    pos: { col: 0, top: 1304 }
  },
  {
    name: "Aisha Rodriguez",
    role: "using ESSENCE for 6 months",
    quote: "I'm 52 and have tried it all over the years. This is the first product where I actually finished the jar and immediately bought another. My skin just looks... healthy? And I love that I can refill it.",
    avatar: "/assets/about/Dr.monica.png",
    pos: { col: 1, top: 1600 }
  }
];

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      // For tablet and laptop, scale down from a 1440px reference
      if (width >= 768 && width < 1440) {
        setScaleFactor(width / 1440);
      } else {
        setScaleFactor(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 25,
    restDelta: 0.001
  });

  // Color transition for the main text: #676863 while scrolling/splitting, #3A3D38 when stacked/sticky
  const textColor = useTransform(
    smoothProgress,
    isMobile ? [0, 0.4, 0.5] : [0, 0.05, 0.65, 0.75],
    isMobile ? ["#676863", "#3A3D38", "#676863"] : ["#676863", "#3A3D38", "#3A3D38", "#676863"]
  );

  // Split animation for the text
  // Mobile: Splits early (0 to 0.4)
  // Desktop: Splits late (0.7 to 1)
  const xLeft = useTransform(
    smoothProgress,
    isMobile ? [0, 0.4] : [0.7, 1],
    isMobile ? [0, -400] : [0, -1000]
  );
  const xRight = useTransform(
    smoothProgress,
    isMobile ? [0, 0.4] : [0.7, 1],
    isMobile ? [0, 400] : [0, 1000]
  );

  // Opacity of labels: Keep them longer on mobile, disappear immediately at the end on desktop
  const labelOpacity = useTransform(
    smoothProgress,
    isMobile ? [0.98, 1] : [0.94, 0.95],
    [1, 0]
  );

  // Next section (Community) entrance animation (centered in the gap)
  const nextContentOpacity = useTransform(smoothProgress, [0.75, 0.95], [0, 1]);
  const nextContentScaleRaw = useTransform(
    smoothProgress,
    [0.75, 1],
    isMobile ? [1, 1] : [0.8, 1]
  );
  const nextContentScale = useSpring(nextContentScaleRaw, { stiffness: 60, damping: 25 });
  const nextContentYRaw = useTransform(
    smoothProgress,
    [0.75, 1],
    isMobile ? [0, 0] : [50, 0]
  );
  const nextContentY = useSpring(nextContentYRaw, { stiffness: 60, damping: 25 });

  return (
    <section ref={containerRef} className="relative h-[150vh] md:h-[400vh] bg-[#F8F5F0] ">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Typography */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 ${isMobile ? 'z-0' : ''}`}>
          <div style={{ transform: isMobile ? 'none' : `scale(${scaleFactor})`, transformOrigin: 'center center' }}>
            <motion.div
              style={{ color: textColor, opacity: labelOpacity }}
              className="flex flex-col items-center text-center select-none"
            >
              <motion.h2
                style={{ x: xLeft }}
                className="font-geist font-medium text-[60px] md:text-[274px] leading-[0.9] md:leading-[1.05] tracking-[-0.03em] md:tracking-[-8.84px] uppercase md:normal-case whitespace-nowrap"
              >
                What they
              </motion.h2>
              <motion.h2
                style={{ x: xRight }}
                className="font-geist font-medium text-[60px] md:text-[274px] leading-[0.9] md:leading-[1.05] tracking-[-0.03em] md:tracking-[-8.88px] uppercase md:normal-case whitespace-nowrap"
              >
                are saying
              </motion.h2>
            </motion.div>
          </div>
        </div>

        {/* Transitioning Content: Community Intro */}
        <motion.div
          style={{
            opacity: nextContentOpacity,
            scale: nextContentScale,
            y: nextContentY,
            marginTop: "12vh"
          }}
          className="absolute inset-x-0 hidden md:flex flex-col items-center justify-center pointer-events-none px-4 z-20"
        >
          {/* Rating */}
          <div className="flex flex-col items-center mb-3">
            <div className="flex items-center gap-[2px] mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="14" height="13" viewBox="0 0 16 15" fill="none" className="text-[#3a3d38]">
                  <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="currentColor" />
                </svg>
              ))}
            </div>
            <p className="font-geist font-medium text-[12px] md:text-[14px] leading-tight tracking-tight text-[#676863] opacity-90">
              2500+ five-star reviews
            </p>
          </div>

          {/* Headline */}
          <h2 className="font-geist font-medium text-[24px] md:text-[36px] lg:text-[40px] leading-[1.15] tracking-[-1px] md:tracking-[-1.5px] text-center max-w-[700px]">
            <span className="text-[#676863]">Join the community that's redefining</span><br className="hidden sm:block" />
            <span className="text-[#3A3D38]">skincare, one ingredient at a time.</span>
          </h2>
        </motion.div>

        {/* Floating Testimonial Cards */}
        <div className={`absolute inset-0 pointer-events-none flex justify-center w-full ${isMobile ? 'z-10' : ''}`}>
          <div
            className="relative h-full"
            style={{
              width: isMobile ? '100%' : '1200px',
              transform: isMobile ? 'none' : `scale(${scaleFactor})`,
              transformOrigin: 'top center'
            }}
          >
            {testimonials.map((t, i) => {
              // Mobile: Simple cards without heavy rotation/scale, appearing in a vertical stack
              // Desktop: Floating staggered cards with depth
              const speed = 1 + (i % 3) * 0.15;

              // Mobile range: 0.2 to 1 (Start earlier and last longer = slower scroll)
              // Desktop range: 0 to 1
              const scrollRange: [number, number] = isMobile ? [0.2, 1] : [0, 1];
              const yStart = isMobile ? 600 + (i * 350) : 800 * speed;
              const yEnd = isMobile ? -1450 + (i * 350) : -2800 * speed;

              const y = useTransform(smoothProgress, scrollRange, [yStart, yEnd]);

              const rotate = useTransform(
                smoothProgress,
                [0, 1],
                isMobile ? [0, 0] : [(i % 2 === 0 ? -3 : 3) * speed, (i % 2 === 0 ? 3 : -3) * speed]
              );

              const scale = useTransform(
                smoothProgress,
                [0, 0.5, 1],
                isMobile ? [1, 1, 1] : [0.98, 1, 0.98]
              );

              // Responsive positioning logic
              // Mobile: All cards centered
              // Desktop: 3 columns (0, 50%, 100%)
              const leftPos = isMobile ? "50%" : (t.pos.col === 0 ? "0%" : t.pos.col === 1 ? "50%" : "100%");
              const xOffset = isMobile ? "-50%" : (t.pos.col === 0 ? "0%" : t.pos.col === 1 ? "-50%" : "-100%");

              return (
                <motion.div
                  key={i}
                  style={{
                    y,
                    rotate,
                    scale,
                    left: leftPos,
                    x: xOffset,
                    top: isMobile ? "0px" : `${t.pos.top}px`,
                    position: 'absolute'
                  }}
                  className={`pointer-events-auto bg-white flex flex-col overflow-hidden will-change-transform ${isMobile
                    ? "rounded-[24px] p-7 border border-[#F0F0F0] w-[90%] min-h-[340px] shadow-sm"
                    : "rounded-[8px] p-5 md:p-6 shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-[#E5E5E5]/50 w-[280px] md:w-[350px] min-h-[300px] md:h-[350px]"
                    }`}
                >
                  <p className={`font-geist font-medium tracking-[-0.03em] text-[#333333] ${isMobile ? "text-[18px] leading-[1.3] mb-8" : "text-[16px] md:text-[18px] leading-[1.4] md:leading-[25px] md:tracking-[-0.54px] flex items-center h-auto md:h-[123.81px]"
                    }`}>
                    "{t.quote}"
                  </p>

                  <div className={isMobile ? "mt-auto" : "mt-auto pt-6"}>
                    {/* Stars */}
                    <div className={`flex gap-[2px] ${isMobile ? "mb-4" : "mb-4 md:mb-[20px]"}`}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width={isMobile ? "14" : "16"} height={isMobile ? "13" : "15"} viewBox="0 0 16 15" fill="none" className="text-[#333333]">
                          <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="currentColor" />
                        </svg>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="flex items-center gap-3">
                      <div className={`bg-[#EBE5DC] overflow-hidden grayscale shrink-0 ${isMobile ? "w-10 h-10 rounded-full" : "w-8 h-8 md:w-10 md:h-10 rounded-[8px]"
                        }`}>
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-geist font-medium text-[#333333] tracking-[-0.02em] ${isMobile ? "text-[15px] leading-tight" : "text-[14px] md:text-[16px] leading-tight md:leading-[24px] md:tracking-[-0.32px]"
                          }`}>{t.name}</span>
                        <span className={`font-geist font-medium text-[#545454] tracking-[-0.02em] ${isMobile ? "text-[12px] leading-tight" : "text-[11px] md:text-[12px] leading-tight md:leading-[14px] md:tracking-[-0.24px]"
                          }`}>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
